"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[734],{6597:function(t,a,s){s.d(a,{a:function(){return o}});var e=s(9266),i=s(8822);class l{constructor(){}setPageTitle(t){(0,i.UE)(t)?document.title=`${t} - ${e.Z.state.BlogConfig.data?.title}`:document.title=e.Z.state.BlogConfig.data?.title}}const o=new l},4734:function(t,a,s){s.r(a),s.d(a,{default:function(){return L}});var e=s(3396),i=s(7139);const l=t=>((0,e.dD)("data-v-08d8df06"),t=t(),(0,e.Cn)(),t),o={class:"error__wrapper"},p=l((()=>(0,e._)("p",{class:"error__message"},"방문을 원하시는 페이지의 주소가 잘못 입력되었거나, 변경 혹은 삭제되어 페이지를 찾을 수 없습니다.",-1))),r={class:"popular-post__list"},d=l((()=>(0,e._)("h2",{class:"popular-post__title"},"이런 글은 어떠신가요?",-1))),n={class:"popular-post__list__image"},_=["src"],u={key:1,class:"popular-post__list__no-image"},g={class:"popular-post__list__title"};function c(t,a,s,l,c,m){const h=(0,e.up)("ui-skeletor"),w=(0,e.up)("router-link"),k=(0,e.up)("app-content-wrapper");return(0,e.wg)(),(0,e.j4)(k,{pageTitle:c.pageTitle},{default:(0,e.w5)((()=>[(0,e._)("div",o,[p,(0,e._)("div",r,[d,(0,e._)("ul",null,[c.dataLoaded?(0,e.kq)("",!0):((0,e.wg)(),(0,e.j4)(h,{key:0,class:"popular-post__list__item"})),c.dataLoaded?(0,e.kq)("",!0):((0,e.wg)(),(0,e.j4)(h,{key:1,marginTop:"0",class:"popular-post__list__item"})),c.dataLoaded?(0,e.kq)("",!0):((0,e.wg)(),(0,e.j4)(h,{key:2,marginTop:"0",class:"popular-post__list__item"})),c.postList.length>0&&c.dataLoaded?((0,e.wg)(!0),(0,e.iD)(e.HY,{key:3},(0,e.Ko)(c.postList,((t,a)=>((0,e.wg)(),(0,e.iD)("li",{class:"popular-post__list__item",key:a},[(0,e.Wm)(w,{to:`/post/${t.id}`},{default:(0,e.w5)((()=>[(0,e._)("p",n,[t.ogImgUrl?((0,e.wg)(),(0,e.iD)("img",{key:0,src:t.ogImgUrl,alt:""},null,8,_)):((0,e.wg)(),(0,e.iD)("span",u,(0,i.zw)(t.title.substring(0,1)),1))]),(0,e._)("p",g,[(0,e._)("span",null,(0,i.zw)(t.title),1)])])),_:2},1032,["to"])])))),128)):(0,e.kq)("",!0)])])])])),_:1},8,["pageTitle"])}var m=s(6597),h={name:"app-error",data(){return{pageTitle:"페이지를 찾을 수 없습니다.",postList:[],dataLoaded:!1}},async created(){m.a.setPageTitle(this.pageTitle),await this.listPostByLimit(3),this.dataLoading()},methods:{listPostByLimit(t){return this.$http.get(`/post/limit/${t}`).then((t=>{t.data.map((t=>{this.postList.push(t)})),this.dataLoading()}))},dataLoading(){0<this.postList.length&&(this.dataLoaded=!0)}}},w=s(89);const k=(0,w.Z)(h,[["render",c],["__scopeId","data-v-08d8df06"]]);var L=k}}]);
//# sourceMappingURL=734.443c6305.js.map