const debug = require("debug")("koa");

const Koa = require("koa");
const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");

const connect = require("./mongodb/connect.js");
const find = require("./mongodb/find/find.js");
const create = require("./mongodb/create/create.js");
const update = require("./mongodb/update/update.js");
const remove = require("./mongodb/remove/remove.js");

const app = new Koa();
const home = new Router();


const find_view = find.find_view;
const find_use = find.find_use;
const find_article = find.find_article;
const find_article_main = find.find_article_main;
const find_draft = find.find_draft;
const find_draft_main = find.find_draft_main;

const create_draft = create.create_draft;

const update_use = update.update_use;
const update_draft = update.update_draft;

const remove_draft = remove.remove_draft;


function get_view(name){
  return async (ctx,next)=>{
    let code = 0;
    let data = {};

    try{
      data.view = await find_view(name);
      if(name === "main_model"){
        let use = await find_use();
        data.use = use[0];
      }
    }
    catch(err){
      code = 1;
      debug(err);
    }

    await next();
    ctx.body = {code,data};
  }
}

connect();


home.get("/api/get/main",get_view("main_model"));
home.get("/api/get/update",get_view("update_model"));
home.get("/api/get/diary",get_view("diary_model"));

home.get("/api/get/article",async (ctx,next)=>{
  let code = 0;
  let data = {};

  let _id = Number(ctx.query._id);//GET传入的_id是字符串类型

  if(!Number.isInteger(_id)){
    code = 2;
    ctx.body = {code,data};
    return;
  }

  try{
    let array = await Promise.all([find_article(_id),find_article_main(_id)]);
    let article_array = array[0];
    let main_array = array[1];

    if(main_array.length <= 1){
      code = 2;
      ctx.body = {code,data};
      return;
    }

    let before_article = {};
    let article = {};
    let after_article = {};

    main_array.forEach((value)=>{
      if(value._id > _id){after_article = value;}
      else if(value._id === _id){article = value;}
      else if(value._id < _id){before_article = value;}
    });

    //mongoose返回的对象是不能添加或者删减属性的,故这里我们不能直接把content
    //作为article变量的新属性传给它.
    let content = article_array[0].article;

    data = {before_article,article,after_article,content};
  }
  catch(err){
    code = 1;
    debug(err);
  }

  await next();
  await new Promise((resolve)=>{
    setTimeout(()=>{resolve();},1000);
  });
  ctx.body = {code,data};
});

home.get("/api/get/draft_main",async (ctx,next)=>{
  let code = 0;
  let data = {};

  try{
    data = await find_draft_main();
  }
  catch(err){
    code = 1;
    debug(err);
  }

  await next();
  ctx.body = {code,data};
});

home.get("/api/get/draft",async (ctx,next)=>{
  let code = 0;
  let data = {};

  let _id = Number(ctx.query._id);

  try{
    let array = await find_draft(_id);
    data = array[0];
  }catch(err){
    code = 1;
    debug(err);
  }

  await next();
  ctx.body = {code,data};
});


home.post("/api/post/create_draft",async (ctx,next)=>{
  let code = 0;
  let data = {};
  let req_data = ctx.request.body;

  try{
    await create_draft(req_data);
    let draft_id = req_data._id;
    await update_use({draft_id});
    let res_array = await Promise.all([find_use(),find_draft_main()]);
    let use = res_array[0];
    data.use = use[0];
    data.draft_main = res_array[1];
  }
  catch(err){
    code = 1;
    debug(err);
  }

  await next();
  ctx.body = {code,data};
});

home.post("/api/post/update_draft",async (ctx,next)=>{
  let code = 0;
  let data = {};
  let req_data = ctx.request.body;

  try{
    let _id = req_data._id;
    await update_draft(_id,req_data);
    data = await find_draft_main();
  }
  catch(err){
    code = 1;
    debug(err);
  }

  await next();
  ctx.body = {code,data};
});


home.post("/api/post/remove_draft",async (ctx,next)=>{
  let code = 0;
  let data = {};
  let req_data = ctx.request.body;

  try{
    let _id = req_data._id;
    let draft_id = req_data.draft_id;
    await remove_draft({_id});
    if(draft_id != null){
      await update_use({draft_id});
    }
    let res_array = await Promise.all([find_use(),find_draft_main()]);
    let use = res_array[0];
    data.use = use[0];
    data.draft_main = res_array[1];
  }
  catch(err){
    code = 1;
    debug(err);
  }

  await next();
  ctx.body = {code,data};
})


app.use(bodyparser());

app.use(home.routes());

app.listen(3000,()=>{
  console.log("listen : 3000");
});
