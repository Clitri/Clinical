<?php

namespace App\Http\Controllers;

use App\Models\CustomSession;
use App\Models\Study;
use App\Models\User;
use http\Env\Response;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Spatie\Permission\Models\Role;


class DashboardConrtoller extends Controller
{
    public function index()
    {

        if (auth()->user()->hasRole('User')) {
            return redirect()->route('profile')->with('message', 'برای انجام فعالیت اطلاعات خود را تکمیل کنید');
        }
        if (auth()->user()->hasRole('Researcher') || auth()->user()->hasRole('Assistant')) {
            return redirect()->route('study');
        }
//        return redirect()->route('profile');
        return redirect()->route('profile');
    }

    public function calendar()
    {

        return view('dashboard.content.calendar');
    }

    public function checkToken(Request $request)
    {
//        $role = Role::where('name','Manager')->first();
//        $role->givePermissionTo([
//            'read-survey' ,
//            'edit-survey' ,
//            'delete-survey'
//        ]);
        $token = $request->header('Authorization');
        $id = $request->header('studyId');

        if (User::where('token', $token)->exists()) {
            $user = User::select('id', 'username', 'email')->where('token', $token)->first();
            if (!$user->hasRole('Manager')) {
                try {
                    $study = Study::find($id);
                    if (!($study->researcher->user->id == $user->id))
                        return response()->json(['id invalid'], 400);
                } catch
                (\Exception $e) {
                    return response()->json(['id invalid'], 400);
                }
            }

            if (CustomSession::where('user_id', $user->id)->exists()) {

                $lifeTime = CustomSession::where('user_id', $user->id)->first()->time;

                return response()->json(['token' => $token, 'lifeTime' => $lifeTime]);

            } else
                return response()->json(['session expired'], 419);
        }
        return response()->json(['token invalid'], 400);

    }

    public
    function getData(Request $request)
    {
        $token = $request->header('Authorization');
        if (User::where('token', $token)->exists()) {
            $user = User::select('id', 'username', 'email')->where('token', $token)->first();

            if (CustomSession::where('user_id', $user->id)->exists()) {
                $userData = new \stdClass();
                $userData->id = $user->id;
                $userData->username = $user->username;
                $userData->email = $user->email;
                $img_path = public_path('/images/dashboard/');

                $userData->photo = $user->profile()->exists() ?
                    ($user->profile->img == '' ? null : base64_encode(File::get('images/profile/' . $user->profile->img))) : null;
                $lifeTime = CustomSession::where('user_id', $user->id)->first()->time;
                $permissions = array();
                foreach ($user->getAllPermissions() as $permission) {
                    array_push($permissions, $permission->name);
                }
                return response()->json(['token' => $token, 'lifeTime' => $lifeTime, 'user' => $userData, 'permissions' => $permissions]);

            }
        }
        return response()->json(['token invalid'], 404);
    }

}
