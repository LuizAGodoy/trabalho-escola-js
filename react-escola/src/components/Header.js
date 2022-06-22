import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Nav,
  Image,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import logo from "../assets/img/logo.png";
import "../css/Header.css";

const Header = ({ logoutUser, setLogoutUser }) => {
  const [login, setLogin] = useState("");
  const isLogin = JSON.parse(localStorage.getItem("login"));
  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, [logoutUser]);

  const logout = () => {
    localStorage.removeItem("login");
    setLogoutUser(true);
    window.location.href = "/";
  };

  const notasAlunos = () => {
    window.location.href = "/aluno/notas";
  };

  const dataMatadd = () => {
    window.location.href = "/aluno/mat-add";
  };

  const dataProva = () => {
    window.location.href = "/aluno/data-prova";
  };

  const notasTurma = () => {
    window.location.href = "/secretaria/notas-turma";
  };

  const faltaTurma = () => {
    window.location.href = "/secretaria/falta-turma";
  };

  const notasTurmaresp = () => {
    window.location.href = "/responsavel/notas-turma";
  };

  const faltaTurmaresp = () => {
    window.location.href = "/responsavel/falta-turma";
  };



  const dataProvaProfessor = () => {
   window.location.href = "/professor/data-prova";
  }


  const registerProva = () => {
    window.location.href = "/professor/data-prova";
  };

  const registrarNota = () => {
    window.location.href = "/professor/register-nota";
  };

  const registrarMateriaAdd = () => {
    window.location.href = "/professor/registrar"
  }


  

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let value = localStorage.getItem("login");
      try {
        value = JSON.parse(value);
        setLogin(value);
      } catch (e) {
        setLogin("");
      }
    }
  };

  return isLogin.user.tipo === "Professor" ? (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#nav">
            <InputGroup align="start">
              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                align="start"
                title="Menu"
              >
                <Dropdown.Item onClick={registerProva}>
                  Registrar Prova
                </Dropdown.Item>
                <Dropdown.Item onClick={registrarNota}>Registrar Notas</Dropdown.Item>
                <Dropdown.Item onClick={dataProvaProfessor}>Data da Prova</Dropdown.Item>
                <Dropdown.Item onClick={registrarMateriaAdd}>Registrar Materia Add</Dropdown.Item>
                
              </DropdownButton>
            </InputGroup>
          </Navbar.Brand>
          <Navbar.Brand>
            <Nav.Link href="/professor">
              <Image src={logo} width="50" height="30" />
            </Nav.Link>
          </Navbar.Brand>
          <Container>
            <Navbar.Brand>
              {isLogin.user.nome}
            </Navbar.Brand>
          </Container>

          <Navbar.Brand className="tipocss">
              {isLogin.user.tipo}
          </Navbar.Brand>

          <Nav className="mr-auto">
            <InputGroup align="end">
              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Nav>
        </Container>
      </Navbar>
    </div>
  ) : isLogin.user.tipo === "Aluno" ? (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#nav">
            <InputGroup align="start">
              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                align="start"
                title="Menu"
              >
                <Dropdown.Item onClick={notasAlunos}>
                  Minhas Notas
                </Dropdown.Item>
                <Dropdown.Item onClick={dataProva}>Data da Prova</Dropdown.Item>
                <Dropdown.Item onClick={dataMatadd}>Materia Adicional</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Navbar.Brand>
          <Navbar.Brand>
            <Nav.Link href="/aluno">
              <Image src={logo} width="50" height="30" /> {isLogin.user.tipo}{" "}
              {isLogin.user.nome}
              {isLogin.user.anoLetivo}
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <InputGroup align="end">
              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Nav>
        </Container>
      </Navbar>
    </div>
  ) : isLogin.user.tipo === "Secretaria" ? (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#nav">
            <InputGroup align="start">
              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                align="start"
                title="Menu"
              >
                <Dropdown.Item>Secretaria</Dropdown.Item>
                <Dropdown.Item onClick={notasTurma}>
                  Notas Turma
                </Dropdown.Item>
                <Dropdown.Item onClick={faltaTurma}>
                  Faltas Turma
                </Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Navbar.Brand>
          <Navbar.Brand>
            <Image src={logo} width="50" height="30" /> {isLogin.user.tipo}{" "}
            {isLogin.user.nome}
          </Navbar.Brand>
          <Nav className="mr-auto">
            <InputGroup align="end">
              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Nav>
        </Container>
      </Navbar>
    </div>
  ) : 
  isLogin.user.tipo === "Responsavel" ? (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#nav">
            <InputGroup align="start">
              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                align="start"
                title="Menu"
              >
                <Dropdown.Item>Responsavel</Dropdown.Item>
                <Dropdown.Item onClick={notasTurmaresp}>
                  Notas do Aluno
                </Dropdown.Item>
                <Dropdown.Item onClick={faltaTurmaresp}>
                  Faltas do Aluno
                </Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Navbar.Brand>
          <Navbar.Brand>
            <Image src={logo} width="50" height="30" /> {isLogin.user.tipo}{" "}
            {isLogin.user.nome}
          </Navbar.Brand>
          <Nav className="mr-auto">
            <InputGroup align="end">
              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Nav>
        </Container>
      </Navbar>
    </div>
  ) :(
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Nav.Link href="/">
              <Image src={logo} width="50" height="30" /> Escola
            </Nav.Link>
            <h1>{localStorage.setItem}</h1>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <InputGroup align="end">
              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
