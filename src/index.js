require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos padrão HTTP: get, post, put, delete, patch

// Tipos de parâmetros
// Query Params: req.query (Filtros, ordenação, paginação, ...);
// Route Params: req.params (Identificar um recurso na alteração ou remoção);
// Body: req.body (Dados para criação ou alteração de um registro);

// MongoDB (Não-relacional);

server.listen(3333);
