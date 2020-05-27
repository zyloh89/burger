module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
      name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN,
      deleted: DataTypes.BOOLEAN,
    });
    return Burger;
  };
  