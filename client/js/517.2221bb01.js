"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[517],{7517:function(e,i,t){t.r(i),t.d(i,{default:function(){return u}});var l=t(3396);function a(e,i,t,a,n,s){const o=(0,l.up)("ui-file-upload-field"),u=(0,l.up)("ui-file-list"),p=(0,l.up)("app-content-wrapper");return(0,l.wg)(),(0,l.j4)(p,{pageTitle:n.pageTitle},{default:(0,l.w5)((()=>[0<n.fileList.length?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l.Wm)(o,{onUpload:s.onUpload},null,8,["onUpload"]),((0,l.wg)(),(0,l.j4)(u,{value:n.fileList,key:n.fileList,float:!1,height:"26rem",onClickFile:s.onClickFile},null,8,["value","onClickFile"]))],64)):(0,l.kq)("",!0)])),_:1},8,["pageTitle"])}var n={name:"app-admin-file-upload",data(){return{pageTitle:"이미지 업로드",fileList:[]}},async created(){this.$store.dispatch("Breadcrumb/FETCH_PAGE_TITLE",this.pageTitle),this.init()},methods:{async init(){await this.listFile()},listFile(){return this.$http.get("/file").then((e=>{this.fileList=[...e.data]}))},onClickFile(e){},onUpload(){setTimeout((async()=>{await this.listFile()}),1e3)}}},s=t(89);const o=(0,s.Z)(n,[["render",a]]);var u=o}}]);
//# sourceMappingURL=517.2221bb01.js.map