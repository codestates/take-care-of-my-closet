'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

const {user,post,comment,like,unlike} = sequelize.models;

post.belongsTo(user);
user.hasMany(post);

user.hasMany(comment);
comment.belongsTo(user);

post.hasMany(like);
like.belongsTo(post);

user.hasMany(like);
like.belongsTo(user);

post.hasMany(unlike);
unlike.belongsTo(post);

user.hasMany(unlike);
unlike.belongsTo(user);

post.hasMany(unlike);
unlike.belongsTo(post);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
