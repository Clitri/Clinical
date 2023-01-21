<?php

namespace App\Exports;

use App\Models\Researcher;
use App\Models\Study;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\BeforeExport;
use Maatwebsite\Excel\Events\AfterSheet;

class StudyExport implements FromView, WithEvents
{
    use Exportable;

    public $studies;

    public function __construct($studies)
    {
        $this->studies = $studies;
    }

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
//        if (auth()->user()->hasPermissionTo('read-studies'))
//            $studies = Study::all();
//        else
//            $studies = auth()->user()->researcher->study;
//        foreach ($studies as $study) {
//            $study->maximum_age = $study->maximum_age != null ? explode('.', $study->maximum_age) : null;
//            $study->minimum_age = $study->minimum_age != null ? explode('.', $study->minimum_age) : null;
//            $study->start_date = $study->start_date != null ? Verta($study->start_date)->format('Y/m/d') : '';
//            $study->end_date = $study->end_date != null ? Verta($study->end_date)->format('Y/m/d') : '';
//        }
        return view('dashboard/excel/studies', [
            'studies' => $this->studies
        ]);
    }
}
