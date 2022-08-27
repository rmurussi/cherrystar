<?php

namespace App\GraphQL\Mutations;

use \App\Models\User;
use \App\Models\Access;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

use Laravel\Sanctum\Guard;

final class Login
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {

        $user = User::where('email', $args["email"])->first();
 
        if (!$user || !Hash::check($args["password"], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
    
        $user->tenant = $user->tenant();
        $user->token = $user->createToken($args["email"])->plainTextToken;

        tenancy()->initialize($user->tenant);
        
        $request = Request::capture();
        $acesso = new Access();
        $acesso->ip = $request->ip();
        $acesso->date = date("Y-m-d H:i:s");
        $acesso->browser = $request->userAgent();
        $acesso->save();

        return $user;

    }
}
