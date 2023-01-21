<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EntryStudy extends Model
{
    use HasFactory , SoftDeletes;
    protected $fillable = [

        'title',
        'study_id',

    ];
protected $table='entrystudy';
    public function study()
    {
        return $this->belongsTo(Study::class);
    }

}
