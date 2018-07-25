const models = require("../init.js");

// const connect = require("../connect.js");
// connect();

function create_draft(data){
  let model = models["draft_model"];
  let promise = model.create(data);
  return promise;
}

function create_article(main_data,article_data){
  let main_model = models["main_model"];
  let article_model = models["article_model"];
  let promise = Promise.all([main_model.create(main_data),article_model.create(article_data)]);
  return promise;
}

function create_update(data){
  let model = models["update_model"];
  let promise = model.create(data);
  return promise;
}

module.exports = {
  create_draft,
  create_article,
  create_update
}
