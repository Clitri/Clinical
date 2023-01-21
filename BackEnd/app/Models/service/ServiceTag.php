<?php

namespace App\Models\service;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceTag extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug'];

    public function services()
    {
        return $this->belongsToMany(Service::class, 'service_tag');
    }
}
