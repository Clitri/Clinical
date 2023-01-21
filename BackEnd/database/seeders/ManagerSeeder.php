<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ManagerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $user = User::create(['username'=>'manager' ,
           'email'=>'manager@gmail.com' ,
           'password'=>Hash::make('Manager@1'),
           'enabled'=>1
           ]);

       $user->assignRole('Manager');
    }
}
