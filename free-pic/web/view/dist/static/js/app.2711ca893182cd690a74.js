webpackJsonp([1],{"3Llo":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),o={name:"Dashboard",data:function(){return{navList:[{name:"/element",navItem:"element"},{name:"/Echart",navItem:"Echart"}],isTabBar:!1}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"big",staticStyle:{height:"100%"}},[t("el-row",{staticClass:"tac",staticStyle:{height:"100%"}},[t("el-col",{staticStyle:{height:"100%"},attrs:{span:12}},[t("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100%"},attrs:{"default-active":"this.$router.path",router:"",mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:this.handleOpen,close:this.handleClose}},[t("el-menu-item",{key:"1",attrs:{index:"/upload"}},[t("i",{staticClass:"el-icon-menu"}),this._v(" "),t("span",{attrs:{slot:"title"},slot:"title"},[this._v("upload")])])],1)],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(o,r,!1,function(e){a("3Llo")},"data-v-29328903",null).exports,i={name:"App",components:{Dashboard:n}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var u=a("VU/8")(i,l,!1,function(e){a("y+Q9")},null,null).exports,c=a("/ocq"),d={name:"page1",data:function(){return{imgName:"",imgUrl:"",isSuccess:!1,upToken:{token:"",key:""}}},methods:{beforeUpload:function(e){this.upToken.key=e.uid+"-"+e.name},uploadSuccess:function(e){this.imgName=e.key,this.isSuccess=!0,this.$notify({title:"upload successfully",type:"success"}),this.imgUrl="https://pic.gocloudcoder.com/"+this.imgName,this.fileList.name=this.imgName,this.fileList.url=this.imgUrl},getToken:function(){var e=this;this.$axios.get("http://gocloudcoder.com:8081/upload").then(function(t){console.log(t.data.token),e.upToken.token=t.data.token})},copy:function(e){var t=e,a=document.createElement("input");a.value=t,document.body.appendChild(a),a.select(),console.log(a.value),document.execCommand("copy"),this.$message({message:"复制成功",type:"success"}),a.remove()}},mounted:function(){this.getToken()}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg"},[a("div",{staticClass:"upload"},[a("h1",[e._v("welcome to my free-pic")]),e._v(" "),a("el-upload",{attrs:{accept:".png, .jpg, .jpeg, .webp, .gif, mp3",drag:"",action:"http://upload-z2.qiniup.com","before-upload":e.beforeUpload,"on-success":e.uploadSuccess,data:e.upToken,multiple:"",limit:1}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])])]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isSuccess,expression:"isSuccess"}],attrs:{type:"success"},on:{click:function(t){return e.copy(e.imgUrl)}}},[e._v("点击复制链接")])],1)])},staticRenderFns:[]};var m=a("VU/8")(d,p,!1,function(e){a("vty/")},"data-v-406b8177",null).exports,h={name:"login",data:function(){return{ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{required:!0,pattern:"[a-zA-Z-]",message:"只支持英文和-",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"长度在6到16位",trigger:"blur"}]}}},methods:{register:function(){var e=new URLSearchParams;e.append("username",this.ruleForm.username),e.append("password",this.ruleForm.password),this.$axios({method:"post",url:"http://localhost:8081/api/v3/login/add",data:e}).then(function(e){"success add user"===e.data.message?alert("注册成功"):alert("该用户已经存在")})},trueLogin:function(){var e=this,t=new URLSearchParams;t.append("username",this.ruleForm.username),t.append("password",this.ruleForm.password),this.$axios({method:"post",url:"http://localhost:8081/api/v3/trueLogin",data:t}).then(function(t){if(console.log(t.data),"login successfully"===t.data.message){e.$router.push("/Dashboard");var a=t.data.data;localStorage.setItem("currentUser_token",a)}else alert("用户名/密码错误")})}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-layout"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"status-icon":"",rules:e.rules,model:e.ruleForm,"label-width":"100px"}},[a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"用户名",prop:"username"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.trueLogin}},[e._v("登录")])],1)],1)],1)},staticRenderFns:[]};var g=a("VU/8")(h,f,!1,function(e){a("y/33")},"data-v-140db771",null).exports;s.default.use(c.a);var v=new c.a({routes:[{path:"/upload",name:"upload",component:m},{path:"/login",name:"login",component:g},{path:"/Dashboard",name:"Dashboard",component:n},{path:"",redirect:n}]}),y=a("mtWM"),b=a.n(y),_=a("zL8q"),w=a.n(_);a("tvR6");s.default.prototype.$axios=b.a,s.default.config.productionTip=!1,s.default.use(w.a),new s.default({el:"#app",router:v,render:function(e){return e(u)}})},tvR6:function(e,t){},"vty/":function(e,t){},"y+Q9":function(e,t){},"y/33":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2711ca893182cd690a74.js.map