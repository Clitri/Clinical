<?php

namespace App\Models\service;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServicePeriod extends Model
{
    use HasFactory;

    protected $table = 'periods';

    protected $fillable = ['month'];

    public function service()
    {
        return $this->hasMany(Service::class);
    }

    public function carts(){

        return $this->hasMany(Cart::class);
    }
}
