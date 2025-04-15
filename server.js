/**
 * O Express.js é um framework web minimalista e flexível para Node.js, 
 * usado para criar servidores HTTP e APIs de forma simples e estruturada.
 */

const express = require('express');
const path = require('path');
const app = express();

const directory = path.join(__dirname, 'public'); // gera o caminho completo do diretório

app.use(express.static(directory)); // define o diretório de arquivos estáticos

// muito usada para demonstrar que um serviço está up e running
app.get('/health', (req, res) => {
    res.send('OKKK!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 