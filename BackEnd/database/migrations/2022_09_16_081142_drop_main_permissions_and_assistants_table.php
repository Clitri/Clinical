<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropMainPermissionsAndAssistantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('main_permissions');
        Schema::dropIfExists('assistants');
        Schema::dropIfExists('custom_permissions');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('assistants', function (Blueprint $table) {
            $table->id();
            $table->string('n_number', 10)->unique();
            $table->string('name');
            $table->string('f_name');
            $table->string('range');
            $table->string('major');
            $table->string('proficiency');
            $table->string('university');
            $table->string('organization');

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreignId('researcher_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('custom_permissions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('role_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
        Schema::create('main_permissions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
    }
}
