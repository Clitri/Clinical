<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudyTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('study_tag', function (Blueprint $table) {
            $table->id();
            $table->foreignId('study_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('study_tag_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
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
        Schema::table('study_tag' , function (Blueprint $table){
            $table->dropForeign('study_tag_study_id_foreign');
            $table->dropForeign('study_tag_study_tag_id_foreign');
        });
        Schema::dropIfExists('study_tag');
    }
}
