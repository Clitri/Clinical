<?php

namespace App\Http\Requests\dashboard\content\service;

use Illuminate\Foundation\Http\FormRequest;

class CreateServiceRequest extends FormRequest
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
            'title' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9\s]+$/u',
            'content' => 'required',
            'img' => 'required|image|mimes:jpeg,png,jpg,gif',
            'status' => 'boolean',
            'tags' => ['nullable' , 'regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9,\s_]+$/u'],
            'price' => ['required' , 'digits_between:1,20'] ,
            'type' => ['required' , 'digits:1'] ,
            'off' => ['required' ,'regex:/^[0-9]([0-9])?([.\/][0-9][0-9]?)?$/u']
        ];
    }
}
