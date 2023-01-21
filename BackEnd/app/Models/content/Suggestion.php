<?php

namespace App\Models\content;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Suggestion extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = ['content' , 'is_user' , 'email' , 'file'];

}
