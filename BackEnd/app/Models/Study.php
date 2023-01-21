<?php

namespace App\Models;

use App\Models\actor\Patient;
use App\Models\blog\Tag;
use App\Models\content\StudyTag;
use App\Models\intervention\Intervention;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Study extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = [

        'title','name','studies_type','study_design','start_date','end_date',
    'file','purpose_study','phase_study','randomization','blinding',
    'placebo','entry_study','failure_entry_study','start_date_illness','end_date_illness','termination_illness',
    'start_get_sick_ended','end_get_sick_ended','gender_id','minimum_age','maximum_age','researcher_id'


    ];


    public function researcher()
    {
        return $this->belongsTo(Researcher::class);

    }


    public function studyspecification()
    {
        return $this->hasMany(StudySpecification::class);
    }

    public function entrystudy()
    {
        return $this->hasMany(EntryStudy::class);
    }


    public function failurestudy()
    {
        return $this->hasMany(FailureStudy::class);
    }

    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }

    public function tags(){
        return $this->belongsToMany(StudyTag::class , 'study_tag');
    }

    public function interventions(){
        return $this->hasMany(Intervention::class);
    }

    public function surveys(){
        return $this->hasMany(Survey::class);
    }

    public function patients(){
        return $this->belongsToMany(Patient::class , 'study_patient');
    }
}
