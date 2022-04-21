<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomePageController extends Controller
{
    public function ar()
    {
        return view('home.ar.index');
    }

    public function en()
    {
        return view('home.en.index');
    }
}
