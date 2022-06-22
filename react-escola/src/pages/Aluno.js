import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, ListGroup, Table } from "react-bootstrap";
const Alunos = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.email;
  const [email, setEmail] = React.useState(null);
  const [post, setPost] = React.useState(null);
  const [msg, setMsg] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/alunos")
      .then((response) => {
        console.log("response", response.data);
        setPost(response.data);
      })
      .catch((error) => setError(error.response.data.message));
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    

  //   axios
  //     .post(`http://localhost:5000/api/${email}/msg`, {
  //       msg,
  //     })
  //     .then((response) => {
  //       console.log("response", response);
  //       setMsg("");
  //     })
  //     .catch((error) => setError(error.response.data.message));

  // };

  return (
    <Container>
      <h1>Bem Vindo!</h1>
      <p>{login}</p>

      {/* <Form onSubmit={handleSubmit}> */}
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Aluno</Form.Label>
          <Form.Control required as="select" onChange={(e) => setEmail(e.target.value)}>
            <option>Selecione o Aluno</option>
            {post.map((post) => (
              <option>{post.email}</option>
            ))}
          </Form.Control>
        </Form.Group>
        

        <Button variant="primary" type="submit" >
          Enviar
        </Button>
      {/* </Form> */}


    </Container>
  );
};

export default Alunos;
