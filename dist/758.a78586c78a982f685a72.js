"use strict";(self.webpackChunkcomplex_react_app=self.webpackChunkcomplex_react_app||[]).push([[758],{7758:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=a(7294),s=a(1387),n=a(7062),r=a(6974),c=a(9711),o=a(9669),m=a.n(o),u=a(8497),i=a(6168),d=a(2210),p=a(7564),f=a(3983);const h=function(){const e=(0,r.s0)(),t=(0,l.useContext)(p.Z),a=(0,l.useContext)(f.Z),{id:o}=(0,r.UO)(),[h,E]=(0,l.useState)(!0),[w,y]=(0,l.useState)();if((0,l.useEffect)((()=>{const e=m().CancelToken.source();return async function(){try{const t=await m().get(`/post/${o}`,{cancelToken:e.token});y(t.data),E(!1)}catch(e){console.log("There was a problem or the request was cancelled.")}}(),()=>{e.cancel()}}),[o]),!h&&!w)return l.createElement(d.Z,null);if(h)return l.createElement(s.Z,{title:"..."},l.createElement(n.Z,null));const g=new Date(w.createdDate),b=`${g.getMonth()+1}/${g.getDate()}/${g.getFullYear()}`;return l.createElement(s.Z,{title:w.title},l.createElement("div",{className:"d-flex justify-content-between"},l.createElement("h2",null,w.title),!!t.loggedIn&&t.user.username==w.author.username&&l.createElement("span",{className:"pt-2"},l.createElement(c.rU,{to:`/post/${w._id}/edit`,"data-tip":"Edit","data-for":"edit",className:"text-primary mr-2"},l.createElement("i",{className:"fas fa-edit"})),l.createElement(i.Z,{id:"edit",className:"custom-tooltip"})," ",l.createElement("a",{onClick:async function(){if(window.confirm("Do you really want to delete this post?"))try{"Success"==(await m().delete(`/post/${o}`,{data:{token:t.user.token}})).data&&(a({type:"flashMessage",value:"Post was successfully deleted!"}),e(`/profile/${t.user.username}`))}catch(e){console.log("There was a problem!")}},"data-tip":"Delete","data-for":"delete",className:"delete-post-button text-danger"},l.createElement("i",{className:"fas fa-trash"})),l.createElement(i.Z,{id:"delete",className:"custom-tooltip"}))),l.createElement("p",{className:"text-muted small mb-4"},l.createElement(c.rU,{to:`/profile/${w.author.username}`},l.createElement("img",{className:"avatar-tiny",src:w.author.avatar})),"Posted by ",l.createElement(c.rU,{to:`/profile/${w.author.username}`},w.author.username)," on ",b),l.createElement("div",{className:"body-content"},l.createElement(u.D,{children:w.body,allowedElements:["p","br","strong","em","h1","h2","h3","h4","h5","h6","ul","ol","li"]})))}}}]);