"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[640],{3640:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var i=s(3396),a=s(7139);const o={class:"category__wrapper"},r={class:"category__list"},p={class:"category__title"},n={class:"category__date"};function g(t,e,s,g,l,c){const h=(0,i.up)("router-link"),u=(0,i.up)("ui-icon-button"),y=(0,i.up)("app-content-wrapper");return(0,i.wg)(),(0,i.j4)(y,null,{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("ul",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.postList,((t,e)=>((0,i.wg)(),(0,i.iD)("li",{key:e,class:(0,a.C_)(["category__item","Y"===t.secretYn&&"category__item--secret"])},[(0,i.Wm)(h,{to:`/post/${t.id}`},{default:(0,i.w5)((()=>[(0,i._)("strong",p,(0,a.zw)(t.title),1),(0,i._)("span",n,(0,a.zw)(t.regDate),1)])),_:2},1032,["to"])],2)))),128))]),l.listCnt>l.pageSize&&!l.isLastPage?((0,i.wg)(),(0,i.j4)(u,{key:0,icon:"xi-ellipsis-h",text:"더보기",class:(0,a.C_)("btn--more"),onClick:c.onMore},null,8,["onClick"])):(0,i.kq)("",!0)])])),_:1})}var l=s(8822),c={name:"AppCategory",props:{pageType:String,id:String},data(){return{pageTitle:"",page:1,pageSize:20,listCnt:0,postList:[],isLastPage:!1}},created(){this.init()},watch:{"$route.params.id"(t){this.init()}},methods:{async init(){this.page=1,this.isLastPage=!1,this.postList=[],await this.listPostByCategory()},listPostByCategory(){let t={page:this.page,pageSize:this.pageSize},e={};return this.$http.get(`${this.getApiUri()}/${this.id}`,{params:t}).then((t=>{t.data[0].forEach((t=>{e.type=(0,l.UE)(t.postCategory)?"카테고리":"태그",e.nm=(0,l.UE)(t.postCategory)?t.postCategory[0].category.nm:t.postTag[0].tag.nm,t.regDate=this.$moment(t.regDate).format("YYYY.MM.DD"),this.postList.push(t)})),this.listCnt=t.data[1],this.listCnt===this.postList.length&&(this.isLastPage=!0),this.pageTitle=`'${e.nm}' ${e.type}의 글`,this.$store.dispatch("Breadcrumb/FETCH_PAGE_TITLE",this.pageTitle)}))},onMore(){this.page++,this.listPostByCategory()},getApiUri(){return"D01004"===this.pageType?"/post/category":"D01005"===this.pageType?"/post/tag":""}}},h=s(89);const u=(0,h.Z)(c,[["render",g],["__scopeId","data-v-591e91ce"]]);var y=u}}]);