<?php

namespace App\Models\blog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'status',
        'slug',
        'category_id'
    ];

    public function subCategories()
    {

        return $this->hasMany(Category::class);
    }

    public function activeSubCategories()
    {

        return $this->hasMany(Category::class)->where('status',1);
    }

    public function category(){

        return $this->belongsTo(Category::class , 'category_id')->withDefault();
    }

    public function posts()
    {

        return $this->hasMany(Post::class);
    }

    public static function mainCategories(){

        return Category::where('category_id' , null)->where('status' , 1)->get();
    }
}
