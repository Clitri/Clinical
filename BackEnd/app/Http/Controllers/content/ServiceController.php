<?php

namespace App\Http\Controllers\content;

use App\Http\Controllers\Controller;
use App\Http\Requests\dashboard\content\service\CreateServiceRequest;
use App\Http\Requests\dashboard\content\service\UpdateServiceRequest;
use App\Http\Requests\dashboard\TagRequest;
use App\Imports\SicknessImport;
use App\Models\service\Cart;
use App\Models\service\Service;
use App\Models\service\ServicePeriod;
use App\Models\service\ServiceTag;
use App\Models\service\ServiceType;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
//use Maatwebsite\Excel\Facades\Excel;
use Excel;
class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $services = Service::paginate(10);
        foreach ($services as $service) {
            $tags = '';
            foreach ($service->tags as $tag)
                $tags = $tags . $tag->title . ' ';
            $service->tags = Str::words($tags, 5, '...');
        }
        return view('dashboard.content.service.index', ['services' => $services]);
    }

    public function orders()
    {
        return view('dashboard.content.service.all-orders', ['orders' => Cart::paginate(10)]);
    }

    public function destroyOrder($id)
    {
        Cart::where('service_id', $id)->where('researcher_id', auth()->user()->researcher->id)->delete();

        return response()->json();
    }

    public function showServices()
    {
        $gold = Service::where('service_type_id', ServiceType::where('name', 'طلایی')->first()->id)->exists() ? ServiceType::where('name', 'طلایی')->first()->service : null;
        $silver = Service::where('service_type_id', ServiceType::where('name', 'نقره ای')->first()->id)->exists() ? ServiceType::where('name', 'نقره ای')->first()->service : null;
        $bronze = Service::where('service_type_id', ServiceType::where('name', 'برنز')->first()->id)->exists() ? ServiceType::where('name', 'برنز')->first()->service : null;
        return view('dashboard.content.service.all-services', ['gold' => $gold,
            'silver' => $silver, 'bronze' => $bronze]);
    }

    public function detail($id)
    {

        return view('dashboard.content.service.detail', ['service' => Service::find($id)]);
    }

    public function register($id, $period)
    {
        if (auth()->user()->researcher->carts->count() == 1) {
            alert()->warning('شما در حال حاضر یک محصول را خریداری کرده اید!');
            return redirect()->back();
        }
        $cart = Cart::create(['researcher_id' => auth()->user()->researcher->id, 'service_id' => $id, 'period_id' => $period]);
//        return view('dashboard.content.service.cart', ['service' => Service::find($id) ,
//            'cart'=>$cart]);
        return redirect()->route('cart');
    }

    public function cart()
    {
//        dd(auth()->user()->researcher->carts[0]->service);
        return view('dashboard.content.service.cart', [
            'carts' => auth()->user()->researcher->carts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Service::count() == 3) {
            alert()->warning('بیشتر از سه محصول نمیتوانید ایجاد کنید');
            return redirect()->back();
        }
        return view('dashboard.content.service.create');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateServiceRequest $request)
    {

        $input = $request->except('tags');

        $filename = time() . '-' . $request->file('img')->getClientOriginalName();
        $request->file('img')->move('images/service', $filename);

        $input['img'] = $filename;
        $input['service_category_id'] = $request->category;
        $input['period_id'] = $request->period;
        $input['service_type_id'] = $request->type;


        $service = Service::create($input);

        if ($request->tags != null) {
            $tags = explode(',', $request->tags);

            $tagsId = [];
            foreach ($tags as $tag) {
                if (ServiceTag::where('title', $tag)->exists())
                    array_push($tagsId, ServiceTag::where('title', $tag)->first()->id);
            }
            $service->tags()->attach($tagsId);
        }

        alert()->success('سرویس ایجاد شد');
        return redirect()->route('service');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('dashboard.content.service.edit', ['service' => Service::find($id)]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateServiceRequest $request, $id)
    {
        $service = Service::find($id);
        $input = $request->except(['tags']);
        if ($request->hasFile('img')) {
            $filename = time() . '-' . $request->file('img')->getClientOriginalName();
            $request->file('img')->move('images/service', $filename);

            $input['img'] = $filename;
        }
        $input['service_category_id'] = $request->category;
        $input['period_id'] = $request->period;
        $input['service_type_id'] = $request->type;

        $service->update($input);
        if ($request->tags != null) {
            $tags = explode(',', $request->tags);

            $tagsId = [];
            foreach ($tags as $tag) {
                if (ServiceTag::where('title', $tag)->exists())
                    array_push($tagsId, ServiceTag::where('title', $tag)->first()->id);
            }
            $service->tags()->sync($tagsId);
        }

        alert()->success('سرویس ویرایش شد');
        return redirect()->route('service');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Service::find($id)->delete();

        return response()->json();
    }

    public function updateStatus(Request $request)
    {
        if ($request->ajax()) {
            $cat = Service::find($request->id);
            $cat->status = $request['column_value'] == 'true' ? 1 : 0;
            $cat->save();
        }
    }

    public function checkTag(TagRequest $request)
    {

        if (!ServiceTag::where('title', $request->title)->exists()) {

            $input = $request->all();
            $input['slug'] = str::slug($input['title']);
            $tag = ServiceTag::create($input);

        }
        return response()->json();
    }

    public function searchTag(Request $request)
    {
        $tags = ServiceTag::where("title", "LIKE", "%{$request->search}%")
            ->get();
        return response()->json($tags);
    }

    public function getOff($id, $period)
    {
        $service = Service::find($id);
        $data['period'] = ServicePeriod::find($period)->month;
        $data['off'] = $service->off;
        $data['price'] = $service->price;
        return response()->json($data);
    }

    public function search(Request $request)
    {
        $search = $request->search;
        $researchers = Cart::whereHas('researcher', function($q) use ($search){
            $q->where("name", "LIKE", "%{$search}%")->orWhere("f_name", "LIKE", "%{$search}%");
        })->get();
        foreach ($researchers as $cart){
            $cart->name = $cart->researcher->name.' '.$cart->researcher->f_name ;
            $cart->type = $cart->service->type->name ;
            $cart->month = $cart->period->month.' ماهه' ;
        }
        $data['researchers'] = $researchers ;
        return response()->json($data);

    }
}
