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
  if (!post) return null;

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
      <Popover.Header as="h3">Chat</Popover.Header>
      <Popover.Body class="text-center">

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label class="mb-2">Escolha a Pessoa</Form.Label>
              <Form.Control
                required
                as="select"
                onChange={(e) => setEmail(e.target.value)}
                class="p"
              >
                <option>Selecione o Pessoa que deseja falar: </option>
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
                class="mt-3"
              />
            </Form.Group>

            <Button variant="primary" type="submit" class="btn btn-primary mb-1 mt-4" >
              Enviar
            </Button>
          </Form>

          {msgR.length === 0 ? (
            <h4>Não há mensagens</h4>
          ) : (
            <ListGroup>
              {msgR.map((msgR) => (
                <div>
                <ListGroup.Item>{msgR.msg} {''}</ListGroup.Item>
                
                <ListGroup.Item>{'Mensagem de:'}{msgR.emailD}</ListGroup.Item>
                </div>
              ))}
            </ListGroup>
          )}

      </Popover.Body>
    </Popover>
  );

  return (
    <Container class="text-center">
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success" class=" text-center btn btn-primary mb-1 col-sm-1">CHAT</Button>
      </OverlayTrigger>
    </Container>
  );
};

export default Mensagem;
