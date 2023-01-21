<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('researcher_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('service_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('period_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::table('carts' , function (Blueprint $table){
           $table->dropForeign('carts_researcher_id_foreign');
           $table->dropForeign('carts_service_id_foreign');
           $table->dropForeign('carts_period_id_foreign');
        });
        Schema::dropIfExists('carts');
    }
}
