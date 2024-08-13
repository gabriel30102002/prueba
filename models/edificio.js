'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edificio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association with Propietario model
      this.belongsTo(models.propietario, {
          foreignKey: 'id_propietario',
          as: 'propietario'
      });
  }
  }
  edificio.init({
    nombre: DataTypes.STRING,
    numpisos: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    avaluo: DataTypes.INTEGER,
    id_propietario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'edificio',
    tableName: 'edificios',
  });
  return edificio;
};