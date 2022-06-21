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

  const notasTurma = () => {
    window.location.href = "/secretaria/notas-turma";
  };

  const faltaTurma = () => {
    window.location.href = "/secretaria/falta-turma";
  };

  const dataProva = () => {
    window.location.href = "/aluno/data-prova";
  };


  const registerProva = () => {
    window.location.href = "/professor/data-prova";
  };

  const registrarNota = () => {
    window.location.href = "/professor/register-nota";
  };

  const teste = () => {
    window.location.href = "/registrar"
  }

  const dataMatsecre = () => {
    window.location.href = "/responsavel/mateadd";
  };
  
   const dataMatsecre = () => {
    window.location.href = "/responsavel/data-prova";
  };
  
     const dataMatsecre = () => {
    window.location.href = "/responsavel/notas";
  };

  const dataMatadd = () => {
    window.location.href = "/aluno/mat-add";
  };

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
                <Dropdown.Item onClick={dataProva}>Data da Prova</Dropdown.Item>
                <Dropdown.Item onClick={teste}>Registrar Materia Add</Dropdown.Item>
                
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
  ) : isLogin.user.tipo === "Responsavel" ? (
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
                <Dropdown.Item onClick={dataMatsecre}>Materia Adicional</Dropdown.Item>
                <Dropdown.Item onClick={notasAlunos}>
                  Notas
                </Dropdown.Item>
                <Dropdown.Item onClick={dataMatadd}>Registrar Matéria Adicional</Dropdown.Item>
                <Dropdown.Item onClick={dataProva}>Data da Prova</Dropdown.Item>
                <Dropdown.Item onClick={dataMatadd}>Materia Adicional</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Navbar.Brand>
          <Navbar.Brand>
            <Nav.Link href="/responsavel">
              <Image src={logo} width="50" height="30" /> {isLogin.user.tipo}{" "}
              {isLogin.user.nome}
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
  ): (
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
