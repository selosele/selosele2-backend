"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[358],{1358:function(t,e,s){s.r(e),s.d(e,{default:function(){return D}});var i=s(3396),a=s(7139);const n={class:"year__wrapper"},o={class:"year__list-title"},r=["onClick"],l={class:"year__list-name"},d=(0,i.Uk)("년에 작성된 포스트 ("),h=(0,i._)("span",{class:"sr-only"},"개수 : ",-1),g={key:0,class:"year__list"},p={class:"year__title"},c={class:"year__date"},y=["onClick"],u=(0,i._)("i",{class:"xi-ellipsis-h","aria-hidden":"true"},null,-1),L=(0,i._)("span",{class:"sr-only"},"더보기",-1),m=[u,L];function k(t,e,s,u,L,k){const _=(0,i.up)("ui-skeletor"),w=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",n,[L.dataLoaded?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:1},(0,i.Ko)(L.yearList,((t,e)=>((0,i.wg)(),(0,i.iD)(i.HY,{key:e},[(0,i._)("h2",o,[(0,i._)("button",{type:"button",class:(0,a.C_)(["year__list-btn",{"year__list-btn--active":e===L.activeIndex}]),onClick:s=>k.toggleList(t.year,e)},[(0,i._)("span",l,(0,a.zw)(t.year),1),d,h,(0,i.Uk)((0,a.zw)(t.count)+") ",1)],10,r)]),e===L.activeIndex?((0,i.wg)(),(0,i.iD)("ul",g,[e!==L.itemLoadedIndex?((0,i.wg)(),(0,i.j4)(_,{key:0,height:"1.3rem"})):(0,i.kq)("",!0),e!==L.itemLoadedIndex?((0,i.wg)(),(0,i.j4)(_,{key:1,height:"1.3rem"})):(0,i.kq)("",!0),e===L.itemLoadedIndex&&null!==L.postList&&0<L.postList.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:2},(0,i.Ko)(L.postList,((t,e)=>((0,i.wg)(),(0,i.iD)("li",{key:e},[(0,i.Wm)(w,{to:`/post/${t.id}`},{default:(0,i.w5)((()=>[(0,i._)("strong",p,(0,a.zw)(t.title),1),(0,i._)("span",c,(0,a.zw)(t.regDate),1)])),_:2},1032,["to"])])))),128)):(0,i.kq)("",!0)])):(0,i.kq)("",!0),e===L.activeIndex&&L.listCnt>L.pageSize&&!L.isLastPage?((0,i.wg)(),(0,i.iD)("button",{key:1,type:"button",class:"btn--more",onClick:s=>k.more(t.year,e)},m,8,y)):(0,i.kq)("",!0)],64)))),128)):((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(_,{height:"1.3rem"}),(0,i.Wm)(_,{height:"1.3rem"}),(0,i.Wm)(_,{height:"1.3rem"})],64))])}var _=s(643),w=s(6910),x={name:"app-year",components:{UiSkeletor:_.Z},data(){return{page:1,pageSize:20,listCnt:0,yearList:[],postList:[],activeIndex:-1,itemLoadedIndex:-1,dataLoaded:!1,listLoaded:!1,isLastPage:!1}},created(){this.init()},methods:{async init(){this.page=1,this.dataLoaded=!1,this.isLastPage=!1,await this.listYearAndCount(),this.dataLoading()},listYearAndCount(){return this.$http.get("/post/year/list").then((t=>{t.data.map((t=>{this.yearList.push(t)})),this.listLoaded=!0}))},toggleList(t,e){if(this.page=1,this.listCnt=0,this.postList=[],this.isLastPage=!1,e===this.activeIndex)return this.activeIndex=-1,void(this.itemLoadedIndex=-1);this.activeIndex=e,this.listPostByYear(t,e)},listPostByYear(t,e){let s={page:this.page,pageSize:this.pageSize};return this.$http.get(`/post/year/list/${t}`,{params:s}).then((t=>{0!==t.data[0].length?(t.data[0].map((t=>{t.regDate=this.$moment(t.regDate).format("YYYY.MM.DD"),this.postList.push(t)})),this.listCnt=t.data[1],this.itemLoadedIndex=e,this.listCnt===this.postList.length&&(this.isLastPage=!0)):w.Z.info("마지막 페이지입니다.")}))},more(t,e){this.page++,this.listPostByYear(t,e)},dataLoading(){0<this.yearList.length&&(this.dataLoaded=!0)}}},C=s(89);const v=(0,C.Z)(x,[["render",k]]);var D=v}}]);
//# sourceMappingURL=358.302d02cf.js.map