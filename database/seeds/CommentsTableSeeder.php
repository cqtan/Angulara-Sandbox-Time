<?php

use Illuminate\Database\Seeder;
use App\Comment;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->delete();
        $comments = [
          [
            'user_id' => 1,
            'time_entry_id' => 3,
            'comment' => 'I got that reference! It was a reference right?'
          ],
          [
            'user_id' => 2,
            'time_entry_id' => 1,
            'comment' => 'If you\'re looking for your shield, I\'m currently using it as a door-stopper. Sorry ;)'
          ],
          [
            'user_id' => 3,
            'time_entry_id' => 2,
            'comment' => 'Wouldeth thou know where one should seeketh for a mug that matcheth mine drapes?'
          ]
        ];

        foreach ($comments as $comment) {
          Comment::create($comment);
        }
    }
}
