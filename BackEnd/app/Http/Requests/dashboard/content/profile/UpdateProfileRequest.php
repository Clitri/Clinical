<?php

namespace App\Http\Requests\dashboard\content\profile;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
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
            'phone' => 'required|regex:/(09)[0-9]{9}/|digits:11|numeric',
            'job' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z\s]+$/u',
            'address' =>'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z،.\-_\s]+$/u',
            'workoffice' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z،.\-_\s]+$/u',
            'province' => 'required|digits_between:1,2',
            'city' => 'required|digits_between:1,3',

        ];;
    }
}
