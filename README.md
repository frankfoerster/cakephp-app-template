# cakephp-app-template
[![Build Status](https://img.shields.io/travis/frankfoerster/cakephp-app-template/master.svg?style=flat-square)](https://travis-ci.org/frankfoerster/cakephp-app-template)
[![License](https://img.shields.io/packagist/l/frankfoerster/cakephp-app-template.svg?style=flat-square)](https://packagist.org/packages/frankfoerster/cakephp-app-template)

A customized app template to start new CakePHP 3.x projects.

Setup includes the following tool/build chain for dev and production:

- grunt
- requirejs
- bower
- less
- backbone + marionette

and these CakePHP plugins:

- [frankfoerster/cakephp-asset](https://github.com/frankfoerster/cakephp-asset)
- [frankfoerster/cakephp-environment](https://github.com/frankfoerster/cakephp-environment)

## Installation

1. Download [Composer](http://getcomposer.org/doc/00-intro.md) or update `composer self-update`.
2. Run `php composer.phar create-project --prefer-dist frankfoerster/cakephp-app-template [app_name]`.

If Composer is installed globally, run
```bash
composer create-project --prefer-dist frankfoerster/cakephp-app-template [app_name]
```

You should now be able to visit the path to where you installed the app and see
the setup traffic lights.

## Configuration

Read and edit `config/Environment/config.php` and setup your environment specific 'Datasources', 'Email' configurations and any other
configuration in `config/Environment/environment.xyz.php`.

For more details take a look at the [Environment plugin documentation](https://github.com/frankfoerster/cakephp-environment).
