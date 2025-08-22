import db from '../models/index'      // import database
import CRUDService from '../services/CRUDService'  // import service

// Trang chủ
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();   // lấy dữ liệu từ models/index
    console.log("-----------------");
    console.log(data);
    console.log("-----------------");
    return res.render('homepage.ejs', {   // trả dữ liệu qua view
      data: JSON.stringify(data)
    });
  } catch (e) {
    console.log(e);
  }
};

// Trang about
let getAboutPage = (req, res) => {
  return res.render('test/about.ejs');
};

// Trang CRUD
let getCRUD = (req, res) => {
  return res.render('crud.ejs');
};

// Lấy tất cả user (CRUD - Read)
let getAllUser = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log('-----------------');
  console.log(data);
  console.log('-----------------');
  // return res.send('FindAll crud to server'); // test api
  return res.render('users/findAllUser.ejs', {
    datalist: data
  });
};

// Tạo mới user (CRUD - Create)
let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);   // log kết quả
  let allUsers = await CRUDService.getAllUser();  // lấy lại danh sách sau update
  return res.render('users/findAllUser.ejs', {
    datalist: allUsers
  });
};

// Lấy dữ liệu để edit
let getEditCRUD = async (req, res) => {
  let userId = req.query.id;   // lấy id từ query ?id=
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    // console.log('--------------------');
    // console.log(userData);
    // console.log('--------------------');
    return res.render('users/updateUser.ejs', {
      data: userData
    });
  } else {
    return res.send('Không lấy được id!');
  }
};

// Update user
let putCRUD = async (req, res) => {
  let data = req.body;   // nhận data từ form
  await CRUDService.updateUser(data);
  let allUsers = await CRUDService.getAllUser();  // lấy lại danh sách sau update
  return res.render('users/findAllUser.ejs', {
    datalist: allUsers
  });
  // return res.send('Update thành công');
};

// Xóa user
let deleteCRUD = async (req, res) => {
  let id = req.query.id;   // lấy id từ query ?id=
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.send('Deleted!');
  } else {
    return res.send('Not found user!');
  }
};

// Xuất các hàm controller
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  getAllUser: getAllUser,
  postCRUD: postCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD
};

