import axios from "axios";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Form, Button, Row, Col } from "react-bootstrap";
const RegisterDataProva = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));
  const login = isLoginTrue.user.email;

  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  const [dia, setDate] = useState(new Date());
  const [hora, setHora] = useState("");
  const [materia, setMateria] = useState("");

  const handleChange = (event) => {
    setMateria(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/provas`, {
        dia,
        hora,
        materia,
      })
      .then((response) => {
        console.log("response");
        setPost(response.data);
        setDate("");
        setHora("");
        setMateria("");
        // reload page
        window.location.reload();
      })
      .catch((error) => setError(error.response.data.message));
  };

  return (
    <div className="py-5 container">
      <div className="py-5">
        <h1>Registrar Prova</h1>
      </div>

      <Form autoComplete="off" onSubmit={handleSubmit}>

        <Row>
          <Col>
          <Form.Label>Dia</Form.Label>
          <Form.Control
            required
            type="date"
            id="dia"
            label="Dia"
            value={dia}
            onChange={(e) => setDate(e.target.value)}
          />
          </Col>
          <Col>
          <Form.Label>Hora:</Form.Label>
          <Form.Control
            required
            type="time"
            id="hora"
            label="Hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
          </Col>
        </Row>

        <Form.Group className="mb-3 py-3" controlId="formBasicPassword">
          <Form.Label>Materia:</Form.Label>
          <Form.Control
            required
            as="select"
            onChange={(e) => setMateria(e.target.value)}
          >
            <option>Selecione a Materia</option>

            <option
              checked={materia === "Matemática"}
              onChange={handleChange}
              value="Matematica"
            >
              Matematica
            </option>
            <option
              checked={materia === "Português"}
              onChange={handleChange}
              value="Portugues"
            >
              Portugues
            </option>
            <option
              checked={materia === "História"}
              onChange={handleChange}
              value="Historia"
            >
              Historia
            </option>
            <option
              checked={materia === "Geografia"}
              onChange={handleChange}
              value="Geografia"
            >
              Geografia
            </option>
          </Form.Control>
        </Form.Group>

        

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" size="lg">
            Registrar Prova
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterDataProva;
