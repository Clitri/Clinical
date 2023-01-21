<?php

namespace App\Imports;

use App\Models\content\Sickness;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToModel;

class SicknessImport implements ToModel
{
    public function model(array $row)
    {
       return new Sickness(['name'=>$row[0]]);
    }
}
