"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[622],{7622:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(3396),o=n(7139);const i={class:"d-flex flex--right gap--10 mb--15"},r=(0,a.Uk)("콘텐츠 생성 "),l=(0,a.Uk)("콘텐츠 삭제 ");function d(e,t,n,d,s,c){const u=(0,a.up)("ui-icon-button"),m=(0,a.up)("ui-grid"),h=(0,a.up)("app-content-wrapper");return(0,a.wg)(),(0,a.j4)(h,{pageTitle:s.pageTitle},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.Wm)(u,{routerLink:"/add-content",color:"primary",icon:"xi-pen",class:(0,o.C_)("content__create")},{default:(0,a.w5)((()=>[r])),_:1}),(0,a.Wm)(u,{color:"dark",icon:"xi-trash",class:(0,o.C_)("content__delete"),onClick:c.removeContent},{default:(0,a.w5)((()=>[l])),_:1},8,["onClick"])]),(0,a.Wm)(m,{columnDefs:s.columnDefs,rowData:s.rowData,checkboxIndex:0,pagination:!0,onGridready:c.onGridReady,onCelldoubleclicked:c.onCellDoubleClicked},null,8,["columnDefs","rowData","onGridready","onCelldoubleclicked"])])),_:1},8,["pageTitle"])}var s=n(8822),c=n(6597),u={name:"app-admin-content",data(){return{pageTitle:"콘텐츠 관리",columnDefs:[{},{headerName:"콘텐츠 URL",field:"link",width:100},{headerName:"콘텐츠 제목",field:"title"},{headerName:"콘텐츠 등록일시",field:"regDate",width:100},{headerName:"콘텐츠 수정일시",field:"modDate",width:100}],rowData:[],gridApi:null}},async created(){(new c.p).setPageTitle(this.pageTitle),await this.listContent()},methods:{onGridReady(e){this.gridApi=e},onCellDoubleClicked(e){this.$router.push(`/content${e.data["link"]}`)},listContent(){return this.$http.get("/content").then((e=>{this.rowData=[],e.data[0].map((e=>{e.regDate=this.$moment(e.regDate).format("YYYY-MM-DD HH:mm:ss"),(0,s.UE)(e.modDate)&&(e.modDate=this.$moment(e.modDate).format("YYYY-MM-DD HH:mm:ss")),this.rowData.push(e)}))}))},async removeContent(){const e=this.gridApi.getSelectedRows();if(0===e.length)return void s.wW.toastWarning("삭제할 콘텐츠를 선택하세요.");const t=await s.wW.confirmQuestion("삭제하시겠습니까?");if(!t)return;let n=[];e.forEach(((e,t)=>{n.push({id:e.id})})),this.$http.post("/content/remove",n).then((e=>{this.gridApi.removeSelectedRows(),s.wW.toastSuccess("삭제되었습니다.")}))}}},m=n(89);const h=(0,m.Z)(u,[["render",d]]);var p=h}}]);
//# sourceMappingURL=622.1747c54c.js.map