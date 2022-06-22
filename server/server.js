const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const userdb = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
const notasdb = JSON.parse(fs.readFileSync("./notas.json", "utf-8"));
const provasdb = JSON.parse(fs.readFileSync("./provas.json", "utf-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "72676376";

const expiresIn = "1h";


function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function isLoginAuthenticated({ email, password, tipo }) {
  return (
    userdb.users.findIndex(
      (user) =>
        user.email === email && user.password === password && user.tipo === tipo
    ) !== -1
  );
}



function isRegisterAuthenticated({ email }) {
  return userdb.users.findIndex((user) => user.email === email) !== -1;
}

server.post("/api/auth/register", (req, res) => {
  const { email, password, tipo, nome, anoLetivo, alunoR } = req.body;
  if (isRegisterAuthenticated({ email })) {
    const status = 401;
    const message = "Email already exist";
    res.status(status).json({ status, message });
    return;
  }

  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());

    let last_item_id = data.users[data.users.length - 1].id;

    data.users.push({
      id: last_item_id + 1,
      email: email,
      password: password,
      tipo: tipo,
      nome: nome,
      anoLetivo: anoLetivo,
      alunoR: alunoR,
    });
    let writeData = fs.writeFile(
      "./users.json",
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });
  const access_user = { email, tipo, nome, anoLetivo, alunoR };
  const access_token = createToken({ email, password, tipo });
  res.status(200).json({ access_token, access_user });
});

server.post("/api/auth/login", (req, res) => {
  const { email, password, tipo } = req.body;

  if (!isLoginAuthenticated({ email, password, tipo })) {
    const status = 401;
    const message = "Dados Incorretos, tente novamente";
    res.status(status).json({ status, message });
    return;
  }
  const access_user = {
    email,
    tipo,
    nome: userdb.users.find((user) => user.email === email).nome,
    anoLetivo: userdb.users.find((user) => user.email === email).anoLetivo,
    alunoR: userdb.users.find((user) => user.email === email).alunoR,
  };
  const access_token = createToken({ email, password, tipo });
  res.status(200).json({ access_token, access_user });
});

// LISTAR LISTA DE TODOS OS ALUNOS
server.get("/api/alunos", (req, res) => {
  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());
    const alunos = data.users.filter((user) => user.tipo === "Aluno");
    res.status(200).json(alunos);
  });
});

server.get("/api/todos", (req, res) => {
  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());
    res.status(200).json(data);
  });
});

server.post("/api/alunos/:email/notas", (req, res) => {
  const { email } = req.params;
  const { nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8 } = req.body;
  fs.readFile("./notas.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());

    data.notas.push({
      email: email,
      a1portugues: nota1,
      a2portugues: nota2,
      a1matematica: nota3,
      a2matematica: nota4,
      a1historia: nota5,
      a2historia: nota6,
      a1arte: nota7,
      a2arte: nota8,
    });
    let writeData = fs.writeFile(
      "./notas.json",
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });
  res.status(200).json({ nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8 });
});

// LISTAR TODAS AS NOTAS
server.get("/api/alunos/notasAlunos", (req, res) => {
  const { email } = req.params;
  fs.readFile("./notas.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());

    res.status(200).json(data);
  });
});

// LISTAR TODAS AS NOTAS DE UM ALUNO
server.get("/api/alunos/:email/notasAlunos", (req, res) => {
  const { email } = req.params;
  fs.readFile("./notas.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());
    const notas = data.notas.filter((nota) => nota.email === email);

    res.status(200).json(notas);
  });
});



// registrar prova com dia e hora
server.post("/api/provas", (req, res) => {
  const { dia, hora, materia } = req.body;
  fs.readFile("./provas.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());
    data.provas.push({
      materia: materia,
      dia: dia,
      hora: hora,
    });
    let writeData = fs.writeFile(
      "./provas.json",
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });
  res.status(200).json({ dia, hora });
}); 

server.get("/api/provaslista", (req, res) => {
  fs.readFile("./provas.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());
    res.status(200).json(data);
  });
});

// Registrar materia adicional
server.post("/api/alunos/:email/materiaAdicional", (req, res) => {
  const { email } = req.params;
  const { nome, valor, } = req.body;
  fs.readFile("./materia-adicional.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());

    data.materiaadicional.push({
      email: email,
      nome: nome,
      valor: valor
    });
    let writeData = fs.writeFile(
      "./materia-adicional.json",
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });
  res.status(200).json({ nome, valor });
});

// lista materias adicionais

server.get("/api/alunos/materiasadicional", (req, res) => {
  const { email } = req.params;
  fs.readFile("./materia-adicional.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());
    res.status(200).json(data);
  });
});


server.get("/api/alunos/:email/materiasadicional", (req, res) => {
  const { email } = req.params;
  fs.readFile("./materia-adicional.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());
    const materiaadicional = data.materiaadicional.filter((materiaadicional) => materiaadicional.email === email);

    res.status(200).json(materiaadicional);
  });
});

server.post("/api/:email/msg", (req, res) => {
  const { email } = req.params;
  const { msg, emailD } = req.body;
  fs.readFile("./msg.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());

    data.msg.push({
      email: email,
      msg: msg,
      emailD: emailD
    });
    let writeData = fs.writeFile(
      "./msg.json",
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });
  res.status(200).json({ msg });
});

server.get("/api/:email/msg", (req, res) => {
  const { email } = req.params;
  fs.readFile("./msg.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());
    const msg = data.msg.filter((msg) => msg.email === email);

    res.status(200).json(msg);
  });
});

server.listen(5000, () => {
  console.log("Running fake api json server");
});
