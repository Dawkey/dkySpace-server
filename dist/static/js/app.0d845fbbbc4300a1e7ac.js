webpackJsonp([14],{"+4cW":function(t,e){},"+Kdm":function(t,e){},"14Gj":function(t,e){},E4Ja:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};n.d(a,"router_show",function(){return H}),n.d(a,"loading_show",function(){return L}),n.d(a,"talk_word",function(){return z}),n.d(a,"talk_times",function(){return G}),n.d(a,"talk_flag",function(){return J}),n.d(a,"talk_done",function(){return X}),n.d(a,"data_ready",function(){return Y}),n.d(a,"main",function(){return q}),n.d(a,"use",function(){return B}),n.d(a,"tag_name",function(){return Q}),n.d(a,"classify_name",function(){return Z}),n.d(a,"archive_name",function(){return tt}),n.d(a,"tag",function(){return et}),n.d(a,"classify",function(){return nt}),n.d(a,"archive",function(){return at}),n.d(a,"update",function(){return it}),n.d(a,"diary",function(){return ot}),n.d(a,"_id",function(){return st}),n.d(a,"login_flag",function(){return rt}),n.d(a,"draft_main",function(){return ut}),n.d(a,"draft_flag",function(){return ct}),n.d(a,"kcharge_flag",function(){return lt}),n.d(a,"combine_flag",function(){return _t}),n.d(a,"token_status",function(){return dt});var i={};n.d(i,"data_handle",function(){return Mt}),n.d(i,"add_talk_word",function(){return Nt});var o=n("7+uW"),s=n("Dd8w"),r=n.n(s),u=n("NYxO"),c={name:"Loading",computed:r()({},Object(u.c)(["loading_show"]))},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.loading_show,expression:"loading_show"}],staticClass:"loading"},[e("div",{staticClass:"loading-1"}),this._v(" "),e("div",{staticClass:"loading-2"}),this._v(" "),e("div",{staticClass:"loading-3"}),this._v(" "),e("div",{staticClass:"loading-4"})])},staticRenderFns:[]};var _=n("VU/8")(c,l,!1,function(t){n("xfkm")},"data-v-3fe76a7a",null).exports,d=n("//Fk"),f=n.n(d);function h(t,e,n){return new f.a(function(a,i){!1===n.getters.talk_flag&&i("talk_is_break"),setTimeout(function(){t.innerHTML=e,a()},115)})}n("mvHQ"),n("p6fX");var m={name:"Mayuri",data:function(){return{talk_show:!1,talk_show_timer:null,mouse_open_flag:!1}},computed:r()({},Object(u.c)(["talk_word","talk_times","talk_flag","talk_done","kcharge_flag","combine_flag"])),created:function(){},methods:r()({},Object(u.d)(["set_talk_flag","set_talk_done"]),{mayuri_click:function(){var t=this;!1!==this.talk_done&&!0!==this.mouse_open_flag&&(this.mouse_open_flag=!0,setTimeout(function(){t.mouse_open_flag=!1},700))},start_type:function(){var t=this;clearTimeout(this.talk_show_timer),!0===this.talk_done&&(this.$refs.talk_span.innerHTML=""),this.talk_show=!0,this.set_talk_done(!1),function(t,e,n){var a=e.split(""),i=f.a.resolve();return a.reduce(function(e,a,o){var s=e+a;return 1===o&&(i=h(t,e,n)),i=i.then(function(){return h(t,s,n)}),s}),i}(this.$refs.talk_span,this.talk_word,this.$store).then(function(){t.set_talk_done(!0),t.talk_show_timer=setTimeout(function(){t.talk_show=!1},5e3)}).catch(function(e){"talk_is_break"===e?t.set_talk_flag(!0):(console.log("Type程序出现错误,原因如下:\n"),console.log(e))})}}),watch:{talk_times:function(){!1!==this.talk_flag&&("first"!==this.talk_flag?!0!==this.talk_done?this.set_talk_flag(!1):this.start_type():this.set_talk_flag(!0))},talk_flag:function(){!0===this.talk_flag&&this.start_type()},talk_done:function(){!0===this.talk_done&&!1===this.talk_flag&&this.set_talk_flag(!0)}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mayuri",class:[{zindex_up:t.talk_show},{zindex_down:!t.combine_flag&&"charge"!==t.$route.name}]},[n("div",{staticClass:"mayuri-img",on:{click:t.mayuri_click}},[n("div",{staticClass:"expression",class:[{start_talk:!t.talk_done},{end_talk:t.talk_done},{mouse_open:t.mouse_open_flag}]})]),t._v(" "),n("transition",{attrs:{name:"talk"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.talk_show,expression:"talk_show"}],staticClass:"talk",class:{kstyle:!1!==t.kcharge_flag}},[n("div",{staticClass:"talk-box"},[n("span",{staticClass:"talk-word"},[n("span",{ref:"talk_span",staticClass:"word"}),t._v(" "),n("span",{staticClass:"cursor",class:{star:t.talk_done}},[t._v("|")])])])])])],1)},staticRenderFns:[]};var k=n("VU/8")(m,g,!1,function(t){n("TG3K")},"data-v-c086cc3c",null).exports,p={name:"Nav2",data:function(){return{nav:["home","tag","classify","archive","about_me","update"],nav_flag:!1}},computed:r()({},Object(u.c)(["talk_done","login_flag","token_status"])),methods:r()({},Object(u.d)(["set_token_status"]),Object(u.b)(["add_talk_word"]),{nav_show:function(){this.nav_flag=!this.nav_flag},nav_hide:function(){this.nav_flag=!1},login_click:function(){"login"!==this.$route.name&&(this.login_flag?this.$router.push("/home"):"token_right"===this.token_status?this.$router.push("/charge"):("token_expire"===this.token_status?this.add_talk_word("当前token已过期,请重新登录以更新token,Dawkey~"):"token_wrong"===this.token_status&&(localStorage.removeItem("token"),this.set_token_status("token_no"),this.add_talk_word("当前token无效!已被移除.")),this.$router.push("/login")))}})},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav_2_body"},[n("div",{staticClass:"nav_2"},[n("div",{staticClass:"nav_left"},[t._v("\n      Dawkey's blog\n    ")]),t._v(" "),n("div",{staticClass:"min-mayuri"},[n("div",{staticClass:"in",class:{talk:!t.talk_done}}),t._v(" "),n("div",{staticClass:"out",class:{talk:!t.talk_done}})]),t._v(" "),n("div",{staticClass:"nav_right"},[n("ul",{directives:[{name:"show",rawName:"v-show",value:!t.login_flag,expression:"!login_flag"}],staticClass:"nav",class:{nav_show:t.nav_flag}},t._l(t.nav,function(e){return n("li",[n("router-link",{attrs:{tag:"div",to:"/"+e}},[t._v("\n            "+t._s(e)+"\n          ")])],1)})),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.login_flag,expression:"!login_flag"}],staticClass:"menu",on:{click:t.nav_show,blur:t.nav_hide}},[n("i",{staticClass:"icon-menu"})]),t._v(" "),n("transition",{attrs:{name:"login"}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"draft"!=t.$route.name&&"edit"!=t.$route.name&&"update_edit"!=t.$route.name,expression:"$route.name != 'draft' && $route.name != 'edit' && $route.name != 'update_edit'"}],staticClass:"icon-login",class:{out_login:t.login_flag},on:{click:t.login_click}})]),t._v(" "),n("transition",{attrs:{name:"charge"}},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:"draft"===t.$route.name||"edit"===t.$route.name||"update_edit"===t.$route.name,expression:"$route.name === 'draft' || $route.name === 'edit' || $route.name === 'update_edit'"}],staticClass:"icon-charge",attrs:{tag:"i",to:"/charge"}})],1)],1)])])},staticRenderFns:[]};var w=n("VU/8")(p,v,!1,function(t){n("RKU4")},"data-v-fa675eda",null).exports,y={name:"LeftIcon",components:{Mayuri:k},data:function(){return{nav:["home","tag","classify","archive","about_me"],token_height:"50%"}},computed:r()({},Object(u.c)(["login_flag","combine_flag","token_status"])),methods:r()({},Object(u.b)(["add_talk_word"]),{set_token_height:function(){var t=localStorage.getItem("token").split(".")[1],e=window.atob(t),n=JSON.parse(e).exp-Math.floor(Date.now()/1e3),a=100-Math.floor(n/1296e3*100);return this.token_height=a+"%",n},get_expire_time:function(){if("token_expire"===this.token_status)this.token_height="100%",this.add_talk_word("当前token已过期,请重新登录以更新token,Dawkey~");else if("token_right"===this.token_status){var t=this.set_token_height(),e=Math.floor(t/86400),n=t%86400,a=Math.floor(n/3600),i=n%3600,o=Math.floor(i/60),s=i%60;this.add_talk_word("token将于'"+e+"天"+a+"时"+o+"分"+s+"秒'后到期~")}}}),watch:{token_status:function(){"token_expire"===this.token_status?this.token_height="100%":"token_right"===this.token_status&&this.set_token_height()}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"left_icon",class:{zindex_down:!t.combine_flag}},[t._l(t.nav,function(e){return n("li",[n("transition",{attrs:{name:"icon"}},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.login_flag,expression:"!login_flag"}],staticClass:"button_icon",attrs:{tag:"div",to:"/"+e,title:e}},[n("i",{class:"icon-"+e})])],1)],1)}),t._v(" "),n("transition",{attrs:{name:"token"}},[!t.login_flag||"token_right"!==t.token_status&&"token_expire"!==t.token_status?t._e():n("li",{staticClass:"token",on:{click:t.get_expire_time}},[n("div",{staticClass:"button_icon"},[n("i",{staticClass:"icon-token"}),t._v(" "),n("div",{staticClass:"token_shadow_div"},[n("div",{staticClass:"token_shadow",style:{height:t.token_height}})])])])])],2)},staticRenderFns:[]};var C=n("VU/8")(y,b,!1,function(t){n("14Gj")},"data-v-2f3bf42e",null).exports,$=n("mtWM"),x=n.n($),j=n("PkWx"),M={name:"RightIcon",created:function(){var t=this;x.a.interceptors.request.use(function(t){var e=localStorage.getItem("token");return e&&"post"===t.method&&(t.headers.common.Authorization="Bearer "+e),t},function(t){return f.a.reject(t)}),localStorage.getItem("token")?Object(j.a)().then(function(e){var n=e.data.code;if(0===n)t.set_token_status("token_right");else if(3===n){"jwt expired"===e.data.data.error?t.set_token_status("token_expire"):t.set_token_status("token_wrong")}}):this.set_token_status("token_no")},computed:r()({},Object(u.c)(["login_flag","token_status"])),methods:r()({},Object(u.d)(["set_token_status"]),Object(u.b)(["add_talk_word"]),{login_click:function(){"login"!==this.$route.name&&(this.login_flag?this.$router.push("/home"):"token_right"===this.token_status?this.$router.push("/charge"):("token_expire"===this.token_status?this.add_talk_word("当前token已过期,请重新登录以更新token,Dawkey~"):"token_wrong"===this.token_status&&(localStorage.removeItem("token"),this.set_token_status("token_no"),this.add_talk_word("当前token无效!已被移除.")),this.$router.push("/login")))},top_click:function(){scrollTo(0,0)}})},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right_icon"},[n("ul",{staticClass:"right_top"},[n("transition",{attrs:{name:"login"}},[n("li",{directives:[{name:"show",rawName:"v-show",value:"draft"!=t.$route.name&&"edit"!=t.$route.name&&"update_edit"!=t.$route.name,expression:"$route.name != 'draft' && $route.name != 'edit' && $route.name != 'update_edit'"}],staticClass:"button_icon login",class:[{active_login:"login"===t.$route.name},{out_login:t.login_flag},{token_right:"token_right"===t.token_status}],attrs:{title:"login"},on:{click:t.login_click}},[n("i",{staticClass:"icon-login"})])]),t._v(" "),n("transition",{attrs:{name:"charge"}},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:"draft"===t.$route.name||"edit"===t.$route.name||"update_edit"===t.$route.name,expression:"$route.name === 'draft' || $route.name === 'edit' || $route.name === 'update_edit'"}],staticClass:"button_icon charge",attrs:{tag:"li",to:"/charge",title:"charge"}},[n("i",{staticClass:"icon-charge"})])],1),t._v(" "),n("transition",{attrs:{name:"update"}},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.login_flag,expression:"!login_flag"}],staticClass:"button_icon update",attrs:{tag:"li",to:"/update",title:"update"}},[n("i",{staticClass:"icon-update"})])],1)],1),t._v(" "),n("div",{staticClass:"right_bottom"},[n("div",{staticClass:"button_icon top",on:{click:t.top_click}},[n("i",{staticClass:"icon-top"})])])])},staticRenderFns:[]};var O={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"copyright"},[t._v("\n    Copyright © 2018 Dawkey\n  ")]),t._v(" "),n("div",{staticClass:"powered"},[n("div",[t._v("\n      Powered by \n      "),n("a",{attrs:{href:"https://github.com/wwk321/dkySpace",target:"_blank"}},[t._v("\n        Dawkey\n      ")])]),t._v(" "),n("div",[t._v("|")]),t._v(" "),n("div",[n("a",{attrs:{href:"http://www.miitbeian.gov.cn",target:"_blank"}},[t._v("\n        陕ICP备18003281号\n      ")])])])])}]};var P={name:"App",components:{Loading:_,Mayuri:k,Nav2:w,LeftIcon:C,RightIcon:n("VU/8")(M,N,!1,function(t){n("+Kdm")},"data-v-6ac022e9",null).exports,Footer:n("VU/8")({name:"Footer"},O,!1,function(t){n("+4cW")},"data-v-67dd51eb",null).exports},computed:r()({},Object(u.c)(["router_show"]))},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("loading"),t._v(" "),n("mayuri"),t._v(" "),n("left-icon"),t._v(" "),n("nav2"),t._v(" "),n("div",{staticClass:"body",class:{write:t.router_show&&("draft"===t.router_show.slice(0,5)||"edit"===t.router_show.slice(0,4)||"update_edit"===t.router_show.slice(0,11))}},[n("keep-alive",[n("router-view",{staticClass:"router-class"})],1)],1),t._v(" "),n("right-icon"),t._v(" "),n("Footer")],1)},staticRenderFns:[]};var D=n("VU/8")(P,T,!1,function(t){n("XSMr")},"data-v-adb77192",null).exports,E=n("/ocq");o.a.use(E.a);var F=function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"DGUT"))},I=null,S=new E.a({mode:"history",scrollBehavior:function(t,e,n){return new f.a(function(t){clearTimeout(I),I=setTimeout(function(){t({x:0,y:0})},100)})},routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"vkz9"))}},{path:"/tag",name:"tag",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"ss/o"))}},{path:"/classify",name:"classify",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"Ud2C"))}},{path:"/archive",name:"archive",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"PxSN"))}},{path:"/about_me",name:"about_me",component:function(){return n.e(8).then(n.bind(null,"oBDf"))}},{path:"/update",name:"update",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"1y7Q"))}},{path:"/article/:id(\\d+)",name:"article",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"YDnK"))}},{path:"/login",name:"login",component:function(){return n.e(7).then(n.bind(null,"Kq2Y"))}},{path:"/charge",name:"charge",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"sP5F"))}},{path:"/draft/:id(\\d+)",name:"draft",component:F},{path:"/edit/:id(\\d+)",name:"edit",component:F},{path:"/update_edit/:id(\\d+)",name:"update_edit",component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"Uyu3"))}},{path:"*",name:"404",component:function(){return n.e(11).then(n.bind(null,"6lah"))}}]}),U=null;function R(t){var e=S.app.$store;e&&e.commit("set_router_show",t)}function A(t){var e=S.app.$store;if(e){if(e.state.login_flag===t)return;e.commit("set_login_flag",t)}}S.beforeEach(function(t,e,n){clearTimeout(U),R(!1),function(t){var e=S.app.$store;if(e){if(e.state.loading_show===t)return;e.commit("set_loading_show",t)}}(!0);var a=t.path.slice(1);"charge"===t.name||"draft"===t.name||"edit"===t.name||"update_edit"===t.name?(document.title="dkySpace's charge",A(!0)):("article"!=t.name&&(document.title="Dawkey's small space"),A(!1)),"404"===t.name&&(a="404"),U=setTimeout(function(){R(a)},500),n()});var K,V=S,W={router_show:!1,loading_show:!0,talk_word:"",talk_times:0,talk_flag:"first",talk_done:!0,data_ready:!1,use:null,main:[],tag_name:[],classify_name:[],archive_name:[],tag:{},classify:{},archive:{},update:[],diary:[],_id:0,login_flag:!1,draft_main:[],draft_flag:!1,kcharge_flag:!1,combine_flag:!0,token_status:!1},H=function(t){return t.router_show},L=function(t){return t.loading_show},z=function(t){return t.talk_word},G=function(t){return t.talk_times},J=function(t){return t.talk_flag},X=function(t){return t.talk_done},Y=function(t){return t.data_ready},q=function(t){return t.main},B=function(t){return t.use},Q=function(t){return t.tag_name},Z=function(t){return t.classify_name},tt=function(t){return t.archive_name},et=function(t){return t.tag},nt=function(t){return t.classify},at=function(t){return t.archive},it=function(t){return t.update},ot=function(t){return t.diary},st=function(t){return t._id},rt=function(t){return t.login_flag},ut=function(t){return t.draft_main},ct=function(t){return t.draft_flag},lt=function(t){return t.kcharge_flag},_t=function(t){return t.combine_flag},dt=function(t){return t.token_status},ft=n("bOdI"),ht=n.n(ft),mt="set_talk_word",gt="set_talk_times",kt="set_data_ready",pt="set_main",vt="set_use",wt="set_tag_name",yt="set_classify_name",bt="set_archive_name",Ct="set_tag",$t="set_classify",xt="set_archive",jt=(K={},ht()(K,"set_router_show",function(t,e){t.router_show=e}),ht()(K,"set_loading_show",function(t,e){t.loading_show=e}),ht()(K,mt,function(t,e){t.talk_word=e}),ht()(K,gt,function(t,e){t.talk_times=e}),ht()(K,"set_talk_flag",function(t,e){t.talk_flag=e}),ht()(K,"set_talk_done",function(t,e){t.talk_done=e}),ht()(K,kt,function(t,e){t.data_ready=e}),ht()(K,pt,function(t,e){t.main=e}),ht()(K,vt,function(t,e){t.use=e}),ht()(K,wt,function(t,e){t.tag_name=e}),ht()(K,yt,function(t,e){t.classify_name=e}),ht()(K,bt,function(t,e){t.archive_name=e}),ht()(K,Ct,function(t,e){t.tag=e}),ht()(K,$t,function(t,e){t.classify=e}),ht()(K,xt,function(t,e){t.archive=e}),ht()(K,"set_update",function(t,e){t.update=e}),ht()(K,"set_diary",function(t,e){t.diary=e}),ht()(K,"set__id",function(t,e){t._id=e}),ht()(K,"set_login_flag",function(t,e){t.login_flag=e}),ht()(K,"set_draft_main",function(t,e){t.draft_main=e}),ht()(K,"set_draft_flag",function(t,e){t.draft_flag=e}),ht()(K,"set_kcharge_flag",function(t,e){t.kcharge_flag=e}),ht()(K,"add_tag_key",function(t,e){t.tag[e]=[]}),ht()(K,"add_classify_key",function(t,e){t.classify[e]=[]}),ht()(K,"set_combine_flag",function(t,e){t.combine_flag=e}),ht()(K,"set_token_status",function(t,e){t.token_status=e}),K);function Mt(t,e){var n=t.commit,a=e.view,i=e.use,o=a,s=i.tag,r=i.classify,u=function(t,e){for(var n=[],a=t;a>=e;a--)n.push(a);return n}(parseInt(o[0].date.slice(0,4)),parseInt(o[o.length-1].date.slice(0,4))),c={},l={},_={};s.forEach(function(t){c[t]=[]}),r.forEach(function(t){l[t]=[]}),u.forEach(function(t){_[t]=[]}),o.forEach(function(t){var e={};e._id=t._id,e.title=t.title,e.date=t.date,e.date_mobile=t.date.slice(0,10);var n=t.date.slice(0,4);Array.isArray(c[t.tag])&&Array.isArray(l[t.classify])&&Array.isArray(_[n])&&(c[t.tag].push(e),l[t.classify].push(e),_[n].push(e))});n(pt,o),n(vt,i),n(wt,s),n(yt,r),n(bt,u),n(Ct,c),n($t,l),n(xt,_),n(kt,!0)}function Nt(t,e){var n=t.commit,a=t.state.talk_times+1;n(mt,e),n(gt,a)}n("sax8");o.a.use(u.a);var Ot=new u.a.Store({state:W,getters:a,mutations:jt,actions:i,strict:!1,plugins:[]});n("E4Ja"),n("tx0o");new o.a({el:"#app",router:V,store:Ot,render:function(t){return t(D)}})},PkWx:function(t,e,n){"use strict";e.c=function(t){return i.a.post("/api/post/create_draft",t)},e.k=function(t){return i.a.post("/api/post/update_draft",t)},e.g=function(t){return i.a.post("/api/post/remove_draft",t)},e.b=function(t){return i.a.post("/api/post/create_article",t)},e.i=function(t){return i.a.post("/api/post/update_article",t)},e.f=function(t){return i.a.post("/api/post/remove_article",t)},e.d=function(t){return i.a.post("/api/post/create_update",t)},e.m=function(t){return i.a.post("/api/post/update_update",t)},e.h=function(t){return i.a.post("/api/post/remove_update",t)},e.l=function(t){return i.a.post("/api/post/update_tag",t)},e.j=function(t){return i.a.post("/api/post/update_classify",t)},e.e=function(t){return i.a.post("/api/post/login",t)},e.a=function(){return i.a.post("/api/post/check_token")};var a=n("mtWM"),i=n.n(a)},RKU4:function(t,e){},TG3K:function(t,e){},XSMr:function(t,e){},p6fX:function(t,e,n){"use strict";function a(t){return t<10&&(t="0"+t),t}e.a=function(t){var e=new Date;if(t){var n=e.getTime()+t;e=new Date(n)}var i=a(e.getFullYear()),o=a(e.getMonth()+1),s=a(e.getDate()),r=a(e.getHours()),u=a(e.getMinutes()),c=a(e.getSeconds());return i+"/"+o+"/"+s+"/"+r+":"+u+":"+c}},tx0o:function(t,e){},xfkm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0d845fbbbc4300a1e7ac.js.map