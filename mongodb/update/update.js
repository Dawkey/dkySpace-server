const models = require("../init.js");

// const connect = require("../connect.js");
// connect();

function update_use(data){
  let model = models["use_model"];
  let promise = model.update({_id: 0},{$set: data});
  return promise;
}

function update_draft(_id,data){
  let model = models["draft_model"];
  let promise = model.update({_id},{$set: data});
  return promise;
}

module.exports = {
  update_use,
  update_draft
}
