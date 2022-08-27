<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Auth;

final class Logout
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $user = Auth::user();
        if ($user) {
            Auth::user()
                ->tokens()
                ->where('id',
                    $user
                        ->currentAccessToken()
                        ->id
                )
                ->delete();
        }
    }
}
