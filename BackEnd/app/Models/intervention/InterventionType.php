<?php

namespace App\Models\intervention;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InterventionType extends Model
{
    use HasFactory;
    protected $fillable=['name'];

    public function intervention(){
        return $this->hasMany(Intervention::class);
    }

}
