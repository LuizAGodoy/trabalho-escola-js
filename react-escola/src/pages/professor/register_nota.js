import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
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
  const [nota5, setNota5] = React.useState(null);
  const [nota6, setNota6] = React.useState(null);
  const [nota7, setNota7] = React.useState(null);
  const [nota8, setNota8] = React.useState(null);
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
        nota5,
        nota6,
        nota7,
        nota8,
      })
      .then((response) => {
        console.log("response", response);
        setNota1("");
        setNota2("");
        setNota3("");
        setNota4("");
        setNota5("");
        setNota6("");
        setNota7("");
        setNota8("");
        window.location.reload();
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
                  type="number"
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
                  type="number"
                    id="nota4"
                    label="Nota 4"
                    value={nota4}
                    onChange={(e) => setNota4(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>Historia</td>
                <td>
                  <Form.Control
                  placeholder="Nota de 0 a 100"
                  size="sm"
                  type="number"
                    id="nota5"
                    label="Nota 5"
                    value={nota5}
                    onChange={(e) => setNota5(e.target.value)}
                  />
                </td>
                <td>
                  <Form.Control
                  placeholder="Nota de 0 a 100"
                  size="sm"
                  type="number"
                    id="nota6"
                    label="Nota 6"
                    value={nota6}
                    onChange={(e) => setNota6(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>Artes</td>
                <td>
                  <Form.Control
                  placeholder="Nota de 0 a 100"
                  size="sm"
                  type="number"
                    id="nota7"
                    label="Nota 7"
                    value={nota7}
                    onChange={(e) => setNota7(e.target.value)}
                  />
                </td>
                <td>
                  <Form.Control
                  placeholder="Nota de 0 a 100"
                  size="sm"
                    type="number" 
                    id="nota8"
                    label="Nota 8"
                    value={nota8}
                    onChange={(e) => setNota8(e.target.value)}
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
    </Container>
  );
};

export default RegisterNota;
