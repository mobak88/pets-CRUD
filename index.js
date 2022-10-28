const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());

// Create pet

app.post('/pet', async (req, res) => {
    const { petName, petAge, ownerName, species } = req.body;

    console.log(req.body);

    try {
        const newPet = await pool.query('INSERT INTO pets (pet_name, pet_age, owner_name, species) VALUES($1, $2, $3, $4) RETURNING *', [petName, petAge, ownerName, species]);

        res.json(newPet.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});