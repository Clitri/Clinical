<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services=array(['img'=>'prices.png','title'=>"jh",'link'=>'nchn','content'=>"nnnbvbbv"],
        ['img'=>'prices.png','title'=>"jh",'link'=>'nchn','content'=>"nnnbvbbv"],
        ['img'=>'prices.png','title'=>"jh",'link'=>'nchn','content'=>"nnnbvbbv"],
        ['img'=>'prices.png','title'=>"jh",'link'=>'nchn','content'=>"nnnbvbbv"],
        ['img'=>'prices.png','title'=>"jh",'link'=>'nchn','content'=>"nnnbvbbv"],
        ['img'=>'prices.png','title'=>"jh",'link'=>'nchn','content'=>"nnnbvbbv"]);
        return view('services',compact('services'));
    }
}
