<?php

namespace App\Models\actor;

use App\Models\content\Sickness;
use App\Models\Gender;
use App\Models\Province;
use App\Models\Researcher;
use App\Models\Study;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends User
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'f_name',
        'n_number',
        'user_id',
        'agent_id',
        'researcher_id',
        'birthdate',
        'gender_id',
        'marriage',
        'height',
        'weight',
        'province_id',
        'sickness_id' ,
        'description'
    ];

    public function user()
    {
        return $this->belongsTo(User::class)->withDefault();
    }

    public function gender()
    {
        return $this->belongsTo(Gender::class)->withDefault();
    }

    public function province()
    {
        return $this->belongsTo(Province::class)->withDefault();
    }

    public function sickness()
    {
        return $this->belongsTo(Sickness::class)->withDefault();
    }

    public function agent(){
        return $this->belongsTo(User::class , 'agent_id');
    }

    public function researcher(){
        return $this->belongsTo(Researcher::class , 'researcher_id');
    }

    public function studies(){
        return $this->belongsToMany(Study::class , 'study_patient');
    }
}
