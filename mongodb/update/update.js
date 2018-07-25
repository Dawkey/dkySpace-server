const models = require("../init.js");

// const connect = require("../connect.js");
// connect();

function update_use(data){
  let model = models["use_model"];
  let promise = model.update({_id: 0},{$set: data});
  return promise;
}

function update_article(main_data,article_data){
  let _id = main_data._id;
  let main_model = models["main_model"];
  let article_model = models["article_model"];
  let promise = Promise.all([main_model.update({_id},{$set: main_data}),
                             article_model.update({_id},{$set: article_data})]);
  return promise;
}

function update_draft(_id,data){
  let model = models["draft_model"];
  let promise = model.update({_id},{$set: data});
  return promise;
}

module.exports = {
  update_use,
  update_draft,
  update_article
}
