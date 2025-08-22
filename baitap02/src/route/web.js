import express from "express";  // gọi Express
import homeController from "../controller/homeController";  // gọi controller

let router = express.Router();  // khởi tạo Route

let initWebRoutes = (app) => {

    // Cách 1: test route đơn giản
    router.get('/', (req, res) => {
        return res.send('Lê Nhựt Anh');
    });

    // Cách 2: dùng hàm trong controller
    router.get('/home', homeController.getHomePage);         // url cho trang chủ
    router.get('/about', homeController.getAboutPage);       // url cho trang about

    router.get('/crud', homeController.getCRUD);             // url get crud
    router.post('/post-crud', homeController.postCRUD);      // url post crud
    router.get('/get-crud', homeController.getAllUser);      // url lấy all user
    router.get('/edit-crud', homeController.getEditCRUD);    // url edit crud
    router.post('/put-crud', homeController.putCRUD);        // url update crud
    router.get('/delete-crud', homeController.deleteCRUD);   // url delete crud

    return app.use("/", router);   // url mặc định
};

module.exports = initWebRoutes;
