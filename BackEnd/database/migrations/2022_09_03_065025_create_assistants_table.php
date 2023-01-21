<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssistantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assistants', function (Blueprint $table) {
            $table->id();
            $table->string('n_number' , 10)->unique();
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
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('assistants' , function (Blueprint $table){
            $table->dropForeign('assistants_user_id_foreign');
            $table->dropForeign('assistants_researcher_id_foreign');
        });
        Schema::dropIfExists('assistants');
    }
}
