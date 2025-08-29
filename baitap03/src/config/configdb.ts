import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('node_fullstack', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection established successfully.');

    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('✅ All models were synchronized successfully.');
    }
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
};

export default connectDB;
