import bcrypt from 'bcryptjs';
import db from '../models';

const salt = bcrypt.genSaltSync(10);

interface IUserInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  gender: string;
  roleId: string;
  id?: number; // Optional for update
}

// Hàm hash mật khẩu
const hashUserPassword = async (password: string): Promise<string> => {
  return bcrypt.hashSync(password, salt);
};

// Hàm tạo user
const createNewUser = async (data: IUserInput): Promise<string> => {
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

    return 'create a new user successfully';
  } catch (e) {
    throw e;
  }
};

// Hàm lấy tất cả user
const getAllUser = async (): Promise<any[]> => {
  try {
    const users = await db.User.findAll({ raw: true });
    return users;
  } catch (e) {
    throw e;
  }
};

// Hàm lấy chi tiết user theo id
const getUserInfoById = async (userId: number): Promise<any> => {
  try {
    const user = await db.User.findOne({
      where: { id: userId },
      raw: true
    });

    return user || {};
  } catch (e) {
    throw e;
  }
};

// Hàm update user
const updateUser = async (data: IUserInput): Promise<any[]> => {
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
      return allUsers;
    } else {
      return [];
    }
  } catch (e) {
    throw e;
  }
};

// Hàm xóa user
const deleteUserById = async (userId: number): Promise<void> => {
  try {
    const user = await db.User.findOne({
      where: { id: userId }
    });

    if (user) {
      await user.destroy();
    }
  } catch (e) {
    throw e;
  }
};

// Named exports
export {
  createNewUser,
  getAllUser,
  getUserInfoById,
  updateUser,
  deleteUserById
};

// Default export
export default {
  createNewUser,
  getAllUser,
  getUserInfoById,
  updateUser,
  deleteUserById
};
