"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[534],{6597:function(e,t,l){l.d(t,{a:function(){return i}});var a=l(9266),o=l(8822);class s{constructor(){}setPageTitle(e){(0,o.UE)(e)?document.title=`${e} - ${a.Z.state.BlogConfig.data?.title}`:document.title=a.Z.state.BlogConfig.data?.title}}const i=new s},3534:function(e,t,l){l.r(t),l.d(t,{default:function(){return q}});var a=l(3396),o=l(7139);const s=e=>((0,a.dD)("data-v-62cbb6bc"),e=e(),(0,a.Cn)(),e),i={class:"write__wrapper"},n={class:"write__save-wrapper"},r=(0,a.Uk)("불러오기 "),u=s((()=>(0,a._)("ul",{class:"write__save-list"},null,-1))),c=s((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"savePostTitle"},"제목")],-1))),d=s((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"savePostCont"},"내용")],-1))),m={class:"write__cont"},g={scope:"row"},_=s((()=>(0,a._)("label",{for:"savePostOgDesc"},"본문 요약",-1))),p=s((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"savePostOgImgFile"},"대표 이미지")],-1))),v=(0,a.Uk)("Cloudinary "),w={key:0,class:"blog-config__avatar-image-use-wrapper"},b={class:"blog-config__avatar-image-use"},f=s((()=>(0,a._)("th",{scope:"row"},[(0,a._)("label",{for:"savePostCategory"},"카테고리")],-1))),y={class:"write__category__item"},h=s((()=>(0,a._)("th",{scope:"row"},"태그",-1))),C=s((()=>(0,a._)("th",{scope:"row"},"공개/비공개",-1))),I=s((()=>(0,a._)("th",{scope:"row"},"상단고정",-1))),P=(0,a.Uk)("미리보기 "),k=(0,a.Uk)("임시저장 "),W=(0,a.Uk)("다시작성 "),F=(0,a.Uk)("저장 ");function Y(e,t,l,s,Y,V){const O=(0,a.up)("ui-button"),U=(0,a.up)("ui-hidden-field"),x=(0,a.up)("ui-text-field"),S=(0,a.up)("ui-textarea"),q=(0,a.up)("ui-icon-button"),D=(0,a.up)("ui-file-list"),T=(0,a.up)("ui-file-field"),z=(0,a.up)("ui-checkbox"),N=(0,a.up)("ui-select"),L=(0,a.up)("ui-radio"),$=(0,a.up)("ui-write-table"),B=(0,a.up)("ui-form"),Z=(0,a.up)("app-content-wrapper");return(0,a.wg)(),(0,a.j4)(Z,{pageTitle:Y.pageTitle},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.Wm)(B,{name:"savePostForm",ref:"savePostForm",class:(0,o.C_)("write__frm"),onOnsubmit:V.onSubmit},{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a.Wm)(O,{type:"button",color:"primary",class:(0,o.C_)("write__btn--load")},{default:(0,a.w5)((()=>[r])),_:1}),u]),(0,a.Wm)(U,{name:"id",id:"savePostId",value:Y.post?.id},null,8,["value"]),(0,a.Wm)($,{name:"포스트 작성 폼"},{btn:(0,a.w5)((()=>[(0,a.Wm)(O,{type:"button",color:"success",class:(0,o.C_)("write__btn")},{default:(0,a.w5)((()=>[P])),_:1}),(0,a.Wm)(O,{type:"button",color:"warning",class:(0,o.C_)("write__btn")},{default:(0,a.w5)((()=>[k])),_:1}),(0,a.Wm)(O,{type:"reset",color:"secondary",class:(0,o.C_)("write__btn")},{default:(0,a.w5)((()=>[W])),_:1}),(0,a.Wm)(O,{type:"submit",color:"primary",class:(0,o.C_)("write__btn")},{default:(0,a.w5)((()=>[F])),_:1})])),default:(0,a.w5)((()=>[(0,a._)("tr",null,[c,(0,a._)("td",null,[(0,a.Wm)(x,{type:"text",name:"title",id:"savePostTitle",class:(0,o.C_)("write__title"),rules:"required",block:!0})])]),(0,a._)("tr",null,[d,(0,a._)("td",null,[(0,a._)("div",m,[(0,a.Wm)(S,{name:"cont",id:"savePostCont",cols:"80",rows:"18",rules:"required",block:!0})])])]),(0,a._)("tr",null,[(0,a._)("th",g,[_,(0,a.Wm)(q,{type:"button",icon:"xi-refresh",text:"본문 요약 갱신",class:(0,o.C_)("write__og-desc-refresh"),onClick:V.onChangeOgDesc},null,8,["onClick"])]),(0,a._)("td",null,[(0,a.Wm)(x,{type:"text",name:"ogDesc",id:"savePostOgDesc",class:(0,o.C_)("write__og-desc"),placeholder:"50자 이내(생략 시, 제목이 들어감)",block:!0},null,8,["placeholder"])])]),(0,a._)("tr",null,[p,(0,a._)("td",null,[(0,a.Wm)(U,{name:"ogImg",id:"savePostOgImg",value:Y.post?.avatarImg},null,8,["value"]),(0,a.Wm)(U,{name:"ogImgUrl",id:"savePostOgImgUrl",value:Y.post?.avatarImgUrl},null,8,["value"]),(0,a.Wm)(U,{name:"ogImgSize",id:"savePostOgImgSize",value:Y.post?.avatarImgSize},null,8,["value"]),(0,a.Wm)(T,{name:"ogImgFile",id:"savePostOgImgFile",accept:"image/*",gap:10,onOnchange:V.onChangeOgImg},{default:(0,a.w5)((()=>[(0,a.Wm)(O,{type:"button",color:"secondary",onClick:e.listFile},{default:(0,a.w5)((()=>[v])),_:1},8,["onClick"]),0<Y.ogImgFileList.length?((0,a.wg)(),(0,a.j4)(D,{key:0,value:Y.ogImgFileList,onClickFile:V.onClickFile},null,8,["value","onClickFile"])):(0,a.kq)("",!0)])),_:1},8,["onOnchange"]),Y.post?.ogImg?((0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("span",b,(0,o.zw)(Y.ogImg)+" (용량 : "+(0,o.zw)(e.getFileSize(Y.ogImgSize))+") ",1),(0,a.Wm)(z,{name:"delOgImg",id:"savePostDelOgImg",label:"삭제",values:"Y,N"})])):(0,a.kq)("",!0)])]),(0,a._)("tr",null,[f,(0,a._)("td",null,[(0,a.Wm)(N,{name:"category",id:"savePostCategory",class:(0,o.C_)("write__select-category"),rules:"required",defaultValue:"카테고리 선택",data:Y.categoryList,modelValue:Y.categoryId,"onUpdate:modelValue":t[0]||(t[0]=e=>Y.categoryId=e)},null,8,["data","modelValue"]),(0,a._)("span",y,[(0,a.Wm)(x,{type:"text",name:"addCategory",id:"savePostAddCategory",title:"사용할 카테고리 입력 (50자 이내)",placeholder:"사용할 카테고리 입력 (50자 이내)",class:(0,o.C_)("write__category")},null,8,["title","placeholder"]),(0,a.Wm)(q,{type:"button",icon:"xi-check",text:"카테고리 추가",class:(0,o.C_)("write__add-category-btn")})])])]),(0,a._)("tr",null,[h,(0,a._)("td",null,[(0,a.Wm)(q,{type:"button",icon:"xi-plus",text:"태그 추가",class:(0,o.C_)("write__add-tag-btn")})])]),(0,a._)("tr",null,[C,(0,a._)("td",null,[(0,a.Wm)(L,{id:"savePostSecretN",name:"secretYn",label:"공개",rules:"required",value:"N",modelValue:Y.secretYn,"onUpdate:modelValue":t[1]||(t[1]=e=>Y.secretYn=e)},null,8,["modelValue"]),(0,a.Wm)(L,{id:"savePostSecretY",name:"secretYn",label:"비공개",rules:"required",value:"Y",modelValue:Y.secretYn,"onUpdate:modelValue":t[2]||(t[2]=e=>Y.secretYn=e)},null,8,["modelValue"])])]),(0,a._)("tr",null,[I,(0,a._)("td",null,[(0,a.Wm)(L,{id:"savePostSecretN",name:"pinYn",label:"비고정",rules:"required",value:"N",modelValue:Y.secretYn,"onUpdate:modelValue":t[3]||(t[3]=e=>Y.secretYn=e)},null,8,["modelValue"]),(0,a.Wm)(L,{id:"savePostSecretY",name:"pinYn",label:"고정",rules:"required",value:"Y",modelValue:Y.secretYn,"onUpdate:modelValue":t[4]||(t[4]=e=>Y.secretYn=e)},null,8,["modelValue"])])])])),_:1})])),_:1},8,["onOnsubmit"])])])),_:1},8,["pageTitle"])}var V=l(8822),O=l(6597),U={name:"app-add-post",data(){return{pageTitle:"포스트 작성",post:null,ogImg:"",ogImgSize:"",ogImgFileList:[],categoryList:[],categoryId:"",secretYn:"N",pinYn:"N"}},created(){O.a.setPageTitle(this.pageTitle),this.init()},methods:{async init(){await Promise.all([this.listCategory()])},onSubmit(e){console.log(e)},async onChangeOgDesc(){const e=await this.$refs["savePostForm"].validateField("title");if(!e.valid)return;const t=await V.wW.confirmSuccess("본문 요약을 제목과 맞추시겠습니까?");if(!t)return;const l=this.$refs["savePostForm"].getValueByField("title");this.$refs["savePostForm"].setFieldValue("ogDesc",l)},onClickFile(e){},onChangeOgImg(){},listCategory(){return this.$http.get("/category").then((e=>{e.data.map((e=>{this.categoryList.push({value:e.id,text:e.nm})}))}))}}},x=l(89);const S=(0,x.Z)(U,[["render",Y],["__scopeId","data-v-62cbb6bc"]]);var q=S}}]);
//# sourceMappingURL=534.7b03c25a.js.map