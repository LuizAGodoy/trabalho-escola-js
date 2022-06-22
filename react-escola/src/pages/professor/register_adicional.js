import axios from "axios";
import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const RegisterProvaAdd = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const [email, setEmail] = React.useState(null);
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [nome, setNome] = React.useState(null);
  const [valor, setValor] = React.useState(null);

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

    axios
      .post(`http://localhost:5000/api/alunos/${email}/materiaAdicional`, {
        nome,
        valor,
      })
      .then((response) => {
        console.log("response", response);
        setNome("");
        setValor("");
        // reload page
        window.location.reload();
      })
      .catch((error) => setError(error.response.data.message));
  };

  if (!post) return null;

  return (
    <Container className="py-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Aluno</Form.Label>
          <Form.Control
            required
            as="select"
            onChange={(e) => setEmail(e.target.value)}
          >
            <option>Selecione o Aluno</option>
            {post.map((post) => (
              <option>{post.email}</option>
            ))}
          </Form.Control>
          <br></br>
        </Form.Group>

        <Form.Group>
        <Form.Label>Adicionar Materia</Form.Label>
          <Form.Control
            required
            placeholder="Nome da Material"
            className="mb-2"
            type="text"
            id="nome"
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Form.Control
            required
            placeholder="Valor da material"
            type="text"
            label="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />

          
        </Form.Group>
        <div className="d-grid gap-2 py-2">
        <Button variant="primary" type="submit">
          Enviar
        </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterProvaAdd;
