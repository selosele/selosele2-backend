"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[379],{6597:function(t,e,s){s.d(e,{a:function(){return l}});var a=s(9803),i=s(4722);class o{constructor(){}setPageTitle(t){(0,i.UE)(t)?document.title=`${t} - ${a.Z.state.BlogConfig.data.title}`:document.title=a.Z.state.BlogConfig.data.title}}const l=new o},6406:function(t,e,s){s.d(e,{Z:function(){return $}});var a=s(3396),i=s(7139);const o=t=>((0,a.dD)("data-v-36360169"),t=t(),(0,a.Cn)(),t),l={key:0,class:"post__check only-input"},r=["aria-labelledby","aria-describedby"],n=["id"],c={key:0,class:"post__og-image"},p={class:"post__og-image__box"},_=["src"],h=["id"],d={class:"post__box__item-wrapper"},u={class:"post__box__item post__box__item--regdate"},g=o((()=>(0,a._)("i",{class:"xi-time-o","aria-hidden":"true"},null,-1))),m=o((()=>(0,a._)("span",{class:"sr-only"},"등록일",-1))),w=["datetime"],k=o((()=>(0,a._)("span",{class:"sr-only"},"카테고리",-1))),f={key:1,class:"post__box__item post__box__item--like-count"},y=o((()=>(0,a._)("i",{class:"xi-heart-o","aria-hidden":"true"},null,-1))),L=o((()=>(0,a._)("span",{class:"sr-only"},"추천수",-1))),q={key:2,class:"post__box__item post__box__item--comment-count"},b=o((()=>(0,a._)("i",{class:"xi-speech-o","aria-hidden":"true"},null,-1))),v=o((()=>(0,a._)("span",{class:"sr-only"},"댓글수",-1)));function S(t,e,s,o,S,C){const D=(0,a.up)("ui-checkbox"),P=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("ul",{class:(0,i.C_)(["post__wrapper",{search__results:"search"===s.type}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.postList,((o,S)=>((0,a.wg)(),(0,a.iD)("li",{class:"post__wrapper__list",key:S},[(0,a._)("div",{class:(0,i.C_)(["post__wrapper__list__item",{"post__wrapper__list__item--logined":t.isLogin&&"main"===s.type},{"post__wrapper__list__item--pin":"Y"===o.pinYn&&"main"===s.type},{"post__wrapper__list__item--secret":"Y"===o.secretYn},{"post__wrapper__list__item--new":C.isNewPost(o.regDate)}])},[t.isLogin&&"main"===s.type?((0,a.wg)(),(0,a.iD)("span",l,[(0,a.Wm)(D,{name:"checkPost",id:`checkPost${o.id}`,class:(0,i.C_)("post__checkbox"),label:"포스트 삭제",labelHidden:!0,value:o.id,modelValue:C.chkList,"onUpdate:modelValue":e[0]||(e[0]=t=>C.chkList=t),onClick:e[1]||(e[1]=t=>C.onClick(t))},null,8,["id","value","modelValue"])])):(0,a.kq)("",!0),(0,a._)("article",{"aria-labelledby":`title${o.id}`,"aria-describedby":`cont${o.id}`,class:"post__box"},[(0,a._)("h2",{id:`title${o.id}`,class:"post__title"},["main"===s.type?((0,a.wg)(),(0,a.j4)(P,{key:0,to:{path:`/post/${o.id}`,query:{page:s.page}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.title),1)])),_:2},1032,["to"])):((0,a.wg)(),(0,a.j4)(P,{key:1,to:`/post/${o.id}`,onClick:t.saveToStorage},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.title),1)])),_:2},1032,["to","onClick"]))],8,n),o.ogImgUrl?((0,a.wg)(),(0,a.iD)("p",c,[(0,a._)("span",p,[(0,a._)("img",{src:o.ogImgUrl,alt:""},null,8,_)])])):(0,a.kq)("",!0),(0,a._)("p",{id:`cont${o.id}`,class:"post__cont"},(0,i.zw)(o.rawText),9,h),(0,a._)("div",d,[(0,a._)("span",u,[g,m,(0,a._)("time",{datetime:t.$moment(o.regDate).format("YYYY-MM-DD HH:mm:ss")},(0,i.zw)(t.$moment(o.regDate).format("YYYY.MM.DD")),9,w)]),0<o.postCategory.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(o.postCategory,((t,e)=>((0,a.wg)(),(0,a.iD)("span",{class:"post__box__item post__box__item--category",key:e},[k,(0,a.Uk)(" "+(0,i.zw)(t.category.nm),1)])))),128)):(0,a.kq)("",!0),"main"===s.type?((0,a.wg)(),(0,a.iD)("span",f,[y,L,(0,a.Uk)(" "+(0,i.zw)(o.likeCnt),1)])):(0,a.kq)("",!0),"main"===s.type?((0,a.wg)(),(0,a.iD)("span",q,[b,v,(0,a.Uk)(" "+(0,i.zw)(o.replyCnt),1)])):(0,a.kq)("",!0)])],8,r)],2)])))),128))],2)}var C={name:"app-post-list-detail",props:{type:String,page:Number,postList:Array,checkList:Array,checkAll:{type:Boolean,default:!1}},data(){return{nowDate:this.$moment().format("YYYYMMDD")}},computed:{chkList:{get(){return this.checkAll?this.checkList:[]},set(t){}}},methods:{isNewPost(t){return this.nowDate===this.$moment(t).format("YYYYMMDD")},onClick(t){t.target.checked}}},D=s(89);const P=(0,D.Z)(C,[["render",S],["__scopeId","data-v-36360169"]]);var $=P},3379:function(t,e,s){s.r(e),s.d(e,{default:function(){return Y}});var a=s(3396),i=s(7139);const o=t=>((0,a.dD)("data-v-6af90fd1"),t=t(),(0,a.Cn)(),t),l={class:"search__wrapper"},r={class:"search__field",ref:"searchField"},n=o((()=>(0,a._)("button",{type:"submit",class:"search__btn"},[(0,a._)("i",{class:"xi-search","aria-hidden":"true"}),(0,a._)("span",{class:"sr-only"},"검색")],-1))),c={class:"search__detail"},p={class:"search__info"},_=(0,a.Uk)(" 검색 결과를 찾을 수 없습니다. "),h={class:"search__info__txt"},d=(0,a.Uk)("에 대한 검색 결과는 "),u={class:"search__info__txt"},g=(0,a.Uk)("입니다. "),m=o((()=>(0,a._)("i",{class:"xi-google","aria-hidden":"true"},null,-1))),w=(0,a.Uk)(" Google에서 검색 "),k={class:"search__results__wrapper",ref:"resultsWrapper"},f=o((()=>(0,a._)("i",{class:"xi-plus-circle","aria-hidden":"true"},null,-1))),y=(0,a.Uk)(" 더보기 "),L=o((()=>(0,a._)("i",{class:"xi-search","aria-hidden":"true"},null,-1))),q=o((()=>(0,a._)("span",{class:"sr-only"},"검색 필드 바로가기",-1)));function b(t,e,s,o,b,v){const S=(0,a.up)("ui-select"),C=(0,a.up)("ui-text-field"),D=(0,a.up)("ui-checkbox"),P=(0,a.up)("ui-form"),$=(0,a.up)("ui-button"),x=(0,a.up)("ui-loading"),Y=(0,a.up)("app-post-list-detail"),U=(0,a.up)("app-content-wrapper");return(0,a.wg)(),(0,a.j4)(U,{pageTitle:b.pageTitle},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a.Wm)(P,{class:(0,i.C_)("search__frm"),name:"searchForm",onOnSubmit:v.onSubmit},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.Wm)(S,{name:"t",id:"t",title:"검색 옵션",class:(0,i.C_)("search__option"),data:b.tData,selectedValue:this.$route.query["t"],modelValue:b.t,"onUpdate:modelValue":e[0]||(e[0]=t=>b.t=t)},null,8,["data","selectedValue","modelValue"]),(0,a.Wm)(C,{type:"search",name:"q",id:"q",ref:"q",title:"포스트 검색",placeholder:"검색어를 입력하세요.",modelValue:b.q,"onUpdate:modelValue":e[1]||(e[1]=t=>b.q=t)},null,8,["placeholder","modelValue"]),n],512),(0,a._)("div",c,[(0,a.Wm)(D,{name:"c",id:"c",label:"대소문자 구분",values:"Y,N",modelValue:b.c,"onUpdate:modelValue":e[2]||(e[2]=t=>b.c=t)},null,8,["modelValue"])])])),_:1},8,["onOnSubmit"]),(0,a._)("p",p,[0===b.listCnt?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[_],64)):(0,a.kq)("",!0),null!==b.postList&&b.postList.length>0?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("strong",h,(0,i.zw)(this.$route.query["q"]),1),d,(0,a._)("strong",u,(0,i.zw)(b.listCnt)+"개",1),g,(0,a.Wm)($,{type:"link",color:"dark",class:(0,i.C_)("btn--dark search__google"),href:b.googleSearchUrl,target:"_blank",title:"새창",rel:"noopener noreferrer nofollow"},{default:(0,a.w5)((()=>[m,w])),_:1},8,["href"])],64)):(0,a.kq)("",!0)]),(0,a._)("div",k,[t.$route.query["q"]&&0<b.postList.length?((0,a.wg)(),(0,a.j4)(x,{key:0,activeModel:!b.dataLoaded,fullPage:!0},null,8,["activeModel"])):(0,a.kq)("",!0),b.dataLoaded?((0,a.wg)(),(0,a.j4)(Y,{key:1,type:"search",postList:b.postList},null,8,["postList"])):(0,a.kq)("",!0),b.listCnt>b.pageSize&&!b.isLastPage?((0,a.wg)(),(0,a.iD)("p",{key:2,class:"search__more__wrapper",onClick:e[3]||(e[3]=(...t)=>v.more&&v.more(...t))},[(0,a.Wm)($,{class:(0,i.C_)("search__more")},{default:(0,a.w5)((()=>[f,y])),_:1})])):(0,a.kq)("",!0),(0,a.Wm)($,{class:(0,i.C_)(["search__to-input",{"search__to-input--active":this.toInputActive}]),onClick:v.toInput},{default:(0,a.w5)((()=>[L,q])),_:1},8,["class","onClick"])],512)])])),_:1},8,["pageTitle"])}var v=s(6406),S=s(2222),C=s(6597),D=s(4722),P={name:"app-search",components:{AppPostListDetail:v.Z},data(){return{t:this.$route.query["t"]||"001",q:this.$route.query["q"]||"",c:this.$route.query["c"]||"N",tData:[],pageTitle:"포스트 검색",page:1,nowPage:1,pageSize:10,listCnt:null,postList:[],googleSearchUrl:"",toInputActive:!1,isLastPage:!1,dataLoaded:!1}},async created(){C.a.setPageTitle(this.pageTitle),this.$store.state.Code.data.map(((t,e)=>{if("A01"===t.prefix){let e={value:t.val,text:t.nm};this.tData.push(e)}})),this.$route.query["q"]&&(await this.listPostSearch({t:this.t,q:this.q,c:this.c,page:this.page,pageSize:this.pageSize}),this.dataLoading())},beforeRouteUpdate(t,e,s){t.query.q||(this.postList=null),s()},mounted(){document.addEventListener("scroll",this.scroll)},unmounted(){document.removeEventListener("scroll",this.scroll)},methods:{init(){(0,D.UE)(localStorage.getItem("searchPage"))&&localStorage.removeItem("searchPage"),(0,D.UE)(localStorage.getItem("searchPostList"))&&localStorage.removeItem("searchPostList"),this.page=1,this.dataLoaded=!1,this.postList=[],this.isLastPage=!1},async onSubmit(t){(0,D.fp)(this.t)?S.w.toastWarning("검색옵션을 선택하세요."):(0,D.fp)(this.q)?S.w.toastWarning("검색어를 입력하세요."):(this.init(),t.page=this.page,t.pageSize=this.pageSize,await this.listPostSearch(t),this.dataLoading())},listPostSearch(t){const e=localStorage.getItem("searchPostList");return this.$http.get("/post/search",{params:t}).then((async s=>{e?JSON.parse(e):s.data[0];s.data[0].map((t=>{this.postList.push(t)})),this.listCnt=s.data[1],this.listCnt===this.postList.length&&(this.isLastPage=!0),this.googleSearchUrl=encodeURI(`https://www.google.com/search?q=${this.q}`),await this.$router.push({path:"/search",query:{q:t.q,t:t.t,c:t.c}})}))},saveToStorage(){localStorage.setItem("searchPage",localStorage.getItem("searchPage")?this.nowPage:this.page+1),localStorage.setItem("searchPostList",JSON.stringify(this.postList))},more(){localStorage.getItem("searchPostList");this.nowPage=parseInt(localStorage.getItem("searchPage"))||this.page,this.page++,this.listPostSearch({t:this.t,q:this.q,c:this.c,page:this.page,pageSize:this.pageSize})},scroll(){null!==this.postList&&0!==this.postList.length&&(this.$refs["resultsWrapper"]&&window.pageYOffset>=this.$refs["resultsWrapper"].offsetTop?this.toInputActive=!0:this.toInputActive=!1)},toInput(){const t=this.$refs["searchField"].offsetTop-100;window.scrollTo(0,t),this.$refs["q"].focus()},dataLoading(){0<this.postList.length&&(this.dataLoaded=!0)}}},$=s(89);const x=(0,$.Z)(P,[["render",b],["__scopeId","data-v-6af90fd1"]]);var Y=x}}]);
//# sourceMappingURL=379.875b4cdd.js.map