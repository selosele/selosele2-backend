"use strict";(self["webpackChunkselosele2"]=self["webpackChunkselosele2"]||[]).push([[288],{8288:function(t,e,s){s.r(e),s.d(e,{default:function(){return Zt}});var o=s(3396),i=s(7139);const l=t=>((0,o.dD)("data-v-2c562920"),t=t(),(0,o.Cn)(),t),n={class:"post-view__wrapper"},a=["innerHTML"],p={key:0,class:"post__contents__like-wrapper"},r={class:"post__contents__like-cnt"},_={class:"post__contents__date-wrapper"},d={class:"post__contents__date post__contents__date--create-at"},u=l((()=>(0,o._)("strong",null,[(0,o._)("i",{class:"xi-time-o","aria-hidden":"true"}),(0,o.Uk)(" 등록일 ")],-1))),c=["datetime"],m={key:1,class:"post__contents__info-wrapper"},y={class:"post__contents__btns"},h={key:2,class:"post__contents__paginations"},w=l((()=>(0,o._)("h2",{class:"sr-only"},"이전/다음 포스트",-1)));function P(t,e,s,l,P,g){const v=(0,o.up)("ui-hidden-field"),k=(0,o.up)("ui-icon-button"),f=(0,o.up)("router-link"),b=(0,o.up)("app-add-post-reply"),L=(0,o.up)("ui-form"),R=(0,o.up)("app-content-wrapper");return(0,o.wg)(),(0,o.j4)(R,null,{default:(0,o.w5)((()=>[(0,o._)("div",n,[P.dataLoaded?((0,o.wg)(),(0,o.j4)(L,{key:0,name:"postForm",onOnsubmit:g.onSubmit},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{name:"id",value:P.post?.id},null,8,["value"]),(0,o._)("div",{class:"post__contents__body line-numbers",innerHTML:P.post?.cont},null,8,a),g.isPostPage?((0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)(k,{icon:P.isPostLiked?"xi-heart":"xi-heart-o",text:"추천수",class:(0,i.C_)("post__contents__like-btn"),title:P.isPostLiked?"포스트 추천 해제하기":"포스트 추천하기",onClick:e[0]||(e[0]=t=>g.savePostLike(P.post?.id))},{default:(0,o.w5)((()=>[(0,o._)("span",r,(0,i.zw)(P.postLikeCnt),1)])),_:1},8,["icon","title"])])):(0,o.kq)("",!0),(0,o._)("div",_,[(0,o._)("span",d,[u,(0,o._)("time",{datetime:P.post?.regDate},(0,i.zw)(P.post?.regDate),9,c)])]),g.isPostPage?((0,o.wg)(),(0,o.iD)("div",m,[0<P.post?.postCategory.length?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:0},(0,o.Ko)(P.post?.postCategory,((t,e)=>((0,o.wg)(),(0,o.j4)(k,{key:e,routerLink:`/category/${t.category.id}`,icon:"xi-folder-open",text:"카테고리",class:(0,i.C_)("post__contents__info post__contents__info--category")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(t.category.nm),1)])),_:2},1032,["routerLink"])))),128)):(0,o.kq)("",!0),0<P.post?.postTag.length?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:1},(0,o.Ko)(P.post?.postTag,((t,e)=>((0,o.wg)(),(0,o.j4)(k,{key:e,routerLink:`/tag/${t.tag.id}`,icon:"xi-tags",text:"태그",class:(0,i.C_)("post__contents__info post__contents__info--tag")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(t.tag.nm),1)])),_:2},1032,["routerLink"])))),128)):(0,o.kq)("",!0)])):(0,o.kq)("",!0),(0,o._)("div",y,[g.isPostPage?((0,o.wg)(),(0,o.j4)(k,{key:0,icon:"xi-backspace",color:"secondary",text:"목록으로",class:(0,i.C_)("post__contents__btn post__contents__btn--list"),onClick:g.goToList},null,8,["onClick"])):(0,o.kq)("",!0),(0,o.Wm)(k,{icon:"xi-link",color:"dark",text:"URL 복사",class:(0,i.C_)("post__contents__btn post__contents__btn--copy"),onClick:g.copyPostUrl},null,8,["onClick"]),(0,o.Wm)(k,{href:`https://twitter.com/intent/tweet?text=${encodeURI(P.post?.title)}%20${encodeURI(P.postUrl)}`,target:"_blank",title:"새창",rel:"noopener noreferrer nofollow",type:"link",color:"twitter",icon:"xi-twitter",text:"트위터 공유",class:(0,i.C_)("post__contents__sns")},null,8,["href"]),(0,o.Wm)(k,{href:`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(P.postUrl)}`,target:"_blank",title:"새창",rel:"noopener noreferrer nofollow",type:"link",color:"facebook",icon:"xi-facebook-official",text:"페이스북 공유",class:(0,i.C_)("post__contents__sns")},null,8,["href"]),t.isLogin?((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(k,{routerLink:g.isPostPage?"/add-post":"/add-content",color:"primary",icon:"xi-pen",class:(0,i.C_)("post__contents__btn")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(g.isPostPage?"포스트":"콘텐츠")+" 작성 ",1)])),_:1},8,["routerLink"]),(0,o.Wm)(k,{routerLink:g.isPostPage?`/edit-post/${P.post?.id}`:`/edit-content${P.post?.link}`,color:"success",icon:"xi-pen",class:(0,i.C_)("post__contents__btn")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(g.isPostPage?"포스트":"콘텐츠")+" 수정 ",1)])),_:1},8,["routerLink"]),(0,o.Wm)(k,{type:"submit",color:"dark",icon:"xi-trash",class:(0,i.C_)("post__contents__btn")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(g.isPostPage?"포스트":"콘텐츠")+" 삭제 ",1)])),_:1})],64)):(0,o.kq)("",!0)]),g.isPostPage?((0,o.wg)(),(0,o.iD)("nav",h,[w,null!==P.prevPost?((0,o.wg)(),(0,o.j4)(f,{key:0,to:`/post/${P.prevPost.id}`,rel:"prev",title:"이전 포스트",class:"post__contents__pagination post__contents__pagination--prev"},{default:(0,o.w5)((()=>[(0,o._)("strong",null,(0,i.zw)(P.prevPost.title),1)])),_:1},8,["to"])):(0,o.kq)("",!0),null!==P.nextPost?((0,o.wg)(),(0,o.j4)(f,{key:1,to:`/post/${P.nextPost.id}`,rel:"next",title:"다음 포스트",class:"post__contents__pagination post__contents__pagination--next"},{default:(0,o.w5)((()=>[(0,o._)("strong",null,(0,i.zw)(P.nextPost.title),1)])),_:1},8,["to"])):(0,o.kq)("",!0)])):(0,o.kq)("",!0),g.isPostPage?((0,o.wg)(),(0,o.j4)(b,{key:3,id:P.post?.id},null,8,["id"])):(0,o.kq)("",!0)])),_:1},8,["onOnsubmit"])):(0,o.kq)("",!0)])])),_:1})}var g=s(8822);const v=t=>((0,o.dD)("data-v-d79d5222"),t=t(),(0,o.Cn)(),t),k={class:"post__reply__wrapper"},f=v((()=>(0,o._)("h2",null,"댓글 남기기",-1))),b={class:"post__reply__write__inputs"},L={class:"post__reply__write__input-box"},R=v((()=>(0,o._)("label",{for:"addPostReplyAuthor",class:"post__reply__write__label"},"닉네임",-1))),x={class:"post__reply__write__input-box"},C=v((()=>(0,o._)("label",{for:"addPostReplyAuthorPw",class:"post__reply__write__label"},"비밀번호",-1))),$={class:"post__reply__write__btns"},D=(0,o.Uk)("저장 "),W={key:0,class:"post__reply__no-data"};function T(t,e,s,l,n,a){const p=(0,o.up)("ui-hidden-field"),r=(0,o.up)("ui-textarea"),_=(0,o.up)("ui-text-field"),d=(0,o.up)("ui-button"),u=(0,o.up)("ui-form"),c=(0,o.up)("app-post-reply-list");return(0,o.wg)(),(0,o.iD)("div",k,[f,(0,o.Wm)(u,{name:"addPostReplyForm",class:(0,i.C_)("post__reply__write-frm"),onOnsubmit:a.onSubmit},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{name:"parentId",id:"addPostReplyParentId",value:s.id},null,8,["value"]),(0,o.Wm)(p,{name:"title",id:"addPostReplyTitle",value:""}),(0,o.Wm)(p,{name:"crudType",id:"addPostReplyCrudType",value:"E01001"}),(0,o.Wm)(r,{name:"cont",id:"addReplyCont",title:"댓글 내용 입력",placeholder:"하고싶은 말을 남겨주세요.",cols:"30",rows:"4",resize:"vertical",rules:"required|max:1000"},null,8,["placeholder"]),(0,o._)("div",b,[(0,o._)("div",L,[R,(0,o.Wm)(_,{type:"text",name:"author",id:"addPostReplyAuthor",clazz:["post__reply__input"],rules:"required|max:20",readonly:t.isLogin,value:t.isLogin?n.adminNickName:""},null,8,["readonly","value"])]),(0,o._)("div",x,[C,(0,o.Wm)(_,{type:"password",name:"authorPw",id:"addPostReplyAuthorPw",clazz:["post__reply__input"],rules:"required|min:8|max:15"})]),(0,o._)("div",$,[(0,o.Wm)(d,{type:"submit",color:"primary",class:(0,i.C_)("post__reply__btn--write")},{default:(0,o.w5)((()=>[D])),_:1})])])])),_:1},8,["onOnsubmit"]),0===n.replyList.length?((0,o.wg)(),(0,o.iD)("p",W," 댓글이 없습니다. 제일 먼저 댓글을 작성해보세요. ")):((0,o.wg)(),(0,o.j4)(c,{key:n.replyList,replyList:n.replyList,onRefreshList:a.listPostReply,onRemoveReply:a.listPostReply,onUpdateReply:a.onUpdateReply},null,8,["replyList","onRefreshList","onRemoveReply","onUpdateReply"]))])}var I=s(9242);const A=t=>((0,o.dD)("data-v-0d5217ec"),t=t(),(0,o.Cn)(),t),E={class:"post__reply__list__wrapper"},Y={class:"d-flex-w flex--between mb--10"},U={class:"post__reply__count"},M=(0,o.Uk)("댓글 "),S=(0,o.Uk)("댓글 관리 "),q={class:"post__reply__depth1"},z=["data-depth","id"],N=["innerHTML"],H={class:"post__reply__info"},O={class:"post__reply__author"},j=A((()=>(0,o._)("i",{class:"xi-user-o","aria-hidden":"true"},null,-1))),F={class:"post__reply__author-to"},B={class:"post__reply__reg-date"},Z=A((()=>(0,o._)("strong",null,[(0,o._)("i",{class:"xi-time-o","aria-hidden":"true"}),(0,o.Uk)(" 등록일 : ")],-1))),G={key:0,class:"post__reply__info-inner"},K={key:1,class:"post__reply__toggle"},V={key:0,class:"post__reply__toggle-list"},J=["onClick"],Q=A((()=>(0,o._)("i",{class:"xi-pen-o","aria-hidden":"true"},null,-1))),X=(0,o.Uk)(" 댓글 수정 "),tt=[Q,X],et=["onClick"],st=A((()=>(0,o._)("i",{class:"xi-trash-o","aria-hidden":"true"},null,-1))),ot=(0,o.Uk)(" 댓글 삭제 "),it=[st,ot];function lt(t,e,s,l,n,a){const p=(0,o.up)("ui-icon-button"),r=(0,o.up)("ui-button"),_=(0,o.up)("app-add-post-reply-depth");return(0,o.wg)(),(0,o.iD)("div",E,[(0,o._)("div",Y,[(0,o._)("div",null,[(0,o._)("strong",U,[M,(0,o._)("span",null,(0,i.zw)(n.realReplyList.length),1)]),(0,o.Wm)(p,{type:"button",color:"primary",icon:"xi-refresh",text:"댓글 목록 새로고침",title:"댓글 목록 새로고침",class:(0,i.C_)("post__reply__btn--refresh"),onClick:a.refreshList},null,8,["onClick"])]),(0,o._)("div",null,[t.isLogin?((0,o.wg)(),(0,o.j4)(r,{key:0,color:"secondary",routerLink:"/admin/post-reply"},{default:(0,o.w5)((()=>[S])),_:1})):(0,o.kq)("",!0)])]),(0,o._)("ul",q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.replyList,((e,s)=>((0,o.wg)(),(0,o.iD)("li",{key:s,"data-depth":e.depth,class:(0,i.C_)({post__reply__list:!0,"post__reply__list--deleted":"Y"===e.delYn,"post__reply__list--admin":"Y"===e.adminYn}),id:`postReply${e.id}`,ref_for:!0,ref:`postReply${e.id}`},[(0,o._)("p",{class:"post__reply__cont",innerHTML:e.cont},null,8,N),(0,o._)("div",H,[(0,o._)("p",O,[j,(0,o._)("span",F,(0,i.zw)(e.author),1)]),(0,o._)("p",B,[Z,(0,o._)("span",null,(0,i.zw)(e.regDate),1)]),"N"===e.delYn&&1===e.depth?((0,o.wg)(),(0,o.iD)("div",G,[(0,o.Wm)(p,{type:"button",color:"secondary",icon:"xi-pen",text:"댓글 남기기",title:"댓글 남기기",class:(0,i.C_)("post__reply__btn--show"),onClick:t=>a.toggleDepth(s)},null,8,["onClick"])])):(0,o.kq)("",!0)]),s===n.depthActiveIndex?((0,o.wg)(),(0,o.j4)(_,{key:e,reply:e,onRefreshList:a.refreshList},null,8,["reply","onRefreshList"])):(0,o.kq)("",!0),"N"===e.delYn?((0,o.wg)(),(0,o.iD)("div",K,[(0,o.Wm)(p,{type:"button",icon:"xi-cog",text:"포스트 댓글 수정/삭제",title:"포스트 댓글 수정/삭제",class:(0,i.C_)("post__reply__btn--toggle"),onClick:(0,I.iM)((t=>a.toggleMenu(s)),["stop"])},null,8,["onClick"]),s===n.menuActiveIndex?((0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("button",{type:"button",class:"post__reply__btn--edit",ref_for:!0,ref:"postReplyMenuBtn",onClick:s=>a.openModal("E01003",e,t.isLogin)},tt,8,J)]),(0,o._)("li",null,[(0,o._)("button",{type:"button",class:"post__reply__btn--delete",ref_for:!0,ref:"postReplyMenuBtn",onClick:s=>a.openModal("E01004",e,t.isLogin)},it,8,et)])])])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)],10,z)))),128))])])}const nt=t=>((0,o.dD)("data-v-e8c0f094"),t=t(),(0,o.Cn)(),t),at={class:"post-reply__write__inputs"},pt={class:"post-reply__write__input-box"},rt=nt((()=>(0,o._)("label",{for:"updatePostReplyAuthor",class:"post-reply__write__label"},"닉네임",-1))),_t={class:"post-reply__write__input-box"},dt=nt((()=>(0,o._)("label",{for:"updatePostReplyPw",class:"post-reply__write__label"},"비밀번호",-1))),ut={class:"post-reply__write__btns"},ct=(0,o.Uk)("수정 ");function mt(t,e,s,l,n,a){const p=(0,o.up)("ui-hidden-field"),r=(0,o.up)("ui-textarea"),_=(0,o.up)("ui-text-field"),d=(0,o.up)("ui-button"),u=(0,o.up)("ui-form"),c=(0,o.up)("ui-modal");return(0,o.wg)(),(0,o.j4)(c,{title:"포스트 댓글 수정",name:this.$options.name,class:"post-reply-modal__wrapper"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{name:"updatePostReplyForm",onOnsubmit:a.onSubmit},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{name:"id",id:"updatePostReplyId",value:s.reply.id},null,8,["value"]),(0,o.Wm)(p,{name:"parentId",id:"updatePostReplyParentId",value:s.reply.parentId},null,8,["value"]),(0,o.Wm)(p,{name:"crudType",id:"updatePostReplyCrudType",value:"E01003"}),(0,o.Wm)(r,{name:"cont",id:"updatePostReplyCont",title:"포스트 내용 입력",placeholder:"하고싶은 말을 남겨주세요.",cols:"30",rows:"4",resize:"vertical",rules:"required",value:n.replacedCont},null,8,["placeholder","value"]),(0,o._)("div",at,[(0,o._)("div",pt,[rt,(0,o.Wm)(_,{type:"text",name:"author",id:"updatePostReplyAuthor",clazz:["post-reply__input"],rules:"required|max:20",readonly:"Y"===s.reply.adminYn,value:s.reply.author},null,8,["readonly","value"])]),(0,o._)("div",_t,[dt,(0,o.Wm)(_,{type:"password",name:"authorPw",id:"updatePostReplyPw",clazz:["post-reply__input"],rules:"required|min:8|max:15"})]),(0,o._)("div",ut,[(0,o.Wm)(d,{type:"submit",color:"primary",class:(0,i.C_)("post-reply__btn post-reply__btn--write")},{default:(0,o.w5)((()=>[ct])),_:1})])])])),_:1},8,["onOnsubmit"])])),_:1},8,["name"])}var yt={name:"app-update-post-reply-modal",props:{reply:Object},data(){return{replacedCont:""}},created(){this.replacedCont=this.reply.cont.replaceAll("<br>","\r\n")},methods:{async onSubmit(t){const e=await g.wW.confirmSuccess("저장하시겠습니까?");e&&this.$http.put("/postreply",t).then((t=>{g.wW.toastSuccess("저장되었습니다."),this.$modal.hide(this.$options.name),this.$store.dispatch("Post/FETCH_UPDATED_POST_REPLY",t.data)}))}}},ht=s(89);const wt=(0,ht.Z)(yt,[["render",mt],["__scopeId","data-v-e8c0f094"]]);var Pt=wt;const gt={class:"post-reply__write__input-box no-width"},vt={class:"post-reply__write__btns"},kt=(0,o.Uk)("삭제 ");function ft(t,e,s,l,n,a){const p=(0,o.up)("ui-hidden-field"),r=(0,o.up)("ui-text-field"),_=(0,o.up)("ui-button"),d=(0,o.up)("ui-form"),u=(0,o.up)("ui-modal");return(0,o.wg)(),(0,o.j4)(u,{title:"포스트 댓글 삭제",name:this.$options.name,class:"post-reply-modal__wrapper"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{name:"removePostReplyForm",onOnsubmit:a.onSubmit},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{name:"id",id:"removePostReplyId",value:s.reply.id},null,8,["value"]),(0,o.Wm)(p,{name:"parentId",id:"removePostReplyParentId",value:s.reply.parentId},null,8,["value"]),(0,o.Wm)(p,{name:"author",id:"removePostReplyAuthor",value:s.reply.author},null,8,["value"]),(0,o.Wm)(p,{name:"crudType",id:"removePostReplyCrudType",value:"E01004"}),(0,o._)("div",gt,[(0,o.Wm)(r,{type:"password",name:"authorPw",id:"removePostReplyPw",clazz:["post-reply__input"],title:"비밀번호 입력",placeholder:"비밀번호 입력",disabled:t.isLogin,rules:t.isLogin?"":"required|min:8|max:15"},null,8,["disabled","rules"]),(0,o._)("div",vt,[(0,o.Wm)(_,{type:"submit",color:"primary",class:(0,i.C_)("post-reply__btn post-reply__btn--write")},{default:(0,o.w5)((()=>[kt])),_:1})])])])),_:1},8,["onOnsubmit"])])),_:1},8,["name"])}var bt={name:"app-remove-post-reply-modal",props:{reply:Object},methods:{async onSubmit(t){const e=await g.wW.confirmSuccess("삭제하시겠습니까?");e&&this.$http.post("/postreply/remove",t).then((e=>{g.wW.toastSuccess("삭제되었습니다."),this.$modal.hide(this.$options.name),this.$store.dispatch("Post/FETCH_REMOVED_POST_REPLY",t)}))}}};const Lt=(0,ht.Z)(bt,[["render",ft],["__scopeId","data-v-3dbf21f3"]]);var Rt=Lt;const xt={class:"post__reply__write-depth"},Ct={class:"post__reply__write-to"},$t={class:"post__reply__write__inputs"},Dt={class:"post__reply__write__input-box"},Wt=["for"],Tt={class:"post__reply__write__input-box"},It=["for"],At={class:"post__reply__write__btns"},Et=(0,o.Uk)("저장 ");function Yt(t,e,s,l,n,a){const p=(0,o.up)("ui-hidden-field"),r=(0,o.up)("ui-textarea"),_=(0,o.up)("ui-text-field"),d=(0,o.up)("ui-button"),u=(0,o.up)("ui-form");return(0,o.wg)(),(0,o.iD)("div",xt,[(0,o._)("div",Ct,[(0,o.Wm)(u,{name:"addPostReplyDepthForm",class:(0,i.C_)("post__reply__list-frm"),onOnsubmit:a.onSubmit},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{name:"parentId",id:"addPostReplyParentId",value:s.reply.parentId},null,8,["value"]),(0,o.Wm)(p,{name:"parentReplyId",id:"addPostReplyParentReplyId",value:s.reply.id},null,8,["value"]),(0,o.Wm)(p,{name:"title",id:"addPostReplyTitle",value:""}),(0,o.Wm)(p,{name:"group",id:"addPostReplyGroup",value:s.reply.id},null,8,["value"]),(0,o.Wm)(p,{name:"depth",id:"addPostReplyDepth",value:s.reply.depth+1},null,8,["value"]),(0,o.Wm)(p,{name:"crudType",id:"addPostReplyCrudType",value:"E01001"}),(0,o.Wm)(r,{name:"cont",title:"댓글 내용 입력",placeholder:"하고싶은 말을 남겨주세요.",cols:"30",rows:"4",rules:"required|max:1000"},null,8,["placeholder"]),(0,o._)("div",$t,[(0,o._)("div",Dt,[(0,o._)("label",{for:`addPostReplyAuthor${s.reply.id}`,class:"post__reply__write__label"},"닉네임",8,Wt),(0,o.Wm)(_,{type:"text",name:"author",id:`addPostReplyAuthor${s.reply.id}`,clazz:["post__reply__input"],rules:"required|max:20",tooltip:!0,readonly:t.isLogin,value:t.isLogin?n.adminNickName:""},null,8,["id","readonly","value"])]),(0,o._)("div",Tt,[(0,o._)("label",{for:`addPostReplyAuthorPw${s.reply.id}`,class:"post__reply__write__label"},"비밀번호",8,It),(0,o.Wm)(_,{type:"password",name:"authorPw",id:`addPostReplyAuthorPw${s.reply.id}`,clazz:["post__reply__input"],rules:"required|min:8|max:15",tooltip:!0},null,8,["id"])]),(0,o._)("div",At,[(0,o.Wm)(d,{type:"submit",color:"primary",class:(0,i.C_)("post__reply__btn--write post__reply__btn--write-depth")},{default:(0,o.w5)((()=>[Et])),_:1})])])])),_:1},8,["onOnsubmit"])])])}var Ut={name:"app-add-post-reply-depth",props:{reply:Object},data(){return{nickNameCodeList:[],adminNickName:""}},created(){this.nickNameCodeList=this.$store.state.Code.data.filter((t=>"F01"===t.prefix)),this.adminNickName=this.nickNameCodeList.find((t=>"F01001"===t.id)).nm},methods:{async onSubmit(t){const e=await g.wW.confirmSuccess("저장하시겠습니까?");e&&(t.title=this.$store.state.Breadcrumb.pageTitle,this.$http.post("/postreply",t).then((t=>{g.wW.toastSuccess("저장되었습니다."),this.$emit("refreshList")})))}}};const Mt=(0,ht.Z)(Ut,[["render",Yt],["__scopeId","data-v-5c47006e"]]);var St=Mt,qt={name:"app-post-reply-list",components:{AppUpdatePostReplyModal:Pt,AppRemovePostReplyModal:Rt,AppAddPostReplyDepth:St},props:{replyList:Array},watch:{"$store.state.Post.updatedPostReply"(t){0<Object.values(t).length&&(this.$store.dispatch("Post/FETCH_UPDATED_POST_REPLY",{}),this.$emit("updateReply",t))},"$store.state.Post.removedPostReply"(t){0<Object.values(t).length&&(this.$store.dispatch("Post/FETCH_REMOVED_POST_REPLY",{}),this.$emit("removeReply"))}},data(){return{realReplyList:[],menuActiveIndex:-1,depthActiveIndex:-1,isEmpty:g.xb}},created(){(0,g.kJ)(this.replyList)&&(this.realReplyList=this.replyList.filter((t=>"N"===t.delYn)))},mounted(){window.document.addEventListener("click",this.closeMenu),this.scrollToReply()},unmounted(){window.document.removeEventListener("click",this.closeMenu)},methods:{refreshList(){this.$emit("refreshList")},toggleDepth(t){t!==this.depthActiveIndex?this.depthActiveIndex=t:this.depthActiveIndex=-1},toggleMenu(t){t!==this.menuActiveIndex?this.menuActiveIndex=t:this.menuActiveIndex=-1},closeMenu(t){(0,g.UE)(this.$refs["postReplyMenuBtn"])&&!this.$refs["postReplyMenuBtn"].includes(t.target)&&(this.menuActiveIndex=-1)},openModal(t,e,s){s||"Y"!==e.adminYn?"E01003"===t?this.$modal.show({component:Pt,bind:{reply:e}}):"E01004"===t&&this.$modal.show({component:Rt,bind:{reply:e}}):g.wW.toastError("수정/삭제 권한이 없습니다.")},scrollToReply(){if((0,g.UE)(window.location.hash)){const t=window.document.getElementById(window.location.hash.replace("#",""));t?.scrollIntoView()}}}};const zt=(0,ht.Z)(qt,[["render",lt],["__scopeId","data-v-0d5217ec"]]);var Nt=zt,Ht={name:"app-add-post-reply",components:{AppPostReplyList:Nt},props:{id:Number},data(){return{replyList:[],nickNameCodeList:[],adminNickName:""}},created(){this.nickNameCodeList=this.$store.state.Code.data.filter((t=>"F01"===t.prefix)),this.adminNickName=this.nickNameCodeList.find((t=>"F01001"===t.id)).nm,this.listPostReply()},methods:{async onSubmit(t){const e=await g.wW.confirmSuccess("저장하시겠습니까?");e&&(t.title=this.$store.state.Breadcrumb.pageTitle,this.$http.post("/postreply",t).then((t=>{g.wW.toastSuccess("저장되었습니다."),this.listPostReply()})))},listPostReply(){return this.$http.get(`/postreply/list/${this.id}`).then((t=>{this.replyList=[],t.data[0].map((t=>{this.setData(t),this.replyList.push(t)}))}))},onUpdateReply(t){const{id:e,author:s,cont:o,modDate:i}=t;this.replyList.map((t=>{t.id===e&&(t.author=s,t.cont=o,t.cont=this.setData(t).cont,t.modDate=this.$moment(i).format("YYYY-MM-DD HH:mm:ss"))}))},setData(t){return t.cont=t.cont.replace(/\r\n|\n/g,"<br>"),t.cont=t.cont.replaceAll("\\r\\n","<br>"),t.regDate=this.$moment(t.regDate).format("YYYY-MM-DD HH:mm:ss"),(0,g.UE)(t.modDate)&&(t.modDate=this.$moment(t.modDate).format("YYYY-MM-DD HH:mm:ss")),t}}};const Ot=(0,ht.Z)(Ht,[["render",T],["__scopeId","data-v-d79d5222"]]);var jt=Ot,Ft={name:"app-post-view",components:{AppAddPostReply:jt},data(){return{pageTitle:"",page:this.$route.query.page,post:null,prevPost:null,nextPost:null,postUrl:"",postLikeCnt:0,isPostLiked:!1,snsCodeList:[],dataLoaded:!1}},created(){this.init(this.$route.params.id)},watch:{"$route.params.id"(t){this.init(t)}},computed:{isPostPage:{get(){return"D01002"===this.$route.meta.pageType},set(t){}},isContentPage:{get(){return"D01003"===this.$route.meta.pageType},set(t){}}},methods:{async init(t){this.post=null,this.prevPost=null,this.nextPost=null,this.postUrl=window.location.href,this.isPostPage?(await Promise.all([this.getPost(t),this.getPostLike(t),this.listPrevAndNextPost(t)]),this.postLikeCnt=this.post.postLike.length):this.isContentPage&&await this.getPost(t),this.snsCodeList=this.$store.state.Code.data.filter((t=>"C01"===t.prefix))},getPost(t){let e=this.isPostPage?`/post/${t}`:`/content/${t}`;return this.$http.get(e).then((t=>{this.dataLoaded=!0,this.post={...t.data},this.post.regDate=this.$moment(this.post.regDate).format("YYYY-MM-DD HH:mm:ss"),(0,g.SL)(this.post.modDate)&&(this.post.modDate=this.$moment(this.post.modDate).format("YYYY-MM-DD HH:mm:ss")),this.pageTitle=this.post.title,this.$store.dispatch("Breadcrumb/FETCH_PAGE_TITLE",this.pageTitle)}))},listPrevAndNextPost(t){return this.$http.get(`/post/prevnext/${t}`).then((t=>{const[e,s]=t.data;this.prevPost=e||null,this.nextPost=s||null}))},getPostLike(t){return this.$http.get(`/postlike/${t}`).then((t=>{(0,g.UE)(t.data)?this.isPostLiked=!0:this.isPostLiked=!1}))},savePostLike(t){const e={postId:t,title:this.$store.state.Breadcrumb.pageTitle};return this.$store.commit("Loading/SET_USE_LOADING",!1),this.$http.post("/postlike",e).then((e=>{0===this.postLikeCnt&&-1===e.data||(this.getPostLike(t),this.postLikeCnt+=e.data)}))},async onSubmit(t){const e=await g.wW.confirmSuccess("삭제하시겠습니까?");if(!e)return;let s=this.isPostPage?`/post/${t.id}`:`/content/${t.id}`;this.$http.delete(s).then((t=>{g.wW.toastSuccess("삭제되었습니다."),this.goToList()}))},goToList(){this.$store.dispatch("Post/FETCH_MAIN_POSTLIST",{}),this.$store.dispatch("Layout/FETCH_SIDEBAR",{}),this.$router.push({path:"/",query:{page:this.page}})},async copyPostUrl(){await navigator.clipboard.writeText(window.location.href),g.wW.toastSuccess((this.isPostPage?"포스트":"콘텐츠")+" URL이 복사되었습니다.")}}};const Bt=(0,ht.Z)(Ft,[["render",P],["__scopeId","data-v-2c562920"]]);var Zt=Bt}}]);
//# sourceMappingURL=288.85813b34.js.map