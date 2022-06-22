import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import '../css/index.css';
const MateriaAddComp = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.email;
  const [error, setError] = React.useState(null);
  const [add, setAdd] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/alunos/materiasadicional`)
      .then((response) => {
        setAdd(response.data.materiaadicional);

        console.log("response", response.data);
      })
      .catch((error) => setError(error.response.data.message));
  }, []);

  if (!add) return null;

  return (
    <div className="py-5 container">
    <Table>
          <thead>
            <tr>
                <th>Aluno / Email</th>
              <th>Materia adicional:</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {add.map((add) => (
            <tr>
                <td>{add.email}</td>
              <td>{add.nome}</td>
               <td>{add.valor}</td>
            </tr>
             ))}
            </tbody>
      </Table>
    </div>
  );
};

export default MateriaAddComp;
