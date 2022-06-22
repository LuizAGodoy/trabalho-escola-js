import React from "react";
import { Container } from "react-bootstrap";
const Secretaria = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.email;

  return (
    <Container>
      <h1>Bem Vindo!</h1>
      <h2>{login}</h2>
    </Container>
  );
};

export default Secretaria;
