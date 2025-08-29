import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);

interface IUserData {
  id?: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  gender: string;
  roleId: string;
}

// Hàm hash mật khẩu
const hashUserPassword = (password: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await bcrypt.hash(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

// Hàm tạo user
const createNewUser = (data: IUserData): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPasswordFromBcrypt = await hashUserPassword(data.password);

      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === '1',
        roleId: data.roleId
      });

      resolve('create a new user successfully');
    } catch (e) {
      reject(e);
    }
  });
};

// Hàm lấy tất cả user
const getAllUser = (): Promise<any[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.User.findAll({
        raw: true
      });
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

// Hàm lấy chi tiết user theo id
const getUserInfoById = (userId: number): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id: userId },
        raw: true
      });

      if (user) {
        resolve(user);
      } else {
        resolve({});
      }
    } catch (e) {
      reject(e);
    }
  });
};

// Hàm update user
const updateUser = (data: IUserData): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id: data.id }
      });

      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;

        await user.save();

        const allUsers = await db.User.findAll();
        resolve(allUsers);
      } else {
        resolve(undefined);
      }
    } catch (e) {
      reject(e);
    }
  });
};

// Hàm xóa user
const deleteUserById = (userId: number): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id: userId }
      });

      if (user) {
        await user.destroy();
      }
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

export default {
  createNewUser,
  getAllUser,
  getUserInfoById,
  updateUser,
  deleteUserById
};