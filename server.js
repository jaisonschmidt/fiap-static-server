const express = require('express');
const path = require('path');
const app = express();

const directory = path.join(__dirname, 'public'); // gera o caminho completo do diretório

app.use(express.static(directory)); // define o diretório de arquivos estáticos

app.get('/health-check', (req, res) => {
    res.send('OK');
});

// arrow function e function normal
// arrow function difere quanto ao objeto this
app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 