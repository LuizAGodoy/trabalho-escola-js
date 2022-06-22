import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  ListGroup,
  Table,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
const Mensagem = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.email;
  const nome = isLoginTrue.user.nome;
  const [email, setEmail] = React.useState(null);
  const [post, setPost] = React.useState(null);
  const [msg, setMsg] = React.useState(null);
  
  const [error, setError] = React.useState(null);
  const [msgR, setMsgR] = React.useState(null);
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/todos")
      .then((response) => {
        console.log("response", response.data.users);
        setPost(response.data.users);
      })
      .catch((error) => setError(error.response.data.message));
  }, []);

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/${login}/msg`)
      .then((response) => {
        console.log("response", response.data);
        setMsgR(response.data);
      })
      .catch((error) => setError(error.response.data.message));
  }, []);

  if (!msgR) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/api/${email}/msg`, {
        msg,
        emailD: nome,
      })
      .then((response) => {
        console.log("response", response);
        setMsg("");
      })
      .catch((error) => setError(error.response.data.message));
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>

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

              <Form.Control
                required
                placeholder="Digite a mensagem"
                size="sm"
                type="text"
                label="msg"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>

          {msgR.length === 0 ? (
            <h1>Não há mensagens</h1>
          ) : (
            <ListGroup>
              {msgR.map((msgR) => (
                <div>
                                  <ListGroup.Item>{msgR.msg}</ListGroup.Item>
                <ListGroup.Item>{msgR.emailD}</ListGroup.Item>
                </div>
              ))}
            </ListGroup>
          )}

      </Popover.Body>
    </Popover>
  );

  return (
    <Container>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">Click me to see</Button>
      </OverlayTrigger>
    </Container>
  );
};

export default Mensagem;
