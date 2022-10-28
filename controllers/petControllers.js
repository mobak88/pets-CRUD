const pool = require('../db');

// Get all pets

exports.getAllPets = ('/pets', async (req, res) => {
    try {
        const allPets = await pool.query('SELECT * FROM pets');
        res.json(allPets.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Create pet

exports.createPet = ('/pets', async (req, res) => {
    const { petName, petAge, ownerName, species } = req.body;
    try {
        const newPet = await pool.query(
            'INSERT INTO pets (pet_name, pet_age, owner_name, species) VALUES($1, $2, $3, $4) RETURNING *',
            [petName, petAge, ownerName, species]
        );

        res.json(newPet.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get a pet

exports.getPet = ('/pets/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pet = await pool.query(
            'SELECT * FROM pets WHERE pet_id = $1',
            [id]
        );
        res.json(pet.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Update pet

exports.updatePet = ('/pets/:id', async (req, res) => {
    const { id } = req.params;
    const { petName, petAge, ownerName, species } = req.body;
    try {
        const updatePet = await pool.query(
            'UPDATE pets SET pet_name=COALESCE($1, pet_name), pet_age=COALESCE($2, pet_age), owner_name=COALESCE($3, pet_age), species=COALESCE($4, species)  WHERE pet_id = $5',
            [petName, petAge, ownerName, species, id]);
        res.json(updatePet.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Delete pet

exports.deletePet = ('/pets/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletePet = await pool.query('DELETE FROM pets WHERE pet_id = $1', [id]);
        res.json(`Pet with id ${id} was deleted from the database`);
    } catch (err) {
        console.error(err.message);
    }
});