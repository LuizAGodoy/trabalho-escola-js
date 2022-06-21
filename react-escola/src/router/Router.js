import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Header from "../components/Header";
import Register from "../pages/Register";
import RegisterProva from "../pages/professor/register_prova";
import ListaMaterias from "../pages/ListaMaterias";
import Home from "../pages/Home";
import Aluno from "../pages/Aluno";
import NotasAlunos from "../pages/aluno/notas_aluno";
import DataProva from "../pages/aluno/data_prova";
import DataMatadd from "../pages/aluno/notas_aluno_mat_add";
import RegisterNota from "../pages/professor/register_nota";
import RegisterProvaAdd from "../pages/professor/register_adicional";
import DataMatsecre from "../pages/responsavel/mat_add";
import Teste from "../pages/professor/teste";


function Router() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home logoutUser={logoutUser} />
          </Route>
          <Route exact path="/professor/register-nota">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <RegisterNota logoutUser={logoutUser} />
          </Route>
          <Route exact path="/professor">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Aluno logoutUser={logoutUser} />
          </Route>
          <Route exact path="/aluno">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Aluno logoutUser={logoutUser} />
          </Route>
          <Route exact path="/secretaria">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Aluno logoutUser={logoutUser} />
          </Route>

          <Route exact path="/responsavel">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Aluno logoutUser={logoutUser} />
          </Route>

          <Route exact path="/responsavel/mateadd">
          <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <DataMatsecre logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
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


          <Route exact path="/professor/data-prova">
          <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <RegisterProva />
          </Route>
          <Route exact path="/registrar">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <RegisterProvaAdd />
          </Route>
          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/register">
            <Register setLogoutUser={setLogoutUser} />
          </Route>
          <Route exact path="/listaMaterias">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <ListaMaterias logoutUser={logoutUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;