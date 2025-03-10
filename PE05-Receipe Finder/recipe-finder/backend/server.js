const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const recipesRoutes = require("./routes/recipes");

const app = express();
const PORT = process.env.PORT || 5000;

// 中间件
app.use(cors());
app.use(express.json());

// 连接 MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB 连接成功"))
  .catch(err => console.log("MongoDB 连接失败:", err));


// 配置 API 路由
app.use("/api/recipes", recipesRoutes);

app.listen(PORT, () => console.log(`服务器运行在 http://localhost:${PORT}`));
