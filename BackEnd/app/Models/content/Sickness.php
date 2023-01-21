<?php

namespace App\Models\content;

use App\Models\actor\Patient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sickness extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function patients()
    {
        return $this->hasMany(Patient::class);
    }
}
