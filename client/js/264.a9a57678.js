"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[264],{6597:function(e,l,o){o.d(l,{a:function(){return i}});var a=o(9266),t=o(8822);class g{constructor(){}setPageTitle(e){(0,t.UE)(e)?document.title=`${e} - ${a.Z.state.BlogConfig.data?.title}`:document.title=a.Z.state.BlogConfig.data?.title}}const i=new g},1264:function(e,l,o){o.r(l),o.d(l,{default:function(){return L}});var a=o(3396),t=o(7139);const g=e=>((0,a.dD)("data-v-4d75bf6d"),e=e(),(0,a.Cn)(),e),i=g((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigTitle"},[(0,a.Uk)("블로그 제목"),(0,a._)("br"),(0,a.Uk)("(100자 이내) "),(0,a._)("sup",null,[(0,a.Uk)("* "),(0,a._)("span",{class:"sr-only"},"필수입력란")])])],-1))),n=g((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigAuthor"},[(0,a.Uk)("닉네임(30자 이내) "),(0,a._)("sup",null,[(0,a.Uk)("* "),(0,a._)("span",{class:"sr-only"},"필수입력란")])])],-1))),s=g((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigDesc"},"블로그 소개(100자 이내)")],-1))),r=g((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigAvatarImgFile"},"블로그 아바타 이미지")],-1))),u=(0,a.Uk)("Cloudinary "),m={key:0,class:"blog-config__avatar-image-use-wrapper"},d={class:"blog-config__avatar-image-use"},f=g((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigOgImgFile"},"블로그 대표 이미지")],-1))),C=(0,a.Uk)("Cloudinary "),h={key:0,class:"blog-config__og-image-use-wrapper"},v={class:"blog-config__og-image-use"},p=g((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigOgImgContrast"},"블로그 대표 이미지 밝기")],-1))),b=g((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigOgImgBlur"},"블로그 대표 이미지 흐림")],-1))),c={class:"blog-config__og-image-wrapper blog-config__og-image-wrapper--active"},I=g((()=>(0,a._)("th",{scope:"row"},"블로그 대표 이미지 위치값",-1))),_=g((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigPageSize"},[(0,a.Uk)("메인 포스트 목록 "),(0,a._)("br"),(0,a.Uk)("출력 개수")])],-1))),w=g((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigshowSatisYn"},"페이지 만족도조사 표출")],-1))),F=(0,a.Uk)("다시작성 "),B=(0,a.Uk)("저장 ");function U(e,l,o,g,U,S){const V=(0,a.up)("ui-loading"),W=(0,a.up)("ui-hidden-field"),k=(0,a.up)("ui-text-field"),z=(0,a.up)("ui-textarea"),L=(0,a.up)("ui-button"),O=(0,a.up)("ui-file-list"),x=(0,a.up)("ui-file-field"),y=(0,a.up)("ui-checkbox"),T=(0,a.up)("ui-numeric-field"),$=(0,a.up)("ui-write-table"),P=(0,a.up)("ui-form"),A=(0,a.up)("app-content-wrapper");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(V,{activeModel:!U.dataLoaded,fullPage:!0},null,8,["activeModel"]),(0,a.Wm)(A,{pageTitle:U.pageTitle},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{name:"blogConfigForm",ref:"blogConfigForm",class:(0,t.C_)("blog-config__frm"),onOnsubmit:S.onSubmit},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"id",id:"blogConfigId",value:S.blogConfig.id},null,8,["value"]),(0,a.Wm)($,{name:"블로그 환경설정 작성 폼",colWidth:["20%","80%"]},{btn:(0,a.w5)((()=>[(0,a.Wm)(L,{type:"reset",color:"secondary"},{default:(0,a.w5)((()=>[F])),_:1}),(0,a.Wm)(L,{type:"submit",color:"primary"},{default:(0,a.w5)((()=>[B])),_:1})])),default:(0,a.w5)((()=>[(0,a._)("tr",null,[i,(0,a._)("td",null,[(0,a.Wm)(k,{type:"text",name:"title",id:"blogConfigTitle",class:(0,t.C_)("blog-config__title"),block:!0,rules:"required|max:100",value:S.blogConfig.title,modelValue:U.previewBlogConfig.title,"onUpdate:modelValue":l[0]||(l[0]=e=>U.previewBlogConfig.title=e)},null,8,["value","modelValue"])])]),(0,a._)("tr",null,[n,(0,a._)("td",null,[(0,a.Wm)(k,{type:"text",name:"author",id:"blogConfigAuthor",class:(0,t.C_)("blog-config__author"),block:!0,rules:"required|max:30",value:S.blogConfig.author,modelValue:U.previewBlogConfig.author,"onUpdate:modelValue":l[1]||(l[1]=e=>U.previewBlogConfig.author=e)},null,8,["value","modelValue"])])]),(0,a._)("tr",null,[s,(0,a._)("td",null,[(0,a.Wm)(z,{name:"desc",id:"blogConfigDesc",cols:"30",rows:"10",resize:"vertical",rules:"required|max:100",value:S.blogConfig.desc},null,8,["value"])])]),(0,a._)("tr",null,[r,(0,a._)("td",null,[(0,a.Wm)(W,{name:"avatarImg",id:"blogConfigAvatarImg",value:S.blogConfig.avatarImg},null,8,["value"]),(0,a.Wm)(W,{name:"avatarImgUrl",id:"blogConfigAvatarImgUrl",value:S.blogConfig.avatarImgUrl,modelValue:U.previewBlogConfig.avatarImgUrl,"onUpdate:modelValue":l[2]||(l[2]=e=>U.previewBlogConfig.avatarImgUrl=e)},null,8,["value","modelValue"]),(0,a.Wm)(W,{name:"avatarImgSize",id:"blogConfigAvatarImgSize",value:S.blogConfig.avatarImgSize},null,8,["value"]),(0,a.Wm)(x,{name:"avatarImgFile",id:"blogConfigAvatarImgFile",accept:"image/*",gap:10,onOnchange:S.onChangeAvatarImg},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{type:"button",color:"secondary",onClick:l[3]||(l[3]=e=>S.listFile("avatar"))},{default:(0,a.w5)((()=>[u])),_:1}),U.dataLoaded&&0<U.avatarFileList.length?((0,a.wg)(),(0,a.j4)(O,{key:0,value:U.avatarFileList,onClickFile:S.onClickFile},null,8,["value","onClickFile"])):(0,a.kq)("",!0)])),_:1},8,["onOnchange"]),S.blogConfig.avatarImg?((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("span",d,(0,t.zw)(U.avatarImg)+" (용량 : "+(0,t.zw)(U.getFileSize(U.avatarImgSize))+") ",1),(0,a.Wm)(y,{name:"delAvatarImg",id:"blogConfigDelAvatarImg",label:"삭제",values:"Y,N"})])):(0,a.kq)("",!0)])]),(0,a._)("tr",null,[f,(0,a._)("td",null,[(0,a.Wm)(W,{name:"ogImg",id:"blogConfigOgImg",value:S.blogConfig.ogImg},null,8,["value"]),(0,a.Wm)(W,{name:"ogImgUrl",id:"blogConfigOgImgUrl",value:S.blogConfig.ogImgUrl,modelValue:U.previewBlogConfig.ogImgUrl,"onUpdate:modelValue":l[4]||(l[4]=e=>U.previewBlogConfig.ogImgUrl=e)},null,8,["value","modelValue"]),(0,a.Wm)(W,{name:"ogImgSize",id:"blogConfigOgImgSize",value:S.blogConfig.ogImgSize},null,8,["value"]),(0,a.Wm)(x,{name:"ogImgFile",id:"blogConfigOgImgFile",accept:"image/*",gap:10,onOnchange:S.onChangeOgImg},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{type:"button",color:"secondary",onClick:l[5]||(l[5]=e=>S.listFile("og"))},{default:(0,a.w5)((()=>[C])),_:1}),U.dataLoaded&&0<U.ogFileList.length?((0,a.wg)(),(0,a.j4)(O,{key:0,value:U.ogFileList,onClickFile:S.onClickFile},null,8,["value","onClickFile"])):(0,a.kq)("",!0)])),_:1},8,["onOnchange"]),S.blogConfig.ogImg?((0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("span",v,(0,t.zw)(U.ogImg)+" (용량 : "+(0,t.zw)(U.getFileSize(U.ogImgSize))+") ",1),(0,a.Wm)(y,{name:"delOgImg",id:"blogConfigDelOgImg",label:"삭제",values:"Y,N"})])):(0,a.kq)("",!0)])]),(0,a._)("tr",null,[p,(0,a._)("td",null,[(0,a.Wm)(T,{name:"ogImgContrast",id:"blogConfigOgImgContrast",step:"0.01",min:"0",max:"1.1",rules:"between:0,1.1",text:"0.1 ~ 1 미만 (초기화 0)",value:S.blogConfig.ogImgContrast,modelValue:U.previewBlogConfig.ogImgContrast,"onUpdate:modelValue":l[6]||(l[6]=e=>U.previewBlogConfig.ogImgContrast=e)},null,8,["step","max","rules","text","value","modelValue"])])]),(0,a._)("tr",null,[b,(0,a._)("td",null,[(0,a.Wm)(T,{name:"ogImgBlur",id:"blogConfigOgImgBlur",step:"0.01",min:"0",max:"9.9",rules:"between:0,9.9",text:"0.1 ~ 10 미만 (초기화 0)",value:S.blogConfig.ogImgBlur,modelValue:U.previewBlogConfig.ogImgBlur,"onUpdate:modelValue":l[7]||(l[7]=e=>U.previewBlogConfig.ogImgBlur=e)},null,8,["step","max","rules","text","value","modelValue"])])]),(0,a._)("tr",c,[I,(0,a._)("td",null,[(0,a.Wm)(T,{name:"ogImgPosX",id:"blogConfigOgImgPosX",min:"0",max:"100",rules:"between:0,100",text:"가로 0 ~ 100 (기본 50)",title:"블로그 대표 이미지 가로 위치값",value:S.blogConfig.ogImgPosX,modelValue:U.previewBlogConfig.ogImgPosX,"onUpdate:modelValue":l[8]||(l[8]=e=>U.previewBlogConfig.ogImgPosX=e)},null,8,["text","value","modelValue"]),(0,a.Wm)(T,{name:"ogImgPosY",id:"blogConfigOgImgPosY",min:"0",max:"100",rules:"between:0,100",text:"세로 0 ~ 100 (기본 50)",title:"블로그 대표 이미지 세로 위치값",value:S.blogConfig.ogImgPosY,modelValue:U.previewBlogConfig.ogImgPosY,"onUpdate:modelValue":l[9]||(l[9]=e=>U.previewBlogConfig.ogImgPosY=e)},null,8,["text","value","modelValue"])])]),(0,a._)("tr",null,[_,(0,a._)("td",null,[(0,a.Wm)(T,{name:"pageSize",id:"blogConfigPageSize",min:"2",max:"10",rules:"between:2,10",text:"2 ~ 10 (기본 6)",value:S.blogConfig.pageSize},null,8,["text","value"])])]),(0,a._)("tr",null,[w,(0,a._)("td",null,[(0,a.Wm)(y,{name:"showSatisYn",id:"blogConfigshowSatisYn",label:"페이지 만족도조사 표출",labelHidden:!0,values:"Y,N",modelValue:U.showSatisYn,"onUpdate:modelValue":l[10]||(l[10]=e=>U.showSatisYn=e)},null,8,["modelValue"])])])])),_:1})])),_:1},8,["onOnsubmit"])])),_:1},8,["pageTitle"])],64)}var S=o(6597),V=o(8822),W={name:"app-blog-config",data(){return{pageTitle:"블로그 환경설정",avatarImg:"",avatarImgUrl:"",avatarImgSize:"",ogImg:"",ogImgUrl:"",ogImgSize:"",showSatisYn:"",avatarFileList:[],ogFileList:[],previewBlogConfig:{},dataLoaded:!1,getFileSize:V.hR}},async beforeRouteLeave(e,l,o){(0,V.UE)(this.$store.state.BlogConfig?.previewData)&&(this.$store.dispatch("BlogConfig/FETCH_PREVIEW_DATA",null),await this.$store.dispatch("BlogConfig/GET_BLOG_CONFIG",{client:this.$http})),o()},created(){S.a.setPageTitle(this.pageTitle),this.avatarImg=this.blogConfig.avatarImg,this.avatarImgSize=this.blogConfig.avatarImgSize,this.ogImg=this.blogConfig.ogImg,this.ogImgSize=this.blogConfig.ogImgSize,this.showSatisYn=this.blogConfig.showSatisYn,this.$store.dispatch("BlogConfig/FETCH_PREVIEW_DATA",null),this.previewBlogConfig=Object.assign({},this.$store.state.BlogConfig.data),this.dataLoaded=!0},computed:{blogConfig:{get(){return this.$store.state.BlogConfig.data},set(e){}}},watch:{previewBlogConfig:{handler:function(e,l){this.$store.dispatch("BlogConfig/FETCH_BLOG_CONFIG",e),this.$store.dispatch("BlogConfig/FETCH_PREVIEW_DATA",e)},deep:!0}},methods:{async onSubmit(e){const l=await V.wW.confirmSuccess("저장하시겠습니까?");if(!l)return;const o={"Content-Type":"multipart/form-data"};this.$http.put("/blogconfig",e,{headers:o}).then((e=>{V.wW.toastSuccess("저장되었습니다."),this.$store.dispatch("BlogConfig/FETCH_BLOG_CONFIG",e.data),this.$store.dispatch("BlogConfig/FETCH_PREVIEW_DATA",null),S.a.setPageTitle(this.pageTitle)}))},onChangeAvatarImg(e){(0,V.UE)(e)&&(this.avatarImg=e.name,this.avatarImgSize=e.size)},onChangeOgImg(e){(0,V.UE)(e)&&(this.ogImg=e.name,this.ogImgSize=e.size)},onClickFile(e){0<this.avatarFileList.length?(this.$refs["blogConfigForm"].setFieldValue("avatarImg",e.public_id),this.$refs["blogConfigForm"].setFieldValue("avatarImgUrl",e.url),this.$refs["blogConfigForm"].setFieldValue("avatarImgSize",e.bytes)):0<this.ogFileList.length&&(this.$refs["blogConfigForm"].setFieldValue("ogImg",e.public_id),this.$refs["blogConfigForm"].setFieldValue("ogImgUrl",e.url),this.$refs["blogConfigForm"].setFieldValue("ogImgSize",e.bytes))},async listFile(e){"avatar"===e&&0<this.avatarFileList.length?this.avatarFileList=[]:"og"===e&&0<this.ogFileList.length?this.ogFileList=[]:(this.dataLoaded=!1,await(()=>this.$http.get("/file").then((l=>{0!==l.data.length?"avatar"===e?(this.avatarFileList=[...l.data],this.ogFileList=[]):"og"===e&&(this.ogFileList=[...l.data],this.avatarFileList=[]):V.wW.toastWarning("파일이 존재하지 않습니다.")})))(),this.dataLoading())},dataLoading(){(0<this.avatarFileList.length||0<this.ogFileList.length)&&(this.dataLoaded=!0)}}},k=o(89);const z=(0,k.Z)(W,[["render",U],["__scopeId","data-v-4d75bf6d"]]);var L=z}}]);
//# sourceMappingURL=264.a9a57678.js.map