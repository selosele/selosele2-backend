"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[412],{1148:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var s=a(3396),i=a(7139);const l=e=>((0,s.dD)("data-v-f889d6a2"),e=e(),(0,s.Cn)(),e),o={class:"search__wrapper"},r={class:"search__field",ref:"searchField"},n=l((()=>(0,s._)("button",{type:"submit",class:"search__btn"},[(0,s._)("i",{class:"xi-search","aria-hidden":"true"}),(0,s._)("span",{class:"sr-only"},"검색")],-1))),c={class:"search__detail"},u={class:"search__info"},h=(0,s.Uk)(" 검색 결과를 찾을 수 없습니다. "),d={class:"search__info__txt"},p=(0,s.Uk)("에 대한 검색 결과는 "),g={class:"search__info__txt"},m=(0,s.Uk)("입니다. "),_=l((()=>(0,s._)("i",{class:"xi-google","aria-hidden":"true"},null,-1))),f=(0,s.Uk)(" Google에서 검색 "),S={class:"search__results__wrapper",ref:"resultsWrapper"},q=l((()=>(0,s._)("i",{class:"xi-plus-circle","aria-hidden":"true"},null,-1))),w=(0,s.Uk)(" 더보기 "),L=l((()=>(0,s._)("i",{class:"xi-search","aria-hidden":"true"},null,-1))),k=l((()=>(0,s._)("span",{class:"sr-only"},"검색 필드 바로가기",-1))),v=[L,k];function y(e,t,a,l,L,k){const y=(0,s.up)("ui-select"),b=(0,s.up)("ui-text-field"),P=(0,s.up)("ui-checkbox"),I=(0,s.up)("ui-form"),U=(0,s.up)("ui-button"),V=(0,s.up)("ui-loading"),C=(0,s.up)("app-post-list-detail"),$=(0,s.up)("app-content-wrapper");return(0,s.wg)(),(0,s.j4)($,{pageTitle:L.pageTitle},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s.Wm)(I,{class:(0,i.C_)("search__frm"),name:"searchForm",onOnSubmit:k.onSubmit},{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s.Wm)(y,{name:"t",title:"검색 옵션",class:(0,i.C_)("search__option"),data:L.tData,selectedValue:this.$route.query["t"],modelValue:L.t,"onUpdate:modelValue":t[0]||(t[0]=e=>L.t=e)},null,8,["data","selectedValue","modelValue"]),(0,s.Wm)(b,{type:"search",name:"q",id:"q",ref:"q",title:"포스트 검색",placeholder:"검색어를 입력하세요.",modelValue:L.q,"onUpdate:modelValue":t[1]||(t[1]=e=>L.q=e)},null,8,["placeholder","modelValue"]),n],512),(0,s._)("div",c,[(0,s.Wm)(P,{name:"c",id:"c",label:"대소문자 구분",values:"Y,N",checked:"Y"===this.$route.query["c"],modelValue:L.c,"onUpdate:modelValue":t[2]||(t[2]=e=>L.c=e)},null,8,["checked","modelValue"])])])),_:1},8,["onOnSubmit"]),(0,s._)("p",u,[0===L.listCnt?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[h],64)):(0,s.kq)("",!0),null!==L.postList&&L.postList.length>0?((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[(0,s._)("strong",d,(0,i.zw)(this.$route.query["q"]),1),p,(0,s._)("strong",g,(0,i.zw)(L.listCnt)+"개",1),m,(0,s.Wm)(U,{type:"link",color:"dark",class:(0,i.C_)("btn--dark search__google"),href:L.googleSearchUrl,target:"_blank",title:"새창",rel:"noopener noreferrer nofollow"},{default:(0,s.w5)((()=>[_,f])),_:1},8,["href"])],64)):(0,s.kq)("",!0)]),(0,s._)("div",S,[e.$route.query["q"]&&0<L.postList.length?((0,s.wg)(),(0,s.j4)(V,{key:0,activeModel:!L.dataLoaded,fullPage:!0},null,8,["activeModel"])):(0,s.kq)("",!0),L.dataLoaded?((0,s.wg)(),(0,s.j4)(C,{key:1,type:"search",postList:L.postList},null,8,["postList"])):(0,s.kq)("",!0),L.listCnt>L.pageSize&&!L.isLastPage?((0,s.wg)(),(0,s.iD)("p",{key:2,class:"search__more__wrapper",onClick:t[3]||(t[3]=(...e)=>k.more&&k.more(...e))},[(0,s.Wm)(U,{type:"button",class:(0,i.C_)("search__more")},{default:(0,s.w5)((()=>[q,w])),_:1})])):(0,s.kq)("",!0),(0,s._)("button",{type:"button",class:(0,i.C_)(["btn search__to-input",{"search__to-input--active":this.toInputActive}]),onClick:t[4]||(t[4]=(...e)=>k.toInput&&k.toInput(...e))},v,2)],512)])])),_:1},8,["pageTitle"])}var b=a(6880),P=a(3366),I=a(6590);const U=["id","name","title","rules"],V=["disabled"],C=["value","selected"];function $(e,t,a,l,o,r){return(0,s.wg)(),(0,s.iD)("select",(0,s.dG)({id:a.id,ref:a.id,name:a.name,title:a.title,rules:a.rules},e.$attrs,{onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))}),[a.defaultValue?((0,s.wg)(),(0,s.iD)("option",{key:0,value:"",disabled:!!a.defaultValueDisabled&&"disabled",selected:""},(0,i.zw)(a.defaultValue),9,V)):(0,s.kq)("",!0),a.data&&a.data.length>0?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)(a.data,((e,t)=>((0,s.wg)(),(0,s.iD)("option",{key:t,value:e.value,selected:e.value===a.selectedValue},(0,i.zw)(e.text),9,C)))),128)):(0,s.kq)("",!0)],16,U)}var D=a(5708),x={name:"ui-select",components:{Field:D.gN,ErrorMessage:D.Bc},props:{id:String,name:String,title:String,rules:String,selectedValue:[String,Number],data:Array,defaultValue:String,defaultValueDisabled:Boolean,modelValue:String}},z=a(89);const T=(0,z.Z)(x,[["render",$]]);var W=T,Z=a(4565),Y=a(1331),A=a(1197),F=a(6597),N=a(4722),E={name:"app-search",components:{UiLoading:b.Z,UiForm:P.Z,UiTextField:I.Z,UiSelect:W,UiCheckbox:Z.Z,AppPostListDetail:Y.Z},data(){return{t:this.$route.query["t"]||"001",q:this.$route.query["q"]||"",c:this.$route.query["c"]||"N",tData:[],pageTitle:"포스트 검색",page:1,nowPage:1,pageSize:10,listCnt:null,postList:[],googleSearchUrl:"",toInputActive:!1,isLastPage:!1,dataLoaded:!1}},async created(){F.Z.setPageTitle(this.pageTitle),this.$store.state.code.map(((e,t)=>{if("A01"===e.prefix&&"Y"===e.useYn){let t={value:e.val,text:e.nm};this.tData.push(t)}})),this.$route.query["q"]&&(await this.listPostSearch({t:this.t,q:this.q,c:this.c,page:this.page,pageSize:this.pageSize}),this.dataLoading())},beforeRouteUpdate(e,t,a){e.query.q||(this.postList=null),a()},mounted(){document.addEventListener("scroll",this.scroll)},unmounted(){document.removeEventListener("scroll",this.scroll)},methods:{async onSubmit(e){this.t.trim()?this.q.trim()?(this.init(),e.page=this.page,e.pageSize=this.pageSize,await this.listPostSearch(e),this.dataLoading()):A.Z.toastWarning("검색어를 입력하세요."):A.Z.toastWarning("검색옵션을 선택하세요.")},init(){(0,N.UE)(localStorage.getItem("searchPage"))&&localStorage.removeItem("searchPage"),(0,N.UE)(localStorage.getItem("searchPostList"))&&localStorage.removeItem("searchPostList"),this.page=1,this.dataLoaded=!1,this.postList=[],this.isLastPage=!1},listPostSearch(e){const t=localStorage.getItem("searchPostList");return this.$http.get("/post/search",{params:e}).then((async e=>{t?JSON.parse(t):e.data[0];e.data[0].map((e=>{this.postList.push(e)})),this.listCnt=e.data[1],this.listCnt===this.postList.length&&(this.isLastPage=!0),this.googleSearchUrl=encodeURI(`https://www.google.com/search?q=${this.q}`),await this.$router.push({path:"/search",query:{q:this.q,t:this.t,c:this.c}})}))},saveToStorage(){localStorage.setItem("searchPage",localStorage.getItem("searchPage")?this.nowPage:this.page+1),localStorage.setItem("searchPostList",JSON.stringify(this.postList))},more(){localStorage.getItem("searchPostList");this.nowPage=parseInt(localStorage.getItem("searchPage"))||this.page,this.page++,this.listPostSearch({t:this.t,q:this.q,c:this.c,page:this.page,pageSize:this.pageSize})},scroll(){null!==this.postList&&0!==this.postList.length&&(this.$refs.resultsWrapper&&window.pageYOffset>=this.$refs.resultsWrapper.offsetTop?this.toInputActive=!0:this.toInputActive=!1)},toInput(){const e=this.$refs.searchField.offsetTop-100;window.scrollTo(0,e),this.$refs.q.focus()},dataLoading(){0<this.postList.length&&(this.dataLoaded=!0)}}};const O=(0,z.Z)(E,[["render",y],["__scopeId","data-v-f889d6a2"]]);var j=O}}]);
//# sourceMappingURL=412.2aeb6b00.js.map