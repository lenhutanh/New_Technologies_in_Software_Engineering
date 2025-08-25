import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node_fullstack", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

// Hàm connectDB trả về Promise<void>
const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};

// Xuất cả sequelize instance (nếu cần dùng model)
export default connectDB;
