"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[795],{6597:function(t,s,e){var a=e(4460),i=e(4722);class l{constructor(){}setPageTitle(t){(0,i.UE)(t)?document.title=`${t} - ${a.Z.state.blogConfig.title}`:document.title=a.Z.state.blogConfig.title}}const o=new l;s["Z"]=o},9134:function(t,s,e){e.r(s),e.d(s,{default:function(){return f}});var a=e(3396),i=e(7139);const l=t=>((0,a.dD)("data-v-be08e382"),t=t(),(0,a.Cn)(),t),o={class:"error__wrapper"},p=l((()=>(0,a._)("p",{class:"error__message"},"방문을 원하시는 페이지의 주소가 잘못 입력되었거나, 변경 혹은 삭제되어 페이지를 찾을 수 없습니다.",-1))),r={class:"popular-post__list"},n=l((()=>(0,a._)("h2",{class:"popular-post__title"},"이런 글은 어떠신가요?",-1))),_={class:"popular-post__list__image"},d=["src"],u={key:1,class:"popular-post__list__no-image"},g={class:"popular-post__list__title"};function c(t,s,e,l,c,m){const h=(0,a.up)("ui-skeletor"),k=(0,a.up)("router-link"),w=(0,a.up)("app-content-wrapper");return(0,a.wg)(),(0,a.j4)(w,{pageTitle:c.pageTitle},{default:(0,a.w5)((()=>[(0,a._)("div",o,[p,(0,a._)("div",r,[n,(0,a._)("ul",null,[c.dataLoaded?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(h,{key:0,class:"popular-post__list__item"})),c.dataLoaded?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(h,{key:1,marginTop:"0",class:"popular-post__list__item"})),c.dataLoaded?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(h,{key:2,marginTop:"0",class:"popular-post__list__item"})),c.postList.length>0&&c.dataLoaded?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:3},(0,a.Ko)(c.postList,((t,s)=>((0,a.wg)(),(0,a.iD)("li",{class:"popular-post__list__item",key:s},[(0,a.Wm)(k,{to:`/post/${t.id}`},{default:(0,a.w5)((()=>[(0,a._)("p",_,[t.ogImgUrl?((0,a.wg)(),(0,a.iD)("img",{key:0,src:t.ogImgUrl,alt:""},null,8,d)):((0,a.wg)(),(0,a.iD)("span",u,(0,i.zw)(t.title.substring(0,1)),1))]),(0,a._)("p",g,[(0,a._)("span",null,(0,i.zw)(t.title),1)])])),_:2},1032,["to"])])))),128)):(0,a.kq)("",!0)])])])])),_:1},8,["pageTitle"])}var m=e(3210),h=e(6597),k={name:"app-error",components:{UiSkeletor:m.Z},data(){return{pageTitle:"페이지를 찾을 수 없습니다.",postList:[],dataLoaded:!1}},async created(){h.Z.setPageTitle(this.pageTitle),await this.listPostByLimit(3),this.dataLoading()},methods:{listPostByLimit(t){return this.$http.get(`/post/limit/${t}`).then((t=>{t.data.map((t=>{this.postList.push(t)})),this.dataLoading()}))},dataLoading(){0<this.postList.length&&(this.dataLoaded=!0)}}},w=e(89);const L=(0,w.Z)(k,[["render",c],["__scopeId","data-v-be08e382"]]);var f=L}}]);
//# sourceMappingURL=795.ec8c8f44.js.map