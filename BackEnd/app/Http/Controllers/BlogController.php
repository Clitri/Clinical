<?php

namespace App\Http\Controllers;

use App\Models\blog\Category;
use App\Models\blog\Like;
use App\Models\blog\Post;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class BlogController extends Controller
{

    public function index()
    {
        $posts = Post::where('status' , true)->get();

        foreach ($posts as $post) {
            $post->content = Str::words($post->content, 5, '...');
        }
        return view('blog', ['posts' => $posts]);
    }

    public function category($id)
    {
        $cat = Category::find($id);
        $catsId = [$cat->id];
        foreach ($cat->subCategories as $cat) {
            array_push($catsId, $cat->id);
        }
        return view('blog', ['posts' => Post::whereIn('category_id', $catsId)->get()]);
    }

    public function detail($id)
    {
        return view('blog-single', ['post' => Post::find($id)]);
    }

    public function like($id)
    {

        if (!auth()->check())
            return response()->json(false);
        $post = Post::find($id);
        $post->likes()->create(['user_id'=>auth()->id()]);
        return response()->json(true);
    }

    public function unLike($id)
    {

        if (!auth()->check())
            return response()->json(false);
        Like::where('post_id' , $id)->where('user_id' , auth()->id())->first()->delete();
        return response()->json(true);

    }
}
