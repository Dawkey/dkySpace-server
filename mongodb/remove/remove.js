const models = require("../init.js");

// const connect = require("../connect.js");
// connect();


function remove_draft(_id){
  let model = models["draft_model"];
  let promise = model.remove({_id});
  return promise;
}

function remove_article(_id){
  let main_model = models["main_model"];
  let article_model = models["article_model"];
  let promise = Promise.all([main_model.remove({_id}),article_model.remove({_id})]);
  return promise;
}

function remove_update(_id){
  let model = models["update_model"];
  let promise = model.remove({_id});
  return promise;
}

module.exports = {
  remove_draft,
  remove_article,
  remove_update,
}
