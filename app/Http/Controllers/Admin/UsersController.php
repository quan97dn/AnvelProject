<?php

	namespace App\Http\Controllers\Admin;

	use Illuminate\Http\Request;
	use App\Http\Requests;
	use View;
	use App\User;
	use Redirect;
	use Input;
	use Image;
	use Hash;

	use App\Http\Controllers\Controller;




class UsersController extends Controller
{

    public function getListUser () {
    	return User::orderBy('id', 'DESC')->get();
    }

}
