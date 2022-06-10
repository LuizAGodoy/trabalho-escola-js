import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, ListGroup, Table } from "react-bootstrap";
import '../../css/index.css';

const RegisterNota = () => {
  const login = JSON.parse(localStorage.getItem("login"));

  // pegar nome do LocalStorage
  const nome = login.user.nome;

  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [nota1, setNota1] = React.useState(null);
  const [nota2, setNota2] = React.useState(null);
  const [nota3, setNota3] = React.useState(null);
  const [nota4, setNota4] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [validated, setValidated] = useState(false);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/alunos")
      .then((response) => {
        console.log("response", response.data);
        setPost(response.data);
      })
      .catch((error) => setError(error.response.data.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    axios
      .post(`http://localhost:5000/api/alunos/${email}/notas`, {
        nota1,
        nota2,
        nota3,
        nota4,
      })
      .then((response) => {
        console.log("response", response);
        setNota1("");
        setNota2("");
        setNota3("");
        setNota4("");
      })
      .catch((error) => setError(error.response.data.message));


    setValidated(true);
  };

  if (!post) return null;

  return (
    <Container className="py-5">
      <Form validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Notas</Form.Label>
          <Form.Control required as="select" onChange={(e) => setEmail(e.target.value)}>
            <option>Selecione o Aluno</option>
            {post.map((post) => (
              <option>{post.email}</option>
            ))}
          </Form.Control>
          <br></br>

          <Table striped bordered hover>
            <thead className="py-5">
              <tr>
                <th>Disciplina</th>
                <th>AVALIAÇÃO 1</th>
                <th>AVALIAÇÃO 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Portugues</td>
                <td>
                  <Form.Control
                  placeholder="Nota de 0 a 100"
                  size="sm"
                    type="number"
                    id="nota1"
                    label="Nota 1"
                    value={nota1}
                    onChange={(e) => setNota1(e.target.value)}
                  />
                </td>
                <td>
                  <Form.Control
                  placeholder="Nota de 0 a 100"
                  size="sm"
                    type="number"
                    id="nota2"
                    label="Nota 2"
                    value={nota2}
                    onChange={(e) => setNota2(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>Matematica</td>
                <td>
                  <Form.Control
                  placeholder="Nota de 0 a 100"
                  size="sm"
                    type="nota3"
                    id="nota3"
                    label="Nota 3"
                    value={nota3}
                    onChange={(e) => setNota3(e.target.value)}
                  />
                </td>
                <td>
                  <Form.Control
                  placeholder="Nota de 0 a 100"
                  size="sm"
                    type="nota4"
                    id="nota4"
                    label="Nota 4"
                    value={nota4}
                    onChange={(e) => setNota4(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Form.Group>

        <Button variant="primary" type="submit" >
          Enviar
        </Button>
      </Form>

      {/* <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Lista de Alunos
        </ListGroup.Item>
        {post.map((post) => (
          <ListGroup.Item as="li">{post.nome}</ListGroup.Item>
        ))}
      </ListGroup>

      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <h2>Inscreva-se</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nota1</Form.Label>
            <Form.Control
              type="nota1"
              id="nota1"
              label="Nota 1"
              value={nota1}
              onChange={(e) => setNota1(e.target.value)}
            />
                        <Form.Control
              type="nota2"
              id="nota2"
              label="Nota 2"
              value={nota2}
              onChange={(e) => setNota2(e.target.value)}
            />
                                    <Form.Control
              type="nota3"
              id="nota3"
              label="Nota 3"
              value={nota3}
              onChange={(e) => setNota3(e.target.value)}
            />
                                    <Form.Control
              type="nota4"
              id="nota4"
              label="Nota 4"
              value={nota4}
              onChange={(e) => setNota4(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">Enviar</Button>
      </Form> */}
    </Container>
  );
};

export default RegisterNota;
