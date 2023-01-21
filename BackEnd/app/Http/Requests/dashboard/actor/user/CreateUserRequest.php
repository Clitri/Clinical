<?php

namespace App\Http\Requests\dashboard\actor\user;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => ['required' , 'string' , 'max:255' , Rule::unique('users')],
            'email' => ['required' , 'email' , Rule::unique('users') , 'max:50'],
            'password' => ['required', Rules\Password::defaults()]
        ];
//        return [
//            'name' => ['required', 'string', 'max:255' ,Rule::unique('users')->whereNull('deleted_at')],
//            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->whereNull('deleted_at')],
//            'password' => 'required',
//        ];
    }
}
