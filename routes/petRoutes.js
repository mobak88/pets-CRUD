const express = require('express');
const petController = require('./../controllers/petControllers');
const router = express.Router();

router
    .route('/pets')
    .get(petController.getAllPets)
    .post(petController.createPet);

router
    .route('/pets/:id')
    .get(petController.getPet)
    .put(petController.updatePet)
    .delete(petController.deletePet);

module.exports = router;