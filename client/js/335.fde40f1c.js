"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[335],{1335:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var r=a(3396);const n={class:"d-flex flex--right gap--10 mb--15"};function s(e,t,a,s,i,d){const o=(0,r.up)("ui-button"),c=(0,r.up)("ui-grid"),h=(0,r.up)("app-content-wrapper");return(0,r.wg)(),(0,r.j4)(h,null,{default:(0,r.w5)((()=>[(0,r._)("div",n,[(0,r.Wm)(o,{color:"primary",text:"색인",onClick:d.saveIndexSearch},null,8,["onClick"])]),(0,r.Wm)(c,{columnDefs:i.columnDefs,rowData:i.rowData,rowNumIndex:0,pagination:!0,onGridready:d.onGridReady},null,8,["columnDefs","rowData","onGridready"])])),_:1})}var i=a(8822),d={name:"AppAdminSearch",data(){return{columnDefs:[{},{headerName:"유형",field:"typeCdNm",width:50},{headerName:"자동 색인 여부",field:"autoYnNm",width:100},{headerName:"색인 건수",field:"cnt",width:150},{headerName:"색인 시작일시",field:"startDate",width:100},{headerName:"색인 종료일시",field:"endDate",width:100}],rowData:[],gridApi:null}},async created(){this.$store.dispatch("Breadcrumb/FETCH_PAGE_TITLE","검색 관리"),await this.listIndexSearchLog()},methods:{onGridReady(e){this.gridApi=e},async listIndexSearchLog(){return this.$http.get("/indexsearchlog").then((e=>{this.rowData=[],e.data.forEach((e=>{e.startDate=this.$moment(e.startDate).format("YYYY-MM-DD HH:mm:ss"),e.endDate=this.$moment(e.endDate).format("YYYY-MM-DD HH:mm:ss"),e.autoYnNm=this.getAutoYn(e.autoYn),e.typeCdNm=this.$store.state.Search.code.filter((e=>"D03"===e.prefix)).find((t=>t.id===e.typeCd)).nm,this.rowData.push(e)}))}))},getAutoYn(e){switch(e){case"Y":return"자동";case"N":return"수동"}},async saveIndexSearch(){const e=await i.wW.confirmSuccess("데이터를 색인하시겠습니까?");e&&this.$http.post("/indexsearch").then((async e=>{i.wW.toastSuccess("색인 작업이 완료되었습니다."),await this.listIndexSearchLog()}))}}},o=a(89);const c=(0,o.Z)(d,[["render",s]]);var h=c}}]);