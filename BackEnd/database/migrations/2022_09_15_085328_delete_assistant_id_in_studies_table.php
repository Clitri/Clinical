<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DeleteAssistantIdInStudiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('studies', function (Blueprint $table) {
            $table->dropForeign('studies_assistant_id_foreign');
            $table->dropColumn('assistant_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('studies', function (Blueprint $table) {
            $table->unsignedBigInteger('assistant_id')->nullable();
            $table->foreign('assistant_id')->references('id')->on('assistants')->constrained()->onDelete('cascade')->onUpdate('cascade');

        });
    }
}
