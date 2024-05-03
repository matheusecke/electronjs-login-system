const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = require('./database');

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { email: email, password: password } = req.body;
  
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ success: false });
      } else if (results.length > 0) {
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false });
      }
    });
  });

  app.post('/cadastrar-user', (req, res) => {
    const { username, email, password, address} = req.body;
    db.query('INSERT INTO users (username, email, password, address) VALUES (?, ?, ?, ?)', 
        [username, email, password, address], 
        (error, results, fields) => {
            if (error) {
                console.error('Erro ao cadastrar usuário no MySQL:', error);
                res.status(500).json({ success: false });
            } else {
                console.log('Usuário cadastrado com sucesso no MySQL!');
                res.status(201).json({ success: true});
            }
        });
    });

app.get('/getUsers', (req, res) => {
  const query = 'SELECT username, email, address FROM users';
  db.query(query, (error, results) => {
      if (error) {
          console.error('Erro ao consultar o banco de dados:', error);
          res.status(500).json({ success: false, message: 'Erro ao acessar banco de dados' });
      } else if (results.length > 0) {
          res.json(results);
      } else {
          res.status(404).json({ success: false, message: 'Nenhum usuário encontrado' });
      }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});