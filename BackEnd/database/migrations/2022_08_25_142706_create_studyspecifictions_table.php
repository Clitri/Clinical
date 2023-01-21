<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudyspecifictionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('studyspecifictions', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->unsignedBigInteger('study_id');
            $table->foreign('study_id')->references('id')->on('studies')->onDelete('cascade');
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
        Schema::dropIfExists('studyspecifictions');
    }
}
