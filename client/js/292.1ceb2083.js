"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[292],{6597:function(e,t,a){a.d(t,{a:function(){return n}});var o=a(9803),r=a(1580);class i{constructor(){}setPageTitle(e){(0,r.UE)(e)?document.title=`${e} - ${o.Z.state.BlogConfig.data.title}`:document.title=o.Z.state.BlogConfig.data.title}}const n=new i},8292:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var o=a(3396);const r=(0,o.Uk)("추가 "),i=(0,o.Uk)("추가 ");function n(e,t,a,n,s,d){const l=(0,o.up)("ui-skeletor"),g=(0,o.up)("ui-button"),c=(0,o.up)("ui-tree"),u=(0,o.up)("ui-pane"),h=(0,o.up)("ui-loading"),y=(0,o.up)("app-save-category"),p=(0,o.up)("ui-split-pane"),m=(0,o.up)("ui-tab"),C=(0,o.up)("ui-tabs"),f=(0,o.up)("app-content-wrapper");return(0,o.wg)(),(0,o.j4)(f,{pageTitle:s.pageTitle},{default:(0,o.w5)((()=>[s.dataLoaded?((0,o.wg)(),(0,o.j4)(C,{key:1,onOnTabChanged:d.onTabChanged},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"카테고리"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{isTransparent:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{nodes:s.categoryTree,useCheckbox:!1,filter:!0,placeholder:"카테고리/포스트 제목 입력",onOnNodeClick:d.onNodeClick},{btn:(0,o.w5)((()=>[(0,o.Wm)(g,{color:"primary",onClick:d.addCategory},{default:(0,o.w5)((()=>[r])),_:1},8,["onClick"])])),_:1},8,["nodes","onOnNodeClick"])])),_:1}),e.isSplitterActive?((0,o.wg)(),(0,o.j4)(u,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{activeModel:!s.dataLoaded2},null,8,["activeModel"]),s.dataLoaded2?((0,o.wg)(),(0,o.j4)(y,{category:s.category,type:"category",key:s.type+s.category.id,onRefreshCategory:d.refreshTree},null,8,["category","onRefreshCategory"])):(0,o.kq)("",!0)])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1}),(0,o.Wm)(m,{name:"태그"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{isTransparent:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{nodes:s.tagTree,useCheckbox:!1,filter:!0,placeholder:"태그/포스트 제목 입력",onOnNodeClick:d.onNodeClick},{btn:(0,o.w5)((()=>[(0,o.Wm)(g,{color:"primary",onClick:d.addCategory},{default:(0,o.w5)((()=>[i])),_:1},8,["onClick"])])),_:1},8,["nodes","onOnNodeClick"])])),_:1}),e.isSplitterActive?((0,o.wg)(),(0,o.j4)(u,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{activeModel:!s.dataLoaded2},null,8,["activeModel"]),s.dataLoaded2?((0,o.wg)(),(0,o.j4)(y,{category:s.category,type:"tag",key:s.type+s.category.id,onRefreshCategory:d.refreshTree},null,8,["category","onRefreshCategory"])):(0,o.kq)("",!0)])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1})])),_:1},8,["onOnTabChanged"])):((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Wm)(l,{height:"1.3rem"},null,8,["height"]),(0,o.Wm)(l,{height:"1.3rem"},null,8,["height"]),(0,o.Wm)(l,{height:"1.3rem"},null,8,["height"])],64))])),_:1},8,["pageTitle"])}function s(e,t,a,r,i,n){const s=(0,o.up)("ui-hidden-field"),d=(0,o.up)("ui-text-field"),l=(0,o.up)("ui-split-form");return(0,o.wg)(),(0,o.j4)(l,{name:"saveCategoryForm",btnRemove:!0,onOnSubmit:n.onSubmit,onOnRemove:n.onRemove},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"id",value:a.category.id},null,8,["value"]),(0,o.Wm)(s,{name:"type",value:a.type},null,8,["value"]),(0,o.Wm)(d,{type:"text",name:"nm",id:"categoryNm",label:"카테고리 명",rules:"required",value:a.category.nm},null,8,["value"]),(0,o.Wm)(d,{type:"text",name:"regDate",id:"categoryRegDate",label:"카테고리 등록일시",readonly:!0,value:a.category.regDate},null,8,["value"])])),_:1},8,["onOnSubmit","onOnRemove"])}var d=a(1580),l={name:"app-save-category",props:{category:Object,type:String},methods:{async onSubmit(e){const t=await d.wW.confirmSuccess("저장하시겠습니까?");t&&((0,d.xb)(e.id)?this.addCategory(e):this.updateCategory(e))},async onRemove(e){if((0,d.xb)(e.id))return;const t=await d.wW.confirmSuccess("삭제하시겠습니까?");t&&this.$http.delete(`/${e.type}/${e.id}`).then((e=>{d.wW.toastSuccess("삭제되었습니다."),this.$emit("refreshCategory")}))},addCategory(e){return this.$http.post(`/${e.type}`,e).then((e=>{d.wW.toastSuccess("저장되었습니다."),this.$emit("refreshCategory")}))},updateCategory(e){return this.$http.put(`/${e.type}`,e).then((e=>{d.wW.toastSuccess("저장되었습니다."),this.$emit("refreshCategory")}))}}},g=a(89);const c=(0,g.Z)(l,[["render",s]]);var u=c,h=a(6597),y={name:"app-admin-category",components:{AppSaveCategory:u},data(){return{pageTitle:"카테고리/태그 관리",categoryTree:[],tagTree:[],category:{},type:"",activeIndex:-1,dataLoaded:!1,dataLoaded2:!1}},created(){this.init()},methods:{async init(){h.a.setPageTitle(this.pageTitle),await Promise.all([this.listTreeCategoryAndPost(),this.listTreeTagAndPost()]),this.$store.commit("Splitter/TOGGLE",!0),this.dataLoaded=!0,this.dataLoaded2=!0},listTreeCategoryAndPost(){return this.$http.get("/category/list/tree").then((e=>{this.createTree(e.data,"category")}))},listTreeTagAndPost(){return this.$http.get("/tag/list/tree").then((e=>{this.createTree(e.data,"tag")}))},createTree(e,t){e.forEach((e=>{let a=[];a="category"===t?e.postCategory:e.postTag;let o={id:e.id,label:this.getTreeLabel(e.nm,t),nodes:a.map(((e,t,a)=>{if(0===a.length)return{};let o={id:e.postId,label:e.post.title};return o}))};this.pushNode(o,t)}))},async refreshTree(){this.resetCategory(),this.categoryTree=[],this.tagTree=[],await Promise.all([this.listTreeCategoryAndPost(),this.listTreeTagAndPost()])},getTreeLabel(e,t){return"category"===t?e:`#${e}`},pushNode(e,t){"category"===t?this.categoryTree.push(e):this.tagTree.push(e)},async onNodeClick(e){this.$store.commit("Splitter/TOGGLE",!0),(0,d.UE)(e.nodes)&&e.id!==this.category?.id&&(this.dataLoaded2=!1,await this.getCategory(e),this.dataLoading2())},onTabChanged(e){this.activeIndex=e.tab.index},getCategory(e){return 0===this.activeIndex&&(this.type="category"),1===this.activeIndex&&(this.type="tag"),this.$http.get(`/${this.type}/${e.id}`).then((e=>{this.category={...e.data},this.category.regDate=this.$moment(this.category.regDate).format("YYYY-MM-DD HH:mm:ss")}))},addCategory(){this.resetCategory()},resetCategory(){this.category={},this.category.id=null},dataLoading2(){(0,d.UE)(this.category)&&0<Object.values(this.category).length&&(this.dataLoaded2=!0)}}};const p=(0,g.Z)(y,[["render",n]]);var m=p}}]);
//# sourceMappingURL=292.1ceb2083.js.map