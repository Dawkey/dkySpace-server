const mongoose = require("mongoose");
const connect = require("../connect.js");
const models = require("../init.js");


connect();

function find_view(name){
  let model = models[name];
  let promise = model.find({},{__v: 0},{sort: {_id: -1}});
  return promise;
}

function find_use(){
  let model = models["use_model"];
  let promise = model.find({},{__v: 0});
  return promise;
}


module.exports = {
  find_view,
  find_use
};
