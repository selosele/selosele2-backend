"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[451],{8451:function(t,s,a){a.r(s),a.d(s,{default:function(){return h}});var e=a(3396),o=a(7139);const i={class:"error__wrapper"},l=(0,e._)("p",{class:"error__message"},"방문을 원하시는 페이지의 주소가 잘못 입력되었거나, 변경 혹은 삭제되어 페이지를 찾을 수 없습니다.",-1),p={class:"popular-post__list"},r=(0,e._)("h2",{class:"popular-post__title"},"이런 글은 어떠신가요?",-1),_={class:"popular-post__list__image"},n=["src"],d={key:1,class:"popular-post__list__no-image"},u={class:"popular-post__list__title"};function c(t,s,a,c,g,m){const k=(0,e.up)("ui-skeletor"),w=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",i,[l,(0,e._)("div",p,[r,(0,e._)("ul",null,[g.dataLoaded?(0,e.kq)("",!0):((0,e.wg)(),(0,e.j4)(k,{key:0,class:"popular-post__list__item"})),g.dataLoaded?(0,e.kq)("",!0):((0,e.wg)(),(0,e.j4)(k,{key:1,marginTop:"0",class:"popular-post__list__item"})),g.dataLoaded?(0,e.kq)("",!0):((0,e.wg)(),(0,e.j4)(k,{key:2,marginTop:"0",class:"popular-post__list__item"})),g.postList.length>0&&g.dataLoaded?((0,e.wg)(!0),(0,e.iD)(e.HY,{key:3},(0,e.Ko)(g.postList,((t,s)=>((0,e.wg)(),(0,e.iD)("li",{class:"popular-post__list__item",key:s},[(0,e.Wm)(w,{to:`/post/${t.id}`},{default:(0,e.w5)((()=>[(0,e._)("p",_,[t.ogImgUrl?((0,e.wg)(),(0,e.iD)("img",{key:0,src:t.ogImgUrl,alt:""},null,8,n)):((0,e.wg)(),(0,e.iD)("span",d,(0,o.zw)(t.title.substring(0,1)),1))]),(0,e._)("p",u,[(0,e._)("span",null,(0,o.zw)(t.title),1)])])),_:2},1032,["to"])])))),128)):(0,e.kq)("",!0)])])])}var g=a(643),m={name:"app-error",components:{UiSkeletor:g.Z},data(){return{postList:[],dataLoaded:!1}},async created(){await this.dataLoading(),await this.listPostByLimit(3)},methods:{listPostByLimit(t){return this.$http.get(`/post/list/${t}`).then((t=>{t.data.map((t=>{this.postList.push(t)})),this.dataLoading()}))},dataLoading(){return Promise.resolve(setTimeout((()=>{this.dataLoaded=!0}),500))}}},k=a(89);const w=(0,k.Z)(m,[["render",c]]);var h=w}}]);
//# sourceMappingURL=451.a91c57db.js.map