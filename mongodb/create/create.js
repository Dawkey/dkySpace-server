const models = require("../init.js");

// const connect = require("../connect.js");
// connect();

function create_draft(data){
  let model = models["draft_model"];
  let promise = model.create(data);
  return promise;
}

module.exports = {
  create_draft
}
