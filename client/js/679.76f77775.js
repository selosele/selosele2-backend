"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[679],{6597:function(e,t,s){var n=s(4460),o=s(4722);class a{constructor(){}setPageTitle(e){(0,o.UE)(e)?document.title=`${e} - ${n.Z.getters.blogConfig.title}`:document.title=n.Z.getters.blogConfig.title}}const i=new a;t["Z"]=i},679:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var n=s(3396),o=s(7139);const a={class:"login__wrapper"},i={class:"login__inner"},r=(0,n._)("button",{type:"submit",class:"login__btn login__btn--submit"},"로그인",-1);function l(e,t,s,l,u,d){const c=(0,n.up)("ui-text-field"),p=(0,n.up)("ui-form"),m=(0,n.up)("app-content-wrapper");return(0,n.wg)(),(0,n.j4)(m,{pageTitle:u.pageTitle},{default:(0,n.w5)((()=>[(0,n._)("div",a,[(0,n._)("div",i,[(0,n.Wm)(p,{autocomplete:"off",class:(0,o.C_)("login__frm"),name:"loginForm",onOnSubmit:d.onSubmit},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{type:"text",name:"userId",title:"아이디 입력",placeholder:"아이디",modelValue:u.userId,"onUpdate:modelValue":t[0]||(t[0]=e=>u.userId=e),rules:"required|maxLength:10"},null,8,["modelValue"]),(0,n.Wm)(c,{type:"password",name:"userPw",title:"비밀번호 입력",placeholder:"비밀번호",modelValue:u.userPw,"onUpdate:modelValue":t[1]||(t[1]=e=>u.userPw=e),rules:"required"},null,8,["modelValue"]),r,e.isDevelopment?((0,n.wg)(),(0,n.iD)("button",{key:0,type:"button",class:"login__btn login__btn--add",onClick:t[2]||(t[2]=(...e)=>d.addUser&&d.addUser(...e))},"사용자 생성")):(0,n.kq)("",!0)])),_:1},8,["onOnSubmit"])])])])),_:1},8,["pageTitle"])}var u=s(2969),d=s(7831),c=s(1197),p=s(6597),m={name:"app-login",components:{UiForm:u.Z,UiTextField:d.Z},data(){return{pageTitle:"로그인",userId:"",userPw:""}},created(){p.Z.setPageTitle(this.pageTitle)},methods:{async onSubmit(e){try{let t=await this.$http.post("/auth/signin",e);const s=t.data.accessToken;if(s){this.$http.defaults.headers.common["Authorization"]=`Bearer ${s}`;const e=await this.$store.dispatch("LOGIN",s);"ok"===e&&this.$router.push("/")}}catch(t){c.Z.toastError(t.response.data.message)}},async addUser(){const e={userId:this.userId,userPw:this.userPw,roleId:""};if(!e.userId.trim())return void c.Z.toastWarning("아이디를 입력하세요.");if(!e.userPw.trim())return void c.Z.toastWarning("비밀번호를 입력하세요.");const t=await c.Z.confirmSuccess("사용자를 생성하시겠습니까?");t&&this.$http.post("/auth/signup",e).then((e=>{c.Z.toastSuccess("사용자 생성에 성공했습니다.")}))}}},g=s(89);const h=(0,g.Z)(m,[["render",l]]);var f=h}}]);
//# sourceMappingURL=679.76f77775.js.map