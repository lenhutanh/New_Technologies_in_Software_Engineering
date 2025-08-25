import { Request, Response } from "express";
import db from "../models/index";
import CRUDService from "../services/CRUDService";

// Trang chủ
const getHomePage = async (req: Request, res: Response) => {
  try {
    let data = await db.User.findAll();
    console.log("-----------------");
    console.log(data);
    console.log("-----------------");
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

// Trang about
const getAboutPage = (req: Request, res: Response) => {
  return res.render("test/about.ejs");
};

// Trang CRUD
const getCRUD = (req: Request, res: Response) => {
  return res.render("crud.ejs");
};

// Lấy tất cả user
const getAllUser = async (req: Request, res: Response) => {
  let data = await CRUDService.getAllUser();
  return res.render("users/findAllUser.ejs", {
    datalist: data,
  });
};

// Tạo mới user
const postCRUD = async (req: Request, res: Response) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  let allUsers = await CRUDService.getAllUser();
  return res.render("users/findAllUser.ejs", {
    datalist: allUsers,
  });
};

// Lấy dữ liệu để edit
const getEditCRUD = async (req: Request, res: Response) => {
  const userId = req.query.id ? Number(req.query.id) : null;
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    return res.render("users/updateUser.ejs", {
      data: userData,
    });
  } else {
    return res.send("Không lấy được id!");
  }
};

// Update user
const putCRUD = async (req: Request, res: Response) => {
  let data = req.body;
  await CRUDService.updateUser(data);
  let allUsers = await CRUDService.getAllUser();
  return res.render("users/findAllUser.ejs", {
    datalist: allUsers,
  });
};

// Xóa user
const deleteCRUD = async (req: Request, res: Response) => {
  const id = req.query.id ? Number(req.query.id) : null;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.send("Deleted!");
  } else {
    return res.send("Not found user!");
  }
};

export default {
  getHomePage,
  getAboutPage,
  getCRUD,
  getAllUser,
  postCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
