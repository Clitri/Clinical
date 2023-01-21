<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\StudyController;
use App\Http\Controllers\content\SliderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\DashboardConrtoller;
use App\Http\Controllers\ResearcherController;
use App\Http\Controllers\actor\assistant\AssistantController;
use \App\Http\Controllers\actor\PatientController;
use \App\Http\Controllers\content\CommentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [IndexController::class, 'index'])->name('index');

Route::get('/about', [AboutController::class, 'index']

)->name('about');
Route::get('/contact-us', function () {
    return view('contact2');
})->name('contact');

Route::get('/faq', [FaqController::class, 'index'])->name('faq');

Route::get('/blog', [\App\Http\Controllers\BlogController::class, 'index'])->name('blog');
Route::get('/blog/{id}', [\App\Http\Controllers\BlogController::class, 'category'])->name('blog.cat');
Route::get('/blog/detail/{id}', [\App\Http\Controllers\BlogController::class, 'detail'])->name('blog.detail');
Route::get('/post/like/{id}', [\App\Http\Controllers\BlogController::class, 'like']);
Route::get('/post/unLike/{id}', [\App\Http\Controllers\BlogController::class, 'unLike']);

Route::get('/services', [ServiceController::class, 'index']
)->name('services');

Route::get('/team-single', function () {
    return view('team-single');
})->name('team-single');

Route::get('/team', [TeamController::class, 'index']
)->name('team');


Route::get('/dashboard', [DashboardConrtoller::class, 'index'])->middleware('auth')->name('dashboard');

