'use strict'
import { Model, DataTypes, Sequelize, Optional } from 'sequelize'

// Định nghĩa interface cho thuộc tính User
interface UserAttributes {
  id?: number
  email: string
  password: string
  firstName: string
  lastName: string
  address: string
  phoneNumber: string
  gender: boolean
  image: string
  roleId: string
  positionId: string
  // createdAt?: Date
  // updatedAt?: Date
}

// Cho phép một số field có thể optional khi tạo
type UserCreationAttributes = Optional<UserAttributes, 'id'>

// Class User kế thừa từ Model
export default class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: number
  public email!: string
  public password!: string
  public firstName!: string
  public lastName!: string
  public address!: string
  public phoneNumber!: string
  public gender!: boolean
  public image!: string
  public roleId!: string
  public positionId!: string

  // // timestamps
  // public readonly createdAt!: Date
  // public readonly updatedAt!: Date

  static associate(models: any) {
    // define association here
  }

  static initModel(sequelize: Sequelize): typeof User {
    User.init(
      {
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
      },
      {
        sequelize,
        modelName: 'User'
      }
    )
    return User
  }
}