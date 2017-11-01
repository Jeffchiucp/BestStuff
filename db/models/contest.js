'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contest = sequelize.define('Contest', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Contest.hasMany(models.Item, {as: 'Items'});
      }
    }
  });
  return Contest;
};
