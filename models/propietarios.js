'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class propietarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association with Edificio model
      this.hasMany(models.edificio, {
          foreignKey: 'id_propietario',
          as: 'edificios'
      });
  }
  }
  propietarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'propietarios',
    tableName: 'propietarios',
  });
  return propietarios;
};