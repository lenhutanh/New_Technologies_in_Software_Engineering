import { Sequelize } from "sequelize";

const sequelize = new Sequelize('node_fullstack', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})

let connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.log('Unable to connect to the database: ', error)
  }
}

module.exports = connectDB