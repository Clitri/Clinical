<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeColumnInResearchersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('researchers', function (Blueprint $table) {
           $table->string('n_number' , '10')->change();
           $table->renameColumn('username' , 'f_name');
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
        Schema::table('researchers', function (Blueprint $table) {
            $table->integer('n_number')->change();
            $table->renameColumn('f_name' , 'username');
            $table->dropColumn('deleted_at');
        });
    }
}
