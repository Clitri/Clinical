<?php

namespace App\Exports;

use App\Models\User;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\BeforeExport;
use Maatwebsite\Excel\Events\AfterSheet;

class UserExport implements FromView, WithEvents
{
    /**
     * @return \Illuminate\Support\Collection
     */
    use Exportable;

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $event->sheet->getDelegate()->setRightToLeft(true);
            },
        ];
    }

    public function view(): View
    {
        $path = app('request')->path();
        $role = Str::between($path, '-' , '/');

        $users = User::role($role)->get();
        return view('dashboard/excel/user', [
            'array' => $users
        ]);
    }
}
