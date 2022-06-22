import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, ListGroup, Table } from "react-bootstrap";
import '../../css/index.css';
import '../../css/notas_turma.css';

const NotasTurma = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.email;
  const [error, setError] = React.useState(null);
  const [users, setUsers] = React.useState(null);
  const [arrayNotas, setarrayNotas] = useState([]);
  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/alunos`)
      .then((response) => {
         setUsers(response.data);
         console.log("lista de alunos", response.data);
        //buscaNotasAluno(response.data);
        response.data.forEach(aluno => {
          axios
          .get(`http://localhost:5000/api/alunos/${aluno.email}/notasAlunos`)
          .then((response) => {
            const nomeNota ='{"nome":"'+aluno.nome+'", "a1portugues":'+ response.data[0].a1portugues+', "a2portugues":'+ response.data[0].a2portugues+', "a1matematica":'+ response.data[0].a1matematica+', "a2matematica":'+ response.data[0].a1matematica+', "a1historia":'+ response.data[0].a2matematica+', "a2historia":'+ response.data[0].a2matematica+', "a1artes":'+ response.data[0].a2matematica+', "a2artes":'+ response.data[0].a2matematica+', "a1materiaadicional":'+ response.data[0].a2matematica+', "a2materiaadicional":'+ response.data[0].a2matematica+'}';
            const teste = JSON.parse(nomeNota);
      
            setarrayNotas(arrayNotas => [...arrayNotas, teste]);
          })
          .catch((error) => setError(error.response.data.message))
            });
      })
      .catch((error) => setError(error.response.data.message));
  }, []);
  console.log(arrayNotas);
  if (!users) return null;

  return (
    <div className="py-5">
      <ListGroup>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {arrayNotas.map((arrayNotas)=>(
        <Table striped bordered hover>
          <caption class="h3">{arrayNotas.nome}</caption>
          <thead>
          <tr>
            <th>Matéria</th>
            <th>Avaliação 1</th>
            <th>Avaliação 2</th>
            <th>Media</th>
            <th>Resultado</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Português</td>
            <td>{arrayNotas.a1portugues}</td>
            <td>{arrayNotas.a2portugues}</td>
            <td>
              {(parseInt(arrayNotas.a1portugues) + parseInt(arrayNotas.a2portugues)) / 2}
            </td>
            <td>
                    {(parseInt(arrayNotas.a1portugues) + parseInt(arrayNotas.a2portugues)) /
                      2 >=
                    6
                      ? "Aprovado"
                      : "Reprovado"}
            </td>
          </tr>
          <tr>
            <td>Matemática</td>
            <td>{arrayNotas.a1matematica}</td>
            <td>{arrayNotas.a2matematica}</td>
            <td>
              {(parseInt(arrayNotas.a1matematica) + parseInt(arrayNotas.a2matematica)) / 2}
            </td>
            <td>
              {(parseInt(arrayNotas.a1matematica) + parseInt(arrayNotas.a2matematica)) / 2 >= 6 ? "Aprovado": "Reprovado"}
            </td>
          </tr>
          <tr>
            <td>História</td>
            <td>{arrayNotas.a1historia}</td>
            <td>{arrayNotas.a2historia}</td>
            <td>
              {(parseInt(arrayNotas.a1historia) + parseInt(arrayNotas.a2historia)) / 2}
            </td>
            <td>
              {(parseInt(arrayNotas.a1historia) + parseInt(arrayNotas.a2historia)) / 2 >= 6 ? "Aprovado": "Reprovado"}
            </td>
          </tr>
          <tr>
            <td>Artes</td>
            <td>{arrayNotas.a1artes}</td>
            <td>{arrayNotas.a2artes}</td>
            <td>
              {(parseInt(arrayNotas.a1artes) + parseInt(arrayNotas.a2artes)) / 2}
            </td>
            <td>
              {(parseInt(arrayNotas.a1artes) + parseInt(arrayNotas.a2artes)) / 2 >= 6 ? "Aprovado": "Reprovado"}
            </td>
          </tr>
          <tr>
            <td>Matéria Adicional</td>
            <td>{arrayNotas.a1materiaadicional}</td>
            <td>{arrayNotas.a2materiaadicional}</td>
            <td>
              {(parseInt(arrayNotas.a1materiaadicional) + parseInt(arrayNotas.a2materiaadicional)) / 2}
            </td>
            <td>
              {(parseInt(arrayNotas.a1materiaadicional) + parseInt(arrayNotas.a2materiaadicional)) / 2 >= 6 ? "Aprovado": "Reprovado"}
            </td>
          </tr>
          </tbody>
        </Table>
        ))}
      </ListGroup>
      
      
    </div>
  );
};

export default NotasTurma;
