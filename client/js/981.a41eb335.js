"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[981],{3595:function(t,i,s){s.r(i),s.d(i,{default:function(){return mt}});var e=s(3396);function a(t,i,s,a,n,o){const l=(0,e.up)("ui-loading"),p=(0,e.up)("ui-pagination"),r=(0,e.up)("app-post-list"),_=(0,e.up)("app-widget-config"),g=(0,e.up)("app-content-wrapper");return(0,e.wg)(),(0,e.j4)(g,{pageTitle:n.pageTitle},{default:(0,e.w5)((()=>[(0,e.Wm)(l,{activeModel:!n.dataLoaded,fullPage:!0},null,8,["activeModel"]),n.dataLoaded?((0,e.wg)(),(0,e.j4)(r,{key:0,type:"main",page:n.page,postList:n.pagingPostList},{default:(0,e.w5)((()=>[(0,e.Wm)(p,{value:n.postList,total:n.listCnt,first:n.page,rows:5,size:10,onOnPage:o.onPage},null,8,["value","total","first","onOnPage"])])),_:1},8,["page","postList"])):(0,e.kq)("",!0),t.isLogin?((0,e.wg)(),(0,e.j4)(_,{key:1})):(0,e.kq)("",!0)])),_:1},8,["pageTitle"])}var n=s(716),o=s(7139);const l={class:"pagination"},p={class:"pagination__list pagination__list--first"},r=(0,e._)("i",{class:"xi-step-backward","aria-hidden":"true"},null,-1),_=(0,e._)("span",{class:"sr-only"},"첫 번째 페이지",-1),g=[r,_],d={class:"pagination__list pagination__list--prev"},c=(0,e._)("i",{class:"xi-angle-left","aria-hidden":"true"},null,-1),u=(0,e._)("span",{class:"sr-only"},"이전 페이지",-1),h=[c,u],m=["title","onClick"],b={class:"pagination__list pagination__list--next"},w=(0,e._)("i",{class:"xi-angle-right","aria-hidden":"true"},null,-1),k=(0,e._)("span",{class:"sr-only"},"다음 페이지",-1),L=[w,k],y={class:"pagination__list pagination__list--last"},f=(0,e._)("i",{class:"xi-step-forward","aria-hidden":"true"},null,-1),P=(0,e._)("span",{class:"sr-only"},"마지막 페이지",-1),v=[f,P];function C(t,i,s,a,n,r){return(0,e.wg)(),(0,e.iD)("nav",l,[(0,e._)("ul",null,[(0,e._)("li",p,[(0,e._)("span",{class:(0,o.C_)(["link",{"link--disabled":r.page<=1}]),onClick:i[0]||(i[0]=t=>r.onPage(1))},g,2)]),(0,e._)("li",d,[(0,e._)("span",{class:(0,o.C_)(["link",{"link--disabled":r.page<=1}]),onClick:i[1]||(i[1]=t=>r.onPage(this.page-1))},h,2)]),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.pages,((t,i)=>((0,e.wg)(),(0,e.iD)("li",{key:i,class:(0,o.C_)(["pagination__list","pagination__list--num",{"pagination__list--active":r.page===t}])},[(0,e._)("span",{title:""+(r.page===t?"현재 페이지":""),class:"link",onClick:i=>r.onPage(t)},(0,o.zw)(t),9,m)],2)))),128)),(0,e._)("li",b,[(0,e._)("span",{class:(0,o.C_)(["link",{"link--disabled":r.page>=r.paginationTotal}]),onClick:i[2]||(i[2]=t=>r.onPage(this.page+1))},L,2)]),(0,e._)("li",y,[(0,e._)("span",{class:(0,o.C_)(["link",{"link--disabled":r.page>=r.paginationTotal}]),onClick:i[3]||(i[3]=t=>r.onPage(r.paginationTotal))},v,2)])])])}var x={name:"ui-pagination",props:{value:Array,total:Number,first:{type:Number,default:1},rows:{type:Number,default:10},size:{type:Number,default:5}},data(){return{pageNum:this.first}},created(){this.onPage(this.page)},computed:{page:{get(){return this.pageNum},set(t){this.pageNum=t}},pages(){let t=[];for(let i=this.paginationStart;i<=this.paginationEnd;i++)t.push(i);return t},paginationSkip(){return(this.page-1)*this.rows},paginationRows(){return Math.ceil(this.paginationSkip/this.rows)*this.rows+this.rows},paginationStart(){const t=parseInt(this.page/this.size-1)*this.size+1;return this.page>=this.size?this.size-1:t},paginationEnd(){const t=parseInt(this.page/this.size)*this.size+this.size;return t<=this.paginationTotal?t:this.paginationTotal},paginationTotal(){return Math.ceil(this.total/this.rows)}},methods:{onPage(t){this.page=t;let i=this.value.slice(this.paginationSkip,this.paginationRows);0!==i.length?this.$emit("onPage",{page:this.page,pageData:i}):this.onPage(1)}}},D=s(89);const Y=(0,D.Z)(x,[["render",C]]);var $=Y;const z={class:"post-list__wrapper"},T={key:0,class:"post__btn-wrapper"},S=(0,e._)("i",{class:"xi-pen","aria-hidden":"true"},null,-1),U=(0,e.Uk)(" 포스트 작성 "),N=(0,e._)("button",{type:"submit",class:"post__btn btn btn--dark"},[(0,e._)("i",{class:"xi-trash","aria-hidden":"true"}),(0,e.Uk)(" 포스트 삭제 ")],-1),A={class:"post__check-all"},M={class:"post__wrapper"},W={key:0,class:"post__check only-input"},Z=["aria-labelledby","aria-describedby"],q=["id"],H=["id"],O={class:"post__box__item-wrapper"},V={class:"post__box__item post__box__item--regdate"},I=(0,e._)("i",{class:"xi-time-o","aria-hidden":"true"},null,-1),j=(0,e._)("span",{class:"sr-only"},"등록일",-1),E=["datetime"],F=(0,e._)("span",{class:"sr-only"},"카테고리",-1),K={class:"post__box__item post__box__item--like-count"},R=(0,e._)("i",{class:"xi-heart-o","aria-hidden":"true"},null,-1),B=(0,e._)("span",{class:"sr-only"},"추천수",-1),G={class:"post__box__item post__box__item--comment-count"},J=(0,e._)("i",{class:"xi-speech-o","aria-hidden":"true"},null,-1),Q=(0,e._)("span",{class:"sr-only"},"댓글수",-1);function X(t,i,s,a,n,l){const p=(0,e.up)("router-link"),r=(0,e.up)("ui-checkbox"),_=(0,e.up)("ui-form");return(0,e.wg)(),(0,e.iD)("div",z,[(0,e.Wm)(_,{name:"postListForm",onOnSubmit:l.onSubmit},{default:(0,e.w5)((()=>[t.isLogin&&"main"===s.type?((0,e.wg)(),(0,e.iD)("div",T,[(0,e.Wm)(p,{to:"/write",class:"post__btn btn btn--light"},{default:(0,e.w5)((()=>[S,U])),_:1}),N,(0,e._)("span",A,[(0,e.Wm)(r,{name:"checkAll",id:"checkAll",label:"포스트 전체 선택",values:"Y,N",modelValue:l.checkAll,"onUpdate:modelValue":i[0]||(i[0]=t=>l.checkAll=t)},null,8,["modelValue"])])])):(0,e.kq)("",!0),(0,e._)("ul",M,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(s.postList,((i,a)=>((0,e.wg)(),(0,e.iD)("li",{key:a,class:(0,o.C_)(["post__wrapper__list",{"post__wrapper__list--logined":t.isLogin},{"post__wrapper__list--secret":"Y"===i.secretYn},{"post__wrapper__list--pin":"Y"===i.pinYn}])},[t.isLogin?((0,e.wg)(),(0,e.iD)("span",W,[(0,e.Wm)(r,{name:`checkPost${i.id}`,id:`checkPost${i.id}`,class:(0,o.C_)("post__checkbox"),label:"포스트 삭제",labelHidden:!0,values:`${i.id},N`,modelValue:n.checkList[a],"onUpdate:modelValue":t=>n.checkList[a]=t},null,8,["name","id","values","modelValue","onUpdate:modelValue"])])):(0,e.kq)("",!0),(0,e._)("article",{"aria-labelledby":`title${i.id}`,"aria-describedby":`cont${i.id}`,class:"post__box"},[(0,e._)("h2",{id:`title${i.id}`,class:"post__title"},[(0,e.Wm)(p,{to:{path:`/post/${i.id}`,query:{page:s.page}}},{default:(0,e.w5)((()=>[(0,e.Uk)((0,o.zw)(i.title),1)])),_:2},1032,["to"])],8,q),(0,e._)("p",{id:`cont${i.id}`,class:"post__cont"},(0,o.zw)(i.rawText),9,H),(0,e._)("div",O,[(0,e._)("span",V,[I,j,(0,e._)("time",{datetime:t.$moment(i.regDate).format("YYYY-MM-DD HH:mm:ss")},(0,o.zw)(t.$moment(i.regDate).format("YYYY.MM.DD")),9,E)]),0<i.postCategory.length?((0,e.wg)(!0),(0,e.iD)(e.HY,{key:0},(0,e.Ko)(i.postCategory,((t,i)=>((0,e.wg)(),(0,e.iD)("span",{class:"post__box__item post__box__item--category",key:i},[F,(0,e.Uk)(" "+(0,o.zw)(t.category.nm),1)])))),128)):(0,e.kq)("",!0),(0,e._)("span",K,[R,B,(0,e.Uk)(" "+(0,o.zw)(i.likeCnt),1)]),(0,e._)("span",G,[J,Q,(0,e.Uk)(" "+(0,o.zw)(i.replyCnt),1)])])],8,Z)],2)))),128))])])),_:1},8,["onOnSubmit"]),(0,e.WI)(t.$slots,"default")])}var tt=s(2969),it=s(4821),st={name:"app-post-list",components:{UiForm:tt.Z,UiCheckbox:it.Z},props:{type:String,page:Number,postList:Array},data(){return{initList:[],checkList:[]}},mounted(){},computed:{checkAll:{get(){return!!this.postList&&this.postList.length===this.checkList.length},set(t){this.checkList=[],"Y"===t&&this.postList.map((t=>{this.checkList.push(t.id)}))}}},methods:{onSubmit(t){}}};const et=(0,D.Z)(st,[["render",X]]);var at=et;const nt={class:"widget__config"},ot=(0,e.uE)('<button type="button" id="widget" class="btn widget__btn widget__btn--config">위젯관리</button><button type="button" id="widget_save" class="btn widget__btn widget__btn--save">저장</button><div id="widget_use" class="widget__list" hidden=""><h2>미사용 위젯</h2><input type="checkbox" name="widget_use" data-id="4" id="widget_use4" value="Y"><label for="widget_use4">방문자 정보</label><input type="checkbox" name="widget_use" data-id="3" id="widget_use3" value="Y"><label for="widget_use3">인기글</label></div>',3),lt=[ot];function pt(t,i,s,a,n,o){return(0,e.wg)(),(0,e.iD)("div",nt,lt)}var rt={name:"app-widget-config"};const _t=(0,D.Z)(rt,[["render",pt]]);var gt=_t,dt=s(4722),ct=s(6597),ut={name:"app-index",components:{UiLoading:n.Z,UiPagination:$,AppPostList:at,AppWidgetConfig:gt},data(){return{pageTitle:"",page:null,listCnt:null,postList:[],pagingPostList:[],dataLoaded:!1}},async created(){if(ct.Z.setPageTitle(this.pageTitle),this.page=parseInt(this.$route.query.page)||1,!this.hasStorePostList)return await this.listPost(),void this.dataLoading();this.dataLoaded=!0,this.postList=[...this.storePostList],this.listCnt=this.storePostListCnt},computed:{storePostList(){return this.$store.getters.mainPostObj.postList},storePostListCnt(){return this.$store.getters.mainPostObj.listCnt},hasStorePostList(){return(0,dt.UE)(this.storePostList)&&0<this.storePostList.length}},methods:{onPage(t){this.page=t.page,this.pagingPostList=[...t.pageData]},listPost(){return this.$http.get("/post/list").then((t=>{t.data[0].map((t=>{this.postList.push(t)})),this.listCnt=t.data[1],this.$store.dispatch("FETCH_MAIN_POSTLIST",{postList:this.postList,listCnt:this.listCnt})}))},dataLoading(){0<this.postList.length&&(this.dataLoaded=!0)}}};const ht=(0,D.Z)(ut,[["render",a]]);var mt=ht}}]);
//# sourceMappingURL=981.a41eb335.js.map