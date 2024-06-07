// createDatabase.js
const pool = require('./db');

pool.query(`
  CREATE DATABASE IF NOT EXISTS cadastro;
`, (err, results) => {
  if (err) {
    console.error('Erro ao criar o banco de dados:', err);
    return;
  }
  console.log('Banco de dados criado ou já existe.');

  pool.query(`
    USE cadastro;
  `, (err, results) => {
    if (err) {
      console.error('Erro ao selecionar o banco de dados:', err);
      return;
    }
    console.log('Banco de dados selecionado.');

    pool.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        sobrenome VARCHAR(255) NOT NULL,
        cpf VARCHAR(11) NOT NULL UNIQUE,
        usuario VARCHAR(255) NOT NULL UNIQUE,
        senha VARCHAR(255) NOT NULL
      );
    `, (err, results) => {
      if (err) {
        console.error('Erro ao criar a tabela:', err);
        return;
      }
      console.log('Tabela de usuários criada com sucesso.');
    });
  });
});
