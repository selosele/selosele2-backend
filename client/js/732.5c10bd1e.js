"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[732],{9890:function(t,e,s){s.d(e,{Z:function(){return $}});var i=s(3396),a=s(7139);const o=t=>((0,i.dD)("data-v-c882a30e"),t=t(),(0,i.Cn)(),t),l={key:0,class:"post__check only-input"},r=["aria-labelledby","aria-describedby"],p=["id"],n={key:0,class:"post__og-image"},c={class:"post__og-image__box"},_=["src"],h=["id","textContent"],u={class:"post__box__item-wrapper"},d={class:"post__box__item post__box__item--regdate"},m=o((()=>(0,i._)("i",{class:"xi-time-o","aria-hidden":"true"},null,-1))),g=o((()=>(0,i._)("span",{class:"sr-only"},"등록일",-1))),w=["datetime"],k=o((()=>(0,i._)("span",{class:"sr-only"},"카테고리",-1))),y={key:1,class:"post__box__item post__box__item--like-count"},f=o((()=>(0,i._)("i",{class:"xi-heart-o","aria-hidden":"true"},null,-1))),b=o((()=>(0,i._)("span",{class:"sr-only"},"추천수",-1))),q={key:2,class:"post__box__item post__box__item--comment-count"},D=o((()=>(0,i._)("i",{class:"xi-speech-o","aria-hidden":"true"},null,-1))),x=o((()=>(0,i._)("span",{class:"sr-only"},"댓글수",-1)));function C(t,e,s,o,C,L){const v=(0,i.up)("ui-checkbox"),Y=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("ul",{class:(0,a.C_)(["post__wrapper",{search__results:"D01006"===s.pageType}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.postList,((o,C)=>((0,i.wg)(),(0,i.iD)("li",{class:"post__wrapper__list",key:C},[(0,i._)("div",{class:(0,a.C_)(["post__wrapper__list__item",{"post__wrapper__list__item--logined":t.isAdmin&&"D01001"===s.pageType},{"post__wrapper__list__item--pin":"Y"===o.pinYn&&"D01001"===s.pageType},{"post__wrapper__list__item--tmp":"Y"===o.tmpYn&&"D01001"===s.pageType},{"post__wrapper__list__item--secret":"Y"===o.secretYn},{"post__wrapper__list__item--new":L.isNewPost(o.regDate)}])},[t.isAdmin&&"D01001"===s.pageType?((0,i.wg)(),(0,i.iD)("span",l,[(0,i.Wm)(v,{name:"checkPost",id:`checkPost${o.id}`,clazz:["post__checkbox"],label:"포스트 삭제",hideLabel:!0,value:o.id,modelValue:L.chkList,"onUpdate:modelValue":e[0]||(e[0]=t=>L.chkList=t),onClick:e[1]||(e[1]=t=>L.onClick(t))},null,8,["id","value","modelValue"])])):(0,i.kq)("",!0),(0,i._)("article",{"aria-labelledby":`title${o.id}`,"aria-describedby":`cont${o.id}`,class:"post__box"},[(0,i._)("h2",{id:`title${o.id}`,class:"post__title"},["D01001"===s.pageType?((0,i.wg)(),(0,i.j4)(Y,{key:0,to:{path:`/post/${o.id}`,query:{page:s.page}},title:o.title},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(o.title),1)])),_:2},1032,["to","title"])):((0,i.wg)(),(0,i.j4)(Y,{key:1,to:`/post/${o.id}`,title:o.title},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(o.title),1)])),_:2},1032,["to","title"]))],8,p),o.ogImgUrl?((0,i.wg)(),(0,i.iD)("p",n,[(0,i._)("span",c,[(0,i._)("img",{src:o.ogImgUrl,alt:""},null,8,_)])])):(0,i.kq)("",!0),(0,i._)("p",{id:`cont${o.id}`,class:"post__cont",textContent:(0,a.zw)(o.rawText)},null,8,h),(0,i._)("div",u,[(0,i._)("span",d,[m,g,(0,i._)("time",{datetime:t.$moment(o.regDate).format("YYYY-MM-DD HH:mm:ss")},(0,a.zw)(t.$moment(o.regDate).format("YYYY.MM.DD")),9,w)]),0<o.postCategory.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(o.postCategory,((t,e)=>((0,i.wg)(),(0,i.iD)("span",{class:"post__box__item post__box__item--category",key:e},[k,(0,i.Uk)(" "+(0,a.zw)(t.category.nm),1)])))),128)):(0,i.kq)("",!0),"D01001"===s.pageType?((0,i.wg)(),(0,i.iD)("span",y,[f,b,(0,i.Uk)(" "+(0,a.zw)(o.likeCnt),1)])):(0,i.kq)("",!0),"D01001"===s.pageType?((0,i.wg)(),(0,i.iD)("span",q,[D,x,(0,i.Uk)(" "+(0,a.zw)(o.replyCnt),1)])):(0,i.kq)("",!0)])],8,r)],2)])))),128))],2)}var L={name:"AppPostListDetail",props:{pageType:String,page:Number,postList:Array,checkList:Array,checkAll:{type:Boolean,default:!1}},data(){return{nowDate:this.$moment().format("YYYYMMDD")}},computed:{chkList:{get(){return this.checkAll?this.checkList:[]},set(t){}}},methods:{isNewPost(t){return this.nowDate===this.$moment(t).format("YYYYMMDD")},onClick(t){t.target.checked}}},v=s(89);const Y=(0,v.Z)(L,[["render",C],["__scopeId","data-v-c882a30e"]]);var $=Y},1732:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var i=s(3396),a=s(7139);const o={class:"search__wrapper"},l={class:"search__field",ref:"searchField"},r={class:"search__detail"},p={class:"search__info"},n=(0,i.Uk)(" 검색 결과를 찾을 수 없습니다. "),c={class:"search__info__text"},_=(0,i.Uk)("에 대한 검색 결과는 "),h={class:"search__info__text"},u=(0,i.Uk)("입니다. "),d={class:"search__results__wrapper",ref:"resultsWrapper"};function m(t,e,s,m,g,w){const k=(0,i.up)("ui-select"),y=(0,i.up)("ui-text-field"),f=(0,i.up)("ui-icon-button"),b=(0,i.up)("ui-checkbox"),q=(0,i.up)("ui-form"),D=(0,i.up)("app-post-list-detail"),x=(0,i.up)("app-content-wrapper");return(0,i.wg)(),(0,i.j4)(x,null,{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i.Wm)(q,{class:(0,a.C_)("search__frm"),name:"searchForm",onOnsubmit:w.onSubmit},{default:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i.Wm)(k,{name:"t",id:"t",title:"검색 옵션",clazz:["search__option"],data:t.$store.state.Post.optionSelectList,selectedValue:t.$route.query["t"],modelValue:g.t,"onUpdate:modelValue":e[0]||(e[0]=t=>g.t=t)},null,8,["data","selectedValue","modelValue"]),(0,i.Wm)(y,{type:"search",name:"q",id:"q",ref:"q",title:"포스트 검색",placeholder:"검색어를 입력하세요.",modelValue:g.q,"onUpdate:modelValue":e[1]||(e[1]=t=>g.q=t)},null,8,["placeholder","modelValue"]),(0,i.Wm)(f,{type:"submit",icon:"xi-search",text:"검색",class:(0,a.C_)("search__btn")})],512),(0,i._)("div",r,[(0,i.Wm)(b,{name:"c",id:"c",label:"대소문자 구분",values:"Y,N",modelValue:g.c,"onUpdate:modelValue":e[2]||(e[2]=t=>g.c=t)},null,8,["modelValue"])])])),_:1},8,["onOnsubmit"]),(0,i._)("p",p,[0===g.listCnt?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[n],64)):(0,i.kq)("",!0),null!==g.postList&&g.postList.length>0?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("strong",c,(0,a.zw)(t.$route.query["q"]),1),_,(0,i._)("strong",h,(0,a.zw)(g.listCnt)+"개",1),u,(0,i.Wm)(f,{type:"link",color:"dark",icon:"xi-google",text:"Google에서 검색",showText:!0,class:(0,a.C_)("search__google"),href:g.googleSearchUrl,target:"_blank",title:"새창",rel:"noopener noreferrer nofollow"},null,8,["href"])],64)):(0,i.kq)("",!0)]),(0,i._)("div",d,[(0,i.Wm)(D,{type:"D01006",postList:g.postList},null,8,["postList"]),g.listCnt>g.pageSize&&!g.isLastPage?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"search__more__wrapper",onClick:e[3]||(e[3]=(...t)=>w.more&&w.more(...t))},[(0,i.Wm)(f,{icon:"xi-plus-circle",class:(0,a.C_)("search__more"),text:"더보기",showText:!0})])):(0,i.kq)("",!0),(0,i.Wm)(f,{icon:"xi-search",text:"검색 필드 바로가기",class:(0,a.C_)(["search__to-input",{"search__to-input--active":g.toInputActive}]),onClick:w.toInput},null,8,["class","onClick"])],512)])])),_:1})}var g=s(9890),w=s(8822),k={name:"AppSearch",components:{AppPostListDetail:g.Z},data(){return{t:this.$route.query["t"]||"001",q:this.$route.query["q"]||"",c:this.$route.query["c"]||"N",page:1,pageSize:10,listCnt:null,postList:[],googleSearchUrl:"",toInputActive:!1,isLastPage:!1}},async created(){this.$store.dispatch("Breadcrumb/FETCH_PAGE_TITLE","포스트 검색"),this.$route.query["q"]&&await this.listPostSearch({t:this.t,q:this.q,c:this.c,page:this.page,pageSize:this.pageSize})},beforeRouteUpdate(t,e,s){t.query["q"]||(this.postList=null),s()},mounted(){document.addEventListener("scroll",this.onScroll)},unmounted(){document.removeEventListener("scroll",this.onScroll)},methods:{init(){this.page=1,this.postList=[],this.isLastPage=!1},async onSubmit(t){const e=this.validationCheck();e&&(this.init(),t.page=this.page,t.pageSize=this.pageSize,await this.listPostSearch(t))},validationCheck(){return(0,w.fp)(this.t)?(w.wW.toastWarning("검색옵션을 선택하세요."),!1):!(0,w.fp)(this.q)||(w.wW.toastWarning("검색어를 입력하세요."),!1)},listPostSearch(t,e=!1){return this.$http.get("/post/search",{params:t}).then((async s=>{s.data[0].forEach((t=>{this.postList.push(t)})),this.listCnt=s.data[1],this.listCnt===this.postList.length&&(this.isLastPage=!0),this.googleSearchUrl=encodeURI(`https://www.google.com/search?q=${this.q}`),e||await this.$router.push({path:"/search",query:{q:t["q"],t:t["t"],c:t["c"]}})}))},more(){this.page++,this.listPostSearch({t:this.t,q:this.q,c:this.c,page:this.page,pageSize:this.pageSize},!0)},onScroll(){null!==this.postList&&0!==this.postList.length&&(this.$refs["resultsWrapper"]&&window.pageYOffset>=this.$refs["resultsWrapper"].offsetTop?this.toInputActive=!0:this.toInputActive=!1)},toInput(){const t=this.$refs["searchField"].offsetTop-100;window.scrollTo(0,t),this.$refs["q"].focus()}}},y=s(89);const f=(0,y.Z)(k,[["render",m],["__scopeId","data-v-28ff2b4a"]]);var b=f}}]);