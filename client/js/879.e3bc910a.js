"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[879],{1879:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var s=a(3396),o=a(7139),n=a(9242);const l={class:"login__wrapper"},r={class:"login__inner"},i=(0,s.Uk)("로그인 "),u=(0,s.Uk)("사용자 생성 ");function c(e,t,a,c,d,p){const m=(0,s.up)("ui-text-field"),h=(0,s.up)("ui-button"),w=(0,s.up)("ui-form"),f=(0,s.up)("app-content-wrapper");return(0,s.wg)(),(0,s.j4)(f,{pageTitle:d.pageTitle},{default:(0,s.w5)((()=>[(0,s._)("div",l,[(0,s._)("div",r,[(0,s.Wm)(w,{autocomplete:"off",class:(0,o.C_)("login__frm"),name:"loginForm",ref:"loginForm",onOnsubmit:p.onSubmit,onCopy:t[2]||(t[2]=(0,n.iM)((()=>{}),["prevent"])),onPaste:t[3]||(t[3]=(0,n.iM)((()=>{}),["prevent"]))},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{type:"text",name:"userId",title:"아이디 입력",placeholder:"아이디",rules:"required|max:10",modelValue:d.userId,"onUpdate:modelValue":t[0]||(t[0]=e=>d.userId=e)},null,8,["modelValue"]),(0,s.Wm)(m,{type:"password",name:"userPw",title:"비밀번호 입력",placeholder:"비밀번호",rules:"required|min:8|max:15",modelValue:d.userPw,"onUpdate:modelValue":t[1]||(t[1]=e=>d.userPw=e)},null,8,["modelValue"]),(0,s.Wm)(h,{type:"submit",color:"primary",class:(0,o.C_)("mt--15"),block:!0},{default:(0,s.w5)((()=>[i])),_:1}),e.isDevelopment?((0,s.wg)(),(0,s.j4)(h,{key:0,type:"button",color:"secondary",class:(0,o.C_)("mt--15"),block:!0,onClick:p.addUser},{default:(0,s.w5)((()=>[u])),_:1},8,["onClick"])):(0,s.kq)("",!0)])),_:1},8,["onOnsubmit"])])])])),_:1},8,["pageTitle"])}var d=a(8822),p=a(6597),m={name:"app-login",data(){return{pageTitle:"로그인",userId:"",userPw:""}},created(){(new p.p).setPageTitle(this.pageTitle)},methods:{async onSubmit(e){const{data:t}=await this.$http.post("/auth/signin",e),a=t?.accessToken;if(a){this.$http.defaults.headers.common["Authorization"]=`Bearer ${a}`;const e=await this.$store.dispatch("Auth/LOGIN",a);"ok"===e&&this.$router.push("/")}},async addUser(){const e={userId:this.userId,userPw:this.userPw,roleId:""},t=await this.validationCheck();if(!t)return;const a=await d.wW.confirmSuccess("사용자를 생성하시겠습니까?");a&&this.$http.post("/auth/user",e).then((e=>{d.wW.toastSuccess("사용자가 생성되었습니다.")}))},async validationCheck(){const e=await this.$refs["loginForm"].validateAll();return e.valid}}},h=a(89);const w=(0,h.Z)(m,[["render",c],["__scopeId","data-v-3fe5accc"]]);var f=w}}]);
//# sourceMappingURL=879.e3bc910a.js.map