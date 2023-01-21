<?php

namespace App\Console;

use App\Models\Study;
use App\Models\Survey;
use App\Models\User;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */

    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {

            try {
                $client = new \GuzzleHttp\Client([
                    'headers' => ['Content-Type' => 'application/json', 'Accept' => 'application/json'],
                ]);
                $request = $client->request('GET', 'http://backendsurvey.clitri.ir/api/survey/getSurveysData');

                $response = $request->getBody()->getContents();

                foreach (json_decode($response) as $survey) {
                    if (Study::find($survey->study_id) != null) {
                        Survey::create(['id' => $survey->id,
                            'title' => $survey->title,
                            'description' => $survey->description,
                            'link' => $survey->short_url,
                            'answer_number' => $survey->answerNumber,
                            'create_date' => $survey->create,
                            'study_id' => $survey->study_id]);
                    }
                }
                info($response);
//                Survey::create([
//                            'title' => 'title',
//                            'description' => 'description',
//                            'link' => 'short_url',
//                            'answer_number' => 'answerNumber',
//                            'create_date' => 'create',
//                            'study_id' => 1]);
            }catch (\Exception $e){
                info($e->getMessage());
            }

        })->daily();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
