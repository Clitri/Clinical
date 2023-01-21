<?php

namespace App\Http\Requests\dashboard\actor\patient;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;

class CreatePatientRequest extends FormRequest
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
            'n_number' => ['Required', 'digits:10', 'numeric', Rule::unique('patients')->whereNull('deleted_at')],
            'name' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z\s]+$/u',
            'f_name' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z\s]+$/u',
            'username' => ['required', 'string', 'max:255', Rule::unique('users'), 'regex:/^[a-zA-Z0-9]+$/u'],
            'email' => ['required', 'email', Rule::unique('users'), 'max:50'],
            'password' => ['required', Rules\Password::defaults()],
            'birthdate' => ['required' ,'before:dates', 'regex:/^(1[34][0-9][0-9])\/(1[0-2]|[1-9])\/(([12][0-9])|(3[01])|([1-9]))$/'] ,
            'gender_id' => 'required|numeric|digits:1',
            'marriage' => 'required|numeric|digits:1',
            'height' => 'required|digits_between:1,3|gte:0',
            'weight' => 'required|digits_between:1,3|gte:0',
            'province_id' => 'required|digits_between:1,3|gte:0',
            'sickness_id' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z\s]+$/u',
            'description' => 'nullable|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z\s]+$/u',

        ];
    }
}
