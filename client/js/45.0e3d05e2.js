"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[45],{6597:function(t,e,s){s.d(e,{a:function(){return n}});var i=s(9266),a=s(8822);class o{constructor(){}setPageTitle(t){(0,a.UE)(t)?document.title=`${t} - ${i.Z.state.BlogConfig.data?.title}`:document.title=i.Z.state.BlogConfig.data?.title}}const n=new o},4683:function(t,e,s){s.d(e,{Z:function(){return $}});var i=s(3396),a=s(7139);const o=t=>((0,i.dD)("data-v-1984899a"),t=t(),(0,i.Cn)(),t),n={key:0,class:"post__check only-input"},l=["aria-labelledby","aria-describedby"],r=["id"],p={key:0,class:"post__og-image"},c={class:"post__og-image__box"},d=["src"],g=["id","textContent"],u={class:"post__box__item-wrapper"},_={class:"post__box__item post__box__item--regdate"},h=o((()=>(0,i._)("i",{class:"xi-time-o","aria-hidden":"true"},null,-1))),m=o((()=>(0,i._)("span",{class:"sr-only"},"등록일",-1))),y=["datetime"],w=o((()=>(0,i._)("span",{class:"sr-only"},"카테고리",-1))),k={key:1,class:"post__box__item post__box__item--like-count"},L=o((()=>(0,i._)("i",{class:"xi-heart-o","aria-hidden":"true"},null,-1))),C=o((()=>(0,i._)("span",{class:"sr-only"},"추천수",-1))),f={key:2,class:"post__box__item post__box__item--comment-count"},P=o((()=>(0,i._)("i",{class:"xi-speech-o","aria-hidden":"true"},null,-1))),b=o((()=>(0,i._)("span",{class:"sr-only"},"댓글수",-1)));function v(t,e,s,o,v,T){const D=(0,i.up)("ui-checkbox"),W=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("ul",{class:(0,a.C_)(["post__wrapper",{search__results:"D01006"===s.pageType}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.postList,((o,v)=>((0,i.wg)(),(0,i.iD)("li",{class:"post__wrapper__list",key:v},[(0,i._)("div",{class:(0,a.C_)(["post__wrapper__list__item",{"post__wrapper__list__item--logined":t.isLogin&&"D01001"===s.pageType},{"post__wrapper__list__item--pin":"Y"===o.pinYn&&"D01001"===s.pageType},{"post__wrapper__list__item--tmp":"Y"===o.tmpYn&&"D01001"===s.pageType},{"post__wrapper__list__item--secret":"Y"===o.secretYn},{"post__wrapper__list__item--new":T.isNewPost(o.regDate)}])},[t.isLogin&&"D01001"===s.pageType?((0,i.wg)(),(0,i.iD)("span",n,[(0,i.Wm)(D,{name:"checkPost",id:`checkPost${o.id}`,class:(0,a.C_)("post__checkbox"),label:"포스트 삭제",labelHidden:!0,value:o.id,modelValue:T.chkList,"onUpdate:modelValue":e[0]||(e[0]=t=>T.chkList=t),onClick:e[1]||(e[1]=t=>T.onClick(t))},null,8,["id","value","modelValue"])])):(0,i.kq)("",!0),(0,i._)("article",{"aria-labelledby":`title${o.id}`,"aria-describedby":`cont${o.id}`,class:"post__box"},[(0,i._)("h2",{id:`title${o.id}`,class:"post__title"},["D01001"===s.pageType?((0,i.wg)(),(0,i.j4)(W,{key:0,to:{path:`/post/${o.id}`,query:{page:s.page}}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(o.title),1)])),_:2},1032,["to"])):((0,i.wg)(),(0,i.j4)(W,{key:1,to:`/post/${o.id}`,onClick:t.saveToStorage},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(o.title),1)])),_:2},1032,["to","onClick"]))],8,r),o.ogImgUrl?((0,i.wg)(),(0,i.iD)("p",p,[(0,i._)("span",c,[(0,i._)("img",{src:o.ogImgUrl,alt:""},null,8,d)])])):(0,i.kq)("",!0),(0,i._)("p",{id:`cont${o.id}`,class:"post__cont",textContent:(0,a.zw)(o.rawText)},null,8,g),(0,i._)("div",u,[(0,i._)("span",_,[h,m,(0,i._)("time",{datetime:t.$moment(o.regDate).format("YYYY-MM-DD HH:mm:ss")},(0,a.zw)(t.$moment(o.regDate).format("YYYY.MM.DD")),9,y)]),0<o.postCategory.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(o.postCategory,((t,e)=>((0,i.wg)(),(0,i.iD)("span",{class:"post__box__item post__box__item--category",key:e},[w,(0,i.Uk)(" "+(0,a.zw)(t.category.nm),1)])))),128)):(0,i.kq)("",!0),"D01001"===s.pageType?((0,i.wg)(),(0,i.iD)("span",k,[L,C,(0,i.Uk)(" "+(0,a.zw)(o.likeCnt),1)])):(0,i.kq)("",!0),"D01001"===s.pageType?((0,i.wg)(),(0,i.iD)("span",f,[P,b,(0,i.Uk)(" "+(0,a.zw)(o.replyCnt),1)])):(0,i.kq)("",!0)])],8,l)],2)])))),128))],2)}var T={name:"app-post-list-detail",props:{pageType:String,page:Number,postList:Array,checkList:Array,checkAll:{type:Boolean,default:!1}},data(){return{nowDate:this.$moment().format("YYYYMMDD")}},computed:{chkList:{get(){return this.checkAll?this.checkList:[]},set(t){}}},methods:{isNewPost(t){return this.nowDate===this.$moment(t).format("YYYYMMDD")},onClick(t){t.target.checked}}},D=s(89);const W=(0,D.Z)(T,[["render",v],["__scopeId","data-v-1984899a"]]);var $=W},45:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var i=s(3396);function a(t,e,s,a,o,n){const l=(0,i.up)("ui-loading"),r=(0,i.up)("ui-pagination"),p=(0,i.up)("app-post-list"),c=(0,i.up)("app-widget-config"),d=(0,i.up)("app-content-wrapper");return(0,i.wg)(),(0,i.j4)(d,{pageTitle:o.pageTitle},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{activeModel:!o.dataLoaded,fullPage:!0},null,8,["activeModel"]),o.dataLoaded?((0,i.wg)(),(0,i.j4)(p,{key:0,pageType:"D01001",page:o.page,postList:o.pagingPostList,categoryList:o.categoryList,onListPost:n.listPostByCategory,onRemovePost:n.refreshPostList},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)(r,{value:o.postList,key:o.postList,total:o.listCnt,first:o.page,rows:n.storePageSize,size:10,pinColumn:"pinYn",onPage:n.onPage},null,8,["value","total","first","rows","onPage"]))])),_:1},8,["page","postList","categoryList","onListPost","onRemovePost"])):(0,i.kq)("",!0),t.isLogin?((0,i.wg)(),(0,i.j4)(c,{key:1})):(0,i.kq)("",!0)])),_:1},8,["pageTitle"])}var o=s(7139),n=s(9242);const l={class:"post-list__wrapper"},r={class:"post__category-filter d-flex-w gap--10 mb--15"},p={key:0,class:"post__btn-wrapper mt--15"},c=(0,i.Uk)("포스트 작성 "),d=(0,i.Uk)("포스트 삭제 "),g={class:"post__check-all"};function u(t,e,s,a,u,_){const h=(0,i.up)("ui-select"),m=(0,i.up)("ui-form"),y=(0,i.up)("ui-icon-button"),w=(0,i.up)("ui-checkbox"),k=(0,i.up)("app-post-list-detail");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(m,{name:"postListForm",onOnsubmit:_.removePost},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{name:"postCategoryForm",ref:"postCategoryForm",onOnsubmit:_.listPostByCategory},{default:(0,i.w5)((()=>[(0,i._)("div",r,[(0,i.Wm)(h,{name:"categoryId",id:"categoryId",class:(0,o.C_)("post__category-filter-select"),title:"카테고리 선택",defaultValue:"카테고리 선택",data:s.categoryList,rules:"required",tooltip:!1,modelValue:u.selectedCategoryId,"onUpdate:modelValue":e[0]||(e[0]=t=>u.selectedCategoryId=t),onOnchange:_.listPostByCategory},null,8,["data","modelValue","onOnchange"])])])),_:1},8,["onOnsubmit"]),t.isLogin&&"D01001"===s.pageType?((0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(y,{routerLink:"/add-post",color:"primary",icon:"xi-pen",class:(0,o.C_)("post__btn")},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(y,{type:"submit",color:"dark",icon:"xi-trash",class:(0,o.C_)("post__btn")},{default:(0,i.w5)((()=>[d])),_:1}),(0,i._)("span",g,[(0,i.Wm)(w,{name:"checkAll",id:"checkAll",label:"포스트 전체 선택",values:"Y,N",modelValue:_.checkAll,"onUpdate:modelValue":e[1]||(e[1]=t=>_.checkAll=t),onClick:(0,n.iM)(_.onClick,["self"])},null,8,["modelValue","onClick"])])])):(0,i.kq)("",!0),((0,i.wg)(),(0,i.j4)(k,{pageType:s.pageType,page:s.page,key:s.postList,postList:s.postList,checkList:_.checkList,checkAll:_.isCheckAll},null,8,["pageType","page","postList","checkList","checkAll"]))])),_:1},8,["onOnsubmit"]),(0,i.WI)(t.$slots,"default",{},void 0,!0)])}var _=s(4683),h=s(8822),m={name:"app-post-list",components:{AppPostListDetail:_.Z},props:{pageType:String,page:Number,postList:Array,categoryList:Array},data(){return{selectedCategoryId:this.$store.state.Post.selectedCategoryId}},mounted(){(0,h.SL)(this.$store.state.Post.selectedCategoryId)&&this.$store.dispatch("Post/FETCH_SELECTED_CATEGORY_ID","")},computed:{checkAll:{get(){return!!((0,h.UE)(this.postList)&&0<this.postList.length)&&this.isCheckAll},set(t){let e=[];"Y"===t&&this.postList.map((t=>{e.push(t.id)})),this.$store.dispatch("Post/FETCH_CHECKLIST",e)}},checkList:{get(){return this.$store.state.Post.checkList},set(t){}},isCheckAll:{get(){return this.$store.state.Post.checkAll},set(t){}}},methods:{async removePost(t){if(0===t.checkPost.length)return void h.wW.toastWarning("삭제할 포스트를 선택하세요.");const e=t.checkPost.map((t=>{let e={};return e.id=t,e})),s=await h.wW.confirmSuccess("삭제하시겠습니까?");s&&this.$http.delete("/post",{data:e}).then((t=>{h.wW.toastSuccess("삭제되었습니다."),this.$store.dispatch("Post/FETCH_MAIN_POSTLIST",{}),this.$store.dispatch("Layout/FETCH_SIDEBAR",{}),this.$emit("removePost")}))},async listPostByCategory(t){const e=await this.$refs["postCategoryForm"].validateAll();e.valid&&this.$http.get("/post",{params:{categoryId:t,pageType:"D01001"}}).then((e=>{this.$store.dispatch("Post/FETCH_SELECTED_CATEGORY_ID",t),this.$emit("listPost",e.data)}))},onClick(t){this.$store.dispatch("Post/FETCH_CHECKALL",t.target.checked)}}},y=s(89);const w=(0,y.Z)(m,[["render",u],["__scopeId","data-v-3456c82c"]]);var k=w;const L=t=>((0,i.dD)("data-v-70f2cfa2"),t=t(),(0,i.Cn)(),t),C={class:"widget__wrapper"},f={class:"widget__config"},P=(0,i.Uk)("위젯관리 "),b=(0,i.Uk)("저장 "),v={key:1,class:"widget__list"},T=L((()=>(0,i._)("h2",null,"미사용 위젯",-1))),D=(0,i.Uk)("사용 여부 저장 ");function W(t,e,s,a,n,l){const r=(0,i.up)("ui-button"),p=(0,i.up)("ui-checkbox"),c=(0,i.up)("ui-form");return(0,i.wg)(),(0,i.iD)("div",C,[(0,i._)("div",f,[(0,i.Wm)(r,{class:(0,o.C_)("widget__btn widget__btn--config"),onClick:l.toggleList},{default:(0,i.w5)((()=>[P])),_:1},8,["onClick"]),n.listActive?((0,i.wg)(),(0,i.j4)(r,{key:0,type:"button",class:(0,o.C_)("widget__btn widget__btn--save"),onClick:l.updateWidget},{default:(0,i.w5)((()=>[b])),_:1},8,["onClick"])):(0,i.kq)("",!0),n.listActive&&0<n.noUseWidgetList.length?((0,i.wg)(),(0,i.iD)("div",v,[T,(0,i.Wm)(c,{name:"updateWidgetUseYnForm",onOnsubmit:l.updateWidgetUseYn},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.noUseWidgetList,((t,e)=>((0,i.wg)(),(0,i.j4)(p,{key:e,name:"id",id:`id${e}`,label:t.title,value:t.id},null,8,["id","label","value"])))),128)),(0,i.Wm)(r,{type:"submit",color:"primary",block:!0,class:(0,o.C_)("mt--5")},{default:(0,i.w5)((()=>[D])),_:1})])),_:1},8,["onOnsubmit"])])):(0,i.kq)("",!0)])])}var $={name:"app-widget-config",data(){return{noUseWidgetList:[],listActive:!1}},created(){this.listWidgetUseN()},computed:{widgetValue:{get(){return this.$store.state.Layout.sidebar.widget},set(t){}},changeWidgetValue:{get(){return this.$store.state.Layout.changeWidget},set(t){}}},methods:{init(){this.listWidget(),this.listWidgetUseN(),this.toggleList()},listWidgetUseN(){const t={useYn:"N"};return this.$http.get("/widget",{params:t}).then((t=>{this.noUseWidgetList=[...t.data]}))},listWidget(){return this.$store.dispatch("Layout/LIST_WIDGET",{client:this.$http,params:{useYn:"Y"}})},async updateWidget(){const t=this.validationCheck();if(!t)return;const e=await h.wW.confirmSuccess("저장하시겠습니까?");e&&this.$http.put("/widget",this.widgetValue).then((t=>{h.wW.toastSuccess("저장되었습니다."),this.init()}))},async updateWidgetUseYn(t){const e=this.useWidgetIds(t);if(0===e.length||0===e?.id.length)return void h.wW.toastWarning("사용할 위젯을 선택하세요.");const s=await h.wW.confirmSuccess("저장하시겠습니까?");s&&this.$http.put("/widget/use",e).then((t=>{h.wW.toastSuccess("저장되었습니다."),this.init()}))},validationCheck(){for(const t of this.changeWidgetValue){if((0,h.fp)(t.title))return h.wW.toastWarning("위젯 명을 입력하세요."),!1;if(30<t.title.length)return h.wW.toastWarning("위젯 명을 30자 이하로 입력하세요."),!1;if((0,h.fp)(t.icon))return h.wW.toastWarning("위젯 아이콘 클래스명을 입력하세요."),!1}return!0},useWidgetIds(t){let e=[];return(0,h.kJ)(t.id)?e=t:(0,h.UE)(t.id)&&"number"===typeof Object.values(t)[0]&&(e={id:[t.id]}),e},toggleList(){this.listActive=!this.listActive,this.$store.dispatch("Layout/FETCH_IS_ACTIVE",this.listActive),this.$store.dispatch("Layout/FETCH_CHANGE_WIDGET",this.$store.state.Layout.sidebar.widget)}}};const A=(0,y.Z)($,[["render",W],["__scopeId","data-v-70f2cfa2"]]);var Y=A,E=s(6597),I={name:"app-index",components:{AppPostList:k,AppWidgetConfig:Y},data(){return{pageTitle:"",page:null,listCnt:null,postList:[],pagingPostList:[],categoryList:[],dataLoaded:!1}},async created(){E.a.setPageTitle(this.pageTitle),this.page=parseInt(this.$route.query.page)||1,this.listCategoryAndCount(),this.init()},computed:{storePageSize(){return this.$store.state.BlogConfig.data?.pageSize},storePostList(){return this.$store.state.Post.mainPostObj.postList},storePostListCnt(){return this.$store.state.Post.mainPostObj.listCnt},hasStorePostList(){return(0,h.UE)(this.storePostList)&&0<this.storePostList.length}},methods:{onPage(t){this.page=t.page,this.pagingPostList=[...t.pageData],this.$store.dispatch("Post/FETCH_CHECKLIST",[]),this.$store.dispatch("Post/FETCH_CHECKALL",!1)},async init(){if(!this.hasStorePostList)return await this.listPost(),void this.dataLoading();this.dataLoaded=!0,this.postList=[...this.storePostList],this.listCnt=this.storePostListCnt},async listPost(){const t={pageType:"D01001"},e=await this.$http.get("/post",{params:t});return e.data[0].map((t=>{this.postList.push(t)})),this.listCnt=e.data[1],this.$store.dispatch("Post/FETCH_MAIN_POSTLIST",{postList:this.postList,listCnt:this.listCnt}),e},async refreshPostList(){const t=await this.listPost();this.listPostByCategory(t.data)},async listPostByCategory(t){await(()=>(this.dataLoaded=!1,this.postList=[...t[0]],this.listCnt=t[1],Promise.resolve()))(),this.dataLoading()},listCategoryAndCount(){return this.categoryList.push({value:"0",text:"전체"}),this.$http.get("/category/list/count").then((t=>{t.data.map((t=>{this.categoryList.push({value:t.id,text:t.nm})}))}))},dataLoading(){0<this.postList.length&&(this.dataLoaded=!0)}}};const U=(0,y.Z)(I,[["render",a]]);var x=U}}]);
//# sourceMappingURL=45.0e3d05e2.js.map