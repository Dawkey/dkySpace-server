const mongoose = require("mongoose");

function connect(){
  let db = mongoose.connect("mongodb://localhost:27017/blog");
  db
    .then(()=>{console.log("连接数据库成功")},)
    .catch((err)=>{console.log(`连接数据库失败\n${err}`)});
};

module.exports = connect;
