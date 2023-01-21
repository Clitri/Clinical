<?php

namespace App\Http\Controllers\content;

use App\Http\Controllers\Controller;
use App\Http\Requests\dashboard\content\suggestion\CreateSuggestionRequest;
use App\Models\content\Suggestion;
use App\Models\User;
use Illuminate\Http\Request;

class SuggestionController extends Controller
{
    public function index(){

        return view('dashboard.content.suggestion.index',['suggestions'=>Suggestion::paginate(10)]);
    }
    public function store(CreateSuggestionRequest $request){
        $input = $request->all();

        if ($request->hasFile('file')) {
            $filename = time() . '-' . $request->file('file')->getClientOriginalName();
            $request->file('file')->move('images/suggestions/', $filename);

            $input['file'] = $filename;
        }
        if (User::where('email' , $input['email'])->exists())
            $input['is_user'] = 1;
        else
            $input['is_user'] = 0;
        Suggestion::create($input);

        return response()->json();

    }

    public function destroy($id){

        Suggestion::find($id)->delete();
        return response()->json();

    }

    public function search(Request $request)
    {
        $search = $request->search;
        $suggestions = Suggestion::where("content", "LIKE", "%{$search}%")
            ->get();

        $data['suggestions'] = $suggestions;
        return response()->json($data);
    }
}
