<?php

namespace App\Models\intervention;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InterventionClass extends Model
{
    use HasFactory;

    protected $table = 'classes';

    protected $fillable = ['name'];

    public function intervention()
    {
        return $this->hasMany(Intervention::class, 'class_id');
    }
}
