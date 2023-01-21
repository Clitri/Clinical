<?php

namespace App\Http\Controllers;

use App\Http\Requests\dashboard\content\profile\CreateProfileRequest;
use App\Http\Requests\dashboard\content\profile\UpdateProfileRequest;
use App\Http\Requests\ProfileRequest;
use App\Http\Requests\updateimgRequest;
use App\Models\Citie;
use App\Models\Profile;
use App\Models\Province;
use App\Models\Researcher;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use RealRashid\SweetAlert\Facades\Alert;

class ProfileController extends Controller
{
    public function index()
    {

        $province = Province::all();
        if (auth()->user()->Profile()->exists()) {

            if (!File::exists('images/profile/'.auth()->user()->Profile->img))
                auth()->user()->profile()->update(['img' => null]);
            $profile = Profile::where("user_id", auth()->user()->id)->get()[0];

            $city = Citie::find($profile->city);
            $state = Province::find($profile->province);

            return view('dashboard.content.profile.profile', [
                'user' => auth()->user(), 'profile' => $profile, 'city' => $city, 'state' => $state, 'province' => $province,
            ]);

        } else if ((!auth()->user()->profile()->exists())) {
            $profile = false;
            return view('dashboard.content.profile.profile', [
                'user' => auth()->user(), 'profile' => $profile, 'province' => $province,
            ]);
        }

        if (auth()->user()->researcher()->exists()) {
            $researcher = Researcher::where('user_id', auth()->user()->id)->get()[0];

            return view('dashboard.content.profile.profile', ['user' => auth()->user(), 'researcher' => $researcher]);
        } else if ((!auth()->user()->researcher()->exists())) {
            $researcher = false;
            return view('dashboard.content.profile.profile', ['user' => auth()->user(), 'researcher' => $researcher]);
        }

        if ((auth()->user()->Profile()->exists()) && (auth()->user()->researcher()->exists())) {
            $profile = auth()->user()->profile;
            $city = Citie::find($profile->city);
            $state = Province::find($profile->province);
            $profile = Profile::where('user_id', auth()->user()->id)->get()[0];
            $researcher = Researcher::where('user_id', auth()->user()->id)->get()[0];

            return view('dashboard.content.profile.profile', [
                'user' => auth()->user(), 'profile' => $profile, 'researcher' => $researcher, 'city' => $city, 'state' => $state, 'province' => $province,
            ]);
        } elseif (!(auth()->user()->Profile()->exists()) && (auth()->user()->researcher()->exists())) {
            $profile = false;
            $researcher = false;

            return view('dashboard.content.profile.profile', [
                'user' => auth()->user(), 'researcher' => $researcher, 'profile' => $profile, 'province' => $province,
            ]);
        }
    }

    public function getprovince()
    {
        $province = Province::all();
        return view('dashboard.content.profile.profile', compact($province));

    }

    public function getcity(Request $request)
    {
        $data['cities'] = Citie::where('province_id', $request->province_id)->get(["name", "id"]);

        return response()->json($data);
    }

    public function create()
    {

        return view('dashboard.content.profile.create', [

            'user' => auth()->user(),
        ]);
    }

    public function store(CreateProfileRequest $request)
    {

        if ($request->has('img')) {

            $fileName = time() . '-' .$request->file('img')->getClientOriginalName();

            $request->file('img')->move('images/profile', $fileName);

        } else {

            $fileName = null;
        }

        $profile1 = Profile::create([

            'job' => $request->job,
            'address' => $request->address,
            'phone' => $request->phone,
            'workoffice' => $request->workoffice,
            'province' => $request->province,
            'city' => $request->city,
            'img' => $fileName,
            'user_id' => auth()->user()->id,

        ]);

        alert()->success('پروفایل با موفقیت ثبت شد');
        return redirect()->route('profile');

    }

    public function edit($id)
    {

        $profile = Profile::find($id);
        // $country = Country::all();
        // $user = auth()->user();
        // ,compact('user' ), compact('profile'), compact('country')
        // return view('dashboard.content.profile.profile'
        // , ['user' => auth()->user(), 'profile' => $profile, 'country' => $country]);

        return response()->json($profile);

    }

    public function updateimg(updateimgRequest $request, $id)
    {
        $profile = Profile::find($id);

        if ($request->has('img')) {

            $destintion = 'images/profile/' . $profile->img;

            if (File::exists($destintion)) {
                File::delete($destintion);
            }

            $fileName = time() . '-' .$request->file('img')->getClientOriginalName();

            $request->file('img')->move('images/profile', $fileName);
            $profile->img = $fileName;
        } else {

            $fileName = "null";
        }
        $profile->update([
            'img' => $fileName,
        ]);

        return response()->json($profile);
    }

    public function update(UpdateProfileRequest $request, $id)
    {

        // $request->Validated();
        $profile = Profile::find($id);
        $user = User::find($profile->user_id);

        $profile->update([

            'job' => $request->job,
            'address' => $request->address,
            'phone' => $request->phone,
            'workoffice' => $request->workoffice,
            'province' => $request->province,
            'city' => $request->city,

        ]);

        return response()->json($profile);
    }

    public function destroy($id)
    {

        $profile = Profile::find($id);
        // Profile::destroy($profile->img);
        $profile->update(['img' => null]);
        $img_path = public_path('/images/profile/' . $profile->img);

        if (File::exists($img_path)) {
            File::delete($img_path);

        }
        // Profile::destroy($profile->img);
        return response()->json([

        ]);
    }

}
