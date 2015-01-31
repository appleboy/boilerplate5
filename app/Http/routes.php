<?php

/**
 * @api {get} / Welcome Page
 * @apiName WelcomePage
 * @apiGroup Home
 * @apiVersion 0.1.0
 * @apiDescription Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu arcu scelerisque, mattis sapien sed, dapibus risus. Integer finibus diam sit amet semper imperdiet. Vivamus venenatis elit vitae venenatis dictum. Vivamus ac turpis at purus placerat iaculis et ut purus.
 *
 */
Route::get('/', 'WelcomeController@index');

/**
 * @api {get} /home Home Page
 * @apiName HomePage
 * @apiGroup User
 * @apiVersion 0.1.0
 * @apiDescription Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu arcu scelerisque, mattis sapien sed, dapibus risus. Integer finibus diam sit amet semper imperdiet. Vivamus venenatis elit vitae venenatis dictum. Vivamus ac turpis at purus placerat iaculis et ut purus.
 *
 */
Route::get('home', 'HomeController@index');

/**
 * @api {get} /auth User Auth
 * @apiName UserAuth
 * @apiGroup User
 * @apiVersion 0.1.0
 * @apiDescription Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu arcu scelerisque, mattis sapien sed, dapibus risus. Integer finibus diam sit amet semper imperdiet. Vivamus venenatis elit vitae venenatis dictum. Vivamus ac turpis at purus placerat iaculis et ut purus.
 *
 */

/**
 * @api {get} /password Forget Password
 * @apiName ForgetPassword
 * @apiGroup User
 * @apiVersion 0.1.0
 * @apiDescription Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu arcu scelerisque, mattis sapien sed, dapibus risus. Integer finibus diam sit amet semper imperdiet. Vivamus venenatis elit vitae venenatis dictum. Vivamus ac turpis at purus placerat iaculis et ut purus.
 *
 */
Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
