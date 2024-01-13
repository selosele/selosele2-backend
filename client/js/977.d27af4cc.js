"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[977],{2977:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var u=n(3396);function a(e,t,n,a,i,s){const l=(0,u.up)("ui-button"),r=(0,u.up)("ui-tree"),m=(0,u.up)("ui-pane"),o=(0,u.up)("app-save-menu"),d=(0,u.up)("ui-split-pane"),h=(0,u.up)("app-content-wrapper");return(0,u.wg)(),(0,u.j4)(h,null,{default:(0,u.w5)((()=>[(0,u.Wm)(d,null,{default:(0,u.w5)((()=>[(0,u.Wm)(m,{isTransparent:!0},{default:(0,u.w5)((()=>[(0,u.Wm)(r,{nodes:i.menuTree,useCheckbox:!1,filter:!0,placeholder:"메뉴명 입력",onNodeClick:s.onNodeClick},{btn:(0,u.w5)((()=>[(0,u.Wm)(l,{color:"primary",text:"추가",onClick:s.addMenu},null,8,["onClick"])])),_:1},8,["nodes","onNodeClick"])])),_:1}),e.isSplitterActive?((0,u.wg)(),(0,u.j4)(m,{key:0},{default:(0,u.w5)((()=>[((0,u.wg)(),(0,u.j4)(o,{menu:i.menu,parentMenuList:i.parentMenuList,key:i.menu.id,onRefreshMenu:s.refreshTree},null,8,["menu","parentMenuList","onRefreshMenu"]))])),_:1})):(0,u.kq)("",!0)])),_:1})])),_:1})}function i(e,t,n,a,i,s){const l=(0,u.up)("ui-hidden-field"),r=(0,u.up)("ui-select"),m=(0,u.up)("ui-text-field"),o=(0,u.up)("ui-numeric-field"),d=(0,u.up)("ui-radio"),h=(0,u.up)("ui-radio-group"),p=(0,u.up)("ui-split-form");return(0,u.wg)(),(0,u.j4)(p,{name:"saveMenuForm",ref:"saveMenuForm",btnRemove:!0,onOnsubmit:s.onSubmit,onRemove:s.onRemove},{default:(0,u.w5)((()=>[(0,u.Wm)(l,{name:"id",ref:"menuId",value:n.menu.id},null,8,["value"]),(0,u.Wm)(l,{name:"depth",ref:"menuDepth",value:n.menu.depth||1},null,8,["value"]),(0,u.Wm)(r,{name:"parentId",id:"menuParentId",title:"부모 메뉴",label:"부모 메뉴",defaultValue:"부모 메뉴 선택",data:n.parentMenuList,block:!0,modelValue:i.parentId,"onUpdate:modelValue":t[0]||(t[0]=e=>i.parentId=e),onOnchange:s.updateDepth},null,8,["data","modelValue","onOnchange"]),(0,u.Wm)(m,{name:"name",id:"menuName",label:"메뉴 명",rules:"required|max:50",block:!0,value:n.menu.name},null,8,["value"]),(0,u.Wm)(m,{name:"link",id:"menuLink",label:"메뉴 링크",rules:"required|max:255",block:!0,value:n.menu.link},null,8,["value"]),(0,u.Wm)(m,{name:"regDate",id:"menuRegDate",label:"메뉴 등록일시",readonly:!0,block:!0,value:n.menu.regDate},null,8,["value"]),(0,u.Wm)(o,{name:"sort",id:"menuSort",label:"메뉴 정렬 순서",rules:"required|numeric",block:!0,value:n.menu.sort||1},null,8,["value"]),(0,u.Wm)(r,{name:"role",id:"menuRoles",title:"메뉴 권한",label:"메뉴 권한",block:!0,data:i.roleList,modelValue:i.role,"onUpdate:modelValue":t[1]||(t[1]=e=>i.role=e)},null,8,["data","modelValue"]),(0,u.Wm)(h,{label:"메뉴 사용 여부"},{default:(0,u.w5)((()=>[(0,u.Wm)(d,{id:"menuUseYn1",name:"useYn",label:"사용",value:"Y",rules:"required",modelValue:i.useYn,"onUpdate:modelValue":t[2]||(t[2]=e=>i.useYn=e)},null,8,["modelValue"]),(0,u.Wm)(d,{id:"menuUseYn2",name:"useYn",label:"미사용",value:"N",rules:"required",modelValue:i.useYn,"onUpdate:modelValue":t[3]||(t[3]=e=>i.useYn=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["onOnsubmit","onRemove"])}var s=n(8822),l={name:"AppSaveMenu",props:{menu:Object,parentMenuList:Array},data(){return{parentId:"",useYn:"",role:"",roleList:[]}},async created(){this.parentId=this.menu.parentId,this.useYn=this.menu.useYn,await this.listRole(),this.role=this.getMenuRoleModel()},methods:{async onSubmit(e){const t=await s.wW.confirmSuccess("저장하시겠습니까?");t&&((0,s.xb)(e.id)?await this.addMenu(e):await this.updateMenu(e),await this.listMenu())},async onRemove(e){if((0,s.xb)(e.id))return;const t=await s.wW.confirmSuccess("삭제하시겠습니까?");t&&this.$http.delete(`/menu/${e.id}`).then((async e=>{s.wW.toastSuccess("삭제되었습니다."),await this.listMenu(),this.$emit("refreshMenu")}))},addMenu(e){return this.$http.post("/menu",e).then((e=>{s.wW.toastSuccess("저장되었습니다."),this.$refs["menuId"].$el.value=e.data.id,this.$emit("refreshMenu")}))},listMenu(){return this.$store.dispatch("Menu/LIST_MENU",{params:{useYn:"Y"}})},updateMenu(e){return this.$http.put("/menu",e).then((e=>{s.wW.toastSuccess("저장되었습니다."),this.$refs["menuId"].$el.value=e.data.id,this.$emit("refreshMenu")}))},listRole(){return this.$store.commit("Loading/SET_USE_LOADING",!1),this.$http.get("/auth/role").then((e=>{this.roleList=[...e.data.map((e=>({value:e.roleId,text:e.roleNm})))],this.roleList.push({value:"",text:"모든 권한 허용"}),this.$store.commit("Loading/SET_USE_LOADING",!0)}))},getMenuRoleModel(){if((0,s.UE)(this.menu.menuRole)&&0<this.menu.menuRole.length){const e=this.menu.menuRole.filter((e=>0<this.roleList.filter((t=>t.value===e.roleId)).length));return 1<e.length?"":e[0].roleId}return""},updateDepth(e){(0,s.xb)(e)?this.$refs["saveMenuForm"].setFieldValue("depth",1):this.$refs["saveMenuForm"].setFieldValue("depth",2)}}},r=n(89);const m=(0,r.Z)(l,[["render",i]]);var o=m,d={name:"AppAdminMenu",components:{AppSaveMenu:o},data(){return{menuTree:[],menu:{},parentMenuList:[]}},created(){this.init()},methods:{async init(){this.$store.dispatch("Breadcrumb/FETCH_PAGE_TITLE","메뉴 관리"),await this.listMenuTree(),this.$store.commit("Splitter/TOGGLE",!0)},listMenuTree(){return this.$http.get("/menu/list/tree").then((e=>{this.createTree(e.data),this.parentMenuList=this.listParentMenu(this.$store.state.Menu.data,[])}))},createTree(e){e.forEach((e=>{let t={id:e.id,label:e.name,sort:e.sort,nodes:e.children.map(((e,t,n)=>0===n.length?{}:{id:e.id,label:e.name,sort:e.sort}))};this.menuTree.push(t)}))},async onNodeClick(e){this.$store.commit("Splitter/TOGGLE",!0),e.id!==this.menu?.id&&await this.getMenu(e)},async refreshTree(){this.resetMenu(),this.menuTree=[],await this.listMenuTree()},getMenu(e){return this.$store.commit("Loading/SET_USE_LOADING",!1),this.$http.get(`/menu/${e.id}`).then((e=>{this.menu={...e.data},this.parentMenuList=this.listParentMenu(this.$store.state.Menu.data,[]).filter((e=>e.value!==this.menu.id)),this.menu.regDate=this.$moment(this.menu.regDate).format("YYYY-MM-DD HH:mm:ss"),this.$store.commit("Loading/SET_USE_LOADING",!0)}))},listParentMenu(e,t){return e.map((e=>({value:e.id,text:e.name})))},addMenu(){this.resetMenu()},resetMenu(){this.menu={},this.menu.id=null,this.menu.parentId=0,this.menu.depth=1,this.parentMenuList=this.listParentMenu(this.$store.state.Menu.data,[])}}};const h=(0,r.Z)(d,[["render",a]]);var p=h}}]);