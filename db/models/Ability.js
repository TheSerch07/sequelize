const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    name: {
      type: DataTypes.STRING(),
      unique: "compositeIndex",
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(),
      
    },
    mana_cost: {
      type: DataTypes.FLOAT(),
      unique: "compositeIndex",
      allowNull: false
    }
  })
}