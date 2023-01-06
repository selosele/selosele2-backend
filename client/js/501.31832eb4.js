"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[501],{6597:function(e,t,a){a.d(t,{a:function(){return s}});var o=a(9266),r=a(8822);class i{constructor(){}setPageTitle(e){(0,r.UE)(e)?document.title=`${e} - ${o.Z.state.BlogConfig.data.title}`:document.title=o.Z.state.BlogConfig.data.title}}const s=new i},5501:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var o=a(3396);function r(e,t,a,r,i,s){const n=(0,o.up)("ui-skeletor"),d=(0,o.up)("ui-button"),l=(0,o.up)("ui-tree"),g=(0,o.up)("ui-pane"),c=(0,o.up)("ui-loading"),u=(0,o.up)("app-save-category"),h=(0,o.up)("ui-split-pane"),y=(0,o.up)("ui-tab"),p=(0,o.up)("ui-tabs"),m=(0,o.up)("app-content-wrapper");return(0,o.wg)(),(0,o.j4)(m,{pageTitle:i.pageTitle},{default:(0,o.w5)((()=>[i.dataLoaded?((0,o.wg)(),(0,o.j4)(p,{key:1,onTabChanged:s.onTabChanged},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{name:"카테고리"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{isTransparent:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{nodes:i.categoryTree,useCheckbox:!1,filter:!0,placeholder:"카테고리/포스트 제목 입력",onNodeClick:s.onNodeClick},{btn:(0,o.w5)((()=>[(0,o.Wm)(d,{color:"primary",onClick:s.addCategory},{default:(0,o.w5)((()=>[(0,o.Uk)("추가 ")])),_:1},8,["onClick"])])),_:1},8,["nodes","onNodeClick"])])),_:1}),e.isSplitterActive?((0,o.wg)(),(0,o.j4)(g,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{activeModel:!i.dataLoaded2},null,8,["activeModel"]),i.dataLoaded2?((0,o.wg)(),(0,o.j4)(u,{category:i.category,type:"category",key:i.type+i.category.id,onRefreshCategory:s.refreshTree},null,8,["category","onRefreshCategory"])):(0,o.kq)("",!0)])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1}),(0,o.Wm)(y,{name:"태그"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,{isTransparent:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{nodes:i.tagTree,useCheckbox:!1,filter:!0,placeholder:"태그/포스트 제목 입력",onNodeClick:s.onNodeClick},{btn:(0,o.w5)((()=>[(0,o.Wm)(d,{color:"primary",onClick:s.addCategory},{default:(0,o.w5)((()=>[(0,o.Uk)("추가 ")])),_:1},8,["onClick"])])),_:1},8,["nodes","onNodeClick"])])),_:1}),e.isSplitterActive?((0,o.wg)(),(0,o.j4)(g,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{activeModel:!i.dataLoaded2},null,8,["activeModel"]),i.dataLoaded2?((0,o.wg)(),(0,o.j4)(u,{category:i.category,type:"tag",key:i.type+i.category.id,onRefreshCategory:s.refreshTree},null,8,["category","onRefreshCategory"])):(0,o.kq)("",!0)])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1})])),_:1},8,["onTabChanged"])):((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Wm)(n,{height:"1.3rem"},null,8,["height"]),(0,o.Wm)(n,{height:"1.3rem"},null,8,["height"]),(0,o.Wm)(n,{height:"1.3rem"},null,8,["height"])],64))])),_:1},8,["pageTitle"])}function i(e,t,a,r,i,s){const n=(0,o.up)("ui-hidden-field"),d=(0,o.up)("ui-text-field"),l=(0,o.up)("ui-split-form");return(0,o.wg)(),(0,o.j4)(l,{name:"saveCategoryForm",btnRemove:!0,onOnsubmit:s.onSubmit,onRemove:s.onRemove},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{name:"id",value:a.category.id},null,8,["value"]),(0,o.Wm)(n,{name:"type",value:a.type},null,8,["value"]),(0,o.Wm)(d,{type:"text",name:"nm",id:"categoryNm",label:"카테고리 명",rules:"required",value:a.category.nm},null,8,["value"]),(0,o.Wm)(d,{type:"text",name:"regDate",id:"categoryRegDate",label:"카테고리 등록일시",readonly:!0,value:a.category.regDate},null,8,["value"])])),_:1},8,["onOnsubmit","onRemove"])}var s=a(8822),n={name:"app-save-category",props:{category:Object,type:String},methods:{async onSubmit(e){const t=await s.wW.confirmSuccess("저장하시겠습니까?");t&&((0,s.xb)(e.id)?this.addCategory(e):this.updateCategory(e))},async onRemove(e){if((0,s.xb)(e.id))return;const t=await s.wW.confirmSuccess("삭제하시겠습니까?");t&&this.$http.delete(`/${e.type}/${e.id}`).then((e=>{s.wW.toastSuccess("삭제되었습니다."),this.$emit("refreshCategory")}))},addCategory(e){return this.$http.post(`/${e.type}`,e).then((e=>{s.wW.toastSuccess("저장되었습니다."),this.$emit("refreshCategory")}))},updateCategory(e){return this.$http.put(`/${e.type}`,e).then((e=>{s.wW.toastSuccess("저장되었습니다."),this.$emit("refreshCategory")}))}}},d=a(89);const l=(0,d.Z)(n,[["render",i]]);var g=l,c=a(6597),u={name:"app-admin-category",components:{AppSaveCategory:g},data(){return{pageTitle:"카테고리/태그 관리",categoryTree:[],tagTree:[],category:{},type:"",activeIndex:-1,dataLoaded:!1,dataLoaded2:!1}},created(){this.init()},methods:{async init(){c.a.setPageTitle(this.pageTitle),await Promise.all([this.listCategoryTreeAndPost(),this.listTagTreeAndPost()]),this.$store.commit("Splitter/TOGGLE",!0),this.dataLoaded=!0,this.dataLoaded2=!0},listCategoryTreeAndPost(){return this.$http.get("/category/list/tree").then((e=>{this.createTree(e.data,"category")}))},listTagTreeAndPost(){return this.$http.get("/tag/list/tree").then((e=>{this.createTree(e.data,"tag")}))},createTree(e,t){e.forEach((e=>{let a=[];a="category"===t?e.postCategory:e.postTag;let o={id:e.id,label:this.getTreeLabel(e.nm,t),nodes:a.map(((e,t,a)=>0===a.length?{}:{id:e.postId,label:e.post.title}))};this.pushNode(o,t)}))},async refreshTree(){this.resetCategory(),this.categoryTree=[],this.tagTree=[],await Promise.all([this.listCategoryTreeAndPost(),this.listTagTreeAndPost()])},getTreeLabel(e,t){return"category"===t?e:`#${e}`},pushNode(e,t){"category"===t?this.categoryTree.push(e):this.tagTree.push(e)},async onNodeClick(e){this.$store.commit("Splitter/TOGGLE",!0),(0,s.UE)(e.nodes)&&e.id!==this.category?.id&&(this.dataLoaded2=!1,await this.getCategory(e),this.dataLoading2())},onTabChanged(e){this.activeIndex=e.tab.index},getCategory(e){return 0===this.activeIndex&&(this.type="category"),1===this.activeIndex&&(this.type="tag"),this.$http.get(`/${this.type}/${e.id}`).then((e=>{this.category={...e.data},this.category.regDate=this.$moment(this.category.regDate).format("YYYY-MM-DD HH:mm:ss")}))},addCategory(){this.resetCategory()},resetCategory(){this.category={},this.category.id=null},dataLoading2(){(0,s.UE)(this.category)&&0<Object.values(this.category).length&&(this.dataLoaded2=!0)}}};const h=(0,d.Z)(u,[["render",r]]);var y=h}}]);
//# sourceMappingURL=501.31832eb4.js.map