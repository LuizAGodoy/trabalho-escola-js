import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiox from "axios";
import "../css/Login.css";
import logo from "../assets/img/logo.png";
import {
  Stack,
  Form,
  Button,
  Row,
  Container,
  Navbar,
  Nav,
  Image,
} from "react-bootstrap";

const Register = ({ setLogoutUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState("");
  const [anoLetivo, setAnoLetivo] = useState("");
  const [error, setError] = useState("");
  const [alunoR, setAlunoR] = useState("");
  const [aluno, setAluno] = useState("");
  let history = useHistory();

  const handleChange = (event) => {
    setTipo(event.target.value);
  };

  const register = (e) => {
    e.preventDefault();
    axiox
      .post("http://localhost:5000/api/auth/register", {
        email,
        password,
        tipo,
        nome,
        anoLetivo,
        alunoR: alunoR
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
            user: response.data.access_user,
          })
        );
        setError("");
        setEmail("");
        setPassword("");
        setTipo("");
        setNome("");
        setAnoLetivo("");
        setLogoutUser(false);
        if (tipo === "Professor") {
          history.push("/professor");
        }
        if (tipo === "Aluno") {
          history.push("/aluno");
        }
        if (tipo === "Secretaria") {
          history.push("/secretaria");
        }
        if (tipo === "Responsavel") {
          history.push("/responsavel");
        }
      })
      .catch((error) => setError(error.response));
  };

  React.useEffect(() => {
    axiox
      .get("http://localhost:5000/api/alunos")
      .then((response) => {
        console.log("response", response.data);
        setAluno(response.data);
      })
      .catch((error) => setError(error.response.data.message));
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Nav.Link href="/">
              <Image src={logo} width="50" height="30" /> Escola
            </Nav.Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Stack gap={2} className="col-md-5 mx-auto pt-5">
        <Form noValidate autoComplete="off" onSubmit={register}>
          <h2>Inscreva-se</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="nome"
              id="nome"
              label="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                label="Aluno"
                inline
                checked={tipo === "Aluno"}
                onChange={handleChange}
                value="Aluno"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <Form.Check
                inline
                label="Professor"
                checked={tipo === "Professor"}
                onChange={handleChange}
                value="Professor"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <Form.Check
                inline
                label="Secretaria"
                checked={tipo === "Secretaria"}
                onChange={handleChange}
                value="Secretaria"
                inputProps={{ "aria-label": "primary checkbox" }}
              />

              <Form.Check
                inline
                label="Responsavel"
                checked={tipo === "Responsavel"}
                onChange={handleChange}
                value="Responsavel"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Form.Group>
          </Row>

          {tipo === "Aluno" && (
            <Form.Group controlId="formBasic">
              <Form.Label>Ano Letivo</Form.Label>
              <Form.Control
                as="select"
                value={anoLetivo}
                onChange={(e) => setAnoLetivo(e.target.value)}
              >
                <option>Selecione</option>
                <option>1º Ano</option>
                <option>2º Ano</option>
                <option>3º Ano</option>
              </Form.Control>
            </Form.Group>
          )}

          {tipo === "Responsavel" && (
            <Form.Group controlId="formBasic">
              <Form.Label>Aluno</Form.Label>
              <Form.Control
                as="select"
                value={alunoR}
                onChange={(e) => setAlunoR(e.target.value)}
              >
                <option>Selecione</option>
                {aluno.map((aluno) => (
                  <option key={aluno.email}>{aluno.email}</option>
                ))}
              </Form.Control>
            </Form.Group>
          )}

          <div className="d-grid gap-2 py-3">
            <Button variant="primary" type="submit">
              Registrar
            </Button>
          </div>
        </Form>
      </Stack>
    </div>
  );
};

export default Register;
