"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[132],{6597:function(t,e,s){s.d(e,{a:function(){return l}});var a=s(9266),i=s(8822);class o{constructor(){}setPageTitle(t){(0,i.UE)(t)?document.title=`${t} - ${a.Z.state.BlogConfig.data?.title}`:document.title=a.Z.state.BlogConfig.data?.title}}const l=new o},4683:function(t,e,s){s.d(e,{Z:function(){return $}});var a=s(3396),i=s(7139);const o=t=>((0,a.dD)("data-v-1984899a"),t=t(),(0,a.Cn)(),t),l={key:0,class:"post__check only-input"},r=["aria-labelledby","aria-describedby"],n=["id"],p={key:0,class:"post__og-image"},c={class:"post__og-image__box"},_=["src"],d=["id","textContent"],u={class:"post__box__item-wrapper"},h={class:"post__box__item post__box__item--regdate"},g=o((()=>(0,a._)("i",{class:"xi-time-o","aria-hidden":"true"},null,-1))),m=o((()=>(0,a._)("span",{class:"sr-only"},"등록일",-1))),k=["datetime"],w=o((()=>(0,a._)("span",{class:"sr-only"},"카테고리",-1))),y={key:1,class:"post__box__item post__box__item--like-count"},f=o((()=>(0,a._)("i",{class:"xi-heart-o","aria-hidden":"true"},null,-1))),q=o((()=>(0,a._)("span",{class:"sr-only"},"추천수",-1))),D={key:2,class:"post__box__item post__box__item--comment-count"},b=o((()=>(0,a._)("i",{class:"xi-speech-o","aria-hidden":"true"},null,-1))),L=o((()=>(0,a._)("span",{class:"sr-only"},"댓글수",-1)));function C(t,e,s,o,C,v){const x=(0,a.up)("ui-checkbox"),Y=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("ul",{class:(0,i.C_)(["post__wrapper",{search__results:"D01006"===s.pageType}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.postList,((o,C)=>((0,a.wg)(),(0,a.iD)("li",{class:"post__wrapper__list",key:C},[(0,a._)("div",{class:(0,i.C_)(["post__wrapper__list__item",{"post__wrapper__list__item--logined":t.isLogin&&"D01001"===s.pageType},{"post__wrapper__list__item--pin":"Y"===o.pinYn&&"D01001"===s.pageType},{"post__wrapper__list__item--tmp":"Y"===o.tmpYn&&"D01001"===s.pageType},{"post__wrapper__list__item--secret":"Y"===o.secretYn},{"post__wrapper__list__item--new":v.isNewPost(o.regDate)}])},[t.isLogin&&"D01001"===s.pageType?((0,a.wg)(),(0,a.iD)("span",l,[(0,a.Wm)(x,{name:"checkPost",id:`checkPost${o.id}`,class:(0,i.C_)("post__checkbox"),label:"포스트 삭제",labelHidden:!0,value:o.id,modelValue:v.chkList,"onUpdate:modelValue":e[0]||(e[0]=t=>v.chkList=t),onClick:e[1]||(e[1]=t=>v.onClick(t))},null,8,["id","value","modelValue"])])):(0,a.kq)("",!0),(0,a._)("article",{"aria-labelledby":`title${o.id}`,"aria-describedby":`cont${o.id}`,class:"post__box"},[(0,a._)("h2",{id:`title${o.id}`,class:"post__title"},["D01001"===s.pageType?((0,a.wg)(),(0,a.j4)(Y,{key:0,to:{path:`/post/${o.id}`,query:{page:s.page}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.title),1)])),_:2},1032,["to"])):((0,a.wg)(),(0,a.j4)(Y,{key:1,to:`/post/${o.id}`,onClick:t.saveToStorage},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.title),1)])),_:2},1032,["to","onClick"]))],8,n),o.ogImgUrl?((0,a.wg)(),(0,a.iD)("p",p,[(0,a._)("span",c,[(0,a._)("img",{src:o.ogImgUrl,alt:""},null,8,_)])])):(0,a.kq)("",!0),(0,a._)("p",{id:`cont${o.id}`,class:"post__cont",textContent:(0,i.zw)(o.rawText)},null,8,d),(0,a._)("div",u,[(0,a._)("span",h,[g,m,(0,a._)("time",{datetime:t.$moment(o.regDate).format("YYYY-MM-DD HH:mm:ss")},(0,i.zw)(t.$moment(o.regDate).format("YYYY.MM.DD")),9,k)]),0<o.postCategory.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(o.postCategory,((t,e)=>((0,a.wg)(),(0,a.iD)("span",{class:"post__box__item post__box__item--category",key:e},[w,(0,a.Uk)(" "+(0,i.zw)(t.category.nm),1)])))),128)):(0,a.kq)("",!0),"D01001"===s.pageType?((0,a.wg)(),(0,a.iD)("span",y,[f,q,(0,a.Uk)(" "+(0,i.zw)(o.likeCnt),1)])):(0,a.kq)("",!0),"D01001"===s.pageType?((0,a.wg)(),(0,a.iD)("span",D,[b,L,(0,a.Uk)(" "+(0,i.zw)(o.replyCnt),1)])):(0,a.kq)("",!0)])],8,r)],2)])))),128))],2)}var v={name:"app-post-list-detail",props:{pageType:String,page:Number,postList:Array,checkList:Array,checkAll:{type:Boolean,default:!1}},data(){return{nowDate:this.$moment().format("YYYYMMDD")}},computed:{chkList:{get(){return this.checkAll?this.checkList:[]},set(t){}}},methods:{isNewPost(t){return this.nowDate===this.$moment(t).format("YYYYMMDD")},onClick(t){t.target.checked}}},x=s(89);const Y=(0,x.Z)(v,[["render",C],["__scopeId","data-v-1984899a"]]);var $=Y},4132:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var a=s(3396),i=s(7139);const o=t=>((0,a.dD)("data-v-a47c31f0"),t=t(),(0,a.Cn)(),t),l={class:"search__wrapper"},r={class:"search__field",ref:"searchField"},n=o((()=>(0,a._)("button",{type:"submit",class:"search__btn"},[(0,a._)("i",{class:"xi-search","aria-hidden":"true"}),(0,a._)("span",{class:"sr-only"},"검색")],-1))),p={class:"search__detail"},c={class:"search__info"},_=(0,a.Uk)(" 검색 결과를 찾을 수 없습니다. "),d={class:"search__info__txt"},u=(0,a.Uk)("에 대한 검색 결과는 "),h={class:"search__info__txt"},g=(0,a.Uk)("입니다. "),m=(0,a.Uk)("Google에서 검색 "),k={class:"search__results__wrapper",ref:"resultsWrapper"},w=(0,a.Uk)("더보기 ");function y(t,e,s,o,y,f){const q=(0,a.up)("ui-select"),D=(0,a.up)("ui-text-field"),b=(0,a.up)("ui-checkbox"),L=(0,a.up)("ui-form"),C=(0,a.up)("ui-icon-button"),v=(0,a.up)("ui-loading"),x=(0,a.up)("app-post-list-detail"),Y=(0,a.up)("app-content-wrapper");return(0,a.wg)(),(0,a.j4)(Y,{pageTitle:y.pageTitle},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a.Wm)(L,{class:(0,i.C_)("search__frm"),name:"searchForm",onOnsubmit:f.onSubmit},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.Wm)(q,{name:"t",id:"t",title:"검색 옵션",class:(0,i.C_)("search__option"),data:y.tData,selectedValue:this.$route.query["t"],modelValue:y.t,"onUpdate:modelValue":e[0]||(e[0]=t=>y.t=t)},null,8,["data","selectedValue","modelValue"]),(0,a.Wm)(D,{type:"search",name:"q",id:"q",ref:"q",title:"포스트 검색",placeholder:"검색어를 입력하세요.",modelValue:y.q,"onUpdate:modelValue":e[1]||(e[1]=t=>y.q=t)},null,8,["placeholder","modelValue"]),n],512),(0,a._)("div",p,[(0,a.Wm)(b,{name:"c",id:"c",label:"대소문자 구분",values:"Y,N",modelValue:y.c,"onUpdate:modelValue":e[2]||(e[2]=t=>y.c=t)},null,8,["modelValue"])])])),_:1},8,["onOnsubmit"]),(0,a._)("p",c,[0===y.listCnt?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[_],64)):(0,a.kq)("",!0),null!==y.postList&&y.postList.length>0?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("strong",d,(0,i.zw)(this.$route.query["q"]),1),u,(0,a._)("strong",h,(0,i.zw)(y.listCnt)+"개",1),g,(0,a.Wm)(C,{type:"link",color:"dark",icon:"xi-google",class:(0,i.C_)("btn--dark search__google"),href:y.googleSearchUrl,target:"_blank",title:"새창",rel:"noopener noreferrer nofollow"},{default:(0,a.w5)((()=>[m])),_:1},8,["href"])],64)):(0,a.kq)("",!0)]),(0,a._)("div",k,[t.$route.query["q"]&&0<y.postList.length?((0,a.wg)(),(0,a.j4)(v,{key:0,activeModel:!y.dataLoaded,fullPage:!0},null,8,["activeModel"])):(0,a.kq)("",!0),y.dataLoaded?((0,a.wg)(),(0,a.j4)(x,{key:1,type:"D01006",postList:y.postList},null,8,["postList"])):(0,a.kq)("",!0),y.listCnt>y.pageSize&&!y.isLastPage?((0,a.wg)(),(0,a.iD)("div",{key:2,class:"search__more__wrapper",onClick:e[3]||(e[3]=(...t)=>f.more&&f.more(...t))},[(0,a.Wm)(C,{icon:"xi-plus-circle",class:(0,i.C_)("search__more")},{default:(0,a.w5)((()=>[w])),_:1})])):(0,a.kq)("",!0),(0,a.Wm)(C,{icon:"xi-search",text:"검색 필드 바로가기",class:(0,i.C_)(["search__to-input",{"search__to-input--active":this.toInputActive}]),onClick:f.toInput},null,8,["class","onClick"])],512)])])),_:1},8,["pageTitle"])}var f=s(4683),q=s(8822),D=s(6597),b={name:"app-search",components:{AppPostListDetail:f.Z},data(){return{t:this.$route.query["t"]||"001",q:this.$route.query["q"]||"",c:this.$route.query["c"]||"N",tData:[],pageTitle:"포스트 검색",page:1,pageSize:10,listCnt:null,postList:[],googleSearchUrl:"",toInputActive:!1,isLastPage:!1,dataLoaded:!1}},async created(){D.a.setPageTitle(this.pageTitle),this.$store.state.Code.data.map(((t,e)=>{if("A01"===t.prefix){let e={value:t.val,text:t.nm};this.tData.push(e)}})),this.$route.query["q"]&&(await this.listPostSearch({t:this.t,q:this.q,c:this.c,page:this.page,pageSize:this.pageSize}),this.dataLoading())},beforeRouteUpdate(t,e,s){t.query.q||(this.postList=null),s()},mounted(){document.addEventListener("scroll",this.onScroll)},unmounted(){document.removeEventListener("scroll",this.onScroll)},methods:{init(){this.page=1,this.dataLoaded=!1,this.postList=[],this.isLastPage=!1},async onSubmit(t){const e=this.validationCheck();e&&(this.init(),t.page=this.page,t.pageSize=this.pageSize,await this.listPostSearch(t),this.dataLoading())},validationCheck(){return(0,q.fp)(this.t)?(q.wW.toastWarning("검색옵션을 선택하세요."),!1):!(0,q.fp)(this.q)||(q.wW.toastWarning("검색어를 입력하세요."),!1)},listPostSearch(t,e=!1){return this.$http.get("/post/search",{params:t}).then((async s=>{s.data[0].map((t=>{this.postList.push(t)})),this.listCnt=s.data[1],this.listCnt===this.postList.length&&(this.isLastPage=!0),this.googleSearchUrl=encodeURI(`https://www.google.com/search?q=${this.q}`),e||await this.$router.push({path:"/search",query:{q:t.q,t:t.t,c:t.c}})}))},more(){this.page++,this.listPostSearch({t:this.t,q:this.q,c:this.c,page:this.page,pageSize:this.pageSize},!0)},onScroll(){null!==this.postList&&0!==this.postList.length&&(this.$refs["resultsWrapper"]&&window.pageYOffset>=this.$refs["resultsWrapper"].offsetTop?this.toInputActive=!0:this.toInputActive=!1)},toInput(){const t=this.$refs["searchField"].offsetTop-100;window.scrollTo(0,t),this.$refs["q"].focus()},dataLoading(){0<this.postList.length&&(this.dataLoaded=!0)}}},L=s(89);const C=(0,L.Z)(b,[["render",y],["__scopeId","data-v-a47c31f0"]]);var v=C}}]);
//# sourceMappingURL=132.1777da6a.js.map