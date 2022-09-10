<p align="center"><a href="https://github.com/rmurussi/cherrystar" target="_blank"><img src="https://repository-images.githubusercontent.com/529700857/52335296-b88e-41a2-910b-ca55799054a4" width="400" alt="CherryStar Logo"></a></p>

# CherryStar - Study case, starting with recent technologies

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://ko-fi.com/renanmurussi)

CherryStar is a compilation of technologies that you must know to work as back-end or front-end developer.

You will learn:
 - MUI: framework front-end
 - typescript lang
 - Reactjs: useEffect, useState
 - Apollo: useQuery, useMutation
 - tenancy: central database to login
 - tenancy: each user have a database
 - GraphQL: queries and mutations
 - Laravel: sail "easy docker"
 - Sanctum: user-token
 - WSL2: (windows with linux enviroment)
 - Redis: (database key-value) to cache GraphQL and everything you like
 - PostgresSQL: database

:star: Do not forget to star (Top right of this page) :star:

## Technology Stack

### Front-End
 - [Material UI V5](https://material-ui.com/)
 - [ReactJS](https://reactjs.org)
 - [typescript](https://www.typescriptlang.org)
 - [Apollo](https://www.apollographql.com/docs/)

### Back-End
 - [Laravel](https://laravel.com/docs/9.x/)
 - [GraphQL](https://graphql.org)
 - [tenancy](https://tenancyforlaravel.com/)
 - [Sanctum](https://laravel.com/docs/9.x/sanctum)

### Enviroment
 - [Docker](https://www.docker.com)
 - [Sail](https://laravel.com/docs/9.x/sail)
 - [Node](https://nodejs.org/)
 - [PostgresSQL 14](https://www.postgresql.org)
 - [Redis](https://redis.io)
 - [Php8.1](https://www.php.net)


## Getting Started

### Windows WSL2

 - [Installation Guide](https://docs.microsoft.com/en-us/windows/wsl/install)

From terminal/WSL2 - You MUST clone at /var/www/
``` bash
git clone https://github.com/rmurussi/cherrystar /var/www/


cd /var/www/cherrystar
chmod +x docker-build.sh
echo "Let's take a coffe, while docker do the hard job" && \
./docker-build.sh

```

Docker Desktop - Open *Bash* of containner `cherrystar: laravel-cherrystar`

``` bash
comoposer install
cp .env.example .env
php artisan migrate
php artisan db:seed

php artisan cache:clear
composer dump-autoload

chown 1000:sail -R *
chmod -R 777 storage -R *

```

### Now you have the app on - WOW!

 - Navigate to: [http://localhost:3000](http://localhost:3000)

 - Maybe you need to wait some seconds - Node is building...

### Congrats, look what you did :D
 - Cloned a project with git on github
 - Started a project on Sail - Laravel
 - Created a Docker enviroment
 - Most recent technologies integration
 - Front-end enviroment integrated with back-end app
 - Top Skills: GraphQL, Redis, Php8.1, ReactJS, Apollo, MUI, PostgreSQL
 - An application front-end + back-end that log-in using GraphQL Mutation (Sanctum). An App that have a central base to log-in, each user having a database(tenancy). When an user log-in, laravel save `Resquest data` in `database-user.access` [IP/Browser/Timestamp] and return a token of the user(Sanctum).
 - After log-in, you'll see a grid with a list of the latest accesses in the database of your user.

# Go beyond - next steps

## I suggest you do it yourself

### Laravel
 - Change Sanctum to Oauth2 (Most used technology for log-in)
 - Create access rules for users in environment back-end/front-end
 - Change Tanancy token to Tanancy Domain/Sub-Domain
 - Change GraphQL-Query table `Access`, to load data from `access` with pagination
 - Set trust Host & Proxies
 - GraphQL Mutation to register new user and tenancy

### ReactJS
 - Create a Loader on sign-in
 - Create a Loader on sign-out
 - Login (New Page with route)
 - List Access (New Page with route)
 - Register (New Page with route)
 - Validation forms in reacjs with [Yup](https://www.npmjs.com/package/yup)
 - Validate mutation and query return from GraphQL
 - I18n, make the app multi-lang

### [Heroku](https://www.heroku.com)
 - Free cloud to host your app

# Inspirations
 - [MUI](https://github.com/mui/material-ui)
 - [Apollo - machadop1407](https://github.com/machadop1407/graphql-full-course)
 - [Berry Free - codedthemes](https://github.com/codedthemes/berry-free-react-admin-template)
 - [ReactJS - yt/PedroTechnologies](https://www.youtube.com/watch?v=QhbM9r1wdxk)

# Author
 - CherryStar is developed by me [Renan R. Murussi](https://www.linkedin.com/in/renan-rubatini-murussi-4405ba31/)

# Issues
 - To report a bug, please submit an issue on Github. I will respond as soon as possible to resolve the issue.
