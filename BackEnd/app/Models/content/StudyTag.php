<?php

namespace App\Models\content;

use App\Models\Study;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StudyTag extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'status'
    ];

    public function studies(){

        return $this->belongsToMany(Study::class , 'study_tag');
    }
}
