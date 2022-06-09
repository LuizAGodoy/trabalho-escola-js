import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, ListGroup, Table } from "react-bootstrap";
const NotasAlunos = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.email;

  return (
    <Container>
      <h1>Bem Vindo</h1>
      <p>{login}</p>
    </Container>
  );
};

export default NotasAlunos;
