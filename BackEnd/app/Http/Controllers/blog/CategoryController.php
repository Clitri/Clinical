<?php

namespace App\Http\Controllers\blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\dashboard\blog\category\CreateCategoryRequest;
use App\Http\Requests\dashboard\blog\category\UpdateCategoryRequest;
use App\Models\blog\Category;
use App\Models\blog\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class CategoryController extends Controller
{

    public function store(CreateCategoryRequest $request)
    {

            $input = $request->only('title', 'status', 'category_id');
            $input['slug'] = str::slug($input['title']);
            $cat = Category::create($input);
        $catArray = [];
        array_push($catArray, 1);
        if (!empty($request->subCategories)) {
            $subCats = explode(',', $request->subCategories);
            foreach ($subCats as $subCat) {
                $Cat = $cat->subCategories()->create(['title' => $subCat, 'slug' => str::slug($subCat), 'status' => 1]);
//                array_push($catArray, 1);
            }
        }
        $temp = '';
        foreach ($cat->subCategories as $subCat)
            $temp = $temp . $subCat->title . ' ';

        $cat->subCat = Str::words($temp, 5, '...');
//        $cat->array = $cat->subCategories();
        return response()->json($this->response());
    }

    public function update(UpdateCategoryRequest $request)
    {
        $input = $request->only('title', 'status' , 'category_id');
        $input['slug'] = str::slug($input['title']);
        $cat = Category::find($request->id);
        $cat->update($input);
        if (!empty($request->subCategories)) {
            $subCats = explode(',', $request->subCategories);
            foreach ($cat->subCategories as $subCat)
                $subCat->delete();

            foreach ($subCats as $subCat) {
                $cat->subCategories()->create(['title' => $subCat, 'slug' => str::slug($subCat),'status'=>1]);
            }
            $cat->subCat = Str::words(implode(' ', $subCats), 5, '...');
        } else
            $cat->subCat = '';


        return response()->json($this->response());
    }

    public function response(){
        $cats = Category::all();

        foreach($cats as $cat){
            $cat->parent = $cat->category->title != null ? $cat->category->title : 'ندارد' ;
        }
        return $cats;
    }
    public function updateStatus(Request $request)
    {
        if ($request->ajax()) {
            $cat = Category::find($request->id);
            $cat->status = $request['column_value'] == 'true' ? 1 : 0;
            $cat->save();
        }
    }

    public function fetch($id)
    {

        $cat = Category::find($id);
        $subCats = $cat->subCategories;
        $data['cat'] = $cat;
        $data['subCats'] = $subCats;
        $data['cats'] = Category::all();
        return response()->json($data);
    }

    public function fetchCats()
    {


        $data['cats'] = Category::all();
        return response()->json($data);
    }
    public function destroy($id)
    {
        Category::find($id)->delete();
        return response()->json($this->response());
    }

    public function search(Request $request)
    {
        $search = $request->search;
        $cats = Category::where("title", "LIKE", "%{$search}%")->get();
        foreach ($cats as $cat) {
            $cat->parent = $cat->category->title == null ? 'ندارد' :  $cat->category->title;
            $tags = '';
        }
        $data['cats'] = $cats ;
        return response()->json($data);

    }
}
