"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[740],{6597:function(t,e,s){s.d(e,{a:function(){return l}});var i=s(8665),a=s(1580);class o{constructor(){}setPageTitle(t){(0,a.UE)(t)?document.title=`${t} - ${i.Z.state.BlogConfig.data.title}`:document.title=i.Z.state.BlogConfig.data.title}}const l=new o},6406:function(t,e,s){s.d(e,{Z:function(){return A}});var i=s(3396),a=s(7139);const o=t=>((0,i.dD)("data-v-36360169"),t=t(),(0,i.Cn)(),t),l={key:0,class:"post__check only-input"},n=["aria-labelledby","aria-describedby"],r=["id"],c={key:0,class:"post__og-image"},p={class:"post__og-image__box"},d=["src"],_=["id"],g={class:"post__box__item-wrapper"},u={class:"post__box__item post__box__item--regdate"},h=o((()=>(0,i._)("i",{class:"xi-time-o","aria-hidden":"true"},null,-1))),m=o((()=>(0,i._)("span",{class:"sr-only"},"등록일",-1))),y=["datetime"],k=o((()=>(0,i._)("span",{class:"sr-only"},"카테고리",-1))),L={key:1,class:"post__box__item post__box__item--like-count"},C=o((()=>(0,i._)("i",{class:"xi-heart-o","aria-hidden":"true"},null,-1))),w=o((()=>(0,i._)("span",{class:"sr-only"},"추천수",-1))),P={key:2,class:"post__box__item post__box__item--comment-count"},f=o((()=>(0,i._)("i",{class:"xi-speech-o","aria-hidden":"true"},null,-1))),b=o((()=>(0,i._)("span",{class:"sr-only"},"댓글수",-1)));function v(t,e,s,o,v,$){const D=(0,i.up)("ui-checkbox"),Y=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("ul",{class:(0,a.C_)(["post__wrapper",{search__results:"search"===s.type}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.postList,((o,v)=>((0,i.wg)(),(0,i.iD)("li",{class:"post__wrapper__list",key:v},[(0,i._)("div",{class:(0,a.C_)(["post__wrapper__list__item",{"post__wrapper__list__item--logined":t.isLogin&&"main"===s.type},{"post__wrapper__list__item--pin":"Y"===o.pinYn&&"main"===s.type},{"post__wrapper__list__item--secret":"Y"===o.secretYn},{"post__wrapper__list__item--new":$.isNewPost(o.regDate)}])},[t.isLogin&&"main"===s.type?((0,i.wg)(),(0,i.iD)("span",l,[(0,i.Wm)(D,{name:"checkPost",id:`checkPost${o.id}`,class:(0,a.C_)("post__checkbox"),label:"포스트 삭제",labelHidden:!0,value:o.id,modelValue:$.chkList,"onUpdate:modelValue":e[0]||(e[0]=t=>$.chkList=t),onClick:e[1]||(e[1]=t=>$.onClick(t))},null,8,["id","value","modelValue"])])):(0,i.kq)("",!0),(0,i._)("article",{"aria-labelledby":`title${o.id}`,"aria-describedby":`cont${o.id}`,class:"post__box"},[(0,i._)("h2",{id:`title${o.id}`,class:"post__title"},["main"===s.type?((0,i.wg)(),(0,i.j4)(Y,{key:0,to:{path:`/post/${o.id}`,query:{page:s.page}}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(o.title),1)])),_:2},1032,["to"])):((0,i.wg)(),(0,i.j4)(Y,{key:1,to:`/post/${o.id}`,onClick:t.saveToStorage},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(o.title),1)])),_:2},1032,["to","onClick"]))],8,r),o.ogImgUrl?((0,i.wg)(),(0,i.iD)("p",c,[(0,i._)("span",p,[(0,i._)("img",{src:o.ogImgUrl,alt:""},null,8,d)])])):(0,i.kq)("",!0),(0,i._)("p",{id:`cont${o.id}`,class:"post__cont"},(0,a.zw)(o.rawText),9,_),(0,i._)("div",g,[(0,i._)("span",u,[h,m,(0,i._)("time",{datetime:t.$moment(o.regDate).format("YYYY-MM-DD HH:mm:ss")},(0,a.zw)(t.$moment(o.regDate).format("YYYY.MM.DD")),9,y)]),0<o.postCategory.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(o.postCategory,((t,e)=>((0,i.wg)(),(0,i.iD)("span",{class:"post__box__item post__box__item--category",key:e},[k,(0,i.Uk)(" "+(0,a.zw)(t.category.nm),1)])))),128)):(0,i.kq)("",!0),"main"===s.type?((0,i.wg)(),(0,i.iD)("span",L,[C,w,(0,i.Uk)(" "+(0,a.zw)(o.likeCnt),1)])):(0,i.kq)("",!0),"main"===s.type?((0,i.wg)(),(0,i.iD)("span",P,[f,b,(0,i.Uk)(" "+(0,a.zw)(o.replyCnt),1)])):(0,i.kq)("",!0)])],8,n)],2)])))),128))],2)}var $={name:"app-post-list-detail",props:{type:String,page:Number,postList:Array,checkList:Array,checkAll:{type:Boolean,default:!1}},data(){return{nowDate:this.$moment().format("YYYYMMDD")}},computed:{chkList:{get(){return this.checkAll?this.checkList:[]},set(t){}}},methods:{isNewPost(t){return this.nowDate===this.$moment(t).format("YYYYMMDD")},onClick(t){t.target.checked}}},D=s(89);const Y=(0,D.Z)($,[["render",v],["__scopeId","data-v-36360169"]]);var A=Y},2740:function(t,e,s){s.r(e),s.d(e,{default:function(){return U}});var i=s(3396);function a(t,e,s,a,o,l){const n=(0,i.up)("ui-loading"),r=(0,i.up)("ui-pagination"),c=(0,i.up)("app-post-list"),p=(0,i.up)("app-widget-config"),d=(0,i.up)("app-content-wrapper");return(0,i.wg)(),(0,i.j4)(d,{pageTitle:o.pageTitle},{default:(0,i.w5)((()=>[(0,i.Wm)(n,{activeModel:!o.dataLoaded,fullPage:!0},null,8,["activeModel"]),o.dataLoaded?((0,i.wg)(),(0,i.j4)(c,{key:0,type:"main",page:o.page,postList:o.pagingPostList,categoryList:o.categoryList,onListPost:l.listPostByCategory,onRemovePost:l.refreshPostList},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)(r,{value:o.postList,key:o.postList,total:o.listCnt,first:o.page,rows:5,size:10,pinColumn:"pinYn",onOnPage:l.onPage},null,8,["value","total","first","onOnPage"]))])),_:1},8,["page","postList","categoryList","onListPost","onRemovePost"])):(0,i.kq)("",!0),t.isLogin?((0,i.wg)(),(0,i.j4)(p,{key:1})):(0,i.kq)("",!0)])),_:1},8,["pageTitle"])}var o=s(7139),l=s(9242);const n=t=>((0,i.dD)("data-v-c9a2842c"),t=t(),(0,i.Cn)(),t),r={class:"post-list__wrapper"},c={class:"post__category-filter d-flex-w gap--10 mb--15"},p={key:0,class:"post__btn-wrapper mt--15"},d=n((()=>(0,i._)("i",{class:"xi-pen","aria-hidden":"true"},null,-1))),_=(0,i.Uk)(" 포스트 작성 "),g=n((()=>(0,i._)("i",{class:"xi-trash","aria-hidden":"true"},null,-1))),u=(0,i.Uk)(" 포스트 삭제 "),h={class:"post__check-all"};function m(t,e,s,a,n,m){const y=(0,i.up)("ui-select"),k=(0,i.up)("ui-form"),L=(0,i.up)("ui-button"),C=(0,i.up)("ui-checkbox"),w=(0,i.up)("app-post-list-detail");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(k,{name:"postListForm",onOnSubmit:m.removePost},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{name:"postCategoryForm",ref:"postCategoryForm",onOnSubmit:m.listPostByCategory},{default:(0,i.w5)((()=>[(0,i._)("div",c,[(0,i.Wm)(y,{name:"categoryId",id:"categoryId",class:(0,o.C_)("post__category-filter-select"),title:"카테고리 선택",defaultValue:"카테고리 선택",data:s.categoryList,rules:"required",modelValue:n.selectedCategoryId,"onUpdate:modelValue":e[0]||(e[0]=t=>n.selectedCategoryId=t),onOnChange:m.listPostByCategory},null,8,["data","modelValue","onOnChange"])])])),_:1},8,["onOnSubmit"]),t.isLogin&&"main"===s.type?((0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(L,{routerLink:"/add-post",color:"light",class:(0,o.C_)("post__btn")},{default:(0,i.w5)((()=>[d,_])),_:1}),(0,i.Wm)(L,{type:"submit",color:"dark",class:(0,o.C_)("post__btn")},{default:(0,i.w5)((()=>[g,u])),_:1}),(0,i._)("span",h,[(0,i.Wm)(C,{name:"checkAll",id:"checkAll",label:"포스트 전체 선택",values:"Y,N",modelValue:m.checkAll,"onUpdate:modelValue":e[1]||(e[1]=t=>m.checkAll=t),onClick:e[2]||(e[2]=(0,l.iM)((t=>m.onClick(t)),["self"]))},null,8,["modelValue"])])])):(0,i.kq)("",!0),((0,i.wg)(),(0,i.j4)(w,{type:s.type,page:s.page,key:s.postList,postList:s.postList,checkList:m.checkList,checkAll:m.isCheckAll},null,8,["type","page","postList","checkList","checkAll"]))])),_:1},8,["onOnSubmit"]),(0,i.WI)(t.$slots,"default",{},void 0,!0)])}var y=s(6406),k=s(1580),L={name:"app-post-list",components:{AppPostListDetail:y.Z},props:{type:String,page:Number,postList:Array,categoryList:Array},data(){return{selectedCategoryId:this.$store.state.Post.selectedCategoryId}},mounted(){(0,k.SL)(this.$store.state.Post.selectedCategoryId)&&this.$store.dispatch("Post/FETCH_SELECTED_CATEGORY_ID","")},computed:{checkAll:{get(){return!!((0,k.UE)(this.postList)&&0<this.postList.length)&&this.isCheckAll},set(t){let e=[];"Y"===t&&this.postList.map((t=>{e.push(t.id)})),this.$store.dispatch("Post/FETCH_CHECKLIST",e)}},checkList:{get(){return this.$store.state.Post.checkList},set(t){}},isCheckAll:{get(){return this.$store.state.Post.checkAll},set(t){}}},methods:{async removePost(t){if(0===t.checkPost.length)return void k.wW.toastWarning("삭제할 포스트를 선택하세요.");const e=t.checkPost.map((t=>{let e={};return e.id=t,e})),s=await k.wW.confirmSuccess("포스트를 삭제하시겠습니까?");s&&this.$http.delete("/post",{data:e}).then((t=>{k.wW.toastSuccess("삭제되었습니다."),this.$emit("removePost")}))},async listPostByCategory(t){const e=await this.$refs["postCategoryForm"].validateAll();e.valid&&this.$http.get("/post",{params:{categoryId:t}}).then((e=>{this.$store.dispatch("Post/FETCH_SELECTED_CATEGORY_ID",t),this.$emit("listPost",e.data)}))},onClick(t){this.$store.dispatch("Post/FETCH_CHECKALL",t.target.checked)}}},C=s(89);const w=(0,C.Z)(L,[["render",m],["__scopeId","data-v-c9a2842c"]]);var P=w;const f=t=>((0,i.dD)("data-v-7a32ee2c"),t=t(),(0,i.Cn)(),t),b={class:"widget__wrapper"},v={class:"widget__config"},$=(0,i.Uk)("위젯관리 "),D=(0,i.Uk)("저장 "),Y={key:1,class:"widget__list"},A=f((()=>(0,i._)("h2",null,"미사용 위젯",-1)));function x(t,e,s,a,l,n){const r=(0,i.up)("ui-button"),c=(0,i.up)("ui-checkbox");return(0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("div",v,[(0,i.Wm)(r,{class:(0,o.C_)("widget__btn widget__btn--config"),onClick:n.toggleList},{default:(0,i.w5)((()=>[$])),_:1},8,["onClick"]),l.listHidden?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(r,{key:0,class:(0,o.C_)("widget__btn widget__btn--save"),onClick:n.onSubmit},{default:(0,i.w5)((()=>[D])),_:1},8,["onClick"])),l.listHidden?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",Y,[A,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.noUseWidgetList,((t,e)=>((0,i.wg)(),(0,i.j4)(c,{key:e,name:"useYn",id:`useYn${e}`,label:t.title,values:"Y,N"},null,8,["id","label"])))),128))]))])])}var T={name:"app-widget-config",data(){return{noUseWidgetList:[],listHidden:!0}},created(){this.listWidget()},methods:{listWidget(){const t={useYn:"N"};return this.$http.get("/widget",{params:t}).then((t=>{this.noUseWidgetList=[...t.data]}))},async onSubmit(){await k.wW.confirmSuccess("저장하시겠습니까?")},toggleList(){this.listHidden=!this.listHidden}}};const E=(0,C.Z)(T,[["render",x],["__scopeId","data-v-7a32ee2c"]]);var H=E,I=s(6597),S={name:"app-index",components:{AppPostList:P,AppWidgetConfig:H},data(){return{pageTitle:"",page:null,listCnt:null,postList:[],pagingPostList:[],categoryList:[],dataLoaded:!1}},async created(){I.a.setPageTitle(this.pageTitle),this.page=parseInt(this.$route.query.page)||1,this.listCategoryAndCount(),this.init()},computed:{storePostList(){return this.$store.state.Post.mainPostObj.postList},storePostListCnt(){return this.$store.state.Post.mainPostObj.listCnt},hasStorePostList(){return(0,k.UE)(this.storePostList)&&0<this.storePostList.length}},methods:{onPage(t){this.page=t.page,this.pagingPostList=[...t.pageData],this.$store.dispatch("Post/FETCH_CHECKLIST",[]),this.$store.dispatch("Post/FETCH_CHECKALL",!1)},async init(){if(!this.hasStorePostList)return await this.listPost(),void this.dataLoading();this.dataLoaded=!0,this.postList=[...this.storePostList],this.listCnt=this.storePostListCnt},async listPost(){const t=await this.$http.get("/post");return t.data[0].map((t=>{this.postList.push(t)})),this.listCnt=t.data[1],this.$store.dispatch("Post/FETCH_MAIN_POSTLIST",{postList:this.postList,listCnt:this.listCnt}),t},async refreshPostList(){const t=await this.listPost();this.listPostByCategory(t.data)},async listPostByCategory(t){await(()=>(this.dataLoaded=!1,this.postList=[...t[0]],this.listCnt=t[1],Promise.resolve()))(),this.dataLoading()},listCategoryAndCount(){return this.categoryList.push({value:"0",text:"전체"}),this.$http.get("/category").then((t=>{t.data.map((t=>{this.categoryList.push({value:t.id,text:t.nm})}))}))},dataLoading(){0<this.postList.length&&(this.dataLoaded=!0)}}};const W=(0,C.Z)(S,[["render",a]]);var U=W}}]);
//# sourceMappingURL=740.df6a55f9.js.map