<?php

namespace App\Models\actor;

use App\Models\Researcher;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Assistant extends User
{
    use HasFactory , SoftDeletes;

    protected $guard_name = 'web';

    protected $fillable=[
        'range',
        'n_number',
        'name',
        'f_name',
        'major',
        'proficiency',
        'university',
        'organization',
        'user_id',
        'researcher_id'

    ];

    public function user()
    {
        return  $this->belongsTo(User::class)->withDefault();
    }

    public function researcher()
    {
        return $this->belongsTo(Researcher::class)->withDefault();
    }
}
