"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[480],{4480:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var s=a(3396),i=a(7139);const n={class:"year__wrapper"},r={class:"year__list-title"},o={class:"year__list-name"},l=(0,s.Uk)("년에 작성된 포스트 ("),d=(0,s._)("span",{class:"sr-only"},"개수 : ",-1),p={key:0,class:"year__list"},c={class:"year__title"},h={class:"year__date"};function u(t,e,a,u,g,y){const _=(0,s.up)("ui-button"),w=(0,s.up)("router-link"),L=(0,s.up)("ui-icon-button"),k=(0,s.up)("app-content-wrapper");return(0,s.wg)(),(0,s.j4)(k,null,{default:(0,s.w5)((()=>[(0,s._)("div",n,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.yearList,((t,e)=>((0,s.wg)(),(0,s.iD)(s.HY,{key:e},[(0,s._)("h2",r,[(0,s.Wm)(_,{class:(0,i.C_)(["year__list-btn",{"year__list-btn--active":e===g.activeIndex}]),onClick:a=>y.toggleList(t.year,e)},{default:(0,s.w5)((()=>[(0,s._)("span",o,(0,i.zw)(t.year),1),l,d,(0,s.Uk)((0,i.zw)(t.count)+") ",1)])),_:2},1032,["class","onClick"])]),e===g.activeIndex?((0,s.wg)(),(0,s.iD)("ul",p,[e===g.itemLoadedIndex?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(g.currentPostList,((t,e)=>((0,s.wg)(),(0,s.iD)("li",{key:e},[(0,s.Wm)(w,{to:`/post/${t.id}`},{default:(0,s.w5)((()=>[(0,s._)("strong",c,(0,i.zw)(t.title),1),(0,s._)("span",h,(0,i.zw)(t.regDate),1)])),_:2},1032,["to"])])))),128)):(0,s.kq)("",!0)])):(0,s.kq)("",!0),e===g.activeIndex&&g.listCnt>g.pageSize&&!g.isLastPage?((0,s.wg)(),(0,s.j4)(L,{key:1,class:"btn--more",icon:"xi-ellipsis-h",text:"더보기",onClick:a=>y.onMore(t.year,e)},null,8,["onClick"])):(0,s.kq)("",!0)],64)))),128))])])),_:1})}var g={name:"app-year",data(){return{page:1,pageSize:5,listCnt:0,yearList:[],currentPostList:[],activeIndex:-1,itemLoadedIndex:-1,isLastPage:!1}},created(){this.$store.dispatch("Breadcrumb/FETCH_PAGE_TITLE","연도별 모아보기"),this.init()},methods:{async init(){this.page=1,this.isLastPage=!1,await this.listYearAndCount()},listYearAndCount(){return this.$http.get("/post/year").then((t=>{t.data.map((t=>{this.yearList.push(t)}))}))},toggleList(t,e){if(this.listCnt=0,this.currentPostList=[],this.isLastPage=!1,e===this.activeIndex)return this.updateActiveIndex(-1),void this.updateItemLoadedIndex(-1);this.updateActiveIndex(e),this.listPostByYear(t,e)},async listPostByYear(t,e,a="new"){let s={page:this.paginationDto(t)?.page??this.page,pageSize:this.paginationDto(t)?.pageSize??this.pageSize};const i=await this.$store.dispatch("Year/GET_YEAR_POSTS",{year:t,paginationDto:s,flag:a}),n=i[t][0];n.map((t=>{const e=new Date(t.regDate);t.regDate=this.$moment(e).format("YYYY.MM.DD")})),this.currentPostList.push(...n),this.listCnt=i[t][1],this.updateItemLoadedIndex(e),this.listCnt===this.$store.state.Year.data[t][0].length&&(this.isLastPage=!0)},paginationDto(t){return this.$store.state.Year.data[t]?.paginationDto},hasPostList(t){return Object.prototype.hasOwnProperty.call(this.$store.state.Year.data,t)},updateItemLoadedIndex(t){this.itemLoadedIndex=t},updateActiveIndex(t){this.activeIndex=t},onMore(t,e){this.paginationDto(t).page++,this.listPostByYear(t,e,"more")}}},y=a(89);const _=(0,y.Z)(g,[["render",u]]);var w=_}}]);
//# sourceMappingURL=480.4d0cf2c4.js.map