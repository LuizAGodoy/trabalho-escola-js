import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Header from "../components/Header";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Aluno from "../pages/aluno/aluno";
import NotasAlunos from "../pages/aluno/notas_aluno";
import NotasTurma from "../pages/secretaria/notas_turma";
import FaltaTurma from "../pages/secretaria/falta_turma";
import DataProva from "../pages/aluno/data_prova";
import DataMatadd from "../pages/aluno/notas_aluno_mat_add";
import RegisterNota from "../pages/professor/register_nota";
import RegisterProvaAdd from "../pages/professor/register_adicional";
import Secretaria from "../pages/secretaria/secretaria";
import Responsavel from "../pages/responsavel/responsavel";
import Professor from "../pages/professor/professor";
import Mensagem from "../components/Mensagem";
import NotasAlunosResp from "../pages/responsavel/notas_aluno_resp";


function Router() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home logoutUser={logoutUser} />
          </Route>


          {/* login e rigister */}
          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>

          <Route path="/register">
            <Register setLogoutUser={setLogoutUser} />
          </Route>

          {/* Professor */}
          <Route exact path="/professor">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Professor logoutUser={logoutUser} />
            <Mensagem />
          </Route>

          <Route exact path="/professor/register-nota">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <RegisterNota logoutUser={logoutUser} />
          </Route>

          <Route exact path="/professor/data-prova">
          <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <DataProva logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          </Route>

          <Route exact path="/professor/registrar">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <RegisterProvaAdd />
          </Route>



          {/* aluno */}
          <Route exact path="/aluno">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Aluno logoutUser={logoutUser} />
            <Mensagem />
          </Route>

          <Route exact path="/aluno/notas">
          <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <NotasAlunos logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          </Route>

          <Route exact path="/aluno/data-prova">
          <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <DataProva logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          </Route>

          <Route exact path="/aluno/mat-add">
          <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <DataMatadd logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          </Route>

          {/* Secretaria */}
          <Route exact path="/secretaria">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Secretaria logoutUser={logoutUser} />
            <Mensagem />
          </Route>

          <Route exact path="/secretaria/notas-turma">
          <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <NotasTurma logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          </Route>

          <Route exact path="/secretaria/falta-turma">
          <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <FaltaTurma logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          </Route>

          {/* Responsaveis */}

          <Route exact path="/responsavel">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Responsavel logoutUser={logoutUser} />
            <Mensagem />
          </Route>

          <Route exact path="/responsavel/notas-aluno">
          <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <NotasAlunosResp logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          </Route>

          <Route exact path="/responsavel/falta-turma">
          <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <FaltaTurma logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
