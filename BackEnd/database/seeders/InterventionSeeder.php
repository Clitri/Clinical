<?php

namespace Database\Seeders;

use App\Models\intervention\InterventionClass;
use App\Models\intervention\InterventionType;
use Illuminate\Database\Seeder;

class InterventionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        InterventionType::create(['name'=>'گروه مداخله']);
        InterventionType::create(['name'=>'گروه کنترل']);

        InterventionClass::create(['name'=>'رفتاری']);
        InterventionClass::create(['name'=>'تشخیصی']);
        InterventionClass::create(['name'=>'تشخیص زودرس']);
        InterventionClass::create(['name'=>'شیوه زندگی']);
        InterventionClass::create(['name'=>'دارو نما']);
        InterventionClass::create(['name'=>'پیشگیری']);
        InterventionClass::create(['name'=>'توانبخشی']);
        InterventionClass::create(['name'=>'درمانی - وسایل']);
        InterventionClass::create(['name'=>'درمانی - داروها']);
        InterventionClass::create(['name'=>'درمانی - جراحی']);
        InterventionClass::create(['name'=>'درمانی - غیره']);
        InterventionClass::create(['name'=>'غیره']);
        InterventionClass::create(['name'=>'مصداق ندارد']);
    }
}
