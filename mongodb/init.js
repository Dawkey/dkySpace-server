const mongoose = require("mongoose");



//文章主要信息
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


//文章
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


//草稿
const draft_schema = new mongoose.Schema(
  {
    _id: {type: Number},
    title: {type: String},
    date: {type: String},
    edit_date: {type: String},
    tag: {type: String},
    classify: {type: String},
    description: {type: String},

    article: {type: String},
    markdown: {type: String}
  },
  {
    collection: "draft_db"
  }
);
const draft_model = mongoose.model("draft_db",draft_schema);


//更新日志
const update_schema = new mongoose.Schema(
  {
    _id: {type: Number},
    version: {type: String},
    date: {type: String},
    markdown: {type: String},
    content: {type: String}
  },
  {
    collection: "update_db"
  }
);
const update_model = mongoose.model("update_db",update_schema);


//日记
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


//需要用到重要信息(包括--标签,分类的种类数组 , 最新的文章,更新日志,日记的_id号 , 最新版本号)
const use_schema = new mongoose.Schema(
  {
    _id: {type: Number},
    tag: {type: Array},
    classify: {type: Array},
    article_id: {type: Number},
    draft_id: {type: Number},
    update_id: {type: Number},
    diary_id: {type: Number},
    update_version: {type: String},
  },
  {
    collection: "use_db"
  }
)
const use_model = mongoose.model("use_db",use_schema);


const login_schema = new mongoose.Schema(
  {
    _id: {type: Number},
    username: {type: String},
    password: {type: String},
    secret: {type: String},
  },
  {
    collection: "login_db"
  }
)
const login_model = mongoose.model("login_db",login_schema);


module.exports = {
  main_model,
  article_model,
  draft_model,
  update_model,
  diary_model,
  use_model,
  login_model
};
