<?php

namespace App\Http\Controllers\content;

use App\Http\Controllers\Controller;
use App\Http\Requests\comment\CreateCommentRquest;
use App\Models\content\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use RealRashid\SweetAlert\Facades\Alert;

class CommentController extends Controller
{

    public function index()
    {
        $comments = Comment::paginate(10);
        foreach($comments as $comment){
            $comment->title = Str::words($comment->title , 5 , '...');
            $comment->message = Str::words($comment->message , 5 , '...');
        }
        return view('dashboard.content.comment.index', ['comments' => $comments]);
    }

    public function create(){
        return view('dashboard.content.comment.create');
    }

    public function store(CreateCommentRquest $request)
    {

        $input = $request->all();
        $user = auth()->user();
        $user->comments()->create($input);
        Alert::success('نظر شما ثبت شد ');
        return redirect()->back();
    }

    public function update(Request $request)
    {
        if ($request->ajax()) {
            $user = Comment::find($request->id);
            $user->status = $request['column_value'] == 'true' ? 1 : 0;
            $user->save();
        }
    }

    public function fetch($id){
    return response()->json(Comment::find($id));
    }

    public function destroy($id){

        Comment::find($id)->delete();
        return response()->json([]);

    }

    public function search(Request $request)
    {
        $search = $request->search;
        $comments = Comment::where("title", "LIKE", "%{$search}%")
                ->orWhere("message", "LIKE", "%{$search}%")
            ->get();

        $data['comments'] = $comments;
        $data['status'] = auth()->user()->hasPermissionTo('edit-comment') ? true : false;
        $data['delete'] = auth()->user()->hasPermissionTo('delete-comment') ? true : false;
        return response()->json($data);
    }
}
