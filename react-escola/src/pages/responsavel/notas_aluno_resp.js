import axios from "axios";
import React from "react";
import { ListGroup, Table } from "react-bootstrap";
import '../../css/index.css';
const NotasAlunosResp = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.alunoR;
  const [error, setError] = React.useState(null);
  const [post, setPost] = React.useState(null);
  const [add, setAdd] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/alunos/${login}/notasAlunos`)
      .then((response) => {
        setPost(response.data);

        console.log("response", response.data.length);
      })
      .catch((error) => setError(error.response.data.message));
  }, []);

  if (!post) return null;

  return (
    <div className="py-5 container">
      <ListGroup>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Table striped bordered hover>
        <caption class="h3">{login}</caption>
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>AVALIAÇÃO 1</th>
              <th>AVALIAÇÃO 2</th>
              <th>Media</th>
              <th>Aprovador / Reprovado</th>
            </tr>
          </thead>
          <tbody>
            {post.length === 0 ? (
              <tr>
                <td>Portugues</td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
              </tr>
            ) : (
              post.map((post) => (
                <tr>
                  <td>Portugues</td>
                  <td>{post.a1portugues}</td>
                  <td>{post.a2portugues}</td>
                  <td>
                    {(parseInt(post.a1portugues) + parseInt(post.a2portugues)) /
                      2}
                  </td>
                  <td>
                    {(parseInt(post.a1portugues) + parseInt(post.a2portugues)) /
                      2 >=
                    6
                      ? "Aprovado"
                      : "Reprovado"}
                  </td>
                </tr>
              ))
            )}

            {post.length === 0 ? (
              <tr>
                <td>Matematica</td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
              </tr>
            ) : (
              post.map((post) => (
                <tr>
                  <td>Matematica</td>
                  <td>{post.a1matematica}</td>
                  <td>{post.a2matematica}</td>
                  <td>
                    {(parseInt(post.a1matematica) + parseInt(post.a2matematica)) /
                      2}
                  </td>
                  <td>
                    {(parseInt(post.a1matematica) + parseInt(post.a2matematica)) /
                      2 >=
                    6
                      ? "Aprovado"
                      : "Reprovado"}
                  </td>
                </tr>
              ))
            )}

            {post.length === 0 ? (
              <tr>
                <td>Historia</td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
              </tr>
            ) : (
              post.map((post) => (
                <tr>
                  <td>Historia</td>
                  <td>{post.a1historia}</td>
                  <td>{post.a2historia}</td>
                  <td>
                    {(parseInt(post.a1historia) + parseInt(post.a2historia)) /
                      2}
                  </td>
                  <td>
                    {(parseInt(post.a1historia) + parseInt(post.a2historia)) /
                      2 >=
                    6
                      ? "Aprovado"
                      : "Reprovado"}
                  </td>
                </tr>
              ))
            )}

            {post.length === 0 ? (
              <tr>
                <td>Artes</td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
              </tr>
            ) : (
              post.map((post) => (
                <tr>
                  <td>Artes</td>
                  <td>{post.a1arte}</td>
                  <td>{post.a2arte}</td>
                  <td>
                    {(parseInt(post.a1arte) + parseInt(post.a2arte)) /
                      2}
                  </td>
                  <td>
                    {(parseInt(post.a1arte) + parseInt(post.a2arte)) /
                      2 >=
                    6
                      ? "Aprovado"
                      : "Reprovado"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </ListGroup>

    

    </div>
  );
};

export default NotasAlunosResp;
