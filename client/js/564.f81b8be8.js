"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[564],{564:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=s(3396),i=s(7139);const o={class:"category__wrapper"},r={key:0,class:"category__desc"},p={class:"category__list"},g={class:"category__title"},n={class:"category__date"};function c(t,e,s,c,l,h){const d=(0,a.up)("router-link"),y=(0,a.up)("ui-icon-button"),u=(0,a.up)("app-content-wrapper");return(0,a.wg)(),(0,a.j4)(u,null,{default:(0,a.w5)((()=>[(0,a._)("div",o,[""!=l.desc&&null!=l.desc?((0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("p",null,(0,i.zw)(l.desc),1)])):(0,a.kq)("",!0),(0,a._)("ul",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.postList,((t,e)=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:(0,i.C_)(["category__item","Y"===t.secretYn&&"category__item--secret"])},[(0,a.Wm)(d,{to:`/post/${t.id}`},{default:(0,a.w5)((()=>[(0,a._)("strong",g,(0,i.zw)(t.title),1),(0,a._)("span",n,(0,i.zw)(t.regDate),1)])),_:2},1032,["to"])],2)))),128))]),l.listCnt>l.pageSize&&!l.isLastPage?((0,a.wg)(),(0,a.j4)(y,{key:1,icon:"xi-ellipsis-h",text:"더보기",class:(0,i.C_)("btn--more"),onClick:h.onMore},null,8,["onClick"])):(0,a.kq)("",!0)])])),_:1})}var l=s(8822),h={name:"AppCategory",props:{pageType:String,id:String},data(){return{pageTitle:"",page:1,pageSize:20,listCnt:0,desc:"",postList:[],isLastPage:!1}},created(){this.init()},watch:{"$route.params.id"(t){this.init()}},methods:{async init(){this.page=1,this.desc="",this.postList=[],this.isLastPage=!1,await this.listPostByCategory()},listPostByCategory(){let t={page:this.page,pageSize:this.pageSize},e={};return this.$http.get(this.getApiUri(),{params:t}).then((t=>{t.data[0].forEach(((t,s)=>{0===s&&((0,l.UE)(t.postCategory)&&(this.desc=t.postCategory[0].category.desc),(0,l.UE)(t.postTag)&&(this.desc=t.postTag[0].tag.desc)),e.type=(0,l.UE)(t.postCategory)?"카테고리":"태그",e.nm=(0,l.UE)(t.postCategory)?t.postCategory[0].category.nm:t.postTag[0].tag.nm,t.regDate=this.$moment(t.regDate).format("YYYY.MM.DD"),this.postList.push(t)})),this.listCnt=t.data[1],this.listCnt===this.postList.length&&(this.isLastPage=!0),this.pageTitle=`'${e.nm}' ${e.type}의 글`,this.$store.dispatch("Breadcrumb/FETCH_PAGE_TITLE",this.pageTitle)}))},onMore(){this.page++,this.listPostByCategory()},getApiUri(){return"D01004"===this.pageType?`/post/category/${this.id}`:"D01005"===this.pageType?`/post/tag/${this.id}`:""}}},d=s(89);const y=(0,d.Z)(h,[["render",c],["__scopeId","data-v-2df0605a"]]);var u=y}}]);