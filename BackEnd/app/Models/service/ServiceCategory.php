<?php

namespace App\Models\service;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug'
    ];

    public function services()
    {
        return $this->hasMany(Service::class);
    }

    public function subCategories()
    {
        return $this->hasMany(ServiceSubCategory::class);
    }
}
