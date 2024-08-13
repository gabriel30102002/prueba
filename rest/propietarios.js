var express = require('express');
var router = express.Router();
const { propietario } = require('../models');

// Get all Propietarios for dropdown
router.get('/getAll', function(req, res, next) {
    propietario.findAll({
        attributes: ['id', 'nombre', 'apellido']
    })
    .then(propietarios => {
        res.json(propietarios);
    })
    .catch(error => {
        res.status(400).json({ error: error.message });
    });
});

module.exports = router;