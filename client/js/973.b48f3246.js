"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[973],{6597:function(e,t,a){a.d(t,{a:function(){return l}});var n=a(9266),i=a(8822);class o{constructor(){}setPageTitle(e){(0,i.UE)(e)?document.title=`${e} - ${n.Z.state.BlogConfig.data?.title}`:document.title=n.Z.state.BlogConfig.data?.title}}const l=new o},9973:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(3396),i=a(7139);const o={class:"d-flex flex--right gap--10 mb--15"},l=(0,n.Uk)("콘텐츠 생성 "),r=(0,n.Uk)("콘텐츠 삭제 ");function d(e,t,a,d,s,c){const u=(0,n.up)("ui-skeletor"),h=(0,n.up)("ui-icon-button"),m=(0,n.up)("ui-grid"),g=(0,n.up)("app-content-wrapper");return(0,n.wg)(),(0,n.j4)(g,{pageTitle:s.pageTitle},{default:(0,n.w5)((()=>[s.dataLoaded?((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n._)("div",o,[(0,n.Wm)(h,{routerLink:"/add-content",color:"primary",icon:"xi-pen",class:(0,i.C_)("content__create")},{default:(0,n.w5)((()=>[l])),_:1}),(0,n.Wm)(h,{color:"dark",icon:"xi-trash",class:(0,i.C_)("content__delete"),onClick:c.removeContent},{default:(0,n.w5)((()=>[r])),_:1},8,["onClick"])]),(0,n.Wm)(m,{columnDefs:s.columnDefs,rowData:s.rowData,checkboxIndex:0,pagination:!0,onGridready:c.onGridReady,onCelldoubleclicked:c.onCellDoubleClicked},null,8,["columnDefs","rowData","onGridready","onCelldoubleclicked"])],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(u,{height:"1.3rem"},null,8,["height"]),(0,n.Wm)(u,{height:"1.3rem"},null,8,["height"]),(0,n.Wm)(u,{height:"1.3rem"},null,8,["height"])],64))])),_:1},8,["pageTitle"])}var s=a(8822),c=a(6597),u={name:"app-content",data(){return{pageTitle:"콘텐츠 관리",columnDefs:[{},{headerName:"콘텐츠 URL",field:"link"},{headerName:"콘텐츠 제목",field:"title"},{headerName:"콘텐츠 등록일시",field:"regDate",width:150},{headerName:"콘텐츠 수정일시",field:"modDate",width:150}],rowData:[],gridApi:null,dataLoaded:!1}},async created(){c.a.setPageTitle(this.pageTitle),await this.listContent(),this.dataLoading()},methods:{onGridReady(e){this.gridApi=e},onCellDoubleClicked(e){this.$router.push("/content"+e.data["link"])},listContent(){return this.$http.get("/content").then((e=>{this.rowData=[],e.data.map((e=>{e.regDate=this.$moment(e.regDate).format("YYYY-MM-DD HH:mm:ss"),e.modDate=this.$moment(e.modDate).format("YYYY-MM-DD HH:mm:ss"),this.rowData.push(e)}))}))},async removeContent(){const e=this.gridApi.getSelectedRows();if(0===e.length)return void s.wW.toastWarning("삭제할 콘텐츠를 선택하세요.");const t=await s.wW.confirmQuestion("삭제하시겠습니까?");if(!t)return;let a=[];e.forEach(((e,t)=>{a.push({id:e.id})})),this.$http.delete("/content",{data:a}).then((e=>{this.gridApi.removeSelectedRows(),s.wW.toastSuccess("삭제되었습니다.")}))},dataLoading(){0<this.rowData.length&&(this.dataLoaded=!0)}}},h=a(89);const m=(0,h.Z)(u,[["render",d]]);var g=m}}]);
//# sourceMappingURL=973.b48f3246.js.map