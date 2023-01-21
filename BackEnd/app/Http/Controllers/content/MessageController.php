<?php

namespace App\Http\Controllers\content;

use App\Http\Controllers\Controller;
use App\Http\Requests\dashboard\content\CreateMessageRequest;
use App\Models\content\Message;
use App\Models\User;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $messages = \App\Models\User::userMessages(auth()->id());
        $now = date('Y-m-d H:i:s');
        foreach ($messages as $message) {
            $date = $message->created_at->diffForHumans($now);
            $message->date = str_replace("از", "", $date);
        }
        return view('dashboard.content.chat', ['messages' => $messages]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch($id)
    {
        $messages = User::userMessages($id);
        $now = date('Y-m-d H:i:s');
        foreach ($messages as $message) {
            $date = $message->created_at->diffForHumans($now);
            $message->date = str_replace("از", "", $date);
        }
        $data['messages'] = $messages;
        $data['id'] = $id;
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateMessageRequest $request)
    {
        if ($request->id != null)
            $message = Message::create(['message' => $request->message, 'from_user' => auth()->id(), 'to_user' => $request->id]);
        else
            $message = Message::create(['message' => $request->message, 'from_user' => auth()->id()]);


        return response()->json($message);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
