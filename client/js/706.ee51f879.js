"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[706],{6706:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var d=a(3396);const i={class:"d-flex justify-content--right gap--10 mb--15"};function o(e,t,a,o,n,r){const s=(0,d.up)("ui-skeletor"),l=(0,d.up)("ui-grid"),h=(0,d.up)("app-content-wrapper");return(0,d.wg)(),(0,d.j4)(h,{pageTitle:n.pageTitle},{default:(0,d.w5)((()=>[n.dataLoaded?((0,d.wg)(),(0,d.iD)(d.HY,{key:1},[(0,d._)("div",i,[(0,d._)("button",{type:"button",class:"btn btn--primary",onClick:t[0]||(t[0]=(...e)=>r.addCode&&r.addCode(...e))},"추가 "),(0,d._)("button",{type:"button",class:"btn btn--dark",onClick:t[1]||(t[1]=(...e)=>r.removeCode&&r.removeCode(...e))},"삭제 ")]),(0,d.Wm)(l,{defaultColDef:n.defaultColDef,columnDefs:n.columnDefs,rowData:n.rowData,checkboxIndex:0,pagination:!0,onOnGridReady:r.onGridReady},null,8,["defaultColDef","columnDefs","rowData","onOnGridReady"])],64)):((0,d.wg)(),(0,d.iD)(d.HY,{key:0},[(0,d.Wm)(s,{height:"1.3rem"}),(0,d.Wm)(s,{height:"1.3rem"}),(0,d.Wm)(s,{height:"1.3rem"})],64))])),_:1},8,["pageTitle"])}var n=a(4010),r=a(8577),s=a(1197),l=a(6597),h={name:"app-code",components:{UiSkeletor:n.Z,UiGrid:r.Z},data(){return{pageTitle:"공통코드 관리",defaultColDef:{editable:!0},columnDefs:[{},{headerName:"코드 ID",field:"id",width:130},{headerName:"코드 접두어",field:"prefix",width:130},{headerName:"코드 값",field:"val",width:130},{headerName:"코드 명",field:"nm"},{headerName:"코드 설명",field:"desc"},{headerName:"코드 등록일시",field:"regDate"},{headerName:"코드 사용여부",field:"useYn",width:150,align:"center"}],rowData:[],gridApi:null,dataLoaded:!1}},async created(){l.Z.setPageTitle(this.pageTitle),await this.listCode(),this.dataLoading()},methods:{onGridReady(e){this.gridApi=e},listCode(){return this.$http.get("/code/list").then((e=>{e.data.map((e=>{e.regDate=this.$moment(e.regDate).format("YYYY-MM-DD HH:mm:ss"),e.useYn=this.getUseYn(e.useYn),this.rowData.push(e)})),this.dataLoading()}))},addCode(){console.log(this.gridApi.getRowDatas())},async removeCode(){const e=this.gridApi.getSelectedRows();if(0===e.length)return void s.Z.toastWarning("삭제할 항목을 선택하세요.");const t=await s.Z.confirmQuestion("삭제하시겠습니까?");if(!t)return;let a=[];e.forEach(((e,t)=>{a.push({id:e.id})})),this.$http.delete("/code/remove",{data:a}).then((e=>{this.gridApi.removeSelectedRows(),s.Z.toastSuccess("삭제되었습니다.")}))},getUseYn(e){switch(e){case"Y":return"사용";case"N":return"미사용"}},dataLoading(){0<this.rowData.length&&(this.dataLoaded=!0)}}},u=a(89);const c=(0,u.Z)(h,[["render",o]]);var g=c}}]);
//# sourceMappingURL=706.ee51f879.js.map