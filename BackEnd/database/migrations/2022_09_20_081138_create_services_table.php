<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('content');
            $table->string('img');
            $table->string('price');
            $table->boolean('status');
            $table->foreignId('period_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('service_type_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->softDeletes();
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
        Schema::table('services' , function (Blueprint $table){
           $table->dropForeign('services_period_id_foreign');
           $table->dropForeign('services_service_type_id_foreign');
        });
        Schema::dropIfExists('services');
    }
}
