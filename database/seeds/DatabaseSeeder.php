<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        Eloquent::unguard();
        $this->call('UsersTableSeeder');
        $this->call('TimeEntriesTableSeeder');
        $this->call('CommentsTableSeeder');
        $this->command->info('Users-, TimeEntries- and Comments-Seeds created!');
    }
}
