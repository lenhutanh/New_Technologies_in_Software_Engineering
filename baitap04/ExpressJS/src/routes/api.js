const express = require('express');
const { createUser, handleLogin, getUser, getAccount } = require('../controllers/userController');
const auth = require('../middleware/auth');
const delay = require('../middleware/delay');
const bookRoutes = require('./bookRoutes'); 
const categoryRoutes = require('./categoryRoutes')

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
    return res.status(200).json("Hello world api");
});

routerAPI.post("/register", createUser);
routerAPI.post("/login", handleLogin);

routerAPI.use("/books", bookRoutes);
routerAPI.use("/categories", categoryRoutes);

routerAPI.use(auth);
routerAPI.get("/user", getUser);
routerAPI.get("/account", delay, getAccount);

module.exports = routerAPI; // export default