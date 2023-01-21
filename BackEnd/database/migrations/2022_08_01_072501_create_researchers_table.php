<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('researchers', function (Blueprint $table) {
            $table->id();
            $table->integer('n_number')->unique();
            $table->string('name');
            $table->string('username');
            $table->string('range');
            $table->string('major');
            $table->string('proficiency');
            $table->string('university');
            $table->string('organization');

            $table->unsignedBigInteger('user_id');
             $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('researchers');
    }
}
