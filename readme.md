# My Time Tracker using Laravel (5.3) and AngularJS (1.5.8)
![Sandbox](/resources/images/sandbox-banner.jpg)

This is just a simple project where I play around with a RESTful API comprised of both Laravel and AngularJS.
As an example of this combination a Time-Tracker is built, in which a user can log in to set a start and end time
for an activity while also being able to see and comment other user's activities.  

For this purpose an equally simple relational-schema is used to demonstrate this application:

![ERM Comment Time](/resources/images/ERM_Comment_Time.jpg)

A preview of current state of the app can be seen [here](https://warm-springs-63074.herokuapp.com/)

## Setting up the environment:
* Most of the configurations I have done here are listed on my first [sandbox application](https://github.com/CouchCat/laravel-crud-sandbox)
* NPM dependencies used here:
    * **npm install angular@1.5.8 moment angular-ui-bootstrap angular-resource angular-animate angular-sanitize --save**
* Add node module dependencies to **"resources/assets/app.js"** by requiring them:
```
  ...
  require('./bootstrap');
  require('angular');
  require('angular-ui-bootstrap')
  require('angular-resource');
  require('angular-animate');
  require('angular-sanitize');
  require('moment');
  ...
```

# Workflow:

* Set up the project environment as mentioned above
* Prepare the database with migration files, models and seeds
* Make a test page just to test the installed dependencies
* Configure Heroku and deploy to it to test database compatibility
* Make a homepage to prototype the layout and apply the dependencies on it
* Implement the first part of the RESTful Api in which some seed data are shown
* Make sure it also works in Heroku again
* Don't forget to also seed to the database in Heroku!
    * **heroku run php artisan db:seed**

## Notes:
* When creating relationships it is advisable to add integrity to both the database through [migrations](https://laravel.com/docs/5.3/migrations) and the model through [Eloquent](https://laravel.com/docs/5.3/eloquent-relationships).
* Heroku config key: base64:T4EGVv1aGXeeGHvukWXraT4374CsrGdgLBn7mCM90wA=
* Heroku Database name:  postgresql-fitted-10358
* Heroku app URL: warm-springs-63074

***

# Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, queueing, and caching.

Laravel is accessible, yet powerful, providing tools needed for large, robust applications. A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.

## Official Documentation

Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](http://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
