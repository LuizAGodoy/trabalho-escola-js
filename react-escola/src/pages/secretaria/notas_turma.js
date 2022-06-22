import axios from "axios";
import React, { useState } from "react";
import { ListGroup, Table } from "react-bootstrap";
import '../../css/index.css';
import '../../css/notas_turma.css';

const NotasTurma = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const [error, setError] = React.useState(null);
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/alunos/notasAlunos`)
      .then((response) => {
        setPost(response.data.notas);

        console.log("response", response.data.notas);
      })
      .catch((error) => setError(error.response.data.message));
  }, []);
  
  return (
    <div className="py-5 container">
      <ListGroup>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {post &&
          post.map((post) => (
            <Table striped bordered hover>

              <caption class="h4">{post.email}</caption>
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
                <td>{post.a1portugues}</td>
                <td>{post.a2portugues}</td>
                <td>
                  {(parseInt(post.a1portugues) + parseInt(post.a2portugues)) / 2}
                </td>
                <td>
                        {(parseInt(post.a1portugues) + parseInt(post.a2portugues)) /
                          2 >=
                        6
                          ? "Aprovado"
                          : "Reprovado"}
                </td>
              </tr>
              <tr>
                <td>Matemática</td>
                <td>{post.a1matematica}</td>
                <td>{post.a2matematica}</td>
                <td>
                  {(parseInt(post.a1matematica) + parseInt(post.a2matematica)) / 2}
                </td>
                <td>
                  {(parseInt(post.a1matematica) + parseInt(post.a2matematica)) / 2 >= 6 ? "Aprovado": "Reprovado"}
                </td>
              </tr>
              <tr>
                <td>Historia</td>
                <td>{post.a1portugues}</td>
                <td>{post.a2matematica}</td>
                <td>
                  {(parseInt(post.a1portugues) + parseInt(post.a2matematica)) / 2}
                </td>
                <td>
                  {(parseInt(post.a1portugues) + parseInt(post.a2matematica)) / 2 >= 6 ? "Aprovado": "Reprovado"}
                </td>
              </tr>
              <tr>
                <td>Artes</td>
                <td>{post.a1matematica}</td>
                <td>{post.a2portugues}</td>
                <td>
                  {(parseInt(post.a1matematica) + parseInt(post.a2portugues)) / 2}
                </td>
                <td>
                  {(parseInt(post.a1matematica) + parseInt(post.a2portugues)) / 2 >= 6 ? "Aprovado": "Reprovado"}
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
