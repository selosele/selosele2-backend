"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[722],{3722:function(e,t,o){o.r(t),o.d(t,{default:function(){return He}});var s=o(3396),i=o(7139),a=o(9242);const n=e=>((0,s.dD)("data-v-d9243542"),e=e(),(0,s.Cn)(),e),u={class:"guestbook__wrapper"},l={class:"guestbook__write"},d={class:"guestbook__write__inputs"},r={class:"guestbook__write__input-box"},_=n((()=>(0,s._)("label",{for:"addGuestbookAuthor",class:"guestbook__write__label"},"닉네임",-1))),c={class:"guestbook__write__input-box"},p=n((()=>(0,s._)("label",{for:"addGuestbookPw",class:"guestbook__write__label"},"비밀번호",-1))),b={class:"guestbook__write__btns"},m={class:"guestbook__depth1"},k=["id"],g=["innerHTML"],h={class:"guestbook__cont__info depth1"},w={class:"guestbook__author"},v=n((()=>(0,s._)("strong",null,[(0,s._)("i",{class:"xi-user-o","aria-hidden":"true"}),(0,s.Uk)(" 글쓴이 : ")],-1))),y={class:"guestbook__reg-date"},f=n((()=>(0,s._)("strong",null,[(0,s._)("i",{class:"xi-time-o","aria-hidden":"true"}),(0,s.Uk)(" 등록일 : ")],-1))),x={key:0,class:"guestbook__mod-date"},C=n((()=>(0,s._)("strong",null,[(0,s._)("i",{class:"xi-time-o","aria-hidden":"true"}),(0,s.Uk)(" 수정일 : ")],-1))),G={class:"reply-cnt"},R={class:"guestbook__toggle"},D={key:0,class:"guestbook__toggle-list"};function E(e,t,o,n,E,$){const W=(0,s.up)("ui-textarea"),M=(0,s.up)("ui-text-field"),S=(0,s.up)("ui-button"),L=(0,s.up)("ui-form"),z=(0,s.up)("ui-icon-button"),Y=(0,s.up)("app-guestbook-reply-list"),A=(0,s.up)("app-add-guestbook-reply"),O=(0,s.up)("app-content-wrapper");return(0,s.wg)(),(0,s.j4)(O,null,{default:(0,s.w5)((()=>[(0,s._)("div",u,[(0,s.Wm)(L,{class:(0,i.C_)("guestbook__write-frm"),name:"addGuestbookForm",onOnsubmit:$.onSubmit},{default:(0,s.w5)((()=>[(0,s._)("div",l,[(0,s.Wm)(W,{name:"cont",id:"addGuestbookCont",clazz:["guestbook__textarea"],title:"방명록 내용 입력",placeholder:"하고싶은 말을 남겨주세요.",cols:"30",rows:"4",rules:"required|max:1000"},null,8,["placeholder"]),(0,s._)("div",d,[(0,s._)("div",r,[_,(0,s.Wm)(M,{name:"author",id:"addGuestbookAuthor",clazz:["guestbook__input"],rules:"required|max:20",readonly:e.isLogin,value:e.isLogin?E.adminNickName:""},null,8,["readonly","value"])]),(0,s._)("div",c,[p,(0,s.Wm)(M,{type:"password",name:"authorPw",id:"addGuestbookPw",clazz:["guestbook__input"],rules:"required|min:8|max:15"})]),(0,s._)("div",b,[(0,s.Wm)(S,{type:"submit",color:"primary",text:"저장",class:(0,i.C_)("guestbook__btn guestbook__btn--write")})])])])])),_:1},8,["onOnsubmit"]),(0,s._)("ul",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(E.guestbookList,((t,o)=>((0,s.wg)(),(0,s.iD)("li",{class:"guestbook__depth1__list",id:`guestbook${t.id}`,key:t},[(0,s._)("p",{class:"guestbook__cont",innerHTML:t.cont},null,8,g),(0,s._)("div",h,[(0,s._)("span",w,[v,(0,s._)("span",{class:(0,i.C_)({"font--bold":"Y"===t.adminYn})},(0,i.zw)(t.author),3)]),(0,s._)("span",y,[f,(0,s.Uk)(" "+(0,i.zw)(t.regDate),1)]),t.modDate?((0,s.wg)(),(0,s.iD)("span",x,[C,(0,s.Uk)(" "+(0,i.zw)(t.modDate),1)])):(0,s.kq)("",!0)]),0<t.guestbookReply.length?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s.Wm)(z,{icon:"xi-message",title:`댓글 ${t.guestbookReply.length}개 펼쳐보기`,class:(0,i.C_)("guestbook__btn guestbook__btn--reply-open"),onClick:e=>$.toggleReplyList(o)},{default:(0,s.w5)((()=>[(0,s._)("span",G,(0,i.zw)(99<t.guestbookReply.length?"99+":t.guestbookReply.length),1)])),_:2},1032,["title","onClick"]),o===E.replyActiveIndex?((0,s.wg)(),(0,s.j4)(Y,{key:t.guestbookReply,list:t.guestbookReply,parentId:t.id,onUpdateReply:$.onUpdateReply},null,8,["list","parentId","onUpdateReply"])):(0,s.kq)("",!0)],64)):(0,s.kq)("",!0),(0,s.Wm)(A,{idx:o,parentId:t.id,onAddReply:$.onAddReply},null,8,["idx","parentId","onAddReply"]),(0,s._)("div",R,[(0,s.Wm)(z,{icon:"xi-cog",text:"방명록 수정/삭제",title:"방명록 수정/삭제",class:(0,i.C_)("guestbook__btn--toggle"),onClick:(0,a.iM)((e=>$.toggleMenu(o)),["stop"])},null,8,["onClick"]),o===E.activeIndex?((0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(z,{icon:"xi-pen-o",text:"방명록 수정",showText:!0,class:(0,i.C_)("guestbook__btn--edit1"),ref_for:!0,ref:"guestbookMenuBtn",onClick:o=>$.openModal("E01003",t,e.isLogin)},null,8,["onClick"])]),(0,s._)("li",null,[(0,s.Wm)(z,{icon:"xi-trash-o",text:"방명록 삭제",showText:!0,class:(0,i.C_)("guestbook__btn--delete1"),ref_for:!0,ref:"guestbookMenuBtn",onClick:o=>$.openModal("E01004",t,e.isLogin)},null,8,["onClick"])])])])):(0,s.kq)("",!0)])],8,k)))),128))])])])),_:1})}var $=o(8822);const W={class:"guestbook__reply__wrapper"},M={class:"guestbook__reply__btns"},S={class:"guestbook__reply__input-box"},L=["for"],z={class:"guestbook__reply__input-box"},Y=["for"],A={class:"guestbook__reply__write__btns"};function O(e,t,o,a,n,u){const l=(0,s.up)("ui-hidden-field"),d=(0,s.up)("ui-textarea"),r=(0,s.up)("ui-text-field"),_=(0,s.up)("ui-button"),c=(0,s.up)("ui-form");return(0,s.wg)(),(0,s.iD)("div",W,[(0,s.Wm)(c,{name:`guestbookReplyForm${o.idx}`,onOnsubmit:u.onSubmit},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"parentId",value:o.parentId},null,8,["value"]),(0,s.Wm)(d,{name:"cont",id:`guestbookReplyCont${o.idx}`,clazz:["guestbook__reply__cont","guestbook__textarea"],title:"댓글 입력",placeholder:"댓글을 남겨주세요.",cols:"30",rows:"3",rules:"required|max:1000"},null,8,["id","placeholder"]),(0,s._)("div",M,[(0,s._)("div",S,[(0,s._)("label",{for:`guestbookReplyAuthor${o.idx}`,class:"guestbook__reply__label"},"닉네임",8,L),(0,s.Wm)(r,{name:"author",id:`guestbookReplyAuthor${o.idx}`,clazz:["guestbook__input"],rules:"required|max:20",readonly:e.isLogin,value:e.isLogin?n.adminNickName:""},null,8,["id","readonly","value"])]),(0,s._)("div",z,[(0,s._)("label",{for:`guestbookReplyPw${o.idx}`,class:"guestbook__reply__label"},"비밀번호",8,Y),(0,s.Wm)(r,{type:"password",name:"authorPw",id:`guestbookReplyPw${o.idx}`,clazz:["guestbook__input"],rules:"required|min:8|max:15"},null,8,["id"])]),(0,s._)("div",A,[(0,s.Wm)(_,{type:"submit",color:"primary",text:"저장",class:(0,i.C_)("guestbook__btn guestbook__btn--reply-write")})])])])),_:1},8,["name","onOnsubmit"])])}var I={name:"AppAddGuestbookReply",props:{idx:Number,parentId:Number},data(){return{adminNickName:""}},created(){this.adminNickName=this.$store.state.Guestbook.code.find((e=>"F01001"===e.id)).nm},methods:{async onSubmit(e){const t=await $.wW.confirmSuccess("저장하시겠습니까?");t&&this.$http.post("/guestbookreply",e).then((e=>{$.wW.toastSuccess("저장되었습니다."),this.$emit("addReply",e.data)}))}}},T=o(89);const U=(0,T.Z)(I,[["render",O],["__scopeId","data-v-7e0c6cd2"]]);var H=U;const P=e=>((0,s.dD)("data-v-2bbd7961"),e=e(),(0,s.Cn)(),e),q={class:"guestbook__depth2__wrapper"},B={class:"guestbook__depth2__list"},F=["innerHTML"],N={class:"guestbook__cont__info depth2"},j={class:"guestbook__author"},K=P((()=>(0,s._)("strong",null,[(0,s._)("i",{class:"xi-user-o","aria-hidden":"true"}),(0,s.Uk)(" 글쓴이 : ")],-1))),Z={class:"guestbook__reg-date"},V=P((()=>(0,s._)("strong",null,[(0,s._)("i",{class:"xi-time-o","aria-hidden":"true"}),(0,s.Uk)(" 등록일 : ")],-1))),J={key:0,class:"guestbook__mod-date"},Q=P((()=>(0,s._)("strong",null,[(0,s._)("i",{class:"xi-time-o","aria-hidden":"true"}),(0,s.Uk)(" 수정일 : ")],-1))),X={class:"guestbook__reply__toggle"},ee={key:0,class:"guestbook__reply__toggle-list"};function te(e,t,o,n,u,l){const d=(0,s.up)("ui-icon-button");return(0,s.wg)(),(0,s.iD)("div",q,[(0,s._)("ul",B,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.list.slice(0,u.pageSize),((t,o)=>((0,s.wg)(),(0,s.iD)("li",{class:"guestbook__depth2__item",key:o},[(0,s._)("p",{class:"guestbook__reply__cont",innerHTML:t.cont},null,8,F),(0,s._)("div",N,[(0,s._)("span",j,[K,(0,s._)("span",{class:(0,i.C_)({"font--bold":"Y"===t.adminYn})},(0,i.zw)(t.author),3)]),(0,s._)("span",Z,[V,(0,s.Uk)(" "+(0,i.zw)(t.regDate),1)]),t.modDate?((0,s.wg)(),(0,s.iD)("span",J,[Q,(0,s.Uk)(" "+(0,i.zw)(t.modDate),1)])):(0,s.kq)("",!0)]),(0,s._)("div",X,[(0,s.Wm)(d,{icon:"xi-cog",text:"방명록 댓글 수정/삭제",title:"방명록 댓글 수정/삭제",class:(0,i.C_)("guestbook__reply__btn--toggle"),onClick:(0,a.iM)((e=>l.toggleMenu(o)),["stop"])},null,8,["onClick"]),o===u.activeIndex?((0,s.wg)(),(0,s.iD)("div",ee,[(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(d,{icon:"xi-pen-o",text:"댓글 수정",showText:!0,class:(0,i.C_)("guestbook__btn--edit2"),ref_for:!0,ref:"guestbookMenuBtn",onClick:o=>l.openModal("E01003",t,e.isLogin)},null,8,["onClick"])]),(0,s._)("li",null,[(0,s.Wm)(d,{icon:"xi-trash-o",text:"댓글 삭제",showText:!0,class:(0,i.C_)("guestbook__btn--delete2"),ref_for:!0,ref:"guestbookMenuBtn",onClick:o=>l.openModal("E01004",t,e.isLogin)},null,8,["onClick"])])])])):(0,s.kq)("",!0)])])))),128))]),o.list.length>u.pageSize?((0,s.wg)(),(0,s.j4)(d,{key:0,icon:"xi-ellipsis-h",text:"댓글 더보기",class:(0,i.C_)("guestbook__reply-more"),onClick:l.more},null,8,["onClick"])):(0,s.kq)("",!0)])}const oe=e=>((0,s.dD)("data-v-025a7d08"),e=e(),(0,s.Cn)(),e),se={class:"guestbook__write__inputs"},ie={class:"guestbook__write__input-box"},ae=oe((()=>(0,s._)("label",{for:"updateGuestbookReplyAuthor",class:"guestbook__write__label"},"닉네임",-1))),ne={class:"guestbook__write__input-box"},ue=oe((()=>(0,s._)("label",{for:"updateGuestbookReplyPw",class:"guestbook__write__label"},"비밀번호",-1))),le={class:"guestbook__write__btns"};function de(e,t,o,a,n,u){const l=(0,s.up)("ui-hidden-field"),d=(0,s.up)("ui-textarea"),r=(0,s.up)("ui-text-field"),_=(0,s.up)("ui-button"),c=(0,s.up)("ui-form"),p=(0,s.up)("ui-modal");return(0,s.wg)(),(0,s.j4)(p,{title:"방명록 댓글 수정",name:this.$options.name,class:"guestbook-modal__wrapper"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{name:"removeGuestbookReplyForm",onOnsubmit:u.onSubmit},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"id",value:o.guestbookReply.id},null,8,["value"]),(0,s.Wm)(d,{name:"cont",id:"updateGuestbookReplyCont",clazz:["guestbook__textarea"],title:"방명록 내용 입력",placeholder:"하고싶은 말을 남겨주세요.",cols:"30",rows:"4",resize:"vertical",rules:"required|max:1000",value:n.replacedCont},null,8,["placeholder","value"]),(0,s._)("div",se,[(0,s._)("div",ie,[ae,(0,s.Wm)(r,{name:"author",id:"updateGuestbookReplyAuthor",clazz:["guestbook__input"],rules:"required|max:20",readonly:"Y"===o.guestbookReply.adminYn,value:o.guestbookReply.author},null,8,["readonly","value"])]),(0,s._)("div",ne,[ue,(0,s.Wm)(r,{type:"password",name:"authorPw",id:"updateGuestbookReplyPw",clazz:["guestbook__input"],rules:"required|min:8|max:15"})]),(0,s._)("div",le,[(0,s.Wm)(_,{type:"submit",color:"primary",text:"저장",class:(0,i.C_)("guestbook__btn guestbook__btn--write")})])])])),_:1},8,["onOnsubmit"])])),_:1},8,["name"])}var re={name:"AppUpdateGuestbookReplyModal",props:{guestbookReply:Object},data(){return{replacedCont:""}},created(){this.replacedCont=this.guestbookReply.cont.replaceAll("<br>","\r\n")},methods:{async onSubmit(e){const t=await $.wW.confirmSuccess("저장하시겠습니까?");t&&this.$http.put("/guestbookreply",e).then((e=>{$.wW.toastSuccess("저장되었습니다."),this.$modal.hide(this.$options.name),this.$store.dispatch("Guestbook/FETCH_UPDATED_GUESTBOOK_REPLY",e.data)}))}}};const _e=(0,T.Z)(re,[["render",de],["__scopeId","data-v-025a7d08"]]);var ce=_e;const pe={class:"guestbook__write__input-box no-width"},be={class:"guestbook__write__btns"};function me(e,t,o,a,n,u){const l=(0,s.up)("ui-hidden-field"),d=(0,s.up)("ui-text-field"),r=(0,s.up)("ui-button"),_=(0,s.up)("ui-form"),c=(0,s.up)("ui-modal");return(0,s.wg)(),(0,s.j4)(c,{title:"방명록 댓글 삭제",name:this.$options.name,class:"guestbook-modal__wrapper"},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{name:"removeGuestbookReplyForm",onOnsubmit:u.onSubmit},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"id",value:o.id},null,8,["value"]),(0,s._)("div",pe,[(0,s.Wm)(d,{type:"password",name:"authorPw",id:"removeGuestbookReplyPw",clazz:["guestbook__input"],title:e.isLogin?"관리자는 비밀번호 입력 없이 삭제":"비밀번호 입력",placeholder:"비밀번호 입력",disabled:e.isLogin,rules:e.isLogin?"":"required|min:8|max:15"},null,8,["title","disabled","rules"]),(0,s._)("div",be,[(0,s.Wm)(r,{type:"submit",color:"primary",text:"삭제",class:(0,i.C_)("guestbook__btn guestbook__btn--write")})])])])),_:1},8,["onOnsubmit"])])),_:1},8,["name"])}var ke={name:"AppRemoveGuestbookReplyModal",props:{id:String},methods:{async onSubmit(e){const t=await $.wW.confirmSuccess("삭제하시겠습니까?");t&&this.$http.post("/guestbookreply/remove",e).then((t=>{$.wW.toastSuccess("삭제되었습니다."),this.$modal.hide(this.$options.name),this.$store.dispatch("Guestbook/FETCH_REMOVED_GUESTBOOK_REPLY",e)}))}}};const ge=(0,T.Z)(ke,[["render",me],["__scopeId","data-v-7e1b75c5"]]);var he=ge,we={name:"AppGuestbookReplyList",components:{AppUpdateGuestbookReplyModal:ce,AppRemoveGuestbookReplyModal:he},props:{list:Array,parentId:Number},watch:{"$store.state.Guestbook.updatedGuestbookReply"(e){if(0<Object.values(e).length){const{id:t,author:o,cont:s,modDate:i}=e,a=this.list.find((e=>e.id==t));a.author=o,a.cont=s,a.modDate=this.$moment(i).format("YYYY-MM-DD HH:mm:ss"),this.$store.dispatch("Guestbook/FETCH_UPDATED_GUESTBOOK_REPLY",{}),this.$emit("updateReply",a)}},"$store.state.Guestbook.removedGuestbookReply"(e){if(0<Object.values(e).length){const{id:t}=e,o=this.list.findIndex((e=>e.id==t)),s=this.list;s.splice(o,1),this.$store.dispatch("Guestbook/FETCH_REMOVED_GUESTBOOK_REPLY",{})}}},data(){return{pageSize:3,activeIndex:-1}},mounted(){window.document.addEventListener("click",this.closeMenu)},unmounted(){window.document.removeEventListener("click",this.closeMenu)},methods:{more(){this.pageSize+=3},toggleMenu(e){e!==this.activeIndex?this.activeIndex=e:this.activeIndex=-1},closeMenu(e){(0,$.UE)(this.$refs["guestbookMenuBtn"])&&!this.$refs["guestbookMenuBtn"].includes(e.target)&&(this.activeIndex=-1)},openModal(e,t,o){o||"Y"!==t.adminYn?"E01003"===e?this.$modal.show({component:ce,bind:{guestbookReply:t}}):"E01004"===e&&this.$modal.show({component:he,bind:{id:t.id}}):$.wW.toastError("수정/삭제 권한이 없습니다.")}}};const ve=(0,T.Z)(we,[["render",te],["__scopeId","data-v-2bbd7961"]]);var ye=ve;const fe=e=>((0,s.dD)("data-v-438ccb52"),e=e(),(0,s.Cn)(),e),xe={class:"guestbook__write__inputs"},Ce={class:"guestbook__write__input-box"},Ge=fe((()=>(0,s._)("label",{for:"updateGuestbookAuthor",class:"guestbook__write__label"},"닉네임",-1))),Re={class:"guestbook__write__input-box"},De=fe((()=>(0,s._)("label",{for:"updateGuestbookPw",class:"guestbook__write__label"},"비밀번호",-1))),Ee={class:"guestbook__write__btns"};function $e(e,t,o,a,n,u){const l=(0,s.up)("ui-hidden-field"),d=(0,s.up)("ui-textarea"),r=(0,s.up)("ui-text-field"),_=(0,s.up)("ui-button"),c=(0,s.up)("ui-form"),p=(0,s.up)("ui-modal");return(0,s.wg)(),(0,s.j4)(p,{title:"방명록 수정",name:this.$options.name,class:"guestbook-modal__wrapper"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{name:"removeGuestbookForm",onOnsubmit:u.onSubmit},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"id",value:o.guestbook.id},null,8,["value"]),(0,s.Wm)(d,{name:"cont",id:"updateGuestbookCont",clazz:["guestbook__textarea"],title:"방명록 내용 입력",placeholder:"하고싶은 말을 남겨주세요.",cols:"30",rows:"4",resize:"vertical",rules:"required|max:1000",value:n.replacedCont},null,8,["placeholder","value"]),(0,s._)("div",xe,[(0,s._)("div",Ce,[Ge,(0,s.Wm)(r,{name:"author",id:"updateGuestbookAuthor",clazz:["guestbook__input"],rules:"required|max:20",readonly:"Y"===o.guestbook.adminYn,value:o.guestbook.author},null,8,["readonly","value"])]),(0,s._)("div",Re,[De,(0,s.Wm)(r,{type:"password",name:"authorPw",id:"updateGuestbookPw",clazz:["guestbook__input"],rules:"required|min:8|max:15"})]),(0,s._)("div",Ee,[(0,s.Wm)(_,{type:"submit",color:"primary",text:"저장",class:(0,i.C_)("guestbook__btn guestbook__btn--write")})])])])),_:1},8,["onOnsubmit"])])),_:1},8,["name"])}var We={name:"AppUpdateGuestbookModal",props:{guestbook:Object},data(){return{replacedCont:""}},created(){this.replacedCont=this.guestbook.cont.replaceAll("<br>","\r\n")},methods:{async onSubmit(e){const t=await $.wW.confirmSuccess("저장하시겠습니까?");t&&this.$http.put("/guestbook",e).then((e=>{$.wW.toastSuccess("저장되었습니다."),this.$modal.hide(this.$options.name),this.$store.dispatch("Guestbook/FETCH_UPDATED_GUESTBOOK",e.data)}))}}};const Me=(0,T.Z)(We,[["render",$e],["__scopeId","data-v-438ccb52"]]);var Se=Me;const Le={class:"guestbook__write__input-box no-width"},ze={class:"guestbook__write__btns"};function Ye(e,t,o,a,n,u){const l=(0,s.up)("ui-hidden-field"),d=(0,s.up)("ui-text-field"),r=(0,s.up)("ui-button"),_=(0,s.up)("ui-form"),c=(0,s.up)("ui-modal");return(0,s.wg)(),(0,s.j4)(c,{title:"방명록 삭제",name:this.$options.name,class:"guestbook-modal__wrapper"},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{name:"removeGuestbookForm",onOnsubmit:u.onSubmit},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"id",value:o.id},null,8,["value"]),(0,s._)("div",Le,[(0,s.Wm)(d,{type:"password",name:"authorPw",id:"removeGuestbookPw",clazz:["guestbook__input"],title:e.isLogin?"관리자는 비밀번호 입력 없이 삭제":"비밀번호 입력",placeholder:"비밀번호 입력",disabled:e.isLogin,rules:e.isLogin?"":"required|min:8|max:15"},null,8,["title","disabled","rules"]),(0,s._)("div",ze,[(0,s.Wm)(r,{type:"submit",color:"primary",text:"삭제",class:(0,i.C_)("guestbook__btn guestbook__btn--write")})])])])),_:1},8,["onOnsubmit"])])),_:1},8,["name"])}var Ae={name:"AppRemoveGuestbookModal",props:{id:String},methods:{async onSubmit(e){const t=await $.wW.confirmSuccess("삭제하시겠습니까?");t&&this.$http.post("/guestbook/remove",e).then((t=>{$.wW.toastSuccess("삭제되었습니다."),this.$modal.hide(this.$options.name),this.$store.dispatch("Guestbook/FETCH_REMOVED_GUESTBOOK",e)}))}}};const Oe=(0,T.Z)(Ae,[["render",Ye],["__scopeId","data-v-6fed822b"]]);var Ie=Oe,Te={name:"AppGuestbook",components:{AppAddGuestbookReply:H,AppGuestbookReplyList:ye},data(){return{page:1,pageSize:6,listCnt:0,guestbookList:[],activeIndex:-1,replyActiveIndex:-1,isScrolled:!1,isLastPage:!1,adminNickName:""}},async created(){this.$store.dispatch("Breadcrumb/FETCH_PAGE_TITLE","방명록"),await this.setCode(),await this.listGuestbook()},mounted(){window.addEventListener("scroll",this.onScroll),window.document.addEventListener("click",this.closeMenu)},unmounted(){window.removeEventListener("scroll",this.onScroll),window.document.removeEventListener("click",this.closeMenu)},watch:{"$store.state.Guestbook.updatedGuestbook"(e){if(0<Object.values(e).length){const{id:t,author:o,cont:s,modDate:i}=e,a=this.guestbookList.find((e=>e.id==t));a.author=o,a.cont=s,a.cont=this.setData(a).cont,a.modDate=this.$moment(i).format("YYYY-MM-DD HH:mm:ss"),this.$store.dispatch("Guestbook/FETCH_UPDATED_GUESTBOOK",{})}},"$store.state.Guestbook.removedGuestbook"(e){if(0<Object.values(e).length){const{id:t}=e,o=this.guestbookList.findIndex((e=>e.id==t));this.guestbookList.splice(o,1),this.$store.dispatch("Guestbook/FETCH_REMOVED_GUESTBOOK",{})}}},methods:{listGuestbook(){let e={page:this.page,pageSize:this.pageSize};return this.$http.get("/guestbook",{params:e}).then((e=>{0!==e.data[0].length?(e.data[0].forEach((e=>{const t=this.setData(e);this.guestbookList.push(t),e.guestbookReply.forEach((e=>{this.setData(e)}))})),this.listCnt=e.data[1],this.listCnt===this.guestbookList.length&&(this.isLastPage=!0),this.isScrolled=!1):this.isScrolled=!1}))},toggleMenu(e){e!==this.activeIndex?this.activeIndex=e:this.activeIndex=-1},closeMenu(e){(0,$.UE)(this.$refs["guestbookMenuBtn"])&&!this.$refs["guestbookMenuBtn"].includes(e.target)&&(this.activeIndex=-1)},onScroll(){const{scrollY:e}=window,{clientHeight:t,scrollHeight:o}=window.document.documentElement,s=t+e+100>=o;if(s&&!this.isScrolled){if(this.isLastPage)return;setTimeout((()=>{this.isScrolled=!0,this.page++,this.listGuestbook()}),100)}},openModal(e,t,o){o||"Y"!==t.adminYn?"E01003"===e?this.$modal.show({component:Se,bind:{guestbook:t}}):"E01004"===e&&this.$modal.show({component:Ie,bind:{id:t.id}}):$.wW.toastError("수정/삭제 권한이 없습니다.")},toggleReplyList(e){e!==this.replyActiveIndex?this.replyActiveIndex=e:this.replyActiveIndex=-1},async onSubmit(e){const t=await $.wW.confirmSuccess("저장하시겠습니까?");t&&this.$http.post("/guestbook",e).then((e=>{const t={...e.data};t.regDate=this.$moment(t.regDate).format("YYYY-MM-DD HH:mm:ss"),t.guestbookReply=[],this.guestbookList.push(t),this.guestbookList=this.guestbookList.sort(((e,t)=>t.id-e.id)),$.wW.toastSuccess("저장되었습니다.")}))},onAddReply(e){this.guestbookList.forEach((t=>{if(t.id===e.parentId){const o=this.setData(e);t.guestbookReply.push(o)}}))},onUpdateReply(e){e.cont=this.setData(e).cont},setData(e){return e.cont=e.cont.replace(/\r\n|\n/g,"<br>"),e.cont=e.cont.replaceAll("\\r\\n","<br>"),e.regDate=this.$moment(e.regDate).format("YYYY-MM-DD HH:mm:ss"),(0,$.UE)(e.modDate)&&(e.modDate=this.$moment(e.modDate).format("YYYY-MM-DD HH:mm:ss")),e},async setCode(){this.adminNickName=this.$store.state.Guestbook.code.find((e=>"F01001"===e.id))?.nm}}};const Ue=(0,T.Z)(Te,[["render",E],["__scopeId","data-v-d9243542"]]);var He=Ue}}]);