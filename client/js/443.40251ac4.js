"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[443],{4443:function(t,e,s){s.r(e),s.d(e,{default:function(){return D}});var a=s(3396),i=s(7139);const n=t=>((0,a.dD)("data-v-77d9515a"),t=t(),(0,a.Cn)(),t),l={class:"year__wrapper"},r={class:"year__list-title"},o=["onClick"],p={class:"year__list-name"},d=(0,a.Uk)("년에 작성된 포스트 ("),h=n((()=>(0,a._)("span",{class:"sr-only"},"개수 : ",-1))),g={key:0,class:"year__list"},c={class:"year__title"},u={class:"year__date"},y=["onClick"],_=n((()=>(0,a._)("i",{class:"xi-ellipsis-h","aria-hidden":"true"},null,-1))),L=n((()=>(0,a._)("span",{class:"sr-only"},"더보기",-1))),w=[_,L];function k(t,e,s,n,_,L){const k=(0,a.up)("router-link"),m=(0,a.up)("app-content-wrapper");return(0,a.wg)(),(0,a.j4)(m,{pageTitle:_.pageTitle},{default:(0,a.w5)((()=>[(0,a._)("div",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(_.yearList,((t,e)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e},[(0,a._)("h2",r,[(0,a._)("button",{type:"button",class:(0,i.C_)(["year__list-btn",{"year__list-btn--active":e===_.activeIndex}]),onClick:s=>L.toggleList(t.year,e)},[(0,a._)("span",p,(0,i.zw)(t.year),1),d,h,(0,a.Uk)((0,i.zw)(t.count)+") ",1)],10,o)]),e===_.activeIndex?((0,a.wg)(),(0,a.iD)("ul",g,[e===_.itemLoadedIndex&&null!==_.postList&&0<_.postList.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(_.postList,((t,e)=>((0,a.wg)(),(0,a.iD)("li",{key:e},[(0,a.Wm)(k,{to:`/post/${t.id}`},{default:(0,a.w5)((()=>[(0,a._)("strong",c,(0,i.zw)(t.title),1),(0,a._)("span",u,(0,i.zw)(t.regDate),1)])),_:2},1032,["to"])])))),128)):(0,a.kq)("",!0)])):(0,a.kq)("",!0),e===_.activeIndex&&_.listCnt>_.pageSize&&!_.isLastPage?((0,a.wg)(),(0,a.iD)("button",{key:1,type:"button",class:"btn--more",onClick:s=>L.onMore(t.year,e)},w,8,y)):(0,a.kq)("",!0)],64)))),128))])])),_:1},8,["pageTitle"])}var m=s(8822),v=s(6597),C={name:"app-year",data(){return{pageTitle:"연도별 모아보기",page:1,pageSize:20,listCnt:0,yearList:[],postList:[],activeIndex:-1,itemLoadedIndex:-1,isLastPage:!1}},created(){(new v.p).setPageTitle(this.pageTitle),this.init()},methods:{async init(){this.page=1,this.isLastPage=!1,await this.listYearAndCount()},listYearAndCount(){return this.$http.get("/post/year").then((t=>{t.data.map((t=>{this.yearList.push(t)}))}))},toggleList(t,e){if(this.page=1,this.listCnt=0,this.postList=[],this.isLastPage=!1,e===this.activeIndex)return this.activeIndex=-1,void(this.itemLoadedIndex=-1);this.activeIndex=e,this.listPostByYear(t,e)},listPostByYear(t,e){let s={page:this.page,pageSize:this.pageSize};return this.$http.get(`/post/year/${t}`,{params:s}).then((t=>{0!==t.data[0].length?(t.data[0].map((t=>{t.regDate=this.$moment(t.regDate).format("YYYY.MM.DD"),this.postList.push(t)})),this.listCnt=t.data[1],this.itemLoadedIndex=e,this.listCnt===this.postList.length&&(this.isLastPage=!0)):m.wW.toastInfo("마지막 페이지입니다.")}))},onMore(t,e){this.page++,this.listPostByYear(t,e)}}},I=s(89);const x=(0,I.Z)(C,[["render",k],["__scopeId","data-v-77d9515a"]]);var D=x}}]);
//# sourceMappingURL=443.40251ac4.js.map