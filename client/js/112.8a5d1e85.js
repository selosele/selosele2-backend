"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[112],{6112:function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var l=o(3396);const a={class:"d-flex flex--right gap--10 mb--15"},i=(0,l.Uk)("복구 ");function n(e,t,o,n,s,r){const d=(0,l.up)("ui-select"),p=(0,l.up)("ui-button"),u=(0,l.up)("ui-grid"),c=(0,l.up)("app-content-wrapper");return(0,l.wg)(),(0,l.j4)(c,null,{default:(0,l.w5)((()=>[(0,l._)("div",a,[(0,l.Wm)(d,{name:"option",id:"listPostReplyAllOption",title:"댓글 조회 옵션 선택",data:s.optionList,modelValue:s.option,"onUpdate:modelValue":t[0]||(t[0]=e=>s.option=e),onOnchange:r.listPostReplyAll},null,8,["data","modelValue","onOnchange"]),"delYn"===s.option?((0,l.wg)(),(0,l.j4)(p,{key:0,color:"primary",onClick:r.restorePostReply},{default:(0,l.w5)((()=>[i])),_:1},8,["onClick"])):(0,l.kq)("",!0)]),(0,l.Wm)(u,{columnDefs:s.columnDefs,rowData:s.rowData,checkboxIndex:0,pagination:!0,onGridready:r.onGridReady,onCelldoubleclicked:r.onCellDoubleClicked},null,8,["columnDefs","rowData","onGridready","onCelldoubleclicked"])])),_:1})}var s=o(8822),r={name:"AppAdminPostReply",data(){return{columnDefs:[{},{headerName:"댓글 URL",field:"link",width:80},{headerName:"댓글 내용",field:"cont"},{headerName:"댓글 등록일시",field:"regDate",width:100},{headerName:"댓글 수정일시",field:"modDate",width:100}],rowData:[],optionList:[],option:"",gridApi:null}},async created(){this.$store.dispatch("Breadcrumb/FETCH_PAGE_TITLE","포스트 댓글 관리"),this.optionList=[{value:"",text:"전체"},{value:"adminYn",text:"관리자 작성 댓글"},{value:"delYn",text:"삭제된 댓글"}],await this.listPostReplyAll()},methods:{onGridReady(e){this.gridApi=e},onCellDoubleClicked(e){this.$router.push(e.data["link"])},listPostReplyAll(){let e={};return(0,s.SL)(this.option)&&(e[this.option]="Y"),this.$http.get("/postreply",{params:e}).then((e=>{this.rowData=[],e.data.forEach((e=>{e.link=`/post/${e.parentId}`,e.regDate=this.$moment(e.regDate).format("YYYY-MM-DD HH:mm:ss"),(0,s.UE)(e.modDate)&&(e.modDate=this.$moment(e.modDate).format("YYYY-MM-DD HH:mm:ss")),this.rowData.push(e)}))}))},async restorePostReply(){const e=this.gridApi.getSelectedRows();if(0===e.length)return void s.wW.toastWarning("항목을 선택하세요.");const t=await s.wW.confirmSuccess("복구하시겠습니까?");t&&this.$http.put("/postreply/restore",e).then((e=>{s.wW.toastSuccess("복구되었습니다."),this.gridApi.removeSelectedRows()}))}}},d=o(89);const p=(0,d.Z)(r,[["render",n]]);var u=p}}]);