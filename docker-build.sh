#YOU MUST CHECKOUT PROJECT AT:
## /var/www/demo_laravel_react/

##PHP 8.1
sudo apt install software-properties-common && sudo add-apt-repository ppa:ondrej/php -y
sudo apt update
sudo apt install php8.1 php8.1-xml php8.1-curl -y


#Maybe you need do
##Redis: php artisan sail:install
##Postgres: php artisan sail:install

## Docker With Sail:
cd cherrystar-back-end/ && ./vendor/bin/sail build --no-cache && ./vendor/bin/sail up
