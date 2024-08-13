var express = require('express');
var router = express.Router();
const { Sequelize, Op} = require('sequelize');
const Edificio = require('../models').edificio;
const { edificio, propietario } = require('../models');

router.get('/findAll/json', function(req, res, next) {  
    Edificio.findAll({  
        attributes: { exclude: ["createdAt","updatedAt"] },
    }) 
     
    .then(edificios => {  
        res.json(edificios);  
    })  
    .catch(error => res.status(400).send(error)) 
});

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

router.get('/getAllWithPropietario', function(req, res, next) {
    edificio.findAll({
        include: {
            model: propietario,
            attributes: ['nombre', 'apellido']
        },
        attributes: {
            exclude: ["createdAt","updatedAt", "id_propietario"]
        }
    })
    .then(edificios => {
        const response = edificios.map(edificio => {
            return {
                ...edificio.get(),
                propietarioNombre: `${edificio.propietario.nombre} ${edificio.propietario.apellido}`
            };
        });
        res.json(response);
    })
    .catch(error => {
        res.status(400).json({ error: error.message });
    });
});
module.exports = router;

module.exports = router;