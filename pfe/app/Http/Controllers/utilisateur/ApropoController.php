<?php

namespace App\Http\Controllers\utilisateur;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApropoController extends Controller
{
    public function index(){
        return view('utilisateur.apropos');
    }
}
