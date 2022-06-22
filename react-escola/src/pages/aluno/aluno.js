import React from "react";
import { Container} from "react-bootstrap";
const Aluno = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.email;
  const anoLetivo = isLoginTrue.user.anoLetivo;

  return (
    <Container>
      <h1>Bem Vindo!</h1>
      <h2>{login}</h2>
      <p> Ano Letivo: {anoLetivo}</p>
    </Container>
  );
};

export default Aluno;
