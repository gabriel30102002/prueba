var express = require('express');
var router = express.Router();
const { Sequelize, Op} = require('sequelize');
const propietarios = require('../models/propietarios');
const Propietario = require('../models').propietario;

router.get('/findAll/json', function(req, res, next) {  
    Propietario.findAll({  
        attributes: { exclude: ["createdAt","updatedAt"] },
    }) 
     
    .then(propietarios => {  
        res.json(propietarios);  
    })  
    .catch(error => res.status(400).send(error)) 
});

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