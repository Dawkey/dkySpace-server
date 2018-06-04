const mongoose = require("mongoose");


const main_schema = new mongoose.Schema(
  {
    _id: {type: Number},
    title: {type: String},
    date: {type: String},
    edit_date: {type: String},
    tag: {type: String},
    classify: {type: String},
    description: {type: String}
  },
  {
    collection: "main_db"
  }
);
const main_model = mongoose.model("main_db",main_schema);

const article_schema = new mongoose.Schema(
  {
    _id: {type: Number},
    article: {type: String},
    markdown: {type: String}
  },
  {
    collection: "article_db"
  }
);
const article_model = mongoose.model("article_db",article_schema);

const update_schema = new mongoose.Schema(
  {
    _id: {type: Number},
    version: {type: String},
    date: {type: String},
    content: {type: String}
  },
  {
    collection: "update_db"
  }
);
const update_model = mongoose.model("update_db",update_schema);

const diary_schema = new mongoose.Schema(
  {
    _id: {type: Number},
    date: {type: String},
    content: {}
  },
  {
    collection: "diary_db"
  }
);
const diary_model = mongoose.model("diary_db",diary_schema);

const use_schema = new mongoose.Schema(
  {
    tag: {type: Array},
    classify: {type: Array},
    article_id: {type: Number},
    update_id: {type: Number},
    diary_id: {type: Number},
    update_version: {type: String},
  },
  {
    collection: "use_db"
  }
)
const use_model = mongoose.model("use_db",use_schema);

module.exports = {
  main_model,
  article_model,
  update_model,
  diary_model,
  use_model
};
