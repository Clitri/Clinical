<?php

namespace App\Models\intervention;

use App\Models\Study;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Intervention extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = ['content','class_id','intervention_type_id' , 'study_id'];

    public function class(){
        return $this->belongsTo(InterventionClass::class , 'class_id');
    }

    public function type(){
        return $this->belongsTo(InterventionType::class , 'intervention_type_id');
    }

    public function study(){
        return $this->belongsTo(Study::class);
    }
}
