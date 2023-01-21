<?php

namespace App\Http\Requests\dashboard\content\suggestion;

use Illuminate\Foundation\Http\FormRequest;

class CreateSuggestionRequest extends FormRequest
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
            'email' => ['required' , 'email' , 'max:50'],
            'content' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9.,\s]+$/u',
            'file' => 'mimes:xlx,scv,xls,docx,pdf,txt,jpj,png,jpeg,gif'
        ];
    }
}
