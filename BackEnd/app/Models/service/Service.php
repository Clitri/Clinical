<?php

namespace App\Models\service;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'content',
        'img',
        'price',
        'service_type_id',
        'status',
        'off'
    ];

    public function category()
    {
        return $this->belongsTo(ServiceCategory::class)->withDefault();
    }

    public function tags(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(ServiceTag::class , 'service_tag');
    }

    public function type()
    {
        return $this->belongsTo(ServiceType::class , 'service_type_id')->withDefault();
    }

    public function period()
    {
        return $this->belongsTo(ServicePeriod::class)->withDefault();
    }

    public function carts(){

        return $this->hasMany(Cart::class);
    }

}
