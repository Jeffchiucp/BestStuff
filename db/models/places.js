'use strict';
module.exports = (sequelize, DataTypes) => {
  var Places = sequelize.define('Places', {
    name: DataTypes.STRING,
    gl_place_id: DataTypes.STRING,
    formatted_address: {
      street_number: DataTypes.INTEGER,
      street_route: DataTypes.STRING,
      city_name: DataTypes.STRING,
      state_name: DataTypes.STRING
    },
    geometry: {
      lat_location: DataTypes.INTEGER,
      lng_location: DataTypes.INTEGER,
    },
    international_phone_number: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Places;
};
