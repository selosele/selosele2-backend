"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[193],{45:function(t,e,s){s.r(e),s.d(e,{default:function(){return Z}});var a=s(3396),i=s(7139);const o=t=>((0,a.dD)("data-v-48d02e06"),t=t(),(0,a.Cn)(),t),l={class:"search__wrapper"},r={class:"search__field",ref:"searchField"},c=o((()=>(0,a._)("button",{type:"submit",class:"search__btn"},[(0,a._)("i",{class:"xi-search","aria-hidden":"true"}),(0,a._)("span",{class:"sr-only"},"검색")],-1))),h={class:"search__detail"},n={class:"search__info"},p=(0,a.Uk)(" 검색 결과를 찾을 수 없습니다. "),u={class:"search__info__txt"},d=(0,a.Uk)("에 대한 검색 결과는 "),g={class:"search__info__txt"},_=(0,a.Uk)("입니다. "),m=o((()=>(0,a._)("i",{class:"xi-google","aria-hidden":"true"},null,-1))),f=(0,a.Uk)(" Google에서 검색 "),L={class:"search__results__wrapper",ref:"resultsWrapper"},q=o((()=>(0,a._)("i",{class:"xi-plus-circle","aria-hidden":"true"},null,-1))),w=(0,a.Uk)(" 더보기 "),S=o((()=>(0,a._)("i",{class:"xi-search","aria-hidden":"true"},null,-1))),k=o((()=>(0,a._)("span",{class:"sr-only"},"검색 필드 바로가기",-1)));function y(t,e,s,o,y,v){const P=(0,a.up)("ui-select"),U=(0,a.up)("ui-text-field"),C=(0,a.up)("ui-checkbox"),I=(0,a.up)("ui-form"),b=(0,a.up)("ui-button"),$=(0,a.up)("ui-loading"),x=(0,a.up)("app-post-list-detail"),W=(0,a.up)("app-content-wrapper");return(0,a.wg)(),(0,a.j4)(W,{pageTitle:y.pageTitle},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a.Wm)(I,{class:(0,i.C_)("search__frm"),name:"searchForm",onOnSubmit:v.onSubmit},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.Wm)(P,{name:"t",id:"t",title:"검색 옵션",class:(0,i.C_)("search__option"),data:y.tData,selectedValue:this.$route.query["t"],modelValue:y.t,"onUpdate:modelValue":e[0]||(e[0]=t=>y.t=t)},null,8,["data","selectedValue","modelValue"]),(0,a.Wm)(U,{type:"search",name:"q",id:"q",ref:"q",title:"포스트 검색",placeholder:"검색어를 입력하세요.",modelValue:y.q,"onUpdate:modelValue":e[1]||(e[1]=t=>y.q=t)},null,8,["placeholder","modelValue"]),c],512),(0,a._)("div",h,[(0,a.Wm)(C,{name:"c",id:"c",label:"대소문자 구분",values:"Y,N",modelValue:y.c,"onUpdate:modelValue":e[2]||(e[2]=t=>y.c=t)},null,8,["modelValue"])])])),_:1},8,["onOnSubmit"]),(0,a._)("p",n,[0===y.listCnt?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[p],64)):(0,a.kq)("",!0),null!==y.postList&&y.postList.length>0?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("strong",u,(0,i.zw)(this.$route.query["q"]),1),d,(0,a._)("strong",g,(0,i.zw)(y.listCnt)+"개",1),_,(0,a.Wm)(b,{type:"link",color:"dark",class:(0,i.C_)("btn--dark search__google"),href:y.googleSearchUrl,target:"_blank",title:"새창",rel:"noopener noreferrer nofollow"},{default:(0,a.w5)((()=>[m,f])),_:1},8,["href"])],64)):(0,a.kq)("",!0)]),(0,a._)("div",L,[t.$route.query["q"]&&0<y.postList.length?((0,a.wg)(),(0,a.j4)($,{key:0,activeModel:!y.dataLoaded,fullPage:!0},null,8,["activeModel"])):(0,a.kq)("",!0),y.dataLoaded?((0,a.wg)(),(0,a.j4)(x,{key:1,type:"search",postList:y.postList},null,8,["postList"])):(0,a.kq)("",!0),y.listCnt>y.pageSize&&!y.isLastPage?((0,a.wg)(),(0,a.iD)("p",{key:2,class:"search__more__wrapper",onClick:e[3]||(e[3]=(...t)=>v.more&&v.more(...t))},[(0,a.Wm)(b,{type:"button",class:(0,i.C_)("search__more")},{default:(0,a.w5)((()=>[q,w])),_:1})])):(0,a.kq)("",!0),(0,a.Wm)(b,{type:"button",class:(0,i.C_)(["search__to-input",{"search__to-input--active":this.toInputActive}]),onClick:v.toInput},{default:(0,a.w5)((()=>[S,k])),_:1},8,["class","onClick"])],512)])])),_:1},8,["pageTitle"])}var v=s(6880),P=s(8408),U=s(7973),C=s(7328),I=s(8804),b=s(1331),$=s(1197),x=s(821),W=s(4722),T={name:"app-search",components:{UiLoading:v.Z,UiForm:P.Z,UiTextField:U.Z,UiSelect:C.Z,UiCheckbox:I.Z,AppPostListDetail:b.Z},data(){return{t:this.$route.query["t"]||"001",q:this.$route.query["q"]||"",c:this.$route.query["c"]||"N",tData:[],pageTitle:"포스트 검색",page:1,nowPage:1,pageSize:10,listCnt:null,postList:[],googleSearchUrl:"",toInputActive:!1,isLastPage:!1,dataLoaded:!1}},async created(){x.Z.setPageTitle(this.pageTitle),this.$store.state.Code.data.map(((t,e)=>{if("A01"===t.prefix){let e={value:t.val,text:t.nm};this.tData.push(e)}})),this.$route.query["q"]&&(await this.listPostSearch({t:this.t,q:this.q,c:this.c,page:this.page,pageSize:this.pageSize}),this.dataLoading())},beforeRouteUpdate(t,e,s){t.query.q||(this.postList=null),s()},mounted(){document.addEventListener("scroll",this.scroll)},unmounted(){document.removeEventListener("scroll",this.scroll)},methods:{async onSubmit(t){(0,W.fp)(this.t)?$.Z.toastWarning("검색옵션을 선택하세요."):(0,W.fp)(this.q)?$.Z.toastWarning("검색어를 입력하세요."):(this.init(),t.page=this.page,t.pageSize=this.pageSize,await this.listPostSearch(t),this.dataLoading())},init(){(0,W.UE)(localStorage.getItem("searchPage"))&&localStorage.removeItem("searchPage"),(0,W.UE)(localStorage.getItem("searchPostList"))&&localStorage.removeItem("searchPostList"),this.page=1,this.dataLoaded=!1,this.postList=[],this.isLastPage=!1},listPostSearch(t){const e=localStorage.getItem("searchPostList");return this.$http.get("/post/search",{params:t}).then((async s=>{e?JSON.parse(e):s.data[0];s.data[0].map((t=>{this.postList.push(t)})),this.listCnt=s.data[1],this.listCnt===this.postList.length&&(this.isLastPage=!0),this.googleSearchUrl=encodeURI(`https://www.google.com/search?q=${this.q}`),await this.$router.push({path:"/search",query:{q:t.q,t:t.t,c:t.c}})}))},saveToStorage(){localStorage.setItem("searchPage",localStorage.getItem("searchPage")?this.nowPage:this.page+1),localStorage.setItem("searchPostList",JSON.stringify(this.postList))},more(){localStorage.getItem("searchPostList");this.nowPage=parseInt(localStorage.getItem("searchPage"))||this.page,this.page++,this.listPostSearch({t:this.t,q:this.q,c:this.c,page:this.page,pageSize:this.pageSize})},scroll(){null!==this.postList&&0!==this.postList.length&&(this.$refs.resultsWrapper&&window.pageYOffset>=this.$refs.resultsWrapper.offsetTop?this.toInputActive=!0:this.toInputActive=!1)},toInput(){const t=this.$refs.searchField.offsetTop-100;window.scrollTo(0,t),this.$refs.q.focus()},dataLoading(){0<this.postList.length&&(this.dataLoaded=!0)}}},V=s(89);const z=(0,V.Z)(T,[["render",y],["__scopeId","data-v-48d02e06"]]);var Z=z}}]);
//# sourceMappingURL=193.a5442907.js.map