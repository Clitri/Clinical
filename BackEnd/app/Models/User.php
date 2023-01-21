<?php

namespace App\Models;

use App\Models\actor\Assistant;
use App\Models\actor\Patient;
use App\Models\blog\Like;
use App\Models\blog\Post;
use App\Models\content\Comment;
use App\Models\content\Message;
use App\Models\content\Suggestion;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
//use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use function Livewire\str;

class User extends Authenticatable
{
//    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use SoftDeletes;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'username',
        'email',
        'password',
        'enabled',
        'token'

    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
    ];

    public function scopeUpdateRole($query, $user, $role)
    {
        $role = $role == 1 ? 'Supervisor' : ($role == 2 ? 'Agent' : ($role == 3 ? 'Admin' : 'User'));
        $user->syncRoles($role);
    }

    public function profile()
    {
        return $this->hasOne(Profile::class)->withDefault();
    }

    public function researcher()
    {
        return $this->hasOne(Researcher::class)->withDefault();
    }

    public function patient()
    {
        return $this->hasOne(Patient::class)->withDefault();
    }

    public function comments()
    {

        return $this->hasMany(Comment::class);
    }

    public function posts()
    {

        return $this->hasMany(Post::class);
    }

    public static function userMessages($id)
    {
        return Message::where('from_user', $id)->orWhere('to_user', $id)->get();
    }

    public function messages()
    {
        return $this->hasMany(Message::class, 'from_user');
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public static function create($data){
//        $data['token'] =  Hash::make(Str::random(40));
        $data['token'] =  Str::random(40);

        return  User::query()->create($data);
    }

    public function custumSession(){
        return $this->hasOne(CustomSession::class)->withDefault();
    }
}
