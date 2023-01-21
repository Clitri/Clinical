<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SetColumnsNullableInStudiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('studies', function (Blueprint $table) {
           $table->string('name')->nullable()->change();
           $table->string('start_date')->nullable()->change();
           $table->string('end_date')->nullable()->change();
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
            $table->string('name')->nullable(false)->change();
            $table->string('start_date')->nullable(false)->change();
            $table->string('end_date')->nullable(false)->change();
        });
    }
}
