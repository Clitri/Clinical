<?php

namespace App\Models\blog;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'sub_title',
        'img',
        'content',
        'category_id',
        'user_id',
        'slug',
        'status'
    ];

    public function user()
    {

        return $this->belongsTo(User::class)->withDefault();
    }

    public function category()
    {

        return $this->belongsTo(Category::class)->withDefault();
    }

    public function tags()
    {

        return $this->belongsToMany(Tag::class, 'post_tag');
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
