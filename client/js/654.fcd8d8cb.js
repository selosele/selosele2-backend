"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[654],{4654:function(e,o,l){l.r(o),l.d(o,{default:function(){return U}});var a=l(3396),g=l(7139);const t=e=>((0,a.dD)("data-v-4714080d"),e=e(),(0,a.Cn)(),e),i=t((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigTitle"},[(0,a.Uk)("블로그 제목"),(0,a._)("br"),(0,a.Uk)("(100자 이내) "),(0,a._)("sup",null,[(0,a.Uk)("* "),(0,a._)("span",{class:"sr-only"},"필수입력란")])])],-1))),n=t((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigAuthor"},[(0,a.Uk)("닉네임(30자 이내) "),(0,a._)("sup",null,[(0,a.Uk)("* "),(0,a._)("span",{class:"sr-only"},"필수입력란")])])],-1))),r=t((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigDesc"},"블로그 소개(100자 이내)")],-1))),s=t((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigAvatarImgFile"},"아바타 이미지")],-1))),m=(0,a.Uk)("Cloudinary "),u=t((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigOgImgFile"},"대표 이미지")],-1))),d=(0,a.Uk)("Cloudinary "),f=t((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigOgImgContrast"},"대표 이미지 밝기")],-1))),C=t((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigOgImgBlur"},"대표 이미지 흐림")],-1))),p={class:"blog-config__og-image-wrapper blog-config__og-image-wrapper--active"},v=t((()=>(0,a._)("th",{scope:"row"},"대표 이미지 위치값",-1))),I=t((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigPageSize"},"메인 포스트 출력 개수")],-1))),b=t((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigShowSatisYn"},"페이지 만족도조사 표출")],-1))),c=t((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"blogConfigKakaoMsgYn"},"카카오톡 메시지 수신")],-1))),h=(0,a.Uk)("다시작성 "),_=(0,a.Uk)("저장 ");function w(e,o,l,t,w,B){const V=(0,a.up)("ui-hidden-field"),F=(0,a.up)("ui-text-field"),S=(0,a.up)("ui-textarea"),k=(0,a.up)("ui-file-button"),U=(0,a.up)("ui-file-field"),z=(0,a.up)("ui-checkbox"),W=(0,a.up)("ui-file-info"),$=(0,a.up)("ui-numeric-field"),O=(0,a.up)("ui-radio"),Y=(0,a.up)("ui-button"),x=(0,a.up)("ui-write-table"),y=(0,a.up)("ui-form"),T=(0,a.up)("app-content-wrapper");return(0,a.wg)(),(0,a.j4)(T,{pageTitle:w.pageTitle},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{name:"blogConfigForm",ref:"blogConfigForm",class:(0,g.C_)("blog-config__frm"),onOnsubmit:B.onSubmit},{default:(0,a.w5)((()=>[(0,a.Wm)(V,{name:"id",id:"blogConfigId",value:e.$store.state.BlogConfig.data?.id},null,8,["value"]),(0,a.Wm)(x,{name:"블로그 환경설정 작성 폼",colWidth:["20%","80%"]},{btn:(0,a.w5)((()=>[(0,a.Wm)(Y,{type:"reset",color:"secondary"},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(Y,{type:"submit",color:"primary"},{default:(0,a.w5)((()=>[_])),_:1})])),default:(0,a.w5)((()=>[(0,a._)("tr",null,[i,(0,a._)("td",null,[(0,a.Wm)(F,{type:"text",name:"title",id:"blogConfigTitle",clazz:["blog-config__title"],block:!0,rules:"required|max:100",value:e.$store.state.BlogConfig.data?.title,modelValue:w.previewBlogConfig.title,"onUpdate:modelValue":o[0]||(o[0]=e=>w.previewBlogConfig.title=e)},null,8,["value","modelValue"])])]),(0,a._)("tr",null,[n,(0,a._)("td",null,[(0,a.Wm)(F,{type:"text",name:"author",id:"blogConfigAuthor",clazz:["blog-config__author"],block:!0,rules:"required|max:30",value:e.$store.state.BlogConfig.data?.author,modelValue:w.previewBlogConfig.author,"onUpdate:modelValue":o[1]||(o[1]=e=>w.previewBlogConfig.author=e)},null,8,["value","modelValue"])])]),(0,a._)("tr",null,[r,(0,a._)("td",null,[(0,a.Wm)(S,{name:"desc",id:"blogConfigDesc",cols:"30",rows:"10",resize:"vertical",rules:"required|max:100",value:e.$store.state.BlogConfig.data?.desc,modelValue:w.previewBlogConfig.desc,"onUpdate:modelValue":o[2]||(o[2]=e=>w.previewBlogConfig.desc=e)},null,8,["value","modelValue"])])]),(0,a._)("tr",null,[s,(0,a._)("td",null,[(0,a.Wm)(V,{name:"avatarImg",id:"blogConfigAvatarImg",value:e.$store.state.BlogConfig.data?.avatarImg},null,8,["value"]),(0,a.Wm)(V,{name:"avatarImgUrl",id:"blogConfigAvatarImgUrl",value:e.$store.state.BlogConfig.data?.avatarImgUrl,modelValue:w.previewBlogConfig.avatarImgUrl,"onUpdate:modelValue":o[3]||(o[3]=e=>w.previewBlogConfig.avatarImgUrl=e)},null,8,["value","modelValue"]),(0,a.Wm)(V,{name:"avatarImgSize",id:"blogConfigAvatarImgSize",value:e.$store.state.BlogConfig.data?.avatarImgSize},null,8,["value"]),(0,a.Wm)(U,{name:"avatarImgFile",id:"blogConfigAvatarImgFile",accept:"image/*",gap:10,onOnchange:B.onChangeAvatarImg},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{type:"button",color:"secondary",listKey:"avatar",onListFile:B.onListFile,onClickFile:B.onClickFile},{default:(0,a.w5)((()=>[m])),_:1},8,["onListFile","onClickFile"])])),_:1},8,["onOnchange"]),e.$store.state.BlogConfig.data?.avatarImg?((0,a.wg)(),(0,a.j4)(W,{key:0,imgName:w.avatarImg,imgSize:w.avatarImgSize},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"delAvatarImg",id:"blogConfigDelAvatarImg",label:"삭제",values:"Y,N"})])),_:1},8,["imgName","imgSize"])):(0,a.kq)("",!0)])]),(0,a._)("tr",null,[u,(0,a._)("td",null,[(0,a.Wm)(V,{name:"ogImg",id:"blogConfigOgImg",value:e.$store.state.BlogConfig.data?.ogImg},null,8,["value"]),(0,a.Wm)(V,{name:"ogImgUrl",id:"blogConfigOgImgUrl",value:e.$store.state.BlogConfig.data?.ogImgUrl,modelValue:w.previewBlogConfig.ogImgUrl,"onUpdate:modelValue":o[4]||(o[4]=e=>w.previewBlogConfig.ogImgUrl=e)},null,8,["value","modelValue"]),(0,a.Wm)(V,{name:"ogImgSize",id:"blogConfigOgImgSize",value:e.$store.state.BlogConfig.data?.ogImgSize},null,8,["value"]),(0,a.Wm)(U,{name:"ogImgFile",id:"blogConfigOgImgFile",accept:"image/*",gap:10,onOnchange:B.onChangeOgImg},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{type:"button",color:"secondary",listKey:"og",onListFile:B.onListFile,onClickFile:B.onClickFile},{default:(0,a.w5)((()=>[d])),_:1},8,["onListFile","onClickFile"])])),_:1},8,["onOnchange"]),e.$store.state.BlogConfig.data?.ogImg?((0,a.wg)(),(0,a.j4)(W,{key:0,imgName:w.ogImg,imgSize:w.ogImgSize},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"delOgImg",id:"blogConfigDelOgImg",label:"삭제",values:"Y,N"})])),_:1},8,["imgName","imgSize"])):(0,a.kq)("",!0)])]),(0,a._)("tr",null,[f,(0,a._)("td",null,[(0,a.Wm)($,{name:"ogImgContrast",id:"blogConfigOgImgContrast",step:"0.01",min:"0",max:"1.1",rules:"between:0,1.1",text:"0.1 ~ 1 이하 (초기화 0)",value:e.$store.state.BlogConfig.data?.ogImgContrast,modelValue:w.previewBlogConfig.ogImgContrast,"onUpdate:modelValue":o[5]||(o[5]=e=>w.previewBlogConfig.ogImgContrast=e)},null,8,["step","max","rules","text","value","modelValue"])])]),(0,a._)("tr",null,[C,(0,a._)("td",null,[(0,a.Wm)($,{name:"ogImgBlur",id:"blogConfigOgImgBlur",step:"0.01",min:"0",max:"9.9",rules:"between:0,9.9",text:"0.1 ~ 10 미만 (초기화 0)",value:e.$store.state.BlogConfig.data?.ogImgBlur,modelValue:w.previewBlogConfig.ogImgBlur,"onUpdate:modelValue":o[6]||(o[6]=e=>w.previewBlogConfig.ogImgBlur=e)},null,8,["step","max","rules","text","value","modelValue"])])]),(0,a._)("tr",p,[v,(0,a._)("td",null,[(0,a.Wm)($,{name:"ogImgPosX",id:"blogConfigOgImgPosX",min:"0",max:"100",rules:"between:0,100",text:"가로 0 ~ 100 (기본 50)",title:"대표 이미지 가로 위치값",value:e.$store.state.BlogConfig.data?.ogImgPosX,modelValue:w.previewBlogConfig.ogImgPosX,"onUpdate:modelValue":o[7]||(o[7]=e=>w.previewBlogConfig.ogImgPosX=e)},null,8,["text","value","modelValue"]),(0,a.Wm)($,{name:"ogImgPosY",id:"blogConfigOgImgPosY",min:"0",max:"100",rules:"between:0,100",text:"세로 0 ~ 100 (기본 50)",title:"대표 이미지 세로 위치값",value:e.$store.state.BlogConfig.data?.ogImgPosY,modelValue:w.previewBlogConfig.ogImgPosY,"onUpdate:modelValue":o[8]||(o[8]=e=>w.previewBlogConfig.ogImgPosY=e)},null,8,["text","value","modelValue"]),(0,a.Wm)(O,{id:"blogConfigOgImgCoverY",name:"ogImgCoverYn",label:"이미지 채우기",rules:"required",value:"Y",modelValue:w.previewBlogConfig.ogImgCoverYn,"onUpdate:modelValue":o[9]||(o[9]=e=>w.previewBlogConfig.ogImgCoverYn=e)},null,8,["modelValue"]),(0,a.Wm)(O,{id:"blogConfigOgImgCoverN",name:"ogImgCoverYn",label:"이미지 비율 유지",rules:"required",value:"N",modelValue:w.previewBlogConfig.ogImgCoverYn,"onUpdate:modelValue":o[10]||(o[10]=e=>w.previewBlogConfig.ogImgCoverYn=e)},null,8,["modelValue"])])]),(0,a._)("tr",null,[I,(0,a._)("td",null,[(0,a.Wm)($,{name:"pageSize",id:"blogConfigPageSize",min:"2",max:"10",rules:"between:2,10",text:"2 ~ 10 (기본 6)",value:e.$store.state.BlogConfig.data?.pageSize,modelValue:w.pageSize,"onUpdate:modelValue":o[11]||(o[11]=e=>w.pageSize=e)},null,8,["text","value","modelValue"])])]),(0,a._)("tr",null,[b,(0,a._)("td",null,[(0,a.Wm)(z,{name:"showSatisYn",id:"blogConfigShowSatisYn",label:"페이지 만족도조사 표출",labelHidden:!0,values:"Y,N",modelValue:w.showSatisYn,"onUpdate:modelValue":o[12]||(o[12]=e=>w.showSatisYn=e)},null,8,["modelValue"])])]),(0,a._)("tr",null,[c,(0,a._)("td",null,[(0,a.Wm)(z,{name:"kakaoMsgYn",id:"blogConfigKakaoMsgYn",label:"카카오톡 메시지 수신",labelHidden:!0,values:"Y,N",modelValue:w.kakaoMsgYn,"onUpdate:modelValue":o[13]||(o[13]=e=>w.kakaoMsgYn=e)},null,8,["modelValue"])])])])),_:1})])),_:1},8,["onOnsubmit"])])),_:1},8,["pageTitle"])}var B=l(6597),V=l(8822),F={name:"app-admin-blog-config",data(){return{pageTitle:"블로그 환경설정",avatarImg:"",avatarImgUrl:"",avatarImgSize:"",ogImg:"",ogImgUrl:"",ogImgSize:"",showSatisYn:"",kakaoMsgYn:"",avatarFileList:[],ogFileList:[],pageSize:"",previewBlogConfig:{}}},async beforeRouteLeave(e,o,l){(0,V.UE)(this.$store.state.BlogConfig?.previewData)&&(this.$store.dispatch("BlogConfig/FETCH_PREVIEW_DATA",null),await this.$store.dispatch("BlogConfig/GET_BLOG_CONFIG")),l()},created(){(new B.p).setPageTitle(this.pageTitle),this.$store.dispatch("BlogConfig/GET_BLOG_CONFIG").then((e=>{this.avatarImg=e?.avatarImg,this.avatarImgSize=e?.avatarImgSize,this.ogImg=e?.ogImg,this.ogImgSize=e?.ogImgSize,this.pageSize=e?.pageSize,this.showSatisYn=e?.showSatisYn,this.kakaoMsgYn=e?.kakaoMsgYn,this.$store.dispatch("BlogConfig/FETCH_PREVIEW_DATA",null),(0,V.xb)(this.$store.state.BlogConfig?.previewData)?this.previewBlogConfig=Object.assign({},e):this.previewBlogConfig=Object.assign({},this.$store.state.BlogConfig?.previewData)}))},watch:{previewBlogConfig:{handler:function(e,o){this.$store.dispatch("BlogConfig/FETCH_BLOG_CONFIG",e),this.$store.dispatch("BlogConfig/FETCH_PREVIEW_DATA",e)},deep:!0}},methods:{async onSubmit(e){const o=await V.wW.confirmSuccess("저장하시겠습니까?");if(!o)return;const l={"Content-Type":"multipart/form-data"};this.$http.put("/blogconfig",e,{headers:l}).then((e=>{V.wW.toastSuccess("저장되었습니다."),this.$store.dispatch("BlogConfig/FETCH_BLOG_CONFIG",e.data),this.$store.dispatch("BlogConfig/FETCH_PREVIEW_DATA",null),(new B.p).setPageTitle(this.pageTitle)}))},onChangeAvatarImg(e){(0,V.UE)(e)&&(this.avatarImg=e.name,this.avatarImgSize=e.size)},onChangeOgImg(e){(0,V.UE)(e)&&(this.ogImg=e.name,this.ogImgSize=e.size)},onClickFile(e,o){"avatar"===o?(this.$refs["blogConfigForm"].setFieldValue("avatarImg",e.public_id+"."+e.format),this.$refs["blogConfigForm"].setFieldValue("avatarImgUrl",e.url),this.$refs["blogConfigForm"].setFieldValue("avatarImgSize",e.bytes)):"og"===o&&(this.$refs["blogConfigForm"].setFieldValue("ogImg",e.public_id+"."+e.format),this.$refs["blogConfigForm"].setFieldValue("ogImgUrl",e.url),this.$refs["blogConfigForm"].setFieldValue("ogImgSize",e.bytes))},onListFile(e,o){"avatar"===o?(this.ogFileList=[],this.avatarFileList=e):"og"===o&&(this.avatarFileList=[],this.ogFileList=e)}}},S=l(89);const k=(0,S.Z)(F,[["render",w],["__scopeId","data-v-4714080d"]]);var U=k}}]);
//# sourceMappingURL=654.fcd8d8cb.js.map