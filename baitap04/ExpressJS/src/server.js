require('dotenv').config(); 
// import các nguồn cần dùng
const morgan = require('morgan');
const express = require('express'); // commonjs
const configViewEngine = require('./config/viewEngine.js');
const apiRoutes = require('./routes/api.js');
const connection = require('./config/database.js');
const { getHomePage } = require('./controllers/homeController.js');
const cors = require('cors');

const app = express(); // cấu hình app là express
// cấu hình port, nếu tìm thấy port trong env, không thì trả về 8888
const port = process.env.PORT || 8888;

app.use(cors()); // config cors
app.use(express.json()); // config req.body cho json
app.use(express.urlencoded({ extended: true })); // for form data
app.use(morgan('dev'));
configViewEngine(app); // config template engine

const webAPI = express.Router();
webAPI.get("/", getHomePage);

app.use('/', webAPI);

// khai báo route cho API
app.use('/v1/api', apiRoutes);

(async () => {
  try {
    // Kết nối database using mongoose
    await connection();

    // lắng nghe port trong env
    app.listen(port, () => {
      console.log(`Backend NodeJs App is listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();
