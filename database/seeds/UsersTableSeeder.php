<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        $users = [
          [
            'name' => 'Steve Rogers',
            'email' => 'steve@gmail.com',
            'password' => Hash::make('secret')
          ],
          [
            'name' => 'Tony Stark',
            'email' => 'tony@gmail.com',
            'password' => Hash::make('secret')
          ],
          [
            'name' => 'Thor Odinson',
            'email' => 'thor@gmail.com',
            'password' => Hash::make('secret')
          ]
        ];

        foreach($users as $user) {
          User::create($user);
        }
    }

}
