const models = require("../init.js");

// const connect = require("../connect.js");
// connect();


function remove_draft(_id){
  let model = models["draft_model"];
  let promise = model.remove({_id});
  return promise;
}

module.exports = {
  remove_draft
}
