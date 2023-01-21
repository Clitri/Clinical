<?php

namespace App\Models\blog;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    protected $fillable = ['post_id' , 'user_id'];

    public function post(){
        return $this->belongsTo(Post::class)->withDefault();
    }

    public function user(){
        return $this->belongsTo(User::class)->withDefault();
    }
}
