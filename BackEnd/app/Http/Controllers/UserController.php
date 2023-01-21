<?php

namespace App\Http\Controllers;

use App\Exports\UserExport;
use App\Http\Requests\dashboard\actor\user\CreateUserRequest;
use App\Models\content\Suggestion;
use App\Models\Study;
use App\Models\User;
use Hekmatinasser\Verta\Verta;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Matrix\Builder;
use RealRashid\SweetAlert\Facades\Alert;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use PDF;
use Excel;

class UserController extends Controller
{
    public function index($role)
    {

        $users = User::role($role)->get();
        $user = User::role($role)->paginate(10);
//        $users = User::whereHas('roles', function($q) use ($role){
//            $q->where('name', $role);
//        })->paginate(2);

        $role_id = $role == 'Supervisor' ? 1 : ($role == 'Agent' ? 2 : ($role == 'Admin' ? 3 : 0));


        return view('dashboard.actor.user.index', ['role' => $role, 'role_id' => $role_id, 'user' => $user]);

    }

    public function fetchPermissions($id)
    {
        $user = User::find($id) ;
        $role = $user->roles[0];
        $permissions = $role->permission ;
        if ($role->name == 'Supervisor'){
            foreach ($permissions as $permission){
                foreach ($permission->subpermissions as $subpermission) {

                }
                $permission->status = $user->hasPermissionTo($permission->name) ? 'checked' : '';

            }
        }else {
            foreach ($permissions as $permission) {
                $size = count($permission->subpermissions);
                $counter = 0;
                foreach ($permission->subpermissions as $subpermission) {
                    if ($user->hasPermissionTo($subpermission->name)) {
                        $subpermission->status = 'checked';
                        $counter++;
                    } else
                        $subpermission->status = '';
                }
                $permission->status = $size == $counter ? 'checked' : '';

            }
        }
        return response()->json($permissions);
    }


    public function create()
    {
        return view('dashboard.actor.user.create');
    }


    public function store(CreateUserRequest $request)
    {
        $user = User::create([

            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'enabled' => $request->enabled,
        ]);

        User::updateRole($user, $request->role);
        $user->role = $request->role;

        return response()->json($user);
    }

    public function update(Request $request)
    {
        if ($request->ajax()) {
            $user = User::find($request->id);
            $user->enabled = $request['column_value'] == 'true' ? 1 : 0;
            $user->save();
        }
    }

    public function update_role(Request $request)
    {
        if ($request->ajax()) {
            $user = User::find($request->id);

            User::updateRole($user, $request->role);

        }
    }

    public function setPermissions(Request $request)
    {

        $user = User::find($request->id);
        $user->syncPermissions($request->permissions);
        return response()->json();
    }

    public function destroy($id)
    {
        User::find($id)->delete();

        return response()->json([


        ]);
    }

    public function pdf()
    {

        $path = app('request')->path();
        $role = Str::between($path, '-', '/');

        $array = User::role($role)->get();

        $date = Verta::now()->format('Y/m/d');

        $pdf = PDF::loadView('dashboard/pdf/user', compact('array', 'date'));

        return $pdf->stream('کاربران.pdf');
    }

    public function excel()
    {
        return Excel::download(new UserExport(), 'گزارش کاربران.xlsx');
    }

    public function search(Request $request)
    {
        $search = $request->search;
        $role = $request->role;
        $users = User::role($role)->where(function ($query) use ($search) {
            $query->where("username", "LIKE", "%{$search}%")->orWhere("email", "LIKE", "%{$search}%");
        })
            ->get();

        $data['users'] = $users;
        $data['delete'] = auth()->user()->hasPermissionTo('delete-user') ? true : false;
        $data['role'] = auth()->user()->hasPermissionTo('edit-user-role') ? true : false;
        $data['status'] = auth()->user()->hasPermissionTo('edit-user') ? true : false;
        return response()->json($data);
    }

}
