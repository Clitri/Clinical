<?php

namespace App\Http\Controllers\content;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Http\Requests\CreateSliderRequest;
use App\Http\Requests\UpdateSliderRequest;

class SliderController extends Controller
{
    public function index()
    {
        $sliders = Slider::all();
         return view('dashboard.content.slider.index',['sliders'=>$sliders]);
    }

    public function show($id)
    {
        $slider=Slider::find($id);

        return view('dashboard.content.slider.slide-preview',['slider'=>$slider]);
    }

    public function store(CreateSliderRequest $request)
    {
        if (Slider::all()->count() != 3) {

            if ($request->has('img')) {
                $fileName = time() . '-' . $request->file('img')->getClientOriginalName();

                $request->file('img')->move('images/slider', $fileName);

            } else {

                $fileName = null;
            }

            $slider = Slider::create([

                'title' => $request->title,
                'top_title' => $request->top_title,
                'body' => $request->body,
                'img' => $fileName,
                'id' => $request->id,
            ]);

            return response()->json($slider);
        }
    }

    public function edit($id)
    {
       $slider=Slider::find($id);
       return response()->json($slider);
    }

    public function update(UpdateSliderRequest $request, $id)
    {
        $slider=Slider::find($id);

        if ($request->has('img')) {

            $destintion = 'images/slider/' . $slider->img;

            if (File::exists($destintion)) {
                File::delete($destintion);
            }
            $fileName = time() . '-' .$request->file('img')->getClientOriginalName();

            $request->file('img')->move('images/slider', $fileName);
            $slider->img = $fileName;
        }

        else {

            $fileName = $slider->img;
        }
        $slider->update([

            'title' => $request->title,
            'top_title' => $request->top_title,
            'body' => $request->body,
            'img' => $fileName,

        ]);

        return response()->json($slider);

    }

    public function destroy($id)
    {


        $slider = Slider::find($id);
        $img_path = public_path('/images/slider/' . $slider->img);

        if (File::exists($img_path)) {
            File::delete($img_path);

        }
        Slider::destroy($id);
        return response()->json([

        ]);


}
}
