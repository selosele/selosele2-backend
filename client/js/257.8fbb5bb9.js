"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[257],{6257:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var u=n(3396);const a=(0,u.Uk)("추가 ");function l(e,t,n,l,i,s){const r=(0,u.up)("ui-button"),m=(0,u.up)("ui-tree"),d=(0,u.up)("ui-pane"),o=(0,u.up)("app-save-menu"),h=(0,u.up)("ui-split-pane"),p=(0,u.up)("app-content-wrapper");return(0,u.wg)(),(0,u.j4)(p,{pageTitle:i.pageTitle},{default:(0,u.w5)((()=>[(0,u.Wm)(h,null,{default:(0,u.w5)((()=>[(0,u.Wm)(d,{isTransparent:!0},{default:(0,u.w5)((()=>[(0,u.Wm)(m,{nodes:i.menuTree,useCheckbox:!1,filter:!0,placeholder:"메뉴명 입력",onNodeClick:s.onNodeClick},{btn:(0,u.w5)((()=>[(0,u.Wm)(r,{color:"primary",onClick:s.addMenu},{default:(0,u.w5)((()=>[a])),_:1},8,["onClick"])])),_:1},8,["nodes","onNodeClick"])])),_:1}),e.isSplitterActive?((0,u.wg)(),(0,u.j4)(d,{key:0},{default:(0,u.w5)((()=>[((0,u.wg)(),(0,u.j4)(o,{menu:i.menu,parentMenuList:i.parentMenuList,key:i.menu.id,onRefreshMenu:s.refreshTree},null,8,["menu","parentMenuList","onRefreshMenu"]))])),_:1})):(0,u.kq)("",!0)])),_:1})])),_:1},8,["pageTitle"])}function i(e,t,n,a,l,i){const s=(0,u.up)("ui-hidden-field"),r=(0,u.up)("ui-select"),m=(0,u.up)("ui-text-field"),d=(0,u.up)("ui-numeric-field"),o=(0,u.up)("ui-radio"),h=(0,u.up)("ui-radio-group"),p=(0,u.up)("ui-split-form");return(0,u.wg)(),(0,u.j4)(p,{name:"saveMenuForm",ref:"saveMenuForm",btnRemove:!0,onOnsubmit:i.onSubmit,onRemove:i.onRemove},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{name:"id",ref:"menuId",value:n.menu.id},null,8,["value"]),(0,u.Wm)(s,{name:"depth",ref:"menuDepth",value:n.menu.depth||1},null,8,["value"]),(0,u.Wm)(r,{name:"parentId",id:"menuParentId",title:"부모 메뉴",label:"부모 메뉴",defaultValue:"부모 메뉴 선택",data:n.parentMenuList,block:!0,modelValue:l.parentId,"onUpdate:modelValue":t[0]||(t[0]=e=>l.parentId=e),onOnchange:i.updateDepth},null,8,["data","modelValue","onOnchange"]),(0,u.Wm)(m,{type:"text",name:"name",id:"menuName",label:"메뉴 명",rules:"required|max:50",block:!0,value:n.menu.name},null,8,["value"]),(0,u.Wm)(m,{type:"text",name:"link",id:"menuLink",label:"메뉴 링크",rules:"required|max:255",block:!0,value:n.menu.link},null,8,["value"]),(0,u.Wm)(m,{type:"text",name:"regDate",id:"menuRegDate",label:"메뉴 등록일시",readonly:!0,block:!0,value:n.menu.regDate},null,8,["value"]),(0,u.Wm)(d,{name:"sort",id:"menuSort",label:"메뉴 정렬 순서",rules:"required",block:!0,value:n.menu.sort},null,8,["value"]),(0,u.Wm)(r,{name:"role",id:"menuRoles",title:"메뉴 권한",label:"메뉴 권한",rules:"required",defaultValue:"메뉴 권한 선택",block:!0,data:l.roleList,modelValue:l.role,"onUpdate:modelValue":t[1]||(t[1]=e=>l.role=e)},null,8,["data","modelValue"]),(0,u.Wm)(h,{label:"메뉴 사용 여부"},{default:(0,u.w5)((()=>[(0,u.Wm)(o,{id:"menuUseYn1",name:"useYn",label:"사용",value:"Y",rules:"required",modelValue:l.useYn,"onUpdate:modelValue":t[2]||(t[2]=e=>l.useYn=e)},null,8,["modelValue"]),(0,u.Wm)(o,{id:"menuUseYn2",name:"useYn",label:"미사용",value:"N",rules:"required",modelValue:l.useYn,"onUpdate:modelValue":t[3]||(t[3]=e=>l.useYn=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["onOnsubmit","onRemove"])}var s=n(8822),r={name:"app-save-menu",props:{menu:Object,parentMenuList:Array},data(){return{parentId:"",useYn:"",role:"",roleList:[]}},async created(){this.parentId=this.menu.parentId,this.useYn=this.menu.useYn,await this.listRole(),this.role=this.getMenuRoleModel()},methods:{async onSubmit(e){const t=await s.wW.confirmSuccess("저장하시겠습니까?");t&&((0,s.xb)(e.id)?await this.addMenu(e):await this.updateMenu(e),this.listMenu())},async onRemove(e){if((0,s.xb)(e.id))return;const t=await s.wW.confirmSuccess("삭제하시겠습니까?");t&&this.$http.delete(`/menu/${e.id}`).then((e=>{s.wW.toastSuccess("삭제되었습니다."),this.listMenu(),this.$emit("refreshMenu")}))},addMenu(e){return this.$http.post("/menu",e).then((e=>{s.wW.toastSuccess("저장되었습니다."),this.$refs["menuId"].$el.value=e.data.id,this.$emit("refreshMenu")}))},listMenu(){this.$store.dispatch("Menu/LIST_MENU",{params:{useYn:"Y"}})},updateMenu(e){return this.$http.put("/menu",e).then((e=>{s.wW.toastSuccess("저장되었습니다."),this.$refs["menuId"].$el.value=e.data.id,this.$emit("refreshMenu")}))},listRole(){return this.$http.get("/auth/role").then((e=>{this.roleList=[...e.data.map((e=>({value:e.roleId,text:e.roleNm})))],this.roleList.push({value:"0",text:"모든 권한 허용"})}))},getMenuRoleModel(){if((0,s.UE)(this.menu.menuRole)&&0<this.menu.menuRole.length){const e=this.menu.menuRole.filter((e=>this.roleList.filter((t=>t.value===e.roleId)).length>0));return 1<e.length?"0":e[0].roleId}return""},updateDepth(e){(0,s.xb)(e)?this.$refs["saveMenuForm"].setFieldValue("depth",1):this.$refs["saveMenuForm"].setFieldValue("depth",2)}}},m=n(89);const d=(0,m.Z)(r,[["render",i]]);var o=d,h=n(6597),p={name:"app-admin-menu",components:{AppSaveMenu:o},data(){return{pageTitle:"메뉴 관리",menuTree:[],menu:{},parentMenuList:[]}},created(){this.init()},methods:{async init(){(new h.p).setPageTitle(this.pageTitle),await this.listMenuTree(),this.$store.commit("Splitter/TOGGLE",!0)},listMenuTree(){return this.$http.get("/menu/list/tree").then((e=>{this.createTree(e.data),this.parentMenuList=this.listParentMenu(this.$store.state.Menu.data,[])}))},createTree(e){e.forEach((e=>{let t={id:e.id,label:e.name,nodes:e.children.map(((e,t,n)=>0===n.length?{}:{id:e.id,label:e.name}))};this.menuTree.push(t)}))},async onNodeClick(e){this.$store.commit("Splitter/TOGGLE",!0),e.id!==this.menu?.id&&await this.getMenu(e)},async refreshTree(){this.resetMenu(),this.menuTree=[],await this.listMenuTree()},getMenu(e){return this.$http.get(`/menu/${e.id}`).then((e=>{this.menu={...e.data},this.parentMenuList=this.listParentMenu(this.$store.state.Menu.data,[]).filter((e=>e.value!==this.menu.id)),this.menu.regDate=this.$moment(this.menu.regDate).format("YYYY-MM-DD HH:mm:ss")}))},listParentMenu(e,t){return e.map((e=>({value:e.id,text:e.name})))},addMenu(){this.resetMenu()},resetMenu(){this.menu={},this.menu.id=null,this.menu.parentId=0,this.menu.depth=1,this.parentMenuList=this.listParentMenu(this.$store.state.Menu.data,[])}}};const c=(0,m.Z)(p,[["render",l]]);var M=c}}]);
//# sourceMappingURL=257.8fbb5bb9.js.map