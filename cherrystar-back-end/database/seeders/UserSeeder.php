<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = \App\Models\User::factory()->create([
            'name' => 'Renan R Murussi',
            'email' => 'renan@r.murussi',
            'password' => Hash::make('renan@r.murussi'),
        ]);

        $tenant = new \App\Models\Tenant();
        $tenant->user_id = $user->id;
        $tenant->save();

    }
}
