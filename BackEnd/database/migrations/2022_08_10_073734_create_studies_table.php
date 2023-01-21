<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('studies', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('name');
            $table->string('studies_type');
            $table->string('structure_plan');
            $table->string('study_design');
            $table->string('sample');
            $table->date('start_date');
            $table->date('end_date');
            $table->string('file')->nullable();
            $table->integer('sample_size');
            $table->string('purpose_study');
            $table->string('phase_study');
            $table->string('randomization');
            $table->string('blinding');

            $table->boolean('placebo');

            $table->date('start_date_illness')->nullable();
            $table->date('end_date_illness')->nullable();
            $table->boolean('termination_illness')->nullable();
            $table->date('start_get_sick_ended')->nullable();
            $table->date('end_get_sick_ended')->nullable();
            $table->unsignedBigInteger('gender_id');
            $table->foreign('gender_id')->references('id')->on('genders')->onDelete('cascade');
            $table->string('minimum_age')->nullable();
            $table->string('maximum_age')->nullable();
            $table->unsignedBigInteger('researcher_id');
            $table->foreign('researcher_id')->references('id')->on('researchers')->onDelete('cascade');
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
        Schema::dropIfExists('studies');
    }
}
