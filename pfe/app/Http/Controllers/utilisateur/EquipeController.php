<?php

namespace App\Http\Controllers\utilisateur;

use App\Model\responsable\radio\equipe;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EquipeController extends Controller
{
    public function equipe(equipe $equipe){
        $equipes= $equipe::all();
        return view('utilisateur.layoutstest.equipestest',compact('equipes'));
        return view('utilisateur.layoutstest.equipestest',compact('equipe'));
    }
}
