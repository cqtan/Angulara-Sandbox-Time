<?php

use Illuminate\Database\Seeder;
use App\TimeEntry;

class TimeEntriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('time_entries')->delete();
        $timeEntries = [
          [
            'user_id' => 1,
            'title' => 'Search for Hydra in the sewers of Manhatten.',
            'startTime' => '2016-11-02 09:18:22',
            'endTime' => '2016-11-02 18:00:00',
            'description' => 'I bet they\'re in the sewers!'
          ],
          [
            'user_id' => 2,
            'title' => 'Clean Suits',
            'startTime' => '2016-11-03 14:30:01',
            'endTime' => '2016-11-03 15:30:00',
            'description' => 'My Mk-2 in particular is in need for some polishing again.'
          ],
          [
            'user_id' => 3,
            'title' => 'Buy Mug',
            'startTime' => '2016-11-04 11:00:50',
            'endTime' => '2016-11-04 12:00:00',
            'description' => 'Going to to replace the mug I broke last time I was on Earth.'
          ],
        ];

        foreach ($timeEntries as $timeEntry) {
          TimeEntry::create($timeEntry);
        }
    }
}
