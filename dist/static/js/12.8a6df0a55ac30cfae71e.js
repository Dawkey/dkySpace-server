webpackJsonp([12],{Uyu3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("//Fk"),s=a.n(i),o=a("Dd8w"),n=a.n(o),d=a("BCo1"),r=a("NYxO"),_=a("F4+m"),l=a("p6fX"),c=a("C3xd"),u=a("PkWx"),h={name:"update_edit",components:{YesNo:d.a},mixins:[_.a,_.c],data:function(){return{version:"",date:"",markdown:"",format_flag:!0,textarea_height:"auto",active_button:!1,yes_no_show:!1,loading_flag:!1,create_flag:!1,edit_flag:!1,update_timer:null}},created:function(){this.set_login_flag(!0),this.get_update_data()},computed:n()({},Object(r.c)(["use","update"]),{html:function(){return!0===this.create_flag&&(this.date=Object(l.a)()),this.md_html(this.markdown)},update_id:function(){return null===this.use?null:this.use.update_id+1},router_id:function(){if("update_edit"==this.$route.name&&null!==this.update_id){this.create_flag=!1,this.edit_flag=!1;var t=parseInt(this.$route.params.id);if(!(t>this.update_id||t<=0)){if(t===this.update_id)return this.create_flag=!0,this.version=this.id_version(t),this.date=Object(l.a)(),this.markdown="",t;if(this.edit_flag=!0,0!=this.update.length){var e=this.update.length,a=this.update[e-t];this.version=a.version,this.date=a.date,this.markdown=a.markdown}return t}this.$router.replace("/404")}},show_flag:function(){return 0!=this.router_show&&0!=this.data_ready&&0!=this.update.length&&("update_edit"===this.$route.name&&(this.set_loading_show(!1),!0))}}),methods:n()({},Object(r.d)(["set_login_flag","set_update","set_loading_show","set_use"]),Object(r.b)(["add_talk_word"]),{get_update_data:function(){var t=this;0==this.update.length&&Object(c.e)().then(function(e){if(0==e.data.code){var a=e.data.data.view;t.set_update(a)}else console.log("服务器端获取update数据出现错误!")})},md_html:function(t){var e=t.split("\n"),a=/^\*\s.*/,i=!0,s=[];return e.forEach(function(t,o){if(a.test(t)){var n="<li>"+t.substr(2)+"</li>";s.push(n)}else o<e.length-1?i=!1:""!=t&&"*"!=t&&(i=!1)}),this.format_flag=i,s.join("")},id_version:function(t){var e=(t-1+10)/10,a="V"+e;return e%1==0&&(a+=".0"),a},commit_update_click:function(){var t=this;""!==this.markdown.trim()&&"*"!==this.markdown.trim()?!1!==this.format_flag?(this.active_button="commit",this.yes_no_show=!0,clearTimeout(this.update_timer),this.update_timer=setTimeout(function(){t.yes_no_show=!1,t.active_button=!1},4e3)):this.add_talk_word("输入格式有误,请以 '*+空格' 的markdown格式输入!"):this.add_talk_word("输入不能为空!")},commit_update:function(){var t=this;if(clearTimeout(this.update_timer),"token_right"!==this.token_status)return this.token_test_1(),this.yes_no_show=!1,void(this.active_button=!1);this.yes_no_show=!1,this.loading_flag=!0,this.add_talk_word("提交中...");var e={_id:this.router_id,version:this.version,date:this.date,markdown:this.markdown,content:this.html},a=new s.a(function(t){setTimeout(function(){t(0)},1500)});!0===this.edit_flag?s.a.all([Object(u.m)(e),a]).then(function(e){var a=e[0].data.code,i=e[0].data.data;if(0===a)t.set_update(i),t.add_talk_word("编辑成功!版本号为"+t.version+"的更新日志已发生变更"),t.$router.push("/update");else if(1===a)t.add_talk_word("服务器端出现错误,编辑失败!");else if(3===a){var s=i.error;t.token_test_2(s)}t.loading_flag=!1,t.active_button=!1}).catch(function(e){t.loading_flag=!1,t.active_button=!1,t.add_talk_word("axios请求出现错误,保存失败!"),console.log(e)}):!0===this.create_flag&&s.a.all([Object(u.d)(e),a]).then(function(e){var a=e[0].data.code,i=e[0].data.data;if(0===a)t.set_update(i.update),t.set_use(i.use),t.add_talk_word("提交成功!新增一篇更新日志,_id号为"+t.router_id+",版本升级至"+t.version),t.$router.push("/charge");else if(1===a)t.add_talk_word("服务器端出现错误,提交失败!");else if(3===a){var s=i.error;t.token_test_2(s)}t.loading_flag=!1,t.active_button=!1}).catch(function(e){t.loading_flag=!1,t.active_button=!1,t.add_talk_word("axios请求出现错误,保存失败!"),console.log(e)})},cancel_commit_update:function(){this.active_button=!1,this.yes_no_show=!1},yes_no_enter:function(){!1!==this.yes_no_show&&clearTimeout(this.update_timer)},yes_no_leave:function(){var t=this;!1!==this.yes_no_show&&(this.update_timer=setTimeout(function(){t.yes_no_show=!1,t.active_button=!1},4e3))}}),watch:{html:function(){var t=this;this.$refs.html&&this.$nextTick().then(function(){var e=t.$refs.html.offsetHeight;t.textarea_height=e+"px"})},format_flag:function(){!1===this.format_flag&&this.add_talk_word("输入格式有误,请以 '*+空格' 的markdown格式输入!")}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"update_edit"},[a("transition",{attrs:{name:"commit"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show_flag,expression:"show_flag"}],staticClass:"commit"},[a("div",{staticClass:"write_icon commit_icon"},[a("i",{staticClass:"icon-commit",class:{active:"commit"===t.active_button},on:{click:t.commit_update_click}})]),t._v(" "),a("yes-no",{staticClass:"yes-no",attrs:{father:"write",top:"6.5rem",show_flag:t.yes_no_show,loading_flag:t.loading_flag},on:{yes:t.commit_update,no:t.cancel_commit_update},nativeOn:{mouseenter:function(e){return t.yes_no_enter(e)},mouseleave:function(e){return t.yes_no_leave(e)}}})],1)]),t._v(" "),a("transition",{attrs:{name:"router"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show_flag,expression:"show_flag"}],staticClass:"update_edit_div"},[a("div",{staticClass:"_id"},[t._v("_id:"+t._s(t.router_id))]),t._v(" "),a("div",{staticClass:"write_icon update_icon"},[a("i",{staticClass:"icon-update"})]),t._v(" "),a("div",{staticClass:"edit"},[a("div",{staticClass:"version"},[t._v("\n          "+t._s(t.version)+"\n        ")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],class:{wrong_format:!t.format_flag},style:{height:t.textarea_height},attrs:{type:"text",name:"edit",placeholder:"内容(以'*+空格'的格式)",spellcheck:"false"},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"view"},[a("div",{staticClass:"head"},[a("div",{staticClass:"version"},[a("div",{staticClass:"version_circle"}),t._v("\n            "+t._s(t.version)+"\n          ")]),t._v(" "),a("div",{staticClass:"date"},[a("i",{staticClass:"icon-date"}),t._v("\n            "+t._s(t.date)+"\n          ")])]),t._v(" "),a("ul",{ref:"html",staticClass:"content",domProps:{innerHTML:t._s(t.html)}})])])])],1)},staticRenderFns:[]};var f=a("VU/8")(h,m,!1,function(t){a("zmEd")},"data-v-22340b70",null);e.default=f.exports},zmEd:function(t,e){}});
//# sourceMappingURL=12.8a6df0a55ac30cfae71e.js.map