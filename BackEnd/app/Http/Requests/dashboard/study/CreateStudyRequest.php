<?php

namespace App\Http\Requests\dashboard\study;

use Illuminate\Foundation\Http\FormRequest;

class CreateStudyRequest extends FormRequest
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

            'title' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z\s]+$/u',
            'name' => 'nullable|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651} a-zA-Z\s]+$/u',
            'studies_type' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z\s]+$/u',
//            'structure_plan' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9\s]+$/u',
            'study_design' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9\s]+$/u',
            'file' => 'required|mimes:doc,xlx,pdf,scv,xls,docx,',
//            'sample' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9\s]+$/u',
            'start_date' => 'nullable|sometimes',
            'end_date' => 'nullable|sometimes|after:start_date',
//            'sample_size' => 'required|numeric',
            'purpose_study' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9\s]+$/u',
            'phase_study' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9\s]+$/u',
            'randomization' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9\s]+$/u',
            'blinding' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9\s]+$/u',
            'study_specifications' => 'nullable|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9?!.\s,]+$/u',
            'entry_study' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9?!.\s,]+$/u',
            'failure_entry_study' => 'required|regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9?!.\s,]+$/u',
            'start_date_illness' => 'required|sometimes|after:dates',
            'end_date_illness' => 'required|sometimes|after:start_date_illnes',
            'termination_illness' => 'required|sometimes',
            'start_get_sick_ended' => 'required|sometimes|before:dates',
            'end_get_sick_ended' => 'required|sometimes|after:start_get_sick_ended|before:dates',
            'gender' => 'required|numeric',
            'min_year' => 'digits_between:1,3|gte:0' ,
            'min_month' => 'digits_between:1,3|gte:0' ,
            'min_day' => 'digits_between:1,3|gte:0' ,
            'max_year' => 'digits_between:1,3|gte:0' ,
            'max_month' => 'digits_between:1,3|gte:0' ,
            'max_day' => 'digits_between:1,3|gte:0' ,
            'tags' => ['nullable' , 'regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9,\s_]+$/u'],
            'intervention' => ['required' , 'regex:/^[\x{600}-\x{6FF}\x{200c}\x{064b}\x{064d}\x{064c}\x{064e}\x{064f}\x{0650}\x{0651}a-zA-Z0-9,\-\[\]":\{\}\s_]+$/u'],

        ];
    }
}
