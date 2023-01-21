<?php

namespace App\Actions\Fortify;

use App\Models\CustomSession;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'username' => ['required', 'string', 'max:255' , 'regex:/^[a-zA-Z0-9]+$/u'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            // 'enabled'=>['required'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
        ])->validate();

        $user = User::create([
            'username' => $input['username'],
            'email' => $input['email'],
            // 'enabled'=>$input['enabled'],
            'password' => Hash::make($input['password']),
        ]);
        $user->assignRole('User');
        $user->givePermissionTo([
            'read-profile' ,
            'create-profile' ,
            'edit-profile' ,
            'delete-profile-img' ,

            'read-researcher' ,
            'create-researcher' ,
            'edit-researcher' ,
        ]);
        if (!CustomSession::where('user_id', $user->id)->exists())
            $user->custumSession()->create(['time' => time()]);
        return $user;
    }
}
