<?php

namespace App\Models\content;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Message extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = ['message' , 'from_user' , 'to_user'];


    public function fromUser(){
        return $this->belongsTo(User::class , 'from_user');
    }

    public function toUser(){
        return $this->belongsTo(User::class , 'to_user');
    }
}
