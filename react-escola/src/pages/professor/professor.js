import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, ListGroup, Table } from "react-bootstrap";
const Professor = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.email;
  const anoLetivo = isLoginTrue.user.anoLetivo;
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
      <h2>{login}</h2>

    </Container>
  );
};

export default Professor;