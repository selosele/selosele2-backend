"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[978],{978:function(e,l,o){o.r(l),o.d(l,{default:function(){return U}});var g=o(3396),a=o(7139);const i=e=>((0,g.dD)("data-v-ef3894aa"),e=e(),(0,g.Cn)(),e),t=i((()=>(0,g._)("th",{scope:"row"},[(0,g._)("label",{for:"blogConfigTitle"},[(0,g.Uk)("블로그 제목"),(0,g._)("br"),(0,g.Uk)("(100자 이내) "),(0,g._)("sup",null,[(0,g.Uk)("* "),(0,g._)("span",{class:"sr-only"},"필수입력란")])])],-1))),n=i((()=>(0,g._)("th",{scope:"row"},[(0,g._)("label",{for:"blogConfigAuthor"},[(0,g.Uk)("닉네임(30자 이내) "),(0,g._)("sup",null,[(0,g.Uk)("* "),(0,g._)("span",{class:"sr-only"},"필수입력란")])])],-1))),m=i((()=>(0,g._)("th",{scope:"row"},[(0,g._)("label",{for:"blogConfigDesc"},"블로그 소개(100자 이내)")],-1))),r=i((()=>(0,g._)("th",{scope:"row"},[(0,g._)("label",{for:"blogConfigAvatarImgFile"},"블로그 아바타 이미지")],-1))),s=(0,g.Uk)("Cloudinary "),u=i((()=>(0,g._)("th",{scope:"row"},[(0,g._)("label",{for:"blogConfigOgImgFile"},"블로그 대표 이미지")],-1))),f=(0,g.Uk)("Cloudinary "),d=i((()=>(0,g._)("th",{scope:"row"},[(0,g._)("label",{for:"blogConfigOgImgContrast"},"블로그 대표 이미지 밝기")],-1))),C=i((()=>(0,g._)("th",{scope:"row"},[(0,g._)("label",{for:"blogConfigOgImgBlur"},"블로그 대표 이미지 흐림")],-1))),b={class:"blog-config__og-image-wrapper blog-config__og-image-wrapper--active"},p=i((()=>(0,g._)("th",{scope:"row"},"블로그 대표 이미지 위치값",-1))),v=i((()=>(0,g._)("th",{scope:"row"},[(0,g._)("label",{for:"blogConfigPageSize"},[(0,g.Uk)("메인 포스트 목록 "),(0,g._)("br"),(0,g.Uk)("출력 개수")])],-1))),I=i((()=>(0,g._)("th",{scope:"row"},[(0,g._)("label",{for:"blogConfigShowSatisYn"},"페이지 만족도조사 표출")],-1))),c=i((()=>(0,g._)("th",{scope:"row"},[(0,g._)("label",{for:"blogConfigKakaoMsgYn"},"카카오톡 메시지 수신")],-1))),h=(0,g.Uk)("다시작성 "),_=(0,g.Uk)("저장 ");function w(e,l,o,i,w,F){const k=(0,g.up)("ui-hidden-field"),S=(0,g.up)("ui-text-field"),V=(0,g.up)("ui-textarea"),B=(0,g.up)("ui-file-button"),U=(0,g.up)("ui-file-field"),W=(0,g.up)("ui-checkbox"),z=(0,g.up)("ui-file-info"),O=(0,g.up)("ui-numeric-field"),x=(0,g.up)("ui-button"),Y=(0,g.up)("ui-write-table"),y=(0,g.up)("ui-form"),T=(0,g.up)("app-content-wrapper");return(0,g.wg)(),(0,g.j4)(T,{pageTitle:w.pageTitle},{default:(0,g.w5)((()=>[(0,g.Wm)(y,{name:"blogConfigForm",ref:"blogConfigForm",class:(0,a.C_)("blog-config__frm"),onOnsubmit:F.onSubmit},{default:(0,g.w5)((()=>[(0,g.Wm)(k,{name:"id",id:"blogConfigId",value:F.blogConfig.id},null,8,["value"]),(0,g.Wm)(Y,{name:"블로그 환경설정 작성 폼",colWidth:["20%","80%"]},{btn:(0,g.w5)((()=>[(0,g.Wm)(x,{type:"reset",color:"secondary"},{default:(0,g.w5)((()=>[h])),_:1}),(0,g.Wm)(x,{type:"submit",color:"primary"},{default:(0,g.w5)((()=>[_])),_:1})])),default:(0,g.w5)((()=>[(0,g._)("tr",null,[t,(0,g._)("td",null,[(0,g.Wm)(S,{type:"text",name:"title",id:"blogConfigTitle",class:(0,a.C_)("blog-config__title"),block:!0,rules:"required|max:100",value:F.blogConfig.title,modelValue:w.previewBlogConfig.title,"onUpdate:modelValue":l[0]||(l[0]=e=>w.previewBlogConfig.title=e)},null,8,["value","modelValue"])])]),(0,g._)("tr",null,[n,(0,g._)("td",null,[(0,g.Wm)(S,{type:"text",name:"author",id:"blogConfigAuthor",class:(0,a.C_)("blog-config__author"),block:!0,rules:"required|max:30",value:F.blogConfig.author,modelValue:w.previewBlogConfig.author,"onUpdate:modelValue":l[1]||(l[1]=e=>w.previewBlogConfig.author=e)},null,8,["value","modelValue"])])]),(0,g._)("tr",null,[m,(0,g._)("td",null,[(0,g.Wm)(V,{name:"desc",id:"blogConfigDesc",cols:"30",rows:"10",resize:"vertical",rules:"required|max:100",value:F.blogConfig.desc},null,8,["value"])])]),(0,g._)("tr",null,[r,(0,g._)("td",null,[(0,g.Wm)(k,{name:"avatarImg",id:"blogConfigAvatarImg",value:F.blogConfig.avatarImg},null,8,["value"]),(0,g.Wm)(k,{name:"avatarImgUrl",id:"blogConfigAvatarImgUrl",value:F.blogConfig.avatarImgUrl,modelValue:w.previewBlogConfig.avatarImgUrl,"onUpdate:modelValue":l[2]||(l[2]=e=>w.previewBlogConfig.avatarImgUrl=e)},null,8,["value","modelValue"]),(0,g.Wm)(k,{name:"avatarImgSize",id:"blogConfigAvatarImgSize",value:F.blogConfig.avatarImgSize},null,8,["value"]),(0,g.Wm)(U,{name:"avatarImgFile",id:"blogConfigAvatarImgFile",accept:"image/*",gap:10,onOnchange:F.onChangeAvatarImg},{default:(0,g.w5)((()=>[(0,g.Wm)(B,{type:"button",color:"secondary",listKey:"avatar",onListFile:F.onListFile,onClickFile:F.onClickFile},{default:(0,g.w5)((()=>[s])),_:1},8,["onListFile","onClickFile"])])),_:1},8,["onOnchange"]),F.blogConfig.avatarImg?((0,g.wg)(),(0,g.j4)(z,{key:0,imgName:w.avatarImg,imgSize:w.avatarImgSize},{default:(0,g.w5)((()=>[(0,g.Wm)(W,{name:"delAvatarImg",id:"blogConfigDelAvatarImg",label:"삭제",values:"Y,N"})])),_:1},8,["imgName","imgSize"])):(0,g.kq)("",!0)])]),(0,g._)("tr",null,[u,(0,g._)("td",null,[(0,g.Wm)(k,{name:"ogImg",id:"blogConfigOgImg",value:F.blogConfig.ogImg},null,8,["value"]),(0,g.Wm)(k,{name:"ogImgUrl",id:"blogConfigOgImgUrl",value:F.blogConfig.ogImgUrl,modelValue:w.previewBlogConfig.ogImgUrl,"onUpdate:modelValue":l[3]||(l[3]=e=>w.previewBlogConfig.ogImgUrl=e)},null,8,["value","modelValue"]),(0,g.Wm)(k,{name:"ogImgSize",id:"blogConfigOgImgSize",value:F.blogConfig.ogImgSize},null,8,["value"]),(0,g.Wm)(U,{name:"ogImgFile",id:"blogConfigOgImgFile",accept:"image/*",gap:10,onOnchange:F.onChangeOgImg},{default:(0,g.w5)((()=>[(0,g.Wm)(B,{type:"button",color:"secondary",listKey:"og",onListFile:F.onListFile,onClickFile:F.onClickFile},{default:(0,g.w5)((()=>[f])),_:1},8,["onListFile","onClickFile"])])),_:1},8,["onOnchange"]),F.blogConfig.ogImg?((0,g.wg)(),(0,g.j4)(z,{key:0,imgName:w.ogImg,imgSize:w.ogImgSize},{default:(0,g.w5)((()=>[(0,g.Wm)(W,{name:"delOgImg",id:"blogConfigDelOgImg",label:"삭제",values:"Y,N"})])),_:1},8,["imgName","imgSize"])):(0,g.kq)("",!0)])]),(0,g._)("tr",null,[d,(0,g._)("td",null,[(0,g.Wm)(O,{name:"ogImgContrast",id:"blogConfigOgImgContrast",step:"0.01",min:"0",max:"1.1",rules:"between:0,1.1",text:"0.1 ~ 1 이하 (초기화 0)",value:F.blogConfig.ogImgContrast,modelValue:w.previewBlogConfig.ogImgContrast,"onUpdate:modelValue":l[4]||(l[4]=e=>w.previewBlogConfig.ogImgContrast=e)},null,8,["step","max","rules","text","value","modelValue"])])]),(0,g._)("tr",null,[C,(0,g._)("td",null,[(0,g.Wm)(O,{name:"ogImgBlur",id:"blogConfigOgImgBlur",step:"0.01",min:"0",max:"9.9",rules:"between:0,9.9",text:"0.1 ~ 10 미만 (초기화 0)",value:F.blogConfig.ogImgBlur,modelValue:w.previewBlogConfig.ogImgBlur,"onUpdate:modelValue":l[5]||(l[5]=e=>w.previewBlogConfig.ogImgBlur=e)},null,8,["step","max","rules","text","value","modelValue"])])]),(0,g._)("tr",b,[p,(0,g._)("td",null,[(0,g.Wm)(O,{name:"ogImgPosX",id:"blogConfigOgImgPosX",min:"0",max:"100",rules:"between:0,100",text:"가로 0 ~ 100 (기본 50)",title:"블로그 대표 이미지 가로 위치값",value:F.blogConfig.ogImgPosX,modelValue:w.previewBlogConfig.ogImgPosX,"onUpdate:modelValue":l[6]||(l[6]=e=>w.previewBlogConfig.ogImgPosX=e)},null,8,["text","value","modelValue"]),(0,g.Wm)(O,{name:"ogImgPosY",id:"blogConfigOgImgPosY",min:"0",max:"100",rules:"between:0,100",text:"세로 0 ~ 100 (기본 50)",title:"블로그 대표 이미지 세로 위치값",value:F.blogConfig.ogImgPosY,modelValue:w.previewBlogConfig.ogImgPosY,"onUpdate:modelValue":l[7]||(l[7]=e=>w.previewBlogConfig.ogImgPosY=e)},null,8,["text","value","modelValue"])])]),(0,g._)("tr",null,[v,(0,g._)("td",null,[(0,g.Wm)(O,{name:"pageSize",id:"blogConfigPageSize",min:"2",max:"10",rules:"between:2,10",text:"2 ~ 10 (기본 6)",value:F.blogConfig.pageSize},null,8,["text","value"])])]),(0,g._)("tr",null,[I,(0,g._)("td",null,[(0,g.Wm)(W,{name:"showSatisYn",id:"blogConfigShowSatisYn",label:"페이지 만족도조사 표출",labelHidden:!0,values:"Y,N",modelValue:w.showSatisYn,"onUpdate:modelValue":l[8]||(l[8]=e=>w.showSatisYn=e)},null,8,["modelValue"])])]),(0,g._)("tr",null,[c,(0,g._)("td",null,[(0,g.Wm)(W,{name:"kakaoMsgYn",id:"blogConfigKakaoMsgYn",label:"카카오톡 메시지 수신",labelHidden:!0,values:"Y,N",modelValue:w.kakaoMsgYn,"onUpdate:modelValue":l[9]||(l[9]=e=>w.kakaoMsgYn=e)},null,8,["modelValue"])])])])),_:1})])),_:1},8,["onOnsubmit"])])),_:1},8,["pageTitle"])}var F=o(6597),k=o(8822),S={name:"app-admin-blog-config",data(){return{pageTitle:"블로그 환경설정",avatarImg:"",avatarImgUrl:"",avatarImgSize:"",ogImg:"",ogImgUrl:"",ogImgSize:"",showSatisYn:"",kakaoMsgYn:"",avatarFileList:[],ogFileList:[],previewBlogConfig:{}}},async beforeRouteLeave(e,l,o){(0,k.UE)(this.$store.state.BlogConfig?.previewData)&&(this.$store.dispatch("BlogConfig/FETCH_PREVIEW_DATA",null),await this.$store.dispatch("BlogConfig/GET_BLOG_CONFIG")),o()},created(){(new F.p).setPageTitle(this.pageTitle),this.avatarImg=this.blogConfig.avatarImg,this.avatarImgSize=this.blogConfig.avatarImgSize,this.ogImg=this.blogConfig.ogImg,this.ogImgSize=this.blogConfig.ogImgSize,this.showSatisYn=this.blogConfig.showSatisYn,this.kakaoMsgYn=this.blogConfig.kakaoMsgYn,this.$store.dispatch("BlogConfig/FETCH_PREVIEW_DATA",null),this.previewBlogConfig=Object.assign({},this.$store.state.BlogConfig.data)},computed:{blogConfig:{get(){return this.$store.state.BlogConfig.data},set(e){}}},watch:{previewBlogConfig:{handler:function(e,l){this.$store.dispatch("BlogConfig/FETCH_BLOG_CONFIG",e),this.$store.dispatch("BlogConfig/FETCH_PREVIEW_DATA",e)},deep:!0}},methods:{async onSubmit(e){const l=await k.wW.confirmSuccess("저장하시겠습니까?");if(!l)return;const o={"Content-Type":"multipart/form-data"};this.$http.put("/blogconfig",e,{headers:o}).then((e=>{k.wW.toastSuccess("저장되었습니다."),this.$store.dispatch("BlogConfig/FETCH_BLOG_CONFIG",e.data),this.$store.dispatch("BlogConfig/FETCH_PREVIEW_DATA",null),(new F.p).setPageTitle(this.pageTitle)}))},onChangeAvatarImg(e){(0,k.UE)(e)&&(this.avatarImg=e.name,this.avatarImgSize=e.size)},onChangeOgImg(e){(0,k.UE)(e)&&(this.ogImg=e.name,this.ogImgSize=e.size)},onClickFile(e,l){"avatar"===l?(this.$refs["blogConfigForm"].setFieldValue("avatarImg",e.public_id+"."+e.format),this.$refs["blogConfigForm"].setFieldValue("avatarImgUrl",e.url),this.$refs["blogConfigForm"].setFieldValue("avatarImgSize",e.bytes)):"og"===l&&(this.$refs["blogConfigForm"].setFieldValue("ogImg",e.public_id+"."+e.format),this.$refs["blogConfigForm"].setFieldValue("ogImgUrl",e.url),this.$refs["blogConfigForm"].setFieldValue("ogImgSize",e.bytes))},onListFile(e,l){"avatar"===l?(this.ogFileList=[],this.avatarFileList=e):"og"===l&&(this.avatarFileList=[],this.ogFileList=e)}}},V=o(89);const B=(0,V.Z)(S,[["render",w],["__scopeId","data-v-ef3894aa"]]);var U=B}}]);
//# sourceMappingURL=978.27d849e5.js.map