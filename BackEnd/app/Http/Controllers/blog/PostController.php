<?php

namespace App\Http\Controllers\blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\dashboard\blog\post\CreatePostRequest;
use App\Http\Requests\dashboard\blog\post\UpdatePostRequest;
use App\Models\blog\Post;
use App\Models\blog\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use RealRashid\SweetAlert\Facades\Alert;

class PostController extends Controller
{
    public function index()
    {

        $posts = Post::paginate(10);

        foreach ($posts as $post) {
            $tags = '';
            foreach ($post->tags as $tag)
                $tags = $tags . $tag->title . ' ';
            $post->tags = Str::words($tags, 5, '...');
        }
        return view('dashboard.blog.post.index', ['posts' => $posts]);
    }

    public function create()
    {
        return view('dashboard.blog.post.create');
    }


    public function detail($id)
    {
        return view('dashboard.blog.post.detail', ['post' => Post::find($id)]);
    }

    public function store(CreatePostRequest $request)
    {
        $input = $request->except('tags');

        $fileName = time() . '-' . $request->file('img')->getClientOriginalName();

        $request->file('img')->move('images/', $fileName);

        $input['img'] = $fileName;

        $input['slug'] = Str::slug($input['title']);
        $input['user_id'] = auth()->id();
        $post = Post::create($input);
        if ($request->tags != null) {
            $tags = explode(',', $request->tags);

            $tagsId = [];
            foreach ($tags as $tag) {
                if (Tag::where('title', $tag)->exists())
                    array_push($tagsId, Tag::where('title', $tag)->first()->id);
            }
            $post->tags()->attach($tagsId);
        }
        alert()->success('پست ایجاد شد');
        return redirect()->route('post');


    }

    public function edit($id)
    {

        return view('dashboard.blog.post.edit', ['post' => Post::find($id)]);
    }

    public function update(UpdatePostRequest $request, $id)
    {
        $input = $request->except('tags');
        $post = Post::find($id);
        if ($request->hasFile('img')) {
            $destintion = 'images/' . $post->img;

            if (File::exists($destintion)) {
                File::delete($destintion);
            }
            $fileName = time() . '-' . $request->file('img')->getClientOriginalName();

            $request->file('img')->move('images/', $fileName);

            $input['img'] = $fileName;
        }
        $input['slug'] = Str::slug($input['title']);
        $post->update($input);
        if ($request->tags != null) {
            $tags = explode(',', $request->tags);

            $tagsId = [];
            foreach ($tags as $tag) {
                if (Tag::where('title', $tag)->exists())
                    array_push($tagsId, Tag::where('title', $tag)->first()->id);
            }
            $post->tags()->sync($tagsId);
        }
        alert()->success('پست ویرایش شد');

        return redirect()->route('post');

    }

    public function updateStatus(Request $request)
    {
        if ($request->ajax()) {
            $cat = Post::find($request->id);
            $cat->status = $request['column_value'] == 'true' ? 1 : 0;
            $cat->save();
        }
    }

    public function upload(Request $request)
    {
        if ($request->hasFile('upload')) {
            $originName = $request->file('upload')->getClientOriginalName();
            $fileName = pathinfo($originName, PATHINFO_FILENAME);
            $extension = $request->file('upload')->getClientOriginalExtension();
            $fileName = $fileName . '_' . time() . '.' . $extension;

            $request->file('upload')->move(public_path('media'), $fileName);

            $url = asset('media/' . $fileName);
            return response()->json(['fileName' => $fileName, 'uploaded' => 1, 'url' => $url]);
        }
    }

    public function destroy($id)
    {

        Post::find($id)->delete();
    }

    public function search(Request $request)
    {
        $search = $request->search;
        $posts = Post::where("title", "LIKE", "%{$search}%")->orWhere("sub_title", "LIKE", "%{$search}%")->get();
        foreach ($posts as $post) {
            $post->cat = $post->category->title == null ? '' :  $post->category->title;
            $tags = '';
            foreach ($post->tags as $tag)
                $tags = $tags . $tag->title . ' ';
            $post->tag = Str::words($tags, 5, '...');
        }
        $data['posts'] = $posts ;
        return response()->json($data);

    }
}
