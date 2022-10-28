const express = require('express');
const app = express();
const cors = require('cors');
const petRoutes = require('./routes/petRoutes');

app.use(cors());
app.use(express.json());
app.use('/', petRoutes);

module.exports = app;