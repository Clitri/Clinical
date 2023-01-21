<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddEmailInSuggestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('suggestions', function (Blueprint $table) {
           $table->string('email');
           $table->dropForeign('suggestions_user_id_foreign');
           $table->dropColumn('user_id');
           $table->boolean('is_user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('suggestions', function (Blueprint $table) {
          $table->dropColumn('email');
          $table->dropColumn('is_user');
            $table->foreignId('user_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();

        });
    }
}
