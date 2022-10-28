const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const petRoutes = require('./routes/petRoutes');

app.use(cors());
app.use(express.json());
app.use('/', petRoutes);

module.exports = app;