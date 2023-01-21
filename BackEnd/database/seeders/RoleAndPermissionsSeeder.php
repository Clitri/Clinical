<?php

namespace Database\Seeders;

use App\Models\MainPermission;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $managerRole = Role::create(['name' => 'Manager']);
        $userRole = Role::create(['name' => 'User']);
        $researcherRole = Role::create(['name' => 'Researcher']);
        $adminRole = Role::create(['name' => 'Admin']);
        $supervisorRole = Role::create(['name' => 'Supervisor']);
        $assistantRole = Role::create(['name' => 'Assistant']);
        $agentRole = Role::create(['name' => 'Agent']);
        $patientRole = Role::create(['name' => 'Patient']);

        $studyPermission = Permission::create(['name'=>'study' , 'fa_name' => 'طرح']);
        $studiesPermission = Permission::create(['name'=>'studies' , 'fa_name' => 'طرح ها']);
        $researcherPermission = Permission::create(['name'=>'researcher' , 'fa_name' => 'طراح']);
        $researchersPermission = Permission::create(['name'=>'researchers' , 'fa_name' => 'طراح ها']);
        $userPermission = Permission::create(['name'=>'user' , 'fa_name' => 'کاربر']);
        $supervisorPermission = Permission::create(['name'=>'supervisor' , 'fa_name' => 'ناظر']);
        $patientPermission = Permission::create(['name'=>'patient' , 'fa_name' => 'بیمار']);
        $agentPermission = Permission::create(['name'=>'agent' , 'fa_name' => 'بیمارگیر']);
        $adminPermission = Permission::create(['name'=>'admin' , 'fa_name' => 'ادمین']);
        $assistantPermission = Permission::create(['name'=>'assistant' , 'fa_name' => 'دستیار']);
        $commentPermission = Permission::create(['name'=>'comment' , 'fa_name' => 'نظر']);
        $sliderPermission = Permission::create(['name'=>'slider' , 'fa_name' => 'اسلایدر']);
        $profilePermission = Permission::create(['name'=>'profile' , 'fa_name' => 'پروفایل']);
        $servicePermission = Permission::create(['name'=>'service' , 'fa_name' => 'سرویس']);
        $surveyPermission = Permission::create(['name'=>'survey' , 'fa_name' => 'پرسش نامه']);

        $surveyPermission->subPermissions()->create(['name' => 'read-survey', 'fa_name' => 'نمایش پرسش نامه ها']);
        $surveyPermission->subPermissions()->create(['name' => 'create-survey', 'fa_name' => 'ایجاد پرسش نامه']);
        $surveyPermission->subPermissions()->create(['name' => 'edit-survey', 'fa_name' => 'ویرایش پرسش نامه ها']);
        $surveyPermission->subPermissions()->create(['name' => 'delete-survey', 'fa_name' => 'حذف پرسش نامه']);

        $servicePermission->subPermissions()->create(['name' => 'read-service', 'fa_name' => 'نمایش سرویس ها']);
        $servicePermission->subPermissions()->create(['name' => 'create-service', 'fa_name' => 'ایجاد سرویس']);
        $servicePermission->subPermissions()->create(['name' => 'edit-service', 'fa_name' => 'ویرایش سرویس ها']);
        $servicePermission->subPermissions()->create(['name' => 'delete-service', 'fa_name' => 'حذف سرویس']);

        $supervisorPermission->subPermissions()->create(['name' => 'read-supervisor', 'fa_name' => 'نمایش ناظران']);
        $supervisorPermission->subPermissions()->create(['name' => 'create-supervisor', 'fa_name' => 'ایجاد ناظر']);
        $supervisorPermission->subPermissions()->create(['name' => 'edit-supervisor', 'fa_name' => 'نظارت ناظران']);
        $supervisorPermission->subPermissions()->create(['name' => 'delete-supervisor', 'fa_name' => 'حذف ناظر']);

        $agentPermission->subPermissions()->create(['name' => 'read-agent', 'fa_name' => 'نمایش بیمارگیران']);
        $agentPermission->subPermissions()->create(['name' => 'create-agent', 'fa_name' => 'ایجاد بیمارگیر']);
        $agentPermission->subPermissions()->create(['name' => 'edit-agent', 'fa_name' => 'نظارت بیمارگیران']);
        $agentPermission->subPermissions()->create(['name' => 'delete-agent', 'fa_name' => 'حذف بیمارگیر']);

        $adminPermission->subPermissions()->create(['name' => 'read-admin', 'fa_name' => ' نمایش ادمین ها']);
        $adminPermission->subPermissions()->create(['name' => 'create-admin', 'fa_name' => 'ایجاد ادمین']);
        $adminPermission->subPermissions()->create(['name' => 'edit-admin', 'fa_name' => 'نظارت ادمین ها']);
        $adminPermission->subPermissions()->create(['name' => 'delete-admin', 'fa_name' => 'حذف ادمین']);

        $patientPermission->subPermissions()->create(['name' => 'read-patient', 'fa_name' => 'نمایش بیماران']);
        $patientPermission->subPermissions()->create(['name' => 'create-patient', 'fa_name' => 'ایجاد بیمار']);
        $patientPermission->subPermissions()->create(['name' => 'edit-patient', 'fa_name' => 'ویرایش بیماران']);
        $patientPermission->subPermissions()->create(['name' => 'delete-patient', 'fa_name' => 'حذف بیمار']);

        $assistantPermission->subPermissions()->create(['name' => 'read-assistant', 'fa_name' => 'نمایش دستیاران']);
        $assistantPermission->subPermissions()->create(['name' => 'create-assistant', 'fa_name' => 'ایجاد دستیار']);
        $assistantPermission->subPermissions()->create(['name' => 'delete-assistant', 'fa_name' => 'حذف دستیار']);


        $studyPermission->subPermissions()->create(['name' => 'read-study', 'fa_name' => 'نمایش طرح']);
        $studyPermission->subPermissions()->create(['name' => 'create-study', 'fa_name' => 'ایجاد طرح']);
        $studyPermission->subPermissions()->create(['name' => 'edit-study', 'fa_name' => 'ویرایش طرح']);
        $studyPermission->subPermissions()->create(['name' => 'delete-study', 'fa_name' => 'حذف طرح']);

        $studiesPermission->subPermissions()->create(['name' => 'edit-study-status', 'fa_name' => 'نظارت طرح ها']);
        $studiesPermission->subPermissions()->create(['name' => 'read-studies', 'fa_name' => 'نمایش طرح ها']);
        $studiesPermission->subPermissions()->create(['name' => 'create-studies', 'fa_name' => 'ایجاد طرح']);
        $studiesPermission->subPermissions()->create(['name' => 'edit-studies', 'fa_name' => ' ویرایش طرح ها']);
        $studiesPermission->subPermissions()->create(['name' => 'delete-studies', 'fa_name' => 'حذف طرح']);


        $sliderPermission->subPermissions()->create(['name' => 'read-slider', 'fa_name' => 'نمایش اسلاید ها']);
        $sliderPermission->subPermissions()->create(['name' => 'create-slider', 'fa_name' => 'ایجاد اسلاید']);
        $sliderPermission->subPermissions()->create(['name' => 'edit-slider', 'fa_name' => 'ویرایش اسلاید ها']);
        $sliderPermission->subPermissions()->create(['name' => 'delete-slider', 'fa_name' => 'حذف اسلاید']);

        $researcherPermission->subPermissions()->create(['name' => 'read-researcher', 'fa_name' => 'نمایش طراح']);
        $researcherPermission->subPermissions()->create(['name' => 'create-researcher', 'fa_name' => 'ایجاد طراح']);
        $researcherPermission->subPermissions()->create(['name' => 'edit-researcher', 'fa_name' => 'ویرایش طراح']);

        $researchersPermission->subPermissions()->create(['name' => 'read-researchers', 'fa_name' => 'نمایش طراح ها']);
        $researchersPermission->subPermissions()->create(['name' => 'create-researchers', 'fa_name' => 'ایجاد طراح']);
        $researchersPermission->subPermissions()->create(['name' => 'delete-researchers', 'fa_name' => 'حذف طراح']);

        $profilePermission->subPermissions()->create(['name' => 'read-profile', 'fa_name' => 'نمایش پروفایل']);
        $profilePermission->subPermissions()->create(['name' => 'create-profile', 'fa_name' => 'ایجاد پروفایل']);
        $profilePermission->subPermissions()->create(['name' => 'edit-profile', 'fa_name' => 'ویرایش پروفایل']);
        $profilePermission->subPermissions()->create(['name' => 'delete-profile-img', 'fa_name' => 'حذف پروفایل']);

        $userPermission->subPermissions()->create(['name' => 'read-user', 'fa_name' => 'نمایش کاربران']);
        $userPermission->subPermissions()->create(['name' => 'create-user', 'fa_name' => 'ایجاد کاربر']);
        $userPermission->subPermissions()->create(['name' => 'edit-user', 'fa_name' => 'نظارت کاربر']);
        $userPermission->subPermissions()->create(['name' => 'edit-user-role', 'fa_name' => 'ویرایش  نقش کاربران']);
        $userPermission->subPermissions()->create(['name' => 'delete-user', 'fa_name' => 'حذف کاربر']);

        $commentPermission->subPermissions()->create(['name' => 'read-comment', 'fa_name' => 'نمایش نظرات']);
        $commentPermission->subPermissions()->create(['name' => 'edit-comment', 'fa_name' => 'نظارت نظرات']);
        $commentPermission->subPermissions()->create(['name' => 'delete-comment', 'fa_name' => 'حذف نظرات']);

        Role::attachPermiisions($supervisorRole, [
            'read-comment',
            'edit-comment',

            'read-researchers',

            'read-study',
            'edit-study-status',

            'read-user',
            'edit-user',
            'edit-user-role',

            'read-admin',
            'edit-admin',

            'read-agent',
            'edit-agent',

            'read-supervisor',
            'edit-supervisor',

            'read-service'
        ]);

        Role::attachPermiisions($agentRole, [
            'patient'
        ]);

        Role::attachPermiisions($userRole, [
            'profile',

            'researcher'
        ]);

        Role::attachPermiisions($researcherRole, [
            'study',

            'assistant' ,

            'patient' ,

            'survey' ,

            'patient'
        ]);

        Role::attachPermiisions($assistantRole, [
            'study',

            'patient' ,

            'survey'
        ]);
        Role::attachPermiisions($adminRole, [

            'studies',

            'researchers',

            'user',

            'study',

            'patient',

            'comment',

            'service'
        ]);

        $managerRole->givePermissionTo(Permission::all());
        $managerRole->revokePermissionTo([
            'study' ,
            'read-study' ,
            'create-study' ,
            'edit-study' ,
            'delete-study' ,

            'researcher' ,
            'read-researcher' ,
            'create-researcher' ,
            'edit-researcher' ,
            'create-patient' ,

            'read-survey' ,
            'create-survey' ,
            'edit-survey' ,
            'delete-survey'

        ]);


//        $managerRole->givePermissionTo([
//
//            'slider',
//
//            'studies',
//
//            'researchers',
//
//            'user',
//
//            'study',
//
//            'patient',
//
//            'comment',
//
//            'supervisor',
//
//            'agent',
//
//            'admin'
//
//        ]);
    }
}
