"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[814],{9814:function(t,a,e){e.r(a),e.d(a,{default:function(){return d}});var i=e(3396);const o={class:"d-flex flex--right gap--10 mb--15"};function l(t,a,e,l,s,r){const n=(0,i.up)("ui-datepicker"),d=(0,i.up)("ui-button"),c=(0,i.up)("ui-grid"),u=(0,i.up)("app-content-wrapper");return(0,i.wg)(),(0,i.j4)(u,null,{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i.Wm)(n,{modelValue:s.regDate,"onUpdate:modelValue":[a[0]||(a[0]=t=>s.regDate=t),r.listByRegDate],onClear:r.onClear},null,8,["modelValue","onClear","onUpdate:modelValue"]),(0,i.Wm)(d,{color:"secondary",text:"전체",onClick:r.listByAllDate},null,8,["onClick"]),(0,i.Wm)(d,{color:"dark",text:"Today",onClick:r.listByNowDate},null,8,["onClick"])]),(0,i.Wm)(c,{columnDefs:s.columnDefs,rowData:s.rowData,rowNumIndex:0,pagination:!0,onGridready:r.onGridReady,onCelldoubleclicked:r.onCellDoubleClicked},null,8,["columnDefs","rowData","onGridready","onCelldoubleclicked"])])),_:1})}var s={name:"AppAdminSatisfaction",data(){return{columnDefs:[{},{headerName:"페이지 URL",field:"pagePath",width:100},{headerName:"만족도 점수",field:"score",width:80},{headerName:"만족도 의견",field:"comment"},{headerName:"참여일시",field:"regDate",width:100}],rowData:[],regDate:null,gridApi:null}},async created(){this.$store.dispatch("Breadcrumb/FETCH_PAGE_TITLE","만족도조사 관리"),await this.listSatisfaction({isToday:"N"})},methods:{onGridReady(t){this.gridApi=t},onCellDoubleClicked(t){this.$router.push(t.data["pagePath"])},listSatisfaction(t){return this.$http.get("/satisfaction",{params:t}).then((t=>{this.rowData=[],t.data.forEach((t=>{t.regDate=this.$moment(t.regDate).format("YYYY-MM-DD HH:mm:ss"),t.score=this.$store.state.Satisfaction.code.filter((a=>"B01"===a.prefix&&a.val===t.score)).map((t=>t.nm)),this.rowData.push(t)}))}))},onClear(){this.listByAllDate()},async listByRegDate(){await this.listSatisfaction({isToday:"N",regDate:this.$moment(this.regDate).format("YYYY-MM-DD")}),this.gridApi.setRowData(this.rowData)},async listByNowDate(){await this.listSatisfaction({isToday:"Y"}),this.gridApi.setRowData(this.rowData)},async listByAllDate(){await this.listSatisfaction({isToday:"N"}),this.gridApi.setRowData(this.rowData)}}},r=e(89);const n=(0,r.Z)(s,[["render",l]]);var d=n}}]);