<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    use HasFactory;

    protected $fillable = ['id' , 'title' , 'description' , 'link' , 'answer_number' , 'create_date' , 'study_id'];

    public function study(){
        return $this->belongsTo(Study::class)->withDefault();
    }
}
