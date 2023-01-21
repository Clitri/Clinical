<?php

namespace App\Http\Controllers\blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\dashboard\blog\tag\CreateTagRequest;
use App\Http\Requests\dashboard\blog\tag\UpdateTagRequest;
use App\Http\Requests\dashboard\TagRequest;
use App\Models\blog\Category;
use App\Models\blog\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use function Livewire\str;

class TagController extends Controller
{

    public function index()
    {
        $cats =  Category::paginate(10);


        return view('dashboard.blog.tag-category.index', ['tags' => Tag::paginate(10),
            'categories' =>$cats]);
    }

    public function store(CreateTagRequest $request)
    {

        if (Tag::onlyTrashed()->where('title', $request->title)->exists()) {
            $tag = Tag::onlyTrashed()->where('title', $request->title)->first();
            $tag->restore();
        } else {
            $input = $request->all();
            $input['slug'] = str::slug($input['title']);
            $tag = Tag::create($input);
        }
        return response()->json($tag);
    }

    public function check(TagRequest $request){

        if (!Tag::where('title' , $request->title)->exists()) {
            if (Tag::onlyTrashed()->where('title', $request->title)->exists()) {
                $tag = Tag::onlyTrashed()->where('title', $request->title)->first();
                $tag->restore();
            } else {
                $input = $request->all();
                $input['slug'] = str::slug($input['title']);
                $input['status'] = 1;
                $tag = Tag::create($input);
            }
        }else
            $tag = Tag::where('title' , $request->title)->first();
        return response()->json($tag);
    }

    public function update(UpdateTagRequest $request){

        $input = $request->all();
        $tag = Tag::find($input['id']);

        if ($request->has('title')){
            $tag->title = $input['title'];
            $tag->slug = str::slug($input['title']);
        }else
            $tag->status = $input['status'];

        $tag->save();
        return response()->json($tag);
    }

    public function search(Request $request)
    {
        $tags = Tag::where("title", "LIKE", "%{$request->search}%")
            ->get();
        return response()->json($tags);
    }

    public function destroy($id){

        Tag::find($id)->delete();
    }

    public function searchTable(Request $request)
    {
        $search = $request->search;
        $tags = Tag::where("title", "LIKE", "%{$search}%")->get();

        $data['tags'] = $tags ;
        return response()->json($data);

    }

}
