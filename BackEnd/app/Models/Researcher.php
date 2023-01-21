<?php

namespace App\Models;

use App\Models\actor\Assistant;
use App\Models\actor\Patient;
use App\Models\service\Cart;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Permission\Traits\HasRoles;

class Researcher extends User
{
    use HasFactory, SoftDeletes, HasRoles;

    protected $guard_name = 'web';

    protected $fillable = [
        'range',
        'n_number',
        'name',
        'f_name',
        'major',
        'proficiency',
        'university',
        'organization',
        'user_id',
        'researcher_id',

    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function study()
    {
        return $this->hasMany(Study::class);
    }

    public function assistants()
    {
        return $this->hasMany(Researcher::class);
    }

    public function researcher(){
        return $this->belongsTo(Researcher::class , 'researcher_id')->withDefault();
    }

    public static function allAssistants(){
        return Researcher::where('researcher_id' , '!=' , null)->get();
    }

    public static function allResearchers(){
        return Researcher::where('researcher_id' , null);
    }

    public function carts(){

        return $this->hasMany(Cart::class);
    }

    public function patients(){
        return $this->hasMany(Patient::class);
    }
}
