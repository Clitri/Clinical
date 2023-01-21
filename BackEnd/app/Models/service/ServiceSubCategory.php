<?php

namespace App\Models\service;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceSubCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug'
    ];

    public function category()
    {
        return $this->belongsTo(ServiceCategory::class)->withDefault();
    }
}
