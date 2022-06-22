import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, ListGroup, Table } from "react-bootstrap";
const Aluno = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.email;
  const anoLetivo = isLoginTrue.user.anoLetivo;
  const [email, setEmail] = React.useState(null);
  const [post, setPost] = React.useState(null);
  const [msg, setMsg] = React.useState(null);
  const [msgR, setMsgR] = React.useState(null);
  const [error, setError] = React.useState(null);

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

  return (
    <Container>
      <h1>Bem Vindo!</h1>
      <h2>{login}</h2>
      <p> Ano Letivo: {anoLetivo}</p>

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
    </Container>
  );
};

export default Aluno;
