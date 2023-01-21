<?php

namespace App\Models\service;

use App\Models\Researcher;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cart extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = [
        'service_id',
        'researcher_id',
        'period_id',
        'paid',
    ];

    public function service(){

        return $this->belongsTo(Service::class);
    }

    public function researcher(){

        return $this->belongsTo(Researcher::class);
    }

    public function period(){

        return $this->belongsTo(ServicePeriod::class);
    }
}
