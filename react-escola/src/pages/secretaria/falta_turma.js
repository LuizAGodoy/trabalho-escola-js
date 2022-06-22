import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, ListGroup, Table } from "react-bootstrap";
import '../../css/index.css';

const FaltaTurma = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.email;
  const [arrayFalta, setarrayFalta] = useState([]);
  React.useEffect(() => {
  const nomeFalta ='{"nome":"Ana", "faltaportugues":2, "faltamatematica":5, "faltahistoria":8, "faltaartes":11, "faltaadicional":2}';
  const nomeFalta1 ='{"nome":"Roberto", "faltaportugues":5, "faltamatematica":7, "faltahistoria":0, "faltaartes":4, "faltaadicional":3}';
  const nomeFalta2 ='{"nome":"Carlos", "faltaportugues":2, "faltamatematica":4, "faltahistoria":8, "faltaartes":4, "faltaadicional":0}';
  const nomeFalta3 ='{"nome":"Polyanna", "faltaportugues":5, "faltamatematica":5, "faltahistoria":2, "faltaartes":8, "faltaadicional":0}';
  const nomeFalta4 ='{"nome":"Luiz", "faltaportugues":12, "faltamatematica":14, "faltahistoria":0, "faltaartes":0, "faltaadicional":1}';
  const nomeFalta5 ='{"nome":"Adelaide", "faltaportugues":7, "faltamatematica":5, "faltahistoria":0, "faltaartes":0, "faltaadicional":2}';
  const teste = JSON.parse(nomeFalta);
  const teste1 = JSON.parse(nomeFalta1);
  const teste2 = JSON.parse(nomeFalta2);
  const teste3 = JSON.parse(nomeFalta3);
  const teste4 = JSON.parse(nomeFalta4);
  const teste5 = JSON.parse(nomeFalta5);
  
  setarrayFalta(arrayFalta => [...arrayFalta, teste, teste1, teste2, teste3, teste4, teste5]);
  }, []);
return (
<div className="py-5 container">
      <ListGroup>
        {arrayFalta.map((arrayFalta)=>(
        <Table striped bordered hover>
          <caption class="h3">{arrayFalta.nome}</caption>
          <thead>
	          <tr>
              <th>Matéria</th>
              <th>Faltas</th>
              <th>Aprovação</th>
	          </tr>
	        </thead>
          <tbody>
            <tr>
              <td>Português</td>
              <td>{arrayFalta.faltaportugues}</td>
            <td>
                  {(parseInt(arrayFalta.faltaportugues)) <= 10 ? "Aprovado": "Reprovado"}
            </td>
            </tr>
            <tr>
              <td>Matemática</td>
              <td>{arrayFalta.faltamatematica}</td>
              <td>
                  {(parseInt(arrayFalta.faltaportugues)) <= 10 ? "Aprovado": "Reprovado"}
              </td>
            </tr>
            <tr>
              <td>Historia</td>
              <td>{arrayFalta.faltahistoria}</td>
              <td>{(parseInt(arrayFalta.faltahistoria)) <= 10 ? "Aprovado": "Reprovado"}</td>
            </tr>
            <tr>
              <td>Artes</td>
              <td>{arrayFalta.faltaartes}</td>
              <td>{(parseInt(arrayFalta.faltaartes)) <= 10 ? "Aprovado": "Reprovado"}</td>
            </tr>
            <tr>
              <td>Matéria adicional</td>
              <td>{arrayFalta.faltaadicional}</td>
              <td>{(parseInt(arrayFalta.faltaadicional)) <= 10 ? "Aprovado": "Reprovado"}</td>
            </tr>
          </tbody>
        </Table>
        ))}
      </ListGroup>
      </div>
)
};
export default FaltaTurma;