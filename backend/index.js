const express = require("express");
const sequelize = require("./database/db");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const userRouter = require('./router/user');
const brandRoute = require('./router/brand');
const storeRoute = require('./router/store');
const productRoute = require('./router/product');

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());


app.use("/api", userRouter);
app.use("/b_api", brandRoute);
app.use("/s_api", storeRoute);
app.use("/p_api", productRoute);

app.listen(port, async (e) => {
    await sequelize.authenticate()
    console.log('Database Connected!');
    console.log(`Server running on PORT ${port}!`);
})