<?php

namespace App\Exports;

use App\Models\actor\Assistant;
use App\Models\Researcher;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\BeforeExport;
use Maatwebsite\Excel\Events\AfterSheet;

class AssistantExport implements FromView, WithEvents
{
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
        if (auth()->user()->hasRole('Manager'))
            $assistants = Researcher::where('researcher_id','!=' , null)->get();
        else
            $assistants = Researcher::where('researcher_id', auth()->user()->researcher->id)->get();

        foreach ($assistants as $assistant) {
            $assistant->r_name = $assistant->researcher->name;
            $assistant->r_f_name = $assistant->researcher->f_name;

        }
        return view('dashboard/excel/assistant', [
            'assistants' => $assistants
        ]);
    }
}
