<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsInPatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('patients', function (Blueprint $table) {

            $table->date('birthdate');
            $table->foreignId('gender_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->boolean('marriage');
            $table->integer('height');
            $table->integer('weight');
            $table->foreignId('province_id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('sickness_id')->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('patients', function (Blueprint $table) {
//            $table->dropColumn('birthdate');
//            $table->dropForeign('patients_gender_id_foreign');
//            $table->dropColumn('marriage');
//            $table->dropColumn('height');
//            $table->dropColumn('weight');
//            $table->dropForeign('patients_province_id_foreign');
//            $table->dropForeign('patients_sickness_id_foreign');
//            $table->dropColumn('gender_id');
//            $table->dropColumn('province_id');
//            $table->dropColumn('sickness_id');

            $table->date('birthdate');
            $table->foreignId('gender_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->boolean('marriage');
            $table->integer('height');
            $table->integer('weight');
            $table->foreignId('province_id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('sickness_id')->cascadeOnUpdate()->cascadeOnDelete();
        });
    }
}
