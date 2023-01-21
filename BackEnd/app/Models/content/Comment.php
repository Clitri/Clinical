<?php

namespace App\Models\content;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable=[
        'title' ,
        'message' ,
        'user_id' ,
        'status'
    ];

    public function user(){

        return $this->belongsTo(User::class)->withDefault();
    }
}
