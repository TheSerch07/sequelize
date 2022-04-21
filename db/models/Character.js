const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Character', {
    code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true
    },
    age: {
      type: DataTypes.INTEGER(),
      // allowNull: false
    },
    hp: {
      type: DataTypes.INTEGER(),
      allowNull: false
    },
    mana: {
      type: DataTypes.FLOAT(),
      allowNull: false
    },
    race: {
      type: DataTypes.ENUM(),
      values: ["Human", "Elf", "Machine", "Demon", "Animal", "Other"],
      defaultValue: "Other"
      // allowNull: false
    }, 
    date_added: {
      type: DataTypes.DATEONLY(),
      defaultValue: new Date().toISOString().split('T')[0],
      // allowNull: true
    }
  }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  })
}