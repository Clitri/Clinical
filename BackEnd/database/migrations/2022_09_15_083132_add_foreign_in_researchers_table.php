<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignInResearchersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('researchers', function (Blueprint $table) {
            $table->unsignedBigInteger('researcher_id')->nullable();
            $table->foreign('researcher_id')->references('id')->on('researchers')->constrained()->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('researchers', function (Blueprint $table) {
          $table->dropForeign('researchers_researcher_id_foreign');
          $table->dropColumn('researcher_id');
        });
    }
}