Route::prefix('dashboard')->middleware('auth')->group(function () {

    Route::get('/calendar', [DashboardConrtoller::class, 'calendar'])->name('calendar');

    Route::controller(UserController::class)->group(function () {
        Route::get('/users-{role}', [UserController::class, 'index'])->middleware('can:read-user')->name('user');
        Route::get('/report/users-{role}', [UserController::class, 'index'])->middleware('can:read-user')->name('report.user');
        Route::get('/user/create', [UserController::class, 'create'])->middleware('can:create-user')->name('user.create');
        Route::post('/user', [UserController::class, 'store'])->middleware('can:create-user')->name('user.store');
        Route::post('/user/search', [UserController::class, 'search'])->middleware('can:read-user');
        Route::put('/user/update', [UserController::class, 'update'])->middleware('can:edit-user')->name('user.update');
        Route::delete('/user/{id}', [UserController::class, 'destroy'])->middleware('can:delete-user')->name('user.delete');
        Route::post('/user/update-role', [UserController::class, 'update_role'])->middleware('can:edit-user');
        Route::post('/user/permissions', [UserController::class, 'setPermissions'])->middleware('can:create-user');
        Route::get('user/fetch-permissions/{id}', [UserController::class, 'fetchPermissions']);
        Route::get('/report/users-{role}/pdf', [UserController::class, 'pdf']);
        Route::get('/report/users-{role}/excel', [UserController::class, 'excel']);

    });
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile');
    Route::post('/profile/city', [ProfileController::class, 'getcity'])->name('profile.city');
    Route::get('/profile/create', [ProfileController::class, 'create'])->name('profile.create');
    Route::post('/profile/create', [ProfileController::class, 'store'])->name('profile.store');
    Route::get('/profile/{id}', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::Put('/profile/update/{id}', [ProfileController::class, 'update'])->name('profile.update');
    Route::Put('/profile/image/{id}', [ProfileController::class, 'updateimg'])->name('image.update');
    Route::delete('/profile/{id}', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::controller(ResearcherController::class)->group(function () {
        Route::get('/researchers', 'index')->middleware('can:read-researchers')->name('researcher');
        Route::get('/report/researchers', 'index')->middleware('can:read-researchers')->name('report.researcher');
        Route::get('/researchers/create', 'create')->middleware('can:create-researchers')->name('researcher.create');
        Route::post('/researchers/create', 'store_admin')->middleware('can:create-researchers')->name('researcher.store-admin');
        Route::post('/researcher/create', 'store')->name('researcher.store');
        Route::post('/researcher/search', 'search');
        Route::post('/researcher/check-n_number', 'nNumber');
        Route::get('/researcher/{id}/edit', 'edit')->middleware('can:edit-researcher')->name('researcher.edit');
        Route::put('/researcher/{id}/edit', 'update')->middleware('can:edit-researcher')->name('researcher.update');
        Route::get('/researcher/{id}', 'editreserch')->middleware('can:edit-researcher')->name('researcher.editreserch');
        Route::put('/researcher/update/{id}', 'updateresearcher')->middleware('can:edit-researcher')->name('researcher.updateresearcher');
        Route::delete('/researcher/{id}', 'destroy')->middleware('can:delete-researchers')->name('researcher.delete');
        Route::get('/report/researchers/pdf', 'pdf')->middleware('can:read-researchers');
        Route::get('/report/researchers/excel', 'excel')->middleware('can:read-researchers');
    });

    Route::controller(SliderController::class)->group(function () {

        Route::get('/sliders', 'index')->middleware('can:read-slider')->name('slider');
        Route::get('/slider/{id}/show', 'show')->middleware('can:read-slider')->name('slider.show');
        Route::get('/slider/create', 'create')->middleware('can:create-slider')->name('slider.create');
        Route::post('/slider/create', 'store')->middleware('can:create-slider')->name('slider.store');
        Route::get('/slider/{id}', 'edit')->middleware('can:edit-slider')->name('slider.edit');
        Route::Put('/slider/update/{id}', 'update')->middleware('can:edit-slider')->name('slider.update');
        Route::delete('/slider/{id}', 'destroy')->middleware('can:delete-slider')->name('slider.delete');

    });
    Route::controller(StudyController::class)->group(function () {

//        Route::get('/study', 'index')->middleware('permission:read-study|read-studies')->name('study');
        Route::get('/study', 'index')->middleware('permission:read-study|read-studies')->name('study');
        Route::get('/report/study', 'report')->middleware('permission:read-study|read-studies')->name('report.study');
        Route::get('/study/detail/{id}', 'showstudy')->middleware('permission:read-study|read-studies')->name('study.show');
        Route::get('/study/detail/{id}/word', 'word')->middleware('permission:read-study|read-studies')->name('study.word');
        Route::get('/study/intervention/{id}', 'studyIntervention')->middleware('permission:create-study')->name('study.intervention');
        Route::get('/study/create', 'create')->middleware('can:create-study')->name('study.create');
        Route::post('/study/create', 'store')->middleware('can:create-study')->name('study.store');
        Route::post('/study/search', 'search')->middleware('permission:read-study|read-studies');
        Route::post('/study/advanced-search', 'advancedSearch')->middleware('permission:read-study|read-studies');
        Route::get('/study/{id}/edit', 'edit')->middleware('can:edit-study')->name('study.edit');
        Route::Put('/study/{id}/edit', 'update')->middleware('can:edit-study')->name('study.update');
        Route::delete('/study/{id}', 'destroy')->middleware('permission:delete-study|delete-studies')->name('study.delete');
        Route::put('/study/update-status', 'update_status')->middleware('can:edit-study-status');
        Route::post('/study/search-tag', 'searchTag')->middleware('can:create-study');
        Route::post('/study/check-tag', 'checkTag')->middleware('can:create-study');
        Route::post('/report/study/pdf', 'pdf')->middleware('permission:read-study|read-studies')->name('study.pdf');
        Route::get('/study/detail/{id}/pdf', 'singlePdf')->middleware('permission:read-study|read-studies')->name('study.singlepdf');
        Route::post('/report/study/excel', 'excel')->middleware('permission:read-study|read-studies')->name('study.excel');
        Route::post('/study/patient', 'setPatients')->middleware('permission:read-study|read-studies')->name('study.excel');

    });

    Route::controller(AssistantController::class)->group(function () {
        Route::get('/assistants', 'index')->middleware('can:read-assistant')->name('assistant');
        Route::get('/report/assistants', 'index')->middleware('can:read-assistant')->name('report.assistant');
        Route::get('/assistant/create', 'create')->middleware('can:create-assistant')->name('assistant.create');
        Route::post('/assistant/store', 'store')->middleware('can:create-assistant')->name('assistant.store');
        Route::post('/assistant/search', 'search')->middleware('can:read-assistant');
        Route::delete('/assistant/delete/{id}', 'destroy')->middleware('can:delete-assistant')->name('assistant.delete');
        Route::get('/report/assistants/pdf', 'pdf')->middleware('can:read-assistant')->name('assistant.pdf');
        Route::get('/report/assistants/excel', 'excel')->middleware('can:read-assistant')->name('assistant.excel');

    });


    Route::controller(PatientController::class)->group(function () {
        Route::get('/patients', 'index')->middleware('can:read-patient')->name('patient');
        Route::get('/report/patients', 'index')->middleware('can:read-patient')->name('report.patient');
        Route::get('/patient/create', 'create')->middleware('can:create-patient')->name('patient.create');
        Route::get('/patient/edit/{id}', 'edit')->middleware('can:edit-patient')->name('patient.edit');
        Route::post('/patient/store', 'store')->middleware('can:create-patient')->name('patient.store');
        Route::post('/patient/search', 'search')->middleware('can:read-patient');
        Route::post('/patient/sickness', 'sicknessSearch')->middleware('can:create-patient');
        Route::put('/patient/update/{id}', 'update')->name('patient.update');
        Route::delete('/patient/delete/{id}', 'destroy')->middleware('can:delete-patient')->name('patient.delete');
        Route::get('/report/patients/pdf', 'pdf')->middleware('can:read-patient')->name('patient.pdf');
        Route::get('/report/patients/excel', 'excel')->middleware('can:read-patient')->name('patient.excel');

    });

    Route::controller(\App\Http\Controllers\blog\CategoryController::class)->group(function () {
        Route::post('/category/store', 'store')->name('category.store');
        Route::post('/category/search', 'search');
        Route::get('/category/fetch/{id}', 'fetch')->name('category.fetch');
        Route::get('/category/fetch-cats', 'fetchCats')->name('category.fetchCats');
        Route::put('/category/update', 'update')->name('category.update');
        Route::put('/category/update-status', 'updateStatus')->name('category.update-status');
        Route::delete('/category/delete/{id}', 'destroy')->name('category.delete');

    });

    Route::controller(\App\Http\Controllers\blog\TagController::class)->group(function () {
        Route::get('/tag-categories', 'index')->name('tag');
        Route::post('/tag/store', 'store')->name('tag.store');
        Route::post('/tag/search-table', 'searchTable');
        Route::post('/tag/check', 'check')->name('tag.check');
        Route::post('/tag/update', 'update')->name('tag.update');
        Route::post('/tag/search', 'search')->name('tag.search');
        Route::delete('/tag/delete/{id}', 'destroy')->name('tag.delete');

    });

    Route::controller(\App\Http\Controllers\blog\PostController::class)->middleware('XSS')->group(function () {
        Route::get('/posts', 'index')->name('post');
        Route::get('/post/{id}', 'detail')->name('post.detail');
        Route::get('/posts/create', 'create')->name('post.create');
        Route::post('/post/store', 'store')->name('post.store');
        Route::post('/post/search', 'search');
        Route::get('/post/edit/{id}', 'edit')->name('post.edit');
        Route::put('/post/update/{id}', 'update')->name('post.update');
        Route::put('/post/update-status', 'updateStatus')->name('post.updateStatus');
        Route::delete('/post/delete/{id}', 'destroy')->name('post.delete');
        Route::post('/ckeditor/upload', 'upload')->name('ckeditor.upload');

    });

    Route::controller(\App\Http\Controllers\content\ServiceController::class)->middleware('XSS')->group(function () {
        Route::get('/services', 'index')->middleware('can:read-service')->name('service');
        Route::get('/orders', 'orders')->name('orders');
        Route::post('/order/search', 'search');
        Route::get('/cart', 'cart')->name('cart');
        Route::get('/all-services', 'showServices')->name('service.showServices');
        Route::get('/service/detail/{id}', 'detail')->name('service.detail');
        Route::get('/cart/{id}/{period}', 'register')->name('service.register');
        Route::get('/your-services', 'cart')->name('service.cart');
        Route::get('/service/create', 'create')->middleware('can:create-service')->name('service.create');
        Route::post('/service/store', 'store')->middleware('can:create-service')->name('service.store');
        Route::get('/service/edit/{id}', 'edit')->middleware('can:edit-service')->name('service.edit');
        Route::put('/service/update/{id}', 'update')->middleware('can:edit-service')->name('service.update');
        Route::put('/service/update-status', 'updateStatus')->middleware('can:edit-service')->name('service.updateStatus');
        Route::delete('/service/delete/{id}', 'destroy')->middleware('can:delete-service')->name('service.delete');
        Route::delete('/order/delete/{id}', 'destroyOrder');
        Route::post('/service/search-tag', 'searchTag')->middleware('can:create-service');
        Route::post('/service/check-tag', 'checkTag')->middleware('can:create-service');
        Route::get('/service/off/{id}/{period}', 'getOff');
    });

    Route::controller(CommentController::class)->group(function () {
        Route::get('/comments', 'index')->middleware('can:read-comment')->name('comment');
        Route::get('/comment/create', 'create')->name('comment.create');
        Route::post('/comment/store', 'store')->name('comment.store');
        Route::post('/comment/search', 'search')->middleware('can:read-comment');
        Route::put('/comment/update', 'update')->middleware('can:edit-comment')->name('comment.update');
        Route::delete('/comment/delete/{id}', 'destroy')->middleware('can:delete-comment');
        Route::get('/comment/fetch/{id}', 'fetch')->middleware('can:read-comment')->name('comment.fetch');

    });

    Route::controller(\App\Http\Controllers\content\MessageController::class)->group(function () {
        Route::get('/messages', 'index')->name('message');
        Route::post('/message/store', 'store');
        Route::get('/message/fetch/{id}', 'fetch');
    });
});


Route::controller(\App\Http\Controllers\content\SuggestionController::class)->group(function () {
    Route::get('/dashboard/suggestions', 'index')->name('suggestion');
    Route::post('/dashboard/suggestion/search', 'search');
    Route::delete('/dashboard/suggestion/delete/{id}', 'destroy')->name('suggestion.destroy');
    Route::post('/suggestion/store', 'store')->name('suggestion.store');
});
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard2', function () {
        return view('dashboard2');
    })->name('dashboard2');
});

