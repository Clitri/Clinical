<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->string('message');
            $table->unsignedBigInteger('from_user');
            $table->unsignedBigInteger('to_user')->nullable();
            $table->foreign('from_user')->on('users')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreign('to_user')->on('users')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
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
        Schema::table('messages' , function (Blueprint $table){
           $table->dropForeign('messages_from_user_foreign');
           $table->dropForeign('messages_to_user_foreign');
        });
        Schema::dropIfExists('messages');
    }
}
