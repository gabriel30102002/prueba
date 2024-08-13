var express = require('express');
var router = express.Router();
const { edificio } = require('../models');

// Create a new Edificio
router.post('/create', function(req, res, next) {
    const { nombre, numpisos, direccion, avaluo, id_propietario } = req.body;

    edificio.create({
        nombre,
        numpisos,
        direccion,
        avaluo,
        id_propietario
    })
    .then(edificio => {
        res.status(201).json(edificio);
    })
    .catch(error => {
        res.status(400).json({ error: error.message });
    });
});

module.exports = router;
