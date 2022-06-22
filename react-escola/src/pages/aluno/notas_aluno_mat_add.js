import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import '../../css/index.css';
const NotasAlunos = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.email;
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

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/alunos/${login}/materiasadicional`)
      .then((response) => {
        setAdd(response.data);

        console.log("response", response.data.length);
      })
      .catch((error) => setError(error.response.data.message));
  }, []);

  if (!post) return null;

  return (
    <div className="py-5">


    <Table>
          <thead>
            <tr>
              <th>Materia adicional:</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {add.map((add) => (
            <tr>
              <td>{add.nome}</td>
               <td>{add.valor}</td>
            </tr>
             ))}
            </tbody>
      </Table>

    

    </div>
  );
};

export default NotasAlunos;
