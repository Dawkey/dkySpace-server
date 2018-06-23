const models = require("../init.js");

// const connect = require("../connect.js");
// connect();

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


function find_article(_id){
  let model = models["article_model"];
  let promise = model.find({_id: _id},{__v: 0});
  return promise;
}

function find_article_main(_id){
  let model = models["main_model"];
  let promise = model.find(
    {_id: {$gte: _id-1 , $lte: _id+1}},
    {__v: 0 , description: 0},
  );
  return promise;
}


function find_draft(_id){
  let model = models["draft_model"];
  let promise = model.find({_id: _id},{__v: 0});
  return promise;
}

function find_draft_main(){
  let model = models["draft_model"];
  let promise = model.find({},{__v: 0 , markdown: 0 , article: 0},{sort: {_id: -1}});
  return promise;
}



module.exports = {
  find_view,
  find_use,
  find_article,
  find_article_main,
  find_draft,
  find_draft_main
};
