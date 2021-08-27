'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.post.belongsTo(models.user,{
      //   foreignKey : "user_id",
      //   sourceKey: 'id',
      //   onDelete: 'cascade',
      // })
      // models.post.hasMany(models.comment,{
      //   foreignKey : "post_id",
      //   sourceKey: 'id',
      //   onDelete: 'cascade',
      // })
    }
  };
  post.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    contents: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};