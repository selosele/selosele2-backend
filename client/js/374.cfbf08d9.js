"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[374],{9374:function(e,t,o){o.r(t),o.d(t,{default:function(){return Xe}});var s=o(3396),i=o(7139),n=o(9242);const a=e=>((0,s.dD)("data-v-93659526"),e=e(),(0,s.Cn)(),e),l={class:"guestbook__wrapper"},u={class:"guestbook__write"},r={class:"guestbook__write__inputs"},d={class:"guestbook__write__input-box"},p=a((()=>(0,s._)("label",{for:"addGuestbookAuthor",class:"pt--5"},"닉네임",-1))),c={class:"guestbook__write__input-box"},m=a((()=>(0,s._)("label",{for:"addGuestbookPw",class:"pt--5"},"비밀번호",-1))),b={class:"guestbook__write__btns d-flex-w gap--10"},_=(0,s.Uk)("다시작성 "),g=(0,s.Uk)("저장 "),k={class:"guestbook__depth1"},h=["id"],y=["innerHTML"],w={class:"guestbook__cont__info depth1"},f={class:"guestbook__author"},v=a((()=>(0,s._)("strong",null,[(0,s._)("i",{class:"xi-user-o","aria-hidden":"true"}),(0,s.Uk)(" 글쓴이 : ")],-1))),x={class:"guestbook__reg-date"},D=a((()=>(0,s._)("strong",null,[(0,s._)("i",{class:"xi-time-o","aria-hidden":"true"}),(0,s.Uk)(" 등록일 : ")],-1))),R={key:0,class:"guestbook__mod-date"},$=a((()=>(0,s._)("strong",null,[(0,s._)("i",{class:"xi-time-o","aria-hidden":"true"}),(0,s.Uk)(" 수정일 : ")],-1))),G={class:"reply-cnt"},E={class:"guestbook__toggle"},C={key:0,class:"guestbook__toggle-list"},W=["onClick"],S=a((()=>(0,s._)("i",{class:"xi-pen-o","aria-hidden":"true"},null,-1))),M=(0,s.Uk)(" 방명록 수정 "),L=[S,M],U=["onClick"],Y=a((()=>(0,s._)("i",{class:"xi-trash-o","aria-hidden":"true"},null,-1))),O=(0,s.Uk)(" 방명록 삭제 "),I=[Y,O];function T(e,t,o,a,S,M){const Y=(0,s.up)("ui-textarea"),O=(0,s.up)("ui-text-field"),T=(0,s.up)("ui-button"),A=(0,s.up)("ui-form"),z=(0,s.up)("ui-icon-button"),P=(0,s.up)("app-guestbook-reply-list"),H=(0,s.up)("app-add-guestbook-reply"),q=(0,s.up)("app-content-wrapper");return(0,s.wg)(),(0,s.j4)(q,{pageTitle:S.pageTitle},{default:(0,s.w5)((()=>[(0,s._)("div",l,[(0,s.Wm)(A,{class:(0,i.C_)("guestbook__write-frm"),name:"addGuestbookForm",onOnsubmit:M.onSubmit},{default:(0,s.w5)((()=>[(0,s._)("div",u,[(0,s.Wm)(Y,{name:"cont",id:"addGuestbookCont",clazz:["guestbook__textarea"],title:"방명록 내용 입력",placeholder:"하고싶은 말을 남겨주세요.",cols:"30",rows:"4",rules:"required|max:1000"},null,8,["placeholder"]),(0,s._)("div",r,[(0,s._)("div",d,[p,(0,s.Wm)(O,{type:"text",name:"author",id:"addGuestbookAuthor",clazz:["guestbook__input"],rules:"required|max:20",readonly:e.isLogin,value:e.isLogin?"관리자":""},null,8,["readonly","value"])]),(0,s._)("div",c,[m,(0,s.Wm)(O,{type:"password",name:"authorPw",id:"addGuestbookPw",clazz:["guestbook__input"],rules:"required|min:8|max:15"})]),(0,s._)("div",b,[(0,s.Wm)(T,{type:"reset",color:"secondary",class:(0,i.C_)("guestbook__btn guestbook__btn--reset")},{default:(0,s.w5)((()=>[_])),_:1}),(0,s.Wm)(T,{type:"submit",color:"primary",class:(0,i.C_)("guestbook__btn guestbook__btn--write")},{default:(0,s.w5)((()=>[g])),_:1})])])])])),_:1},8,["onOnsubmit"]),(0,s._)("ul",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(S.guestbookList,((t,o)=>((0,s.wg)(),(0,s.iD)("li",{class:"guestbook__depth1__list",id:`guestbook${t.id}`,key:t},[(0,s._)("p",{class:"guestbook__cont",innerHTML:t.cont},null,8,y),(0,s._)("div",w,[(0,s._)("span",f,[v,(0,s._)("span",{class:(0,i.C_)({"font--bold":"Y"===t.adminYn})},(0,i.zw)(t.author),3)]),(0,s._)("span",x,[D,(0,s.Uk)(" "+(0,i.zw)(t.regDate),1)]),t.modDate?((0,s.wg)(),(0,s.iD)("span",R,[$,(0,s.Uk)(" "+(0,i.zw)(t.modDate),1)])):(0,s.kq)("",!0)]),0<t.guestbookReply.length?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s.Wm)(z,{type:"button",icon:"xi-message",class:(0,i.C_)("guestbook__btn guestbook__btn--reply-open"),title:`댓글 ${t.guestbookReply.length}개 펼쳐보기`,onClick:e=>M.toggleReplyList(o)},{default:(0,s.w5)((()=>[(0,s._)("span",G,(0,i.zw)(99<t.guestbookReply.length?"99+":t.guestbookReply.length),1)])),_:2},1032,["title","onClick"]),o===S.replyActiveIndex?((0,s.wg)(),(0,s.j4)(P,{key:t.guestbookReply,list:t.guestbookReply,parentId:t.id,onUpdateReply:M.onUpdateReply},null,8,["list","parentId","onUpdateReply"])):(0,s.kq)("",!0)],64)):(0,s.kq)("",!0),(0,s.Wm)(H,{idx:o,parentId:t.id,onAddReply:M.onAddReply},null,8,["idx","parentId","onAddReply"]),(0,s._)("div",E,[(0,s.Wm)(z,{type:"button",icon:"xi-cog",text:"방명록 수정/삭제",title:"방명록 수정/삭제",class:(0,i.C_)("guestbook__btn--toggle"),onClick:(0,n.iM)((e=>M.toggleMenu(o)),["stop"])},null,8,["onClick"]),o===S.activeIndex?((0,s.wg)(),(0,s.iD)("div",C,[(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("button",{type:"button",class:"guestbook__btn--edit1",ref_for:!0,ref:"guestbookMenuBtn",onClick:o=>M.openModal("E01003",t,e.isLogin)},L,8,W)]),(0,s._)("li",null,[(0,s._)("button",{type:"button",class:"guestbook__btn--delete1",ref_for:!0,ref:"guestbookMenuBtn",onClick:o=>M.openModal("E01004",t,e.isLogin)},I,8,U)])])])):(0,s.kq)("",!0)])],8,h)))),128))])])])),_:1},8,["pageTitle"])}var A=o(8822),z=o(6597);const P={class:"guestbook__reply__wrapper"},H={class:"guestbook__reply__btns"},q={class:"guestbook__reply__btns-inner"},B=["for"],F=["for"],j=(0,s.Uk)("저장 ");function K(e,t,o,n,a,l){const u=(0,s.up)("ui-hidden-field"),r=(0,s.up)("ui-textarea"),d=(0,s.up)("ui-text-field"),p=(0,s.up)("ui-button"),c=(0,s.up)("ui-form");return(0,s.wg)(),(0,s.iD)("div",P,[(0,s.Wm)(c,{name:`guestbookReplyForm${o.idx}`,onOnsubmit:l.onSubmit},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{name:"parentId",value:o.parentId},null,8,["value"]),(0,s.Wm)(r,{name:"cont",id:`guestbookReplyCont${o.idx}`,clazz:["guestbook__reply__cont","guestbook__textarea"],title:"댓글 입력",placeholder:"댓글을 남겨주세요.",cols:"30",rows:"3",rules:"required|max:1000"},null,8,["id","placeholder"]),(0,s._)("div",H,[(0,s._)("div",q,[(0,s._)("label",{for:`guestbookReplyAuthor${o.idx}`,class:"pt--5"},"닉네임",8,B),(0,s.Wm)(d,{type:"text",name:"author",id:`guestbookReplyAuthor${o.idx}`,clazz:["guestbook__input"],rules:"required|max:20",readonly:e.isLogin,value:e.isLogin?"관리자":""},null,8,["id","readonly","value"]),(0,s._)("label",{for:`guestbookReplyPw${o.idx}`,class:"pt--5"},"비밀번호",8,F),(0,s.Wm)(d,{type:"password",name:"authorPw",id:`guestbookReplyPw${o.idx}`,clazz:["guestbook__input"],rules:"required|min:8|max:15"},null,8,["id"])]),(0,s.Wm)(p,{type:"submit",color:"primary",class:(0,i.C_)("guestbook__btn guestbook__btn--reply-write")},{default:(0,s.w5)((()=>[j])),_:1})])])),_:1},8,["name","onOnsubmit"])])}var Z={name:"app-add-guestbook-reply",props:{idx:Number,parentId:Number},methods:{async onSubmit(e){const t=await A.wW.confirmSuccess("저장하시겠습니까?");t&&this.$http.post("/guestbookreply",e).then((e=>{A.wW.toastSuccess("저장되었습니다."),this.$emit("addReply",e.data)}))}}},V=o(89);const N=(0,V.Z)(Z,[["render",K],["__scopeId","data-v-8321ccd6"]]);var J=N;const Q=e=>((0,s.dD)("data-v-a0b9e834"),e=e(),(0,s.Cn)(),e),X={class:"guestbook__depth2__wrapper"},ee={class:"guestbook__depth2__list"},te=["innerHTML"],oe={class:"guestbook__cont__info depth2"},se={class:"guestbook__author"},ie=Q((()=>(0,s._)("strong",null,[(0,s._)("i",{class:"xi-user-o","aria-hidden":"true"}),(0,s.Uk)(" 글쓴이 : ")],-1))),ne={class:"guestbook__reg-date"},ae=Q((()=>(0,s._)("strong",null,[(0,s._)("i",{class:"xi-time-o","aria-hidden":"true"}),(0,s.Uk)(" 등록일 : ")],-1))),le={key:0,class:"guestbook__mod-date"},ue=Q((()=>(0,s._)("strong",null,[(0,s._)("i",{class:"xi-time-o","aria-hidden":"true"}),(0,s.Uk)(" 수정일 : ")],-1))),re={class:"guestbook__reply__toggle"},de={key:0,class:"guestbook__reply__toggle-list"},pe=["onClick"],ce=Q((()=>(0,s._)("i",{class:"xi-pen-o","aria-hidden":"true"},null,-1))),me=(0,s.Uk)(" 댓글 수정 "),be=[ce,me],_e=["onClick"],ge=Q((()=>(0,s._)("i",{class:"xi-trash-o","aria-hidden":"true"},null,-1))),ke=(0,s.Uk)(" 댓글 삭제 "),he=[ge,ke];function ye(e,t,o,a,l,u){const r=(0,s.up)("ui-icon-button");return(0,s.wg)(),(0,s.iD)("div",X,[(0,s._)("ul",ee,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.list.slice(0,l.pageSize),((t,o)=>((0,s.wg)(),(0,s.iD)("li",{class:"guestbook__depth2__item",key:o},[(0,s._)("p",{class:"guestbook__reply__cont",innerHTML:t.cont},null,8,te),(0,s._)("div",oe,[(0,s._)("span",se,[ie,(0,s._)("span",{class:(0,i.C_)({"font--bold":"Y"===t.adminYn})},(0,i.zw)(t.author),3)]),(0,s._)("span",ne,[ae,(0,s.Uk)(" "+(0,i.zw)(t.regDate),1)]),t.modDate?((0,s.wg)(),(0,s.iD)("span",le,[ue,(0,s.Uk)(" "+(0,i.zw)(t.modDate),1)])):(0,s.kq)("",!0)]),(0,s._)("div",re,[(0,s.Wm)(r,{type:"button",icon:"xi-cog",text:"방명록 댓글 수정/삭제",title:"방명록 댓글 수정/삭제",class:(0,i.C_)("guestbook__reply__btn--toggle"),onClick:(0,n.iM)((e=>u.toggleMenu(o)),["stop"])},null,8,["onClick"]),o===l.activeIndex?((0,s.wg)(),(0,s.iD)("div",de,[(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("button",{type:"button",class:"guestbook__btn--edit2",ref_for:!0,ref:"guestbookMenuBtn",onClick:o=>u.openModal("E01003",t,e.isLogin)},be,8,pe)]),(0,s._)("li",null,[(0,s._)("button",{type:"button",class:"guestbook__btn--delete2",ref_for:!0,ref:"guestbookMenuBtn",onClick:o=>u.openModal("E01004",t,e.isLogin)},he,8,_e)])])])):(0,s.kq)("",!0)])])))),128))]),o.list.length>l.pageSize?((0,s.wg)(),(0,s.j4)(r,{key:0,type:"button",icon:"xi-ellipsis-h",text:"댓글 더보기",class:(0,i.C_)("guestbook__reply-more"),onClick:u.more},null,8,["onClick"])):(0,s.kq)("",!0)])}const we={class:"d-flex-w gap--15 mt--20"},fe=(0,s._)("label",{for:"updateGuestbookReplyAuthor",class:"pt--5"},"닉네임",-1),ve=(0,s._)("label",{for:"updateGuestbookReplyPw",class:"pt--5"},"비밀번호",-1),xe=(0,s.Uk)("저장 ");function De(e,t,o,i,n,a){const l=(0,s.up)("ui-hidden-field"),u=(0,s.up)("ui-textarea"),r=(0,s.up)("ui-text-field"),d=(0,s.up)("ui-button"),p=(0,s.up)("ui-form"),c=(0,s.up)("ui-modal");return(0,s.wg)(),(0,s.j4)(c,{title:"방명록 댓글 수정",name:this.$options.name},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{name:"removeGuestbookReplyForm",onOnsubmit:a.onSubmit},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"id",value:o.guestbookReply.id},null,8,["value"]),(0,s.Wm)(u,{name:"cont",id:"updateGuestbookReplyCont",title:"방명록 내용 입력",placeholder:"하고싶은 말을 남겨주세요.",cols:"30",rows:"4",resize:"vertical",rules:"required|max:1000",value:n.replacedCont},null,8,["placeholder","value"]),(0,s._)("div",we,[fe,(0,s.Wm)(r,{type:"text",name:"author",id:"updateGuestbookReplyAuthor",rules:"required|max:20",readonly:"Y"===o.guestbookReply.adminYn,value:o.guestbookReply.author},null,8,["readonly","value"]),ve,(0,s.Wm)(r,{type:"password",name:"authorPw",id:"updateGuestbookReplyPw",rules:"required|min:8|max:15"}),(0,s.Wm)(d,{type:"submit",color:"primary"},{default:(0,s.w5)((()=>[xe])),_:1})])])),_:1},8,["onOnsubmit"])])),_:1},8,["name"])}var Re={name:"app-update-guestbook-reply-modal",props:{guestbookReply:Object},data(){return{replacedCont:""}},created(){this.replacedCont=this.guestbookReply.cont.replaceAll("<br>","\r\n")},methods:{async onSubmit(e){const t=await A.wW.confirmSuccess("저장하시겠습니까?");t&&this.$http.put("/guestbookreply",e).then((e=>{A.wW.toastSuccess("저장되었습니다."),this.$modal.hide(this.$options.name),this.$store.dispatch("Guestbook/FETCH_UPDATED_GUESTBOOK_REPLY",e.data)}))}}};const $e=(0,V.Z)(Re,[["render",De]]);var Ge=$e;const Ee={class:"d-flex-w gap--10"},Ce=(0,s.Uk)("삭제 ");function We(e,t,o,i,n,a){const l=(0,s.up)("ui-hidden-field"),u=(0,s.up)("ui-text-field"),r=(0,s.up)("ui-button"),d=(0,s.up)("ui-form"),p=(0,s.up)("ui-modal");return(0,s.wg)(),(0,s.j4)(p,{title:"방명록 댓글 삭제",name:this.$options.name},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{name:"removeGuestbookReplyForm",onOnsubmit:a.onSubmit},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"id",value:o.id},null,8,["value"]),(0,s._)("div",Ee,[(0,s.Wm)(u,{type:"password",name:"authorPw",id:"removeGuestbookReplyPw",title:"비밀번호 입력",placeholder:"비밀번호 입력",disabled:e.isLogin,rules:e.isLogin?"":"required|min:8|max:15"},null,8,["disabled","rules"]),(0,s.Wm)(r,{type:"submit",color:"primary"},{default:(0,s.w5)((()=>[Ce])),_:1})])])),_:1},8,["onOnsubmit"])])),_:1},8,["name"])}var Se={name:"app-remove-guestbook-reply-modal",props:{id:String},methods:{async onSubmit(e){const t=await A.wW.confirmSuccess("삭제하시겠습니까?");t&&this.$http.post("/guestbookreply/remove",e).then((t=>{A.wW.toastSuccess("삭제되었습니다."),this.$modal.hide(this.$options.name),this.$store.dispatch("Guestbook/FETCH_REMOVED_GUESTBOOK_REPLY",e)}))}}};const Me=(0,V.Z)(Se,[["render",We]]);var Le=Me,Ue={name:"app-guestbook-reply-list",components:{AppUpdateGuestbookReplyModal:Ge,AppRemoveGuestbookReplyModal:Le},props:{list:Array,parentId:Number},watch:{"$store.state.Guestbook.updatedGuestbookReply"(e){if(0<Object.values(e).length){const{id:t,author:o,cont:s,modDate:i}=e,n=this.list.find((e=>e.id==t));n.author=o,n.cont=s,n.modDate=this.$moment(i).format("YYYY-MM-DD HH:mm:ss"),this.$store.dispatch("Guestbook/FETCH_UPDATED_GUESTBOOK_REPLY",{}),this.$emit("updateReply",n)}},"$store.state.Guestbook.removedGuestbookReply"(e){if(0<Object.values(e).length){const{id:t}=e,o=this.list.findIndex((e=>e.id==t)),s=this.list;s.splice(o,1),this.$store.dispatch("Guestbook/FETCH_REMOVED_GUESTBOOK_REPLY",{})}}},data(){return{pageSize:3,activeIndex:-1}},mounted(){document.addEventListener("click",this.closeMenu)},unmounted(){document.removeEventListener("click",this.closeMenu)},methods:{more(){this.pageSize+=3},toggleMenu(e){e!==this.activeIndex?this.activeIndex=e:this.activeIndex=-1},closeMenu(e){(0,A.UE)(this.$refs["guestbookMenuBtn"])&&!this.$refs["guestbookMenuBtn"].includes(e.target)&&(this.activeIndex=-1)},openModal(e,t,o){o||"Y"!==t.adminYn?"E01003"===e?this.$modal.show({component:Ge,bind:{guestbookReply:t}}):"E01004"===e&&this.$modal.show({component:Le,bind:{id:t.id}}):A.wW.toastError("수정/삭제 권한이 없습니다.")}}};const Ye=(0,V.Z)(Ue,[["render",ye],["__scopeId","data-v-a0b9e834"]]);var Oe=Ye;const Ie={class:"d-flex-w gap--15 mt--20"},Te=(0,s._)("label",{for:"updateGuestbookAuthor",class:"pt--5"},"닉네임",-1),Ae=(0,s._)("label",{for:"updateGuestbookPw",class:"pt--5"},"비밀번호",-1),ze=(0,s.Uk)("저장 ");function Pe(e,t,o,i,n,a){const l=(0,s.up)("ui-hidden-field"),u=(0,s.up)("ui-textarea"),r=(0,s.up)("ui-text-field"),d=(0,s.up)("ui-button"),p=(0,s.up)("ui-form"),c=(0,s.up)("ui-modal");return(0,s.wg)(),(0,s.j4)(c,{title:"방명록 수정",name:this.$options.name},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{name:"removeGuestbookForm",onOnsubmit:a.onSubmit},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"id",value:o.guestbook.id},null,8,["value"]),(0,s.Wm)(u,{name:"cont",id:"updateGuestbookCont",title:"방명록 내용 입력",placeholder:"하고싶은 말을 남겨주세요.",cols:"30",rows:"4",resize:"vertical",rules:"required|max:1000",value:n.replacedCont},null,8,["placeholder","value"]),(0,s._)("div",Ie,[Te,(0,s.Wm)(r,{type:"text",name:"author",id:"updateGuestbookAuthor",rules:"required|max:20",readonly:"Y"===o.guestbook.adminYn,value:o.guestbook.author},null,8,["readonly","value"]),Ae,(0,s.Wm)(r,{type:"password",name:"authorPw",id:"updateGuestbookPw",rules:"required|min:8|max:15"}),(0,s.Wm)(d,{type:"submit",color:"primary"},{default:(0,s.w5)((()=>[ze])),_:1})])])),_:1},8,["onOnsubmit"])])),_:1},8,["name"])}var He={name:"app-update-guestbook-modal",props:{guestbook:Object},data(){return{replacedCont:""}},created(){this.replacedCont=this.guestbook.cont.replaceAll("<br>","\r\n")},methods:{async onSubmit(e){const t=await A.wW.confirmSuccess("저장하시겠습니까?");t&&this.$http.put("/guestbook",e).then((e=>{A.wW.toastSuccess("저장되었습니다."),this.$modal.hide(this.$options.name),this.$store.dispatch("Guestbook/FETCH_UPDATED_GUESTBOOK",e.data)}))}}};const qe=(0,V.Z)(He,[["render",Pe]]);var Be=qe;const Fe={class:"d-flex-w gap--10"},je=(0,s.Uk)("삭제 ");function Ke(e,t,o,i,n,a){const l=(0,s.up)("ui-hidden-field"),u=(0,s.up)("ui-text-field"),r=(0,s.up)("ui-button"),d=(0,s.up)("ui-form"),p=(0,s.up)("ui-modal");return(0,s.wg)(),(0,s.j4)(p,{title:"방명록 삭제",name:this.$options.name},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{name:"removeGuestbookForm",onOnsubmit:a.onSubmit},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"id",value:o.id},null,8,["value"]),(0,s._)("div",Fe,[(0,s.Wm)(u,{type:"password",name:"authorPw",id:"removeGuestbookPw",title:"비밀번호 입력",placeholder:"비밀번호 입력",disabled:e.isLogin,rules:e.isLogin?"":"required|min:8|max:15"},null,8,["disabled","rules"]),(0,s.Wm)(r,{type:"submit",color:"primary"},{default:(0,s.w5)((()=>[je])),_:1})])])),_:1},8,["onOnsubmit"])])),_:1},8,["name"])}var Ze={name:"app-remove-guestbook-modal",props:{id:String},methods:{async onSubmit(e){const t=await A.wW.confirmSuccess("삭제하시겠습니까?");t&&this.$http.post("/guestbook/remove",e).then((t=>{A.wW.toastSuccess("삭제되었습니다."),this.$modal.hide(this.$options.name),this.$store.dispatch("Guestbook/FETCH_REMOVED_GUESTBOOK",e)}))}}};const Ve=(0,V.Z)(Ze,[["render",Ke]]);var Ne=Ve,Je={name:"app-guestbook",components:{AppAddGuestbookReply:J,AppGuestbookReplyList:Oe},data(){return{pageTitle:"방명록",page:1,pageSize:6,listCnt:0,guestbookList:[],activeIndex:-1,replyActiveIndex:-1,isScrolled:!1,isLastPage:!1}},async created(){(new z.p).setPageTitle(this.pageTitle),await this.listGuestbook()},mounted(){window.addEventListener("scroll",this.onScroll),document.addEventListener("click",this.closeMenu)},unmounted(){window.removeEventListener("scroll",this.onScroll),document.removeEventListener("click",this.closeMenu)},watch:{"$store.state.Guestbook.updatedGuestbook"(e){if(0<Object.values(e).length){const{id:t,author:o,cont:s,modDate:i}=e,n=this.guestbookList.find((e=>e.id==t));n.author=o,n.cont=s,n.cont=this.setData(n).cont,n.modDate=this.$moment(i).format("YYYY-MM-DD HH:mm:ss"),this.$store.dispatch("Guestbook/FETCH_UPDATED_GUESTBOOK",{})}},"$store.state.Guestbook.removedGuestbook"(e){if(0<Object.values(e).length){const{id:t}=e,o=this.guestbookList.findIndex((e=>e.id==t));this.guestbookList.splice(o,1),this.$store.dispatch("Guestbook/FETCH_REMOVED_GUESTBOOK",{})}}},methods:{listGuestbook(){let e={page:this.page,pageSize:this.pageSize};return this.$http.get("/guestbook",{params:e}).then((e=>{0!==e.data[0].length?(e.data[0].map((e=>{const t=this.setData(e);this.guestbookList.push(t),e.guestbookReply.map((e=>{this.setData(e)}))})),this.listCnt=e.data[1],this.listCnt===this.guestbookList.length&&(this.isLastPage=!0),this.isScrolled=!1):this.isScrolled=!1}))},toggleMenu(e){e!==this.activeIndex?this.activeIndex=e:this.activeIndex=-1},closeMenu(e){(0,A.UE)(this.$refs["guestbookMenuBtn"])&&!this.$refs["guestbookMenuBtn"].includes(e.target)&&(this.activeIndex=-1)},onScroll(){const{scrollY:e}=window,{clientHeight:t,scrollHeight:o}=document.documentElement,s=t+e+100>=o;if(s&&!this.isScrolled){if(this.isLastPage)return;setTimeout((()=>{this.isScrolled=!0,this.page++,this.listGuestbook()}),100)}},openModal(e,t,o){o||"Y"!==t.adminYn?"E01003"===e?this.$modal.show({component:Be,bind:{guestbook:t}}):"E01004"===e&&this.$modal.show({component:Ne,bind:{id:t.id}}):A.wW.toastError("수정/삭제 권한이 없습니다.")},toggleReplyList(e){e!==this.replyActiveIndex?this.replyActiveIndex=e:this.replyActiveIndex=-1},async onSubmit(e){const t=await A.wW.confirmSuccess("저장하시겠습니까?");t&&this.$http.post("/guestbook",e).then((e=>{const t={...e.data};t.regDate=this.$moment(t.regDate).format("YYYY-MM-DD HH:mm:ss"),t.guestbookReply=[],this.guestbookList.push(t),this.guestbookList=this.guestbookList.sort(((e,t)=>t.id-e.id)),A.wW.toastSuccess("저장되었습니다.")}))},async onAddReply(e){this.guestbookList=this.guestbookList.map((t=>{if(t.id===e.parentId){const o=this.setData(e);t.guestbookReply.push(o)}return t}))},onUpdateReply(e){e.cont=this.setData(e).cont},setData(e){return e.cont=e.cont.replace(/\r\n|\n/g,"<br>"),e.cont=e.cont.replaceAll("\\r\\n","<br>"),e.regDate=this.$moment(e.regDate).format("YYYY-MM-DD HH:mm:ss"),(0,A.UE)(e.modDate)&&(e.modDate=this.$moment(e.modDate).format("YYYY-MM-DD HH:mm:ss")),e}}};const Qe=(0,V.Z)(Je,[["render",T],["__scopeId","data-v-93659526"]]);var Xe=Qe}}]);
//# sourceMappingURL=374.cfbf08d9.js.map