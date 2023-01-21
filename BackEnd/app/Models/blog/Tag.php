<?php

namespace App\Models\blog;

use App\Models\Study;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tag extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'status'
    ];

    public function posts(){

        return $this->belongsToMany(Post::class , 'post_tag');
    }


}
