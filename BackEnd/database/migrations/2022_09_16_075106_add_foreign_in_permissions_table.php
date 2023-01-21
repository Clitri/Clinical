<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignInPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('permissions', function (Blueprint $table) {
            $table->dropForeign('permissions_main_permission_id_foreign');
            $table->dropColumn('main_permission_id');
            $table->unsignedBigInteger('permission_id')->nullable();
            $table->foreign('permission_id')->references('id')->on('permissions')->constrained()
                ->onDelete('cascade')->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('permissions', function (Blueprint $table) {
            $table->dropForeign('permissions_permission_id_foreign');
            $table->dropColumn('permission_id');
            $table->foreignId('main_permission_id')->constrained()->onDelete('cascade')->onUpdate('cascade');

        });
    }
}
