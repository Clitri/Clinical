<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/check-token' , [\App\Http\Controllers\DashboardConrtoller::class , 'checkToken']);
Route::get('/get-data' , [\App\Http\Controllers\DashboardConrtoller::class , 'getData']);
