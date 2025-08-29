import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class User extends Model {}

  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    roleId: DataTypes.STRING,
    positionId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User'
  });

  return User;
};
