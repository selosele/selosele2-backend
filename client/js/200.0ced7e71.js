"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[200],{3460:function(e,t,s){s.r(t),s.d(t,{default:function(){return ae}});var a=s(3396),i=s(7139),l=s(9242);const o={class:"search__wrapper"},r={class:"search__field",ref:"searchField"},n=(0,a._)("button",{type:"submit",class:"search__btn"},[(0,a._)("i",{class:"xi-search","aria-hidden":"true"}),(0,a._)("span",{class:"sr-only"},"검색")],-1),c={class:"search__detail"},u={class:"search__info"},h=(0,a.Uk)(" 검색 결과를 찾을 수 없습니다. "),p={class:"search__info__txt"},g=(0,a.Uk)("에 대한 검색 결과는 "),d={class:"search__info__txt"},_=(0,a.Uk)("입니다. "),m=["href"],w=(0,a._)("i",{class:"xi-google","aria-hidden":"true"},null,-1),f=(0,a.Uk)(" Google에서 검색 "),k=[w,f],S={class:"search__results__wrapper",ref:"resultsWrapper"},q={key:1,class:"post__wrapper search__results"},y={class:"post__title"},b={key:0,class:"post__og-image"},v={class:"post__og-image__box"},L=["src"],D={class:"post__cont"},U={class:"post__box__item-wrapper"},P={class:"post__box__item post__box__item--regdate"},x=(0,a._)("i",{class:"xi-time-o","aria-hidden":"true"},null,-1),I=(0,a._)("span",{class:"sr-only"},"등록일",-1),C=["datetime"],V=(0,a._)("span",{class:"sr-only"},"카테고리",-1),$=(0,a._)("button",{type:"button",class:"btn search__more"},[(0,a._)("i",{class:"xi-plus-circle","aria-hidden":"true"}),(0,a.Uk)(" 더보기 ")],-1),z=[$],Y=(0,a._)("i",{class:"xi-search","aria-hidden":"true"},null,-1),T=(0,a._)("span",{class:"sr-only"},"검색 필드 바로가기",-1),W=[Y,T];function Z(e,t,s,w,f,$){const Y=(0,a.up)("ui-select"),T=(0,a.up)("ui-text-field"),Z=(0,a.up)("ui-checkbox"),M=(0,a.up)("ui-form"),N=(0,a.up)("ui-loading"),H=(0,a.up)("router-link"),A=(0,a.up)("app-content-wrapper");return(0,a.wg)(),(0,a.j4)(A,{pageTitle:f.pageTitle},{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a.Wm)(M,{class:(0,i.C_)("search__frm"),name:"searchForm",onOnSubmit:$.onSubmit},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.Wm)(Y,{name:"t",title:"검색 옵션",class:(0,i.C_)("search__option"),data:f.tData,selectedValue:this.$route.query["t"],modelValue:f.t,"onUpdate:modelValue":t[0]||(t[0]=e=>f.t=e)},null,8,["data","selectedValue","modelValue"]),(0,a.Wm)(T,{type:"search",name:"q",id:"q",ref:"q",title:"포스트 검색",placeholder:"검색어를 입력하세요.",modelValue:f.q,"onUpdate:modelValue":t[1]||(t[1]=e=>f.q=e)},null,8,["placeholder","modelValue"]),n],512),(0,a._)("div",c,[(0,a.Wm)(Z,{name:"c",id:"c",label:"대소문자 구분",values:"Y,N",checked:"Y"===this.$route.query["c"],modelValue:f.c,"onUpdate:modelValue":t[2]||(t[2]=e=>f.c=e)},null,8,["checked","modelValue"])])])),_:1},8,["onOnSubmit"]),(0,a._)("p",u,[0===f.listCnt?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[h],64)):(0,a.kq)("",!0),null!==f.postList&&f.postList.length>0?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("strong",p,(0,i.zw)(this.$route.query["q"]),1),g,(0,a._)("strong",d,(0,i.zw)(f.listCnt)+"개",1),_,(0,a._)("a",{href:f.googleSearchUrl,target:"_blank",title:"새창",rel:"noopener noreferrer nofollow",class:"btn btn--dark search__google"},k,8,m)],64)):(0,a.kq)("",!0)]),(0,a._)("div",S,[e.$route.query["q"]&&0<f.postList.length?((0,a.wg)(),(0,a.j4)(N,{key:0,activeModel:!f.dataLoaded,fullPage:!0},null,8,["activeModel"])):(0,a.kq)("",!0),f.dataLoaded?((0,a.wg)(),(0,a.iD)("ul",q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.postList,((t,s)=>((0,a.wg)(),(0,a.iD)("li",{class:"post__wrapper__list",key:s},[(0,a._)("article",null,[(0,a._)("h2",y,[(0,a.Wm)(H,{to:`/post/${t.id}`,onClick:$.saveToStorage},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.title),1)])),_:2},1032,["to","onClick"])]),t.ogImgUrl?((0,a.wg)(),(0,a.iD)("p",b,[(0,a._)("span",v,[(0,a._)("img",{src:t.ogImgUrl,alt:""},null,8,L)])])):(0,a.kq)("",!0),(0,a._)("p",D,(0,i.zw)(t.rawText),1),(0,a._)("div",U,[(0,a._)("span",P,[x,I,(0,a._)("time",{datetime:e.$moment(t.regDate).format("YYYY-MM-DD HH:mm:ss")},(0,i.zw)(e.$moment(t.regDate).format("YYYY.MM.DD")),9,C)]),t.postCategory.length>0?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(t.postCategory,((e,t)=>((0,a.wg)(),(0,a.iD)("span",{class:"post__box__item post__box__item--category",key:t},[V,(0,a.Uk)(" "+(0,i.zw)(e.category.nm),1)])))),128)):(0,a.kq)("",!0)])])])))),128))])):(0,a.kq)("",!0),f.listCnt>f.pageSize&&!f.isLastPage?((0,a.wg)(),(0,a.iD)("p",{key:2,class:"search__more__wrapper",onClick:t[3]||(t[3]=(...e)=>$.more&&$.more(...e))},z)):(0,a.kq)("",!0),(0,a._)("button",{type:"button",class:(0,i.C_)(["btn search__to-input",{"search__to-input--active":this.toInputActive}]),onClick:t[4]||(t[4]=(0,l.iM)(((...e)=>$.toInput&&$.toInput(...e)),["prevent"]))},W,2)],512)])])),_:1},8,["pageTitle"])}var M=s(716),N=s(7841),H=s(9174);const A=["id","name","title","rules"],F=["disabled"],E=["value","selected"];function O(e,t,s,l,o,r){return(0,a.wg)(),(0,a.iD)("select",{id:s.id,ref:s.id,name:s.name,title:s.title,class:(0,i.C_)(s.className),rules:s.rules,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},[s.defaultValue?((0,a.wg)(),(0,a.iD)("option",{key:0,value:"",disabled:!!s.defaultValueDisabled&&"disabled",selected:""},(0,i.zw)(s.defaultValue),9,F)):(0,a.kq)("",!0),s.data&&s.data.length>0?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(s.data,((e,t)=>((0,a.wg)(),(0,a.iD)("option",{key:t,value:e.value,selected:e.value===s.selectedValue},(0,i.zw)(e.text),9,E)))),128)):(0,a.kq)("",!0)],42,A)}var K=s(5708),j={name:"ui-select",components:{Field:K.gN,ErrorMessage:K.Bc},props:{id:String,name:String,title:String,className:String,rules:String,selectedValue:[String,Number],data:Array,defaultValue:String,defaultValueDisabled:Boolean,modelValue:String}},B=s(89);const J=(0,B.Z)(j,[["render",O]]);var R=J,G=s(2794),Q=s(1197),X=s(6597),ee=s(4722),te={name:"app-search",components:{UiLoading:M.Z,UiForm:N.Z,UiTextField:H.Z,UiSelect:R,UiCheckbox:G.Z},data(){return{t:this.$route.query["t"]||"001",q:this.$route.query["q"]||"",c:this.$route.query["c"]||"N",tData:[],pageTitle:"포스트 검색",page:1,nowPage:1,pageSize:10,listCnt:null,postList:[],googleSearchUrl:"",toInputActive:!1,isLastPage:!1,dataLoaded:!1}},async created(){X.Z.setPageTitle(this.pageTitle),this.$store.state.code.map(((e,t)=>{if("A01"===e.prefix){let t={value:e.val,text:e.nm};this.tData.push(t)}})),this.$route.query["q"]&&(await this.listPostSearch({t:this.t,q:this.q,c:this.c,page:this.page,pageSize:this.pageSize}),this.dataLoading())},beforeRouteUpdate(e,t,s){e.query.q||(this.postList=null),s()},mounted(){document.addEventListener("scroll",this.scroll)},unmounted(){document.removeEventListener("scroll",this.scroll)},methods:{async onSubmit(e){this.t.trim()?this.q.trim()?(this.init(),e.page=this.page,e.pageSize=this.pageSize,await this.listPostSearch(e),this.dataLoading()):Q.Z.toastWarning("검색어를 입력하세요."):Q.Z.toastWarning("검색옵션을 선택하세요.")},init(){(0,ee.UE)(localStorage.getItem("searchPage"))&&localStorage.removeItem("searchPage"),(0,ee.UE)(localStorage.getItem("searchPostList"))&&localStorage.removeItem("searchPostList"),this.page=1,this.dataLoaded=!1,this.postList=[],this.isLastPage=!1},listPostSearch(e){const t=localStorage.getItem("searchPostList");return this.$http.get("/post/search",{params:e}).then((async e=>{t?JSON.parse(t):e.data[0];e.data[0].map((e=>{this.postList.push(e)})),this.listCnt=e.data[1],this.listCnt===this.postList.length&&(this.isLastPage=!0),this.googleSearchUrl=encodeURI(`https://www.google.com/search?q=${this.q}`),await this.$router.push({path:"/search",query:{q:this.q,t:this.t,c:this.c}})}))},saveToStorage(){localStorage.setItem("searchPage",localStorage.getItem("searchPage")?this.nowPage:this.page+1),localStorage.setItem("searchPostList",JSON.stringify(this.postList))},more(){localStorage.getItem("searchPostList");this.nowPage=parseInt(localStorage.getItem("searchPage"))||this.page,this.page++,this.listPostSearch({t:this.t,q:this.q,c:this.c,page:this.page,pageSize:this.pageSize})},scroll(){null!==this.postList&&0!==this.postList.length&&(this.$refs.resultsWrapper&&window.pageYOffset>=this.$refs.resultsWrapper.offsetTop?this.toInputActive=!0:this.toInputActive=!1)},toInput(){const e=this.$refs.searchField.offsetTop-100;window.scrollTo(0,e),this.$refs.q.focus()},dataLoading(){0<this.postList.length&&(this.dataLoaded=!0)}}};const se=(0,B.Z)(te,[["render",Z]]);var ae=se}}]);
//# sourceMappingURL=200.0ced7e71.js.map