const Koa = require("koa");
const Router = require("koa-router");
const find = require("./mongodb/find/find.js");

const app = new Koa();
const home = new Router();

const find_view = find.find_view;
const find_use = find.find_use;

function get_view(name){
  return async (ctx,next)=>{
    let data = {};
    try{
      data.view = await find_view(name);
      if(name === "main_model"){
        data.use = await find_use();
      }
    }
    catch(err){data = null;}
    await next();
    ctx.body = data;
  }
}

home.get("/api/main",get_view("main_model"));
home.get("/api/update",get_view("update_model"));
home.get("/api/diary",get_view("diary_model"));



app.use(home.routes());

app.listen(3000,()=>{
  console.log("listen : 3000");
});
