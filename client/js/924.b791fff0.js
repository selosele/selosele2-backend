"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[924],{7101:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(3396);function s(e,t,i,s,a,o){const r=(0,n.up)("Field"),l=(0,n.up)("ErrorMessage");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r,(0,n.dG)({as:"textarea",id:i.id,ref:i.id,name:i.name,title:i.title,placeholder:i.placeholder,cols:i.cols,rows:i.rows,readonly:i.readonly,rules:i.rules,value:i.modelValue},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))}),null,16,["id","name","title","placeholder","cols","rows","readonly","rules","value"]),(0,n.Wm)(l,{class:"form-field-error",name:i.name},null,8,["name"])],64)}var a=i(5708),o={name:"ui-textarea",components:{Field:a.gN,ErrorMessage:a.Bc},props:{id:String,name:String,title:String,placeholder:String,cols:String,rows:String,readonly:Boolean,rules:String,modelValue:String}},r=i(89);const l=(0,r.Z)(o,[["render",s]]);var d=l},6924:function(e,t,i){i.r(t),i.d(t,{default:function(){return ie}});var n=i(3396);const s={class:"d-flex flex--right gap--10 mb--15"},a=(0,n.Uk)("추가 "),o=(0,n.Uk)("삭제 ");function r(e,t,i,r,l,d){const h=(0,n.up)("ui-skeletor"),u=(0,n.up)("ui-button"),p=(0,n.up)("ui-grid"),m=(0,n.up)("ui-pane"),c=(0,n.up)("app-save-code"),v=(0,n.up)("ui-split-pane"),f=(0,n.up)("app-content-wrapper");return(0,n.wg)(),(0,n.j4)(f,{pageTitle:l.pageTitle},{default:(0,n.w5)((()=>[l.dataLoaded?((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n._)("div",s,[(0,n.Wm)(u,{type:"button",color:"primary",onClick:d.addCode},{default:(0,n.w5)((()=>[a])),_:1},8,["onClick"]),(0,n.Wm)(u,{type:"button",color:"dark",onClick:d.removeCode},{default:(0,n.w5)((()=>[o])),_:1},8,["onClick"])]),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{defaultColDef:e.defaultColDef,columnDefs:l.columnDefs,rowData:l.rowData,checkboxIndex:0,pagination:!0,onOnGridReady:d.onGridReady,onRowClicked:d.rowClicked},null,8,["defaultColDef","columnDefs","rowData","onOnGridReady","onRowClicked"])])),_:1}),e.isSplitterActive?((0,n.wg)(),(0,n.j4)(m,{key:0},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)(c,{code:l.code,key:l.code.id,onOnSaveCode:d.onSaveCode},null,8,["code","onOnSaveCode"]))])),_:1})):(0,n.kq)("",!0)])),_:1})],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(h,{height:"1.3rem"},null,8,["height"]),(0,n.Wm)(h,{height:"1.3rem"},null,8,["height"]),(0,n.Wm)(h,{height:"1.3rem"},null,8,["height"])],64))])),_:1},8,["pageTitle"])}var l=i(3210),d=i(5744),h=i(7139);function u(e,t,i,s,a,o){const r=(0,n.up)("splitpanes");return(0,n.wg)(),(0,n.j4)(r,{class:"default-theme",style:(0,h.j5)({height:i.height}),vertical:""},{default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default")])),_:3},8,["style"])}const p={name:"splitpanes",emits:["ready","resize","resized","pane-click","pane-maximize","pane-add","pane-remove","splitter-click"],props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce(((e,t)=>(e[t.id]=t)&&e),{})}},methods:{updatePaneComponents(){this.panes.forEach((e=>{e.update&&e.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[e.id].size}%`})}))},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(e,t){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=t},onMouseMove(e){this.touch.mouseDown&&(e.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(e)),this.$emit("resize",this.panes.map((e=>({min:e.min,max:e.max,size:e.size})))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map((e=>({min:e.min,max:e.max,size:e.size})))),this.touch.mouseDown=!1,setTimeout((()=>{this.touch.dragging=!1,this.unbindEvents()}),100)},onSplitterClick(e,t){"ontouchstart"in window&&(e.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===t?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(e,t),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=t,this.splitterTaps.timeoutId=setTimeout((()=>{this.splitterTaps.splitter=null}),500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[t])},onSplitterDblClick(e,t){let i=0;this.panes=this.panes.map(((e,n)=>(e.size=n===t?e.max:e.min,n!==t&&(i+=e.min),e))),this.panes[t].size-=i,this.$emit("pane-maximize",this.panes[t]),this.$emit("resized",this.panes.map((e=>({min:e.min,max:e.max,size:e.size}))))},onPaneClick(e,t){this.$emit("pane-click",this.indexedPanes[t])},getCurrentMouseDrag(e){const t=this.container.getBoundingClientRect(),{clientX:i,clientY:n}="ontouchstart"in window&&e.touches?e.touches[0]:e;return{x:i-t.left,y:n-t.top}},getCurrentDragPercentage(e){e=e[this.horizontal?"y":"x"];const t=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(e=t-e),100*e/t},calculatePanesSize(e){const t=this.touch.activeSplitter;let i={prevPanesSize:this.sumPrevPanesSize(t),nextPanesSize:this.sumNextPanesSize(t),prevReachedMinPanes:0,nextReachedMinPanes:0};const n=0+(this.pushOtherPanes?0:i.prevPanesSize),s=100-(this.pushOtherPanes?0:i.nextPanesSize),a=Math.max(Math.min(this.getCurrentDragPercentage(e),s),n);let o=[t,t+1],r=this.panes[o[0]]||null,l=this.panes[o[1]]||null;const d=r.max<100&&a>=r.max+i.prevPanesSize,h=l.max<100&&a<=100-(l.max+this.sumNextPanesSize(t+1));if(d||h)d?(r.size=r.max,l.size=Math.max(100-r.max-i.prevPanesSize-i.nextPanesSize,0)):(r.size=Math.max(100-l.max-i.prevPanesSize-this.sumNextPanesSize(t+1),0),l.size=l.max);else{if(this.pushOtherPanes){const e=this.doPushOtherPanes(i,a);if(!e)return;({sums:i,panesToResize:o}=e),r=this.panes[o[0]]||null,l=this.panes[o[1]]||null}null!==r&&(r.size=Math.min(Math.max(a-i.prevPanesSize-i.prevReachedMinPanes,r.min),r.max)),null!==l&&(l.size=Math.min(Math.max(100-a-i.nextPanesSize-i.nextReachedMinPanes,l.min),l.max))}},doPushOtherPanes(e,t){const i=this.touch.activeSplitter,n=[i,i+1];return t<e.prevPanesSize+this.panes[n[0]].min&&(n[0]=this.findPrevExpandedPane(i).index,e.prevReachedMinPanes=0,n[0]<i&&this.panes.forEach(((t,s)=>{s>n[0]&&s<=i&&(t.size=t.min,e.prevReachedMinPanes+=t.min)})),e.prevPanesSize=this.sumPrevPanesSize(n[0]),void 0===n[0])?(e.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach(((t,n)=>{n>0&&n<=i&&(t.size=t.min,e.prevReachedMinPanes+=t.min)})),this.panes[n[1]].size=100-e.prevReachedMinPanes-this.panes[0].min-e.prevPanesSize-e.nextPanesSize,null):t>100-e.nextPanesSize-this.panes[n[1]].min&&(n[1]=this.findNextExpandedPane(i).index,e.nextReachedMinPanes=0,n[1]>i+1&&this.panes.forEach(((t,s)=>{s>i&&s<n[1]&&(t.size=t.min,e.nextReachedMinPanes+=t.min)})),e.nextPanesSize=this.sumNextPanesSize(n[1]-1),void 0===n[1])?(e.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach(((t,n)=>{n<this.panesCount-1&&n>=i+1&&(t.size=t.min,e.nextReachedMinPanes+=t.min)})),this.panes[n[0]].size=100-e.prevPanesSize-e.nextReachedMinPanes-this.panes[this.panesCount-1].min-e.nextPanesSize,null):{sums:e,panesToResize:n}},sumPrevPanesSize(e){return this.panes.reduce(((t,i,n)=>t+(n<e?i.size:0)),0)},sumNextPanesSize(e){return this.panes.reduce(((t,i,n)=>t+(n>e+1?i.size:0)),0)},findPrevExpandedPane(e){return[...this.panes].reverse().find((t=>t.index<e&&t.size>t.min))||{}},findNextExpandedPane(e){return this.panes.find((t=>t.index>e+1&&t.size>t.min))||{}},checkSplitpanesNodes(){Array.from(this.container.children).forEach((e=>{const t=e.classList.contains("splitpanes__pane"),i=e.classList.contains("splitpanes__splitter");!t&&!i&&(e.parentNode.removeChild(e),console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."))}))},addSplitter(e,t,i=!1){const n=e-1,s=document.createElement("div");s.classList.add("splitpanes__splitter"),i||(s.onmousedown=e=>this.onMouseDown(e,n),typeof window<"u"&&"ontouchstart"in window&&(s.ontouchstart=e=>this.onMouseDown(e,n)),s.onclick=e=>this.onSplitterClick(e,n+1)),this.dblClickSplitter&&(s.ondblclick=e=>this.onSplitterDblClick(e,n+1)),t.parentNode.insertBefore(s,t)},removeSplitter(e){e.onmousedown=void 0,e.onclick=void 0,e.ondblclick=void 0,e.parentNode.removeChild(e)},redoSplitters(){const e=Array.from(this.container.children);e.forEach((e=>{e.className.includes("splitpanes__splitter")&&this.removeSplitter(e)}));let t=0;e.forEach((e=>{e.className.includes("splitpanes__pane")&&(!t&&this.firstSplitter?this.addSplitter(t,e,!0):t&&this.addSplitter(t,e),t++)}))},requestUpdate({target:e,...t}){const i=this.indexedPanes[e._.uid];Object.entries(t).forEach((([e,t])=>i[e]=t))},onPaneAdd(e){let t=-1;Array.from(e.$el.parentNode.children).some((i=>(i.className.includes("splitpanes__pane")&&t++,i===e.$el)));const i=parseFloat(e.minSize),n=parseFloat(e.maxSize);this.panes.splice(t,0,{id:e._.uid,index:t,min:isNaN(i)?0:i,max:isNaN(n)?100:n,size:null===e.size?null:parseFloat(e.size),givenSize:e.size,update:e.update}),this.panes.forEach(((e,t)=>e.index=t)),this.ready&&this.$nextTick((()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[t]}),this.$emit("pane-add",{index:t,panes:this.panes.map((e=>({min:e.min,max:e.max,size:e.size})))})}))},onPaneRemove(e){const t=this.panes.findIndex((t=>t.id===e._.uid)),i=this.panes.splice(t,1)[0];this.panes.forEach(((e,t)=>e.index=t)),this.$nextTick((()=>{this.redoSplitters(),this.resetPaneSizes({removedPane:{...i,index:t}}),this.$emit("pane-remove",{removed:i,panes:this.panes.map((e=>({min:e.min,max:e.max,size:e.size})))})}))},resetPaneSizes(e={}){e.addedPane||e.removedPane?this.panes.some((e=>null!==e.givenSize||e.min||e.max<100))?this.equalizeAfterAddOrRemove(e):this.equalize():this.initialPanesSizing(),this.ready&&this.$emit("resized",this.panes.map((e=>({min:e.min,max:e.max,size:e.size}))))},equalize(){const e=100/this.panesCount;let t=0;const i=[],n=[];this.panes.forEach((s=>{s.size=Math.max(Math.min(e,s.max),s.min),t-=s.size,s.size>=s.max&&i.push(s.id),s.size<=s.min&&n.push(s.id)})),t>.1&&this.readjustSizes(t,i,n)},initialPanesSizing(){let e=100;const t=[],i=[];let n=0;this.panes.forEach((s=>{e-=s.size,null!==s.size&&n++,s.size>=s.max&&t.push(s.id),s.size<=s.min&&i.push(s.id)}));let s=100;e>.1&&(this.panes.forEach((t=>{null===t.size&&(t.size=Math.max(Math.min(e/(this.panesCount-n),t.max),t.min)),s-=t.size})),s>.1&&this.readjustSizes(e,t,i))},equalizeAfterAddOrRemove({addedPane:e,removedPane:t}={}){let i=100/this.panesCount,n=0;const s=[],a=[];e&&null!==e.givenSize&&(i=(100-e.givenSize)/(this.panesCount-1)),this.panes.forEach((e=>{n-=e.size,e.size>=e.max&&s.push(e.id),e.size<=e.min&&a.push(e.id)})),!(Math.abs(n)<.1)&&(this.panes.forEach((t=>{e&&null!==e.givenSize&&e.id===t.id||(t.size=Math.max(Math.min(i,t.max),t.min)),n-=t.size,t.size>=t.max&&s.push(t.id),t.size<=t.min&&a.push(t.id)})),n>.1&&this.readjustSizes(n,s,a))},readjustSizes(e,t,i){let n;n=e>0?e/(this.panesCount-t.length):e/(this.panesCount-i.length),this.panes.forEach(((s,a)=>{if(e>0&&!t.includes(s.id)){const t=Math.max(Math.min(s.size+n,s.max),s.min),i=t-s.size;e-=i,s.size=t}else if(!i.includes(s.id)){const t=Math.max(Math.min(s.size+n,s.max),s.min),i=t-s.size;e-=i,s.size=t}s.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[s.id].size}%`})})),Math.abs(e)>.1&&this.$nextTick((()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")}))}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(e){[...this.container.querySelectorAll(".splitpanes__splitter")].forEach(((t,i)=>{t.ondblclick=e?e=>this.onSplitterDblClick(e,i):void 0}))}},beforeUnmount(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(){return(0,n.h)("div",{ref:"container",class:["splitpanes","splitpanes--"+(this.horizontal?"horizontal":"vertical"),{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default())}},m=(e,t)=>{const i=e.__vccOpts||e;for(const[n,s]of t)i[n]=s;return i},c={name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeUnmount(){this.onPaneRemove(this)},methods:{update(e){this.style=e}},computed:{sizeNumber(){return this.size||0===this.size?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(e){this.requestUpdate({target:this,size:e})},minSizeNumber(e){this.requestUpdate({target:this,min:e})},maxSizeNumber(e){this.requestUpdate({target:this,max:e})}}};function v(e,t,i,s,a,o){return(0,n.wg)(),(0,n.iD)("div",{class:"splitpanes__pane",onClick:t[0]||(t[0]=t=>o.onPaneClick(t,e._.uid)),style:(0,h.j5)(e.style)},[(0,n.WI)(e.$slots,"default")],4)}const f=m(c,[["render",v]]);var z={name:"ui-split-pane",components:{Splitpanes:p},props:{height:{type:String,default:"500px"}}},g=i(89);const x=(0,g.Z)(z,[["render",u]]);var S=x;const P={class:"pane__content-wrapper"};function w(e,t,i,s,a,o){const r=(0,n.up)("pane");return(0,n.wg)(),(0,n.j4)(r,null,{default:(0,n.w5)((()=>[(0,n._)("div",P,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])])),_:3})}var C={name:"ui-split-pane",components:{Pane:f}};const y=(0,g.Z)(C,[["render",w],["__scopeId","data-v-0861bee5"]]);var M=y;const k=(0,n._)("label",{for:"codeId"},"코드 ID",-1),_=(0,n._)("label",{for:"codePrefix"},"코드 접두어",-1),b=(0,n._)("label",{for:"codeVal"},"코드 값",-1),D=(0,n._)("label",{for:"codeNm"},"코드 명",-1),E=(0,n._)("label",{for:"codeDesc"},"코드 설명",-1);function N(e,t,i,s,a,o){const r=(0,n.up)("ui-hidden-field"),l=(0,n.up)("ui-text-field"),d=(0,n.up)("ui-textarea"),h=(0,n.up)("ui-radio"),u=(0,n.up)("ui-split-form");return(0,n.wg)(),(0,n.j4)(u,{name:"saveCodeForm",onOnSubmit:o.onSubmit},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{name:"originId",value:i.code.id},null,8,["value"]),k,(0,n._)("div",null,[(0,n.Wm)(l,{type:"text",name:"id",id:"codeId",rules:"required",readonly:!0,modelValue:a.id,"onUpdate:modelValue":t[0]||(t[0]=e=>a.id=e)},null,8,["modelValue"])]),_,(0,n._)("div",null,[(0,n.Wm)(l,{type:"text",name:"prefix",id:"codePrefix",rules:"required",modelValue:a.prefix,"onUpdate:modelValue":t[1]||(t[1]=e=>a.prefix=e)},null,8,["modelValue"])]),b,(0,n._)("div",null,[(0,n.Wm)(l,{type:"text",name:"val",id:"codeVal",rules:"required",modelValue:a.val,"onUpdate:modelValue":t[2]||(t[2]=e=>a.val=e)},null,8,["modelValue"])]),D,(0,n._)("div",null,[(0,n.Wm)(l,{type:"text",name:"nm",id:"codeNm",rules:"required",value:i.code.nm},null,8,["value"])]),E,(0,n._)("div",null,[(0,n.Wm)(d,{type:"text",name:"desc",id:"codeDesc",rules:"required",value:i.code.desc},null,8,["value"])]),(0,n._)("div",null,[(0,n.Wm)(h,{id:"codeUseYn1",name:"useYn",label:"사용",value:"Y",rules:"required",modelValue:a.useYn,"onUpdate:modelValue":t[3]||(t[3]=e=>a.useYn=e)},null,8,["modelValue"]),(0,n.Wm)(h,{id:"codeUseYn2",name:"useYn",label:"미사용",value:"N",rules:"required",modelValue:a.useYn,"onUpdate:modelValue":t[4]||(t[4]=e=>a.useYn=e)},null,8,["modelValue"])])])),_:1},8,["onOnSubmit"])}const $={class:"d-flex gap--10 mt--15"},U=(0,n.Uk)("저장 "),R=(0,n.Uk)("닫기 ");function T(e,t,i,s,a,o){const r=(0,n.up)("ui-button"),l=(0,n.up)("ui-form");return(0,n.wg)(),(0,n.j4)(l,null,{default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default"),(0,n._)("div",$,[(0,n.Wm)(r,{type:"submit",color:"primary"},{default:(0,n.w5)((()=>[U])),_:1}),(0,n.Wm)(r,{type:"button",color:"secondary",onClick:o.onClose},{default:(0,n.w5)((()=>[R])),_:1},8,["onClick"])])])),_:3})}var O=i(8408),W={name:"ui-split-form",components:{UiForm:O.Z},methods:{onClose(){this.$store.commit("Splitter/TOGGLE",!1),this.$emit("onClose")}}};const Y=(0,g.Z)(W,[["render",T]]);var V=Y;function Z(e,t,i,s,a,o){const r=(0,n.up)("Field");return(0,n.wg)(),(0,n.j4)(r,(0,n.dG)({type:"hidden",id:i.id,ref:i.id,name:i.name,value:i.modelValue},e.$attrs),null,16,["id","name","value"])}var L=i(5708),q={name:"ui-hidden-field",components:{Field:L.gN,ErrorMessage:L.Bc},props:{type:String,id:String,name:String,modelValue:String}};const A=(0,g.Z)(q,[["render",Z]]);var I=A,j=i(8335),F=i(7101),G=i(4380),B=i(1197),H=i(4722),Q={name:"app-save-code",props:{code:Object},components:{UiSplitForm:V,UiHiddenField:I,UiTextField:j.Z,UiTextarea:F.Z,UiSkeletor:l.Z,UiRadio:G.Z},data(){return{id:"",prefix:"",val:"",useYn:""}},created(){this.prefix=this.code.prefix,this.val=this.code.val,this.id=this.prefix+this.val||"",this.useYn=this.code.useYn},watch:{prefix:function(e,t){this.id=e+this.val},val:function(e,t){this.id=this.prefix+e}},methods:{async onSubmit(e){console.log("저장",e);const t=await B.Z.confirmSuccess("저장하시겠습니까?");t&&((0,H.xb)(e.originId)?this.$http.post("/code/",e).then((e=>{B.Z.toastSuccess("저장되었습니다."),this.$emit("onSaveCode")})):this.$http.put(`/code/${e.id}`,e).then((e=>{B.Z.toastSuccess("저장되었습니다."),this.$emit("onSaveCode")})))}}};const X=(0,g.Z)(Q,[["render",N]]);var J=X,K=i(821),ee={name:"app-code",components:{UiSkeletor:l.Z,UiGrid:d.Z,UiSplitPane:S,UiPane:M,AppSaveCode:J},data(){return{pageTitle:"공통코드 관리",columnDefs:[{},{headerName:"코드 ID",field:"id",width:130},{headerName:"코드 접두어",field:"prefix",width:130},{headerName:"코드 값",field:"val",width:130},{headerName:"코드 명",field:"nm"},{headerName:"코드 설명",field:"desc"},{headerName:"코드 등록일시",field:"regDate"},{headerName:"코드 사용여부",field:"useYn",width:150,align:"center"}],rowData:[],code:null,gridApi:null,dataLoaded:!1}},async created(){K.Z.setPageTitle(this.pageTitle),await this.listCode(),this.dataLoading()},methods:{onGridReady(e){this.gridApi=e},rowClicked(e){this.$http.get(`/code/${e.data.id}`).then((e=>{this.code={...e.data},this.$store.commit("Splitter/TOGGLE",!0)}))},listCode(){return this.$http.get("/code").then((e=>{e.data.map((e=>{e.regDate=this.$moment(e.regDate).format("YYYY-MM-DD HH:mm:ss"),e.useYn=this.getUseYn(e.useYn)})),this.rowData=[...e.data],this.dataLoading()}))},addCode(){this.code={},this.code.id=null,this.$store.commit("Splitter/TOGGLE",!0)},async removeCode(){const e=this.gridApi.getSelectedRows();if(0===e.length)return void B.Z.toastWarning("삭제할 항목을 선택하세요.");const t=await B.Z.confirmQuestion("삭제하시겠습니까?");if(!t)return;let i=[];e.forEach(((e,t)=>{i.push({id:e.id})})),this.$http.delete("/code",{data:i}).then((e=>{this.gridApi.removeSelectedRows(),B.Z.toastSuccess("삭제되었습니다."),this.$store.commit("Splitter/TOGGLE",!1),this.$store.dispatch("Code/FETCH_CODE",this.gridApi.getRowNodes())}))},async onSaveCode(){await this.listCode(),this.$store.dispatch("Code/FETCH_CODE",this.rowData)},getUseYn(e){switch(e){case"Y":return"사용";case"N":return"미사용"}},dataLoading(){0<this.rowData.length&&(this.dataLoaded=!0)}}};const te=(0,g.Z)(ee,[["render",r]]);var ie=te}}]);
//# sourceMappingURL=924.b791fff0.js.map