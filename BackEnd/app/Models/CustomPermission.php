<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Permission\Models\Role;

class CustomPermission extends Model
{
    use HasFactory , SoftDeletes;

    public function role(){
        return $this->belongsTo(Role::class)->withDefault();
    }
}
