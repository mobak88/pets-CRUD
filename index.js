const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});