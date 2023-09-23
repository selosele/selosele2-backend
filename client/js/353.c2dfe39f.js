"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[353],{2353:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var r=a(3396);const o=(0,r.Uk)("추가 "),i=(0,r.Uk)("추가 ");function s(e,t,a,s,n,l){const d=(0,r.up)("ui-button"),c=(0,r.up)("ui-tree"),u=(0,r.up)("ui-pane"),h=(0,r.up)("app-save-category"),g=(0,r.up)("ui-split-pane"),p=(0,r.up)("ui-tab"),y=(0,r.up)("ui-tabs"),m=(0,r.up)("app-content-wrapper");return(0,r.wg)(),(0,r.j4)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(y,{onTabChanged:l.onTabChanged},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{name:"카테고리"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{isTransparent:!0},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{nodes:n.categoryTree,useCheckbox:!1,filter:!0,placeholder:"카테고리/포스트 제목 입력",onNodeClick:l.onNodeClick},{btn:(0,r.w5)((()=>[(0,r.Wm)(d,{color:"primary",onClick:l.addCategory},{default:(0,r.w5)((()=>[o])),_:1},8,["onClick"])])),_:1},8,["nodes","onNodeClick"])])),_:1}),e.isSplitterActive?((0,r.wg)(),(0,r.j4)(u,{key:0},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)(h,{category:n.category,type:"D01004",key:n.type+n.category.id,onRefreshCategory:l.refreshTree},null,8,["category","onRefreshCategory"]))])),_:1})):(0,r.kq)("",!0)])),_:1})])),_:1}),(0,r.Wm)(p,{name:"태그"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{isTransparent:!0},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{nodes:n.tagTree,useCheckbox:!1,filter:!0,placeholder:"태그/포스트 제목 입력",onNodeClick:l.onNodeClick},{btn:(0,r.w5)((()=>[(0,r.Wm)(d,{color:"primary",onClick:l.addCategory},{default:(0,r.w5)((()=>[i])),_:1},8,["onClick"])])),_:1},8,["nodes","onNodeClick"])])),_:1}),e.isSplitterActive?((0,r.wg)(),(0,r.j4)(u,{key:0},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)(h,{category:n.category,type:"D01005",key:n.type+n.category.id,onRefreshCategory:l.refreshTree},null,8,["category","onRefreshCategory"]))])),_:1})):(0,r.kq)("",!0)])),_:1})])),_:1})])),_:1},8,["onTabChanged"])])),_:1})}function n(e,t,a,o,i,s){const n=(0,r.up)("ui-hidden-field"),l=(0,r.up)("ui-text-field"),d=(0,r.up)("ui-split-form");return(0,r.wg)(),(0,r.j4)(d,{name:"saveCategoryForm",btnRemove:!0,onOnsubmit:s.onSubmit,onRemove:s.onRemove},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{name:"id",value:a.category.id},null,8,["value"]),(0,r.Wm)(n,{name:"type",value:a.type},null,8,["value"]),(0,r.Wm)(l,{type:"text",name:"nm",id:"categoryNm",label:"카테고리 명",rules:"required|max:50",block:!0,value:a.category.nm},null,8,["value"]),(0,r.Wm)(l,{type:"text",name:"regDate",id:"categoryRegDate",label:"카테고리 등록일시",readonly:!0,block:!0,value:a.category.regDate},null,8,["value"])])),_:1},8,["onOnsubmit","onRemove"])}var l=a(8822),d={name:"AppSaveCategory",props:{category:Object,type:String},methods:{async onSubmit(e){const t=await l.wW.confirmSuccess("저장하시겠습니까?");t&&((0,l.xb)(e.id)?await this.addCategory(e):await this.updateCategory(e))},async onRemove(e){if((0,l.xb)(e.id))return;const t=await l.wW.confirmSuccess("삭제하시겠습니까?");t&&this.$http.delete(`${this.getApiUri(e)}/${e.id}`).then((e=>{l.wW.toastSuccess("삭제되었습니다."),this.$emit("refreshCategory")}))},addCategory(e){return this.$http.post(this.getApiUri(e),e).then((e=>{l.wW.toastSuccess("저장되었습니다."),this.$emit("refreshCategory")}))},updateCategory(e){return this.$http.put(this.getApiUri(e),e).then((e=>{l.wW.toastSuccess("저장되었습니다."),this.$emit("refreshCategory")}))},getApiUri(e){return"D01004"===e.type?"/category":"D01005"===e.type?"/tag":""}}},c=a(89);const u=(0,c.Z)(d,[["render",n]]);var h=u,g={name:"AppAdminCategory",components:{AppSaveCategory:h},data(){return{categoryTree:[],tagTree:[],category:{},type:"",activeIndex:-1}},created(){this.init()},methods:{async init(){this.$store.dispatch("Breadcrumb/FETCH_PAGE_TITLE","카테고리/태그 관리"),await Promise.all([this.listCategoryTreeAndPost(),this.listTagTreeAndPost()]),this.$store.commit("Splitter/TOGGLE",!0)},listCategoryTreeAndPost(){return this.$http.get("/category/list/tree").then((e=>{this.createTree(e.data,"D01004")}))},listTagTreeAndPost(){return this.$http.get("/tag/list/tree").then((e=>{this.createTree(e.data,"D01005")}))},createTree(e,t){e.forEach((e=>{let a=[];"D01004"===t?a=e.postCategory:"D01005"===t&&(a=e.postTag);let r={id:e.id,label:this.getTreeLabel(e.nm,t),nodes:a.map(((e,t,a)=>0===a.length?{}:{id:e.postId,label:e.post.title}))};this.pushNode(r,t)}))},async refreshTree(){this.resetCategory(),this.categoryTree=[],this.tagTree=[],this.$store.dispatch("Layout/FETCH_SIDEBAR",{}),this.$store.dispatch("Layout/FETCH_IS_SIDEBAR_LOADED",!1),await Promise.all([this.listCategoryTreeAndPost(),this.listTagTreeAndPost()])},getTreeLabel(e,t){return"D01004"===t?e:`#${e}`},pushNode(e,t){"D01004"===t?this.categoryTree.push(e):"D01005"===t&&this.tagTree.push(e)},async onNodeClick(e){this.$store.commit("Splitter/TOGGLE",!0),this.isPostNode(e.nodes)?this.$router.push(`/post/${e.id}`):this.isPostNode(e.nodes)||e.id===this.category?.id||await this.getCategory(e)},onTabChanged(e){this.activeIndex=e.tab.index},getCategory(e){return 0===this.activeIndex&&(this.type="category"),1===this.activeIndex&&(this.type="tag"),this.$http.get(`/${this.type}/${e.id}`).then((e=>{this.category={...e.data},this.category.regDate=this.$moment(this.category.regDate).format("YYYY-MM-DD HH:mm:ss")}))},addCategory(){this.resetCategory()},resetCategory(){this.category={},this.category.id=null},isPostNode(e){return(0,l.xb)(e)}}};const p=(0,c.Z)(g,[["render",s]]);var y=p}}]);