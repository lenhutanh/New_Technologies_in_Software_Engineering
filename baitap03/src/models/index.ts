'use strict';

import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes, Model, Dialect } from 'sequelize';
import process from 'process';

// Lấy tên file hiện tại
const basename: string = path.basename(__filename);
const env: string = process.env.NODE_ENV || 'development';

// Import config
// Cần chắc chắn rằng bạn đã có file config đúng kiểu TypeScript (hoặc dùng JSON như bạn đang làm)
const config = require(path.join(__dirname, '/../config/config.json'))[env];

// Khởi tạo biến db dưới dạng object có thể chứa model và Sequelize instance
const db: {
  [key: string]: any;
  sequelize?: Sequelize;
  Sequelize?: typeof Sequelize;
} = {};

let sequelize: Sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] as string, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Đọc các file model trong thư mục hiện tại
fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach((file: string) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

// Gọi hàm associate nếu có
Object.keys(db).forEach((modelName: string) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Gán Sequelize instance vào object db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export = db;