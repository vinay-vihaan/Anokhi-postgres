'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const basename = path.basename(__filename);
const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const modelDefinition = require(path.join(__dirname, file));
    let model;
    
    // Differentiate between class and function definitions
    if (typeof modelDefinition === 'function' && modelDefinition.prototype && modelDefinition.prototype.constructor.toString().startsWith('class')) {
        // Class-based model (e.g., Agent)
        model = modelDefinition;
    } else if (typeof modelDefinition === 'function') {
        // Function-based model (e.g., Listing)
        model = modelDefinition(sequelize, Sequelize.DataTypes);
    }

    if (model && model.name) {
      db[model.name] = model;
    }
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
