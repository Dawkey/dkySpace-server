# Vue.js + koa2 + mongodb 搭建的个人博客系统(后端部分)

> 本部分主要负责个人博客数据的发送,修改和存储,后端部分只涉及到`koa2`和`mongodb`,对于`vue`的具体内容请移步到[前端部分](https://github.com/Dawkey/dkySpace)

**博客地址:**  
[https://dawkey.top](https://dawkey.top)

**前端部分:**  
[https://github.com/Dawkey/dkySpace](https://github.com/Dawkey/dkySpace)

## 1. 技术栈:

> 用到的轮子:flushed:

* `koa`作为后端web框架;
* `koa-router`路由中间件;
* `koa-bodyparser`更方便的处理`POST`请求;
* `koa-jwt`用于`jsonwebtoken`的登录认证;
* `koa-static`用于访问静态文件(最终部署时用到);
* `koa2-history-api-fallback`使用`vue-router`的`history`模式时,对不符合的请求返回静态文件;
* `koa-compress`用于`gzip`压缩.
* `mongoose`更方便的操控`mongodb`数据.

## 2. 后台管理界面:

具体参照[前端部分](https://github.com/Dawkey/dkySpace).

## 3. 博客搭建相关的:

> 因为本人目前还只学到了`Node`的一点皮毛,对后端只了解些许,肚子里面没什么货,所有接下来写的内容应该是十分浅的.

### 3.1 `mongodb`的交互

> 所有博客数据都是存在`mongodb`里的.

`mongodb`具体的安装这里就不具体说了,如前面所说的,是通过`mongoose`来操控`mongodb`,`mongoose`每一次交互都是返回一个`Promise`,对于我们在编写是十分方便的.(关于`mongodb`和`mongoose`的具体使用,网上已经有许多了,这里就不展开说了)

> 这里吐槽一下,`mongodb`比`mysql`好用太多,老博客用的是`mysql`,当时用`php`写交互的时候让人真是头大,当然也可能是自己水平有限才这么认为吧:joy:

### 3.2 `jwt`实现的登录认证

这一部分内容,我专门写了一篇博客[koa2下jwt实现的登录认证](https://dawkey.top/article/13),欢迎移步去看一看.

### 3.3 服务器上的部署

博客最终部署在阿里云上,`pm2`跑起来,`nginx`做反向代理.

## 4. 最后

可以说是写的非常少,因为后端的部分,涉及到的操作层面更多,展开写的话,就变成写一个个的步骤了,相关的操作步骤网上已经有许多了,故不再赘述.

更多是给想要搭博客的朋友提供一个思路吧.

## 5. TODO

* 实现部署的自动化
