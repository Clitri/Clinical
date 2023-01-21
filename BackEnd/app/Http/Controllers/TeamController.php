<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index()
    {
        $team=array(['img'=>'03.jpg','name'=>'reza ahmadi','job'=>'پزشک عمومی','link'=>'adahd','details'=>'ggsdfgdf'],
        ['img'=>'04.jpg','name'=>'reza ahmadi','job'=>'پزشک عمومی','link'=>'adahd','details'=>'ggsdfgdf'],
        ['img'=>'05.jpg','name'=>'reza ahmadi','job'=>'پزشک عمومی','link'=>'adahd','details'=>'ggsdfgdf'],
        ['img'=>'06.jpg','name'=>'reza ahmadi','job'=>'پزشک عمومی','link'=>'adahd','details'=>'ggsdfgdf'],
    );
    return view('team',compact('team'));
    }
}
