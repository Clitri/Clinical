<?php

namespace App\Providers;

use App\Models\blog\Category;
use App\Models\Researcher;
use App\Models\Study;
use App\Models\User;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Facades\Schema;


class AppServiceProvider extends ServiceProvider
{

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(125);

        Paginator::useBootstrap();

    view()->composer('*', function ($view) {
        if (Auth::check()) {
        if (!auth()->user()->hasRole('Manager')) {
            $messages = \App\Models\User::userMessages(auth()->id());
            $now = date('Y-m-d H:i:s');
            foreach ($messages as $message) {
                $date = $message->created_at->diffForHumans($now);
                $message->date = str_replace("از", "", $date);
            }
            $view->with('messages', $messages);
        } else {
            $users = User::whereHas('messages')->get();
            $view->with('users', $users);

        }
        }

    });
        Category::deleted(function ($cat) {
            $cat->subCategories()->delete();

        });

        Researcher::deleted(function ($researcher) {

            $researcher->study()->delete();
            $researcher->assistants()->delete();
        });

        Researcher::restored(function ($researcher) {
            $researcher->study()->withTrashed()->restore();
            $researcher->assistants()->withTrashed()->restore();

        });

        User::deleted(function ($user) {
            $user->profile()->delete();
            $user->researcher()->delete();
        });

        User::restored(function ($user) {
            $user->profile()->withTrashed()->restore();
            $user->researcher()->withTrashed()->restore();

        });

        Researcher::deleted(function ($user) {
            $user->study()->delete();
            $user->user->syncPermissions([]);
        });
        Researcher::restored(function ($user) {
            $user->study()->withTrashed()->restore();

        });

        Study::deleted(function ($user) {
            $user->studyspecification()->delete();
            $user->entrystudy()->delete();
            $user->failurestudy()->delete();

        });

        Study::restored(function ($user) {
            $user->studyspecification()->withTrashed()->restore();
            $user->entrystudy()->withTrashed()->restore();
            $user->failurestudy()->withTrashed()->restore();

        });
    }
}


