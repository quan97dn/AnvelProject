<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* ================================ Routers Angular ======================================== */

Route::get('/', 'AngularController@serve');

Route::get('/home', 'AngularController@serve');

Route::get('/users', 'AngularController@serve');

Route::get('/usersadd', 'AngularController@serve');

/* ================================ Routers API Laravel ======================================== */


//Route Control (Admin/Users)
Route::group(['namespace' => 'Admin'], function() {

  Route::get('/getlistuser', ['as' => 'users.getListUser', 'uses' => 'UsersController@getListUser']);

});

