<?php

namespace App\GraphQL\Queries;

use App\Models\Access as Model;

final class Access
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        return Model::all();
    }
}
