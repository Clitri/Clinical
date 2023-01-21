<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        $services=array(['img'=>'prices.png','title'=>"jh",'link'=>'nchn','content'=>"nnnbvbbv"],
        ['img'=>'prices.png','title'=>"jh",'link'=>'nchn','content'=>"nnnbvbbv"],
        ['img'=>'prices.png','title'=>"jh",'link'=>'nchn','content'=>"nnnbvbbv"],
        ['img'=>'prices.png','title'=>"jh",'link'=>'nchn','content'=>"nnnbvbbv"],
        ['img'=>'prices.png','title'=>"jh",'link'=>'nchn','content'=>"nnnbvbbv"],
        ['img'=>'prices.png','title'=>"jh",'link'=>'nchn','content'=>"nnnbvbbv"]);



        $team=array(['img'=>'03.jpg','name'=>'reza ahmadi','job'=>'پزشک عمومی','link'=>'adahd','details'=>'ggsdfgdf'],
        ['img'=>'04.jpg','name'=>'reza ahmadi','job'=>'پزشک عمومی','link'=>'adahd','details'=>'ggsdfgdf'],
        ['img'=>'05.jpg','name'=>'reza ahmadi','job'=>'پزشک عمومی','link'=>'adahd','details'=>'ggsdfgdf'],
        ['img'=>'06.jpg','name'=>'reza ahmadi','job'=>'پزشک عمومی','link'=>'adahd','details'=>'ggsdfgdf'],
    );

    $slider=array(['content'=>"تیم سرطان در clitri چیزی جز معجزه نیست
    کارگران - آنها توانستند به من کمک کنند تا تنها در 6 ماه بر لوسمی خود غلبه کنم.",'title'=>"بیماری"],
    ['content'=>"تیم سرطان در clitri چیزی جز معجزه نیست
    کارگران - آنها توانستند به من کمک کنند تا تنها در 6 ماه بر لوسمی خود غلبه کنم.",'title'=>"بیماری"],

    ['content'=>"تیم سرطان در clitri چیزی جز معجزه نیست
    کارگران - آنها توانستند به من کمک کنند تا تنها در 6 ماه بر لوسمی خود غلبه کنم.",'title'=>"بیماری"],

);
        return view('about',compact('services','team','slider'));
    }
}
