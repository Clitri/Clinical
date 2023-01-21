<?php

namespace Database\Seeders;

use App\Models\service\ServicePeriod;
use App\Models\service\ServiceType;
use Illuminate\Database\Seeder;

class ServiceRequieredSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ServicePeriod::create(['month'=>3] );
        ServicePeriod::create(['month'=>6]);
        ServicePeriod::create(['month'=>9]);
        ServicePeriod::create(['month'=>12]);

        ServiceType::create(['name'=>'طلایی']);
        ServiceType::create(['name'=>'نقره ای']);
        ServiceType::create(['name'=>'برنز']);


    }
}
