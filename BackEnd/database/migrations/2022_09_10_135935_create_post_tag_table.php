<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_tag', function (Blueprint $table) {
            $table->id();
            $table->foreignId('post_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('tag_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
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
        Schema::table('post_tag' , function (Blueprint $table){
           $table->dropForeign('post_tag_post_id_foreign');
           $table->dropForeign('post_tag_tag_id_foreign');
        });
        Schema::dropIfExists('post_tag');
    }
}
