(this["webpackJsonpwebbi-react-app"]=this["webpackJsonpwebbi-react-app"]||[]).push([[0],{25:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(2),i=n.n(c),a=n(19),l=n.n(a),o=(n(25),n(5)),r=n.n(o),d=n(7),j=n(3);var f=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),l=Object(j.a)(a,2),o=l[0],f=l[1],h=Object(c.useState)([]),b=Object(j.a)(h,2),u=b[0],g=b[1],x=Object(c.useState)(6),O=Object(j.a)(x,2),p=O[0],y=O[1],m=Object(c.useState)(""),C=Object(j.a)(m,2),v=C[0],k=C[1],S=Object(c.useState)("#"),w=Object(j.a)(S,2),I=w[0],z=w[1],N=Object(c.useState)("1"),L=Object(j.a)(N,2),D=L[0],T=L[1],R=Object(c.useState)("#f26d50"),F=Object(j.a)(R,2),H=F[0],B=F[1];function E(){return(E=Object(d.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/channels");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,f(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(d.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/locations");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,g(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){G.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){!function(){E.apply(this,arguments)}()}),[]);var M={hashtag:{width:200,fontSize:24,borderRadius:50,padding:10},text:{height:100,width:300,borderRadius:50,padding:10,fontSize:20},select:{fontSize:20,width:200,margin:5},btn:{fontSize:24,width:200,height:40,margin:5,padding:5,borderRadius:30,backgroundColor:"#f26d50",color:"#fff"},header:{fontSize:20}};return!0===n?Object(s.jsxs)("div",{style:{backgroundColor:"#f26d50",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(s.jsx)("h1",{children:"Publish Message"}),Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"orange",padding:30,borderRadius:80},children:[Object(s.jsx)("p",{style:M.header,children:"Channel:"}),Object(s.jsx)("select",{name:"messageChannel",value:p,onChange:function(e){return y(e.target.value)},style:M.select,children:o.map((function(e){return Object(s.jsx)("option",{value:e.channelId,children:e.channelName},e.channelId)}))}),Object(s.jsx)("p",{style:M.header,children:"Location:"}),Object(s.jsx)("select",{name:"messageLocation",value:D,onChange:function(e){return T(e.target.value)},style:M.select,children:u.map((function(e){return Object(s.jsx)("option",{value:e.locationId,children:e.location},e.locationId)}))}),Object(s.jsx)("p",{style:M.header,children:"Text:"}),Object(s.jsx)("input",{name:"messageText",value:v,onChange:function(e){return k(e.target.value)},style:M.text}),Object(s.jsx)("p",{style:M.header,children:"Hashtag:"}),Object(s.jsx)("input",{name:"messageHashtag",value:I,onChange:function(e){return z(e.target.value)},style:M.hashtag}),Object(s.jsx)("p",{style:M.header,children:"Color:"}),Object(s.jsxs)("select",{name:"messageColor",value:H,onChange:function(e){return B(e.target.value)},style:M.select,children:[Object(s.jsx)("option",{value:"#f26d50",children:"Tomato Red"}),Object(s.jsx)("option",{value:"#0f8518",children:"Cucumber Green"}),Object(s.jsx)("option",{value:"#ffc61c",children:"Sunrise Yellow"}),Object(s.jsx)("option",{value:"#3e9cbf",children:"Skyline Blue"}),Object(s.jsx)("option",{value:"#f5aa5f",children:"Chatty Orange"})]}),Object(s.jsx)("div",{className:"palette"}),Object(s.jsx)("button",{style:M.btn,onClick:function(){i(!1)},children:"takaisin"}),Object(s.jsx)("button",{style:M.btn,onClick:function(){var e={messageText:v,messageColor:H,messageHashtag:I,messageLocation:{locationId:D},messageLikes:0,messageChannel:{channelId:p}};fetch("http://localhost:8080/publish",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}),console.log("Message posted!")},children:"L\xe4het\xe4"}),Object(s.jsx)("button",{style:M.btn,onClick:function(){console.log({messageText:v,messageColor:H,messageHashtag:I,messageLocation:{locationId:D},messageLikes:0,messageChannel:{channelId:p}})},children:"LOG"}),Object(s.jsx)("button",{style:M.btn,onClick:function(){y(1),k(""),z("#"),T("Helsinki"),B("#f26d50")},children:"Tyhjenn\xe4"})]})]}):Object(s.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",opacity:.7},children:Object(s.jsx)("button",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:100,borderRadius:100,height:200,width:200,borderWidth:4,paddingBottom:20,borderColor:"white",color:"grey"},onClick:function(){i(!0)},children:"+"})})},h=n(4),b=n(9),u=n.n(b),g=n(8);var x=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),l=Object(j.a)(a,2),o=l[0],f=l[1],h=Object(c.useState)([]),b=Object(j.a)(h,2),x=b[0],O=b[1],p=Object(c.useState)("@Main"),y=Object(j.a)(p,2),m=y[0],C=y[1],v=Object(c.useState)(1),k=Object(j.a)(v,2),S=k[0],w=k[1],I=Object(c.useState)("Finland"),z=Object(j.a)(I,2),N=z[0],L=z[1],D=Object(c.useState)(!1),T=Object(j.a)(D,2),R=T[0],F=T[1],H=Object(c.useState)(0),B=Object(j.a)(H,2),E=B[0],G=B[1];function M(){return(M=Object(d.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/channelbyname/"+m);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n.messages),C(n.channelName),w(n.channelId),console.log("Fetched messages from "+m+" and filtered by "+N);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(d.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/channels");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,f(n),console.log("fetched Channels");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(d.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/locations");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O(n),console.log("fetched Locations");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){M.apply(this,arguments)}()}),[m,N]),Object(c.useEffect)((function(){!function(){J.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){!function(){P.apply(this,arguments)}()}),[]),!0===R?Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"orange",alignItems:"center"},children:[Object(s.jsx)("h1",{children:"Message settings"}),Object(s.jsxs)("p",{children:["MessageID: ",E]}),Object(s.jsxs)("div",{className:"op_btns",style:{display:"flex",flexDirection:"column",width:200,alignItems:"center",margin:20},children:[Object(s.jsx)("button",{style:{display:"flex",height:40,width:150,fontSize:24},onClick:function(e){console.log("Deleting message (ID) "+E),u.a.delete("http://localhost:8080/message/delete/"+E).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},children:"Delete"}),Object(s.jsx)("button",{style:{display:"flex",height:40,width:150,fontSize:24},children:"Share"}),Object(s.jsx)("button",{style:{display:"flex",height:40,width:150,fontSize:24},children:"Save"}),Object(s.jsx)("button",{style:{display:"flex",height:40,width:150,fontSize:24},onClick:function(){F(!1)},children:"Close"})]})]}):Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(s.jsxs)("div",{style:{display:"flex",backgroundColor:"#d7d9db",alignItems:"center",justifyContent:"center",padding:10},children:[Object(s.jsxs)("div",{style:{display:"flex",marginRight:20,backgroundColor:"orange",alignItems:"center",justifyContent:"center",borderRadius:50,paddingLeft:30,paddingRight:30},children:[Object(s.jsx)(g.a,{style:{fontSize:28,color:"#fff",margin:10}}),Object(s.jsx)("select",{onChange:function(e){C(e.target.value)},style:{width:200,height:40,fontSize:24,display:"flex",BackgroundColor:"#fff"},children:o.map((function(e){return Object(s.jsx)("option",{value:e.channelName,children:e.channelName},e.channelId)}))})]}),Object(s.jsxs)("div",{style:{display:"flex",marginRight:20,backgroundColor:"orange",alignItems:"center",justifyContent:"center",borderRadius:50,paddingLeft:30,paddingRight:30},children:[Object(s.jsx)(g.e,{style:{fontSize:28,color:"#fff",margin:10}}),Object(s.jsxs)("select",{style:{display:"flex",backgroundColor:"#fff",height:40,width:200,padding:15,fontSize:20},onChange:function(e){L(e.target.value)},children:[x.map((function(e){return Object(s.jsx)("option",{children:e.location},e.locationId)})),Object(s.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"Choose Location"})]})]})]}),n.filter((function(e){return e.messageLocation.location===N})).map((function(e){return Object(s.jsx)("div",{style:{backgroundColor:e.messageColor},children:Object(s.jsxs)("div",{id:"jodelContainer",style:{margin:10},children:[Object(s.jsxs)("div",{id:"topBar",style:{display:"flex",flexDirection:"row"},children:[Object(s.jsx)(g.e,{style:{color:"#fff",fontSize:20,marginTop:10,opacity:.7}}),Object(s.jsx)("p",{style:{color:"#fff",fontSize:14,marginTop:10,marginRight:15,opacity:.7},children:e.messageLocation.location}),Object(s.jsx)("p",{style:{color:"#fff",fontSize:14,marginRight:10},children:Object(s.jsx)("b",{children:m})}),Object(s.jsx)("p",{style:{color:"#fff",fontSize:14,opacity:.7},children:"0s"})]}),Object(s.jsxs)("div",{id:"jodling",style:{display:"flex"},children:[Object(s.jsxs)("div",{id:"textContent",style:{flex:10},children:[Object(s.jsx)("p",{style:{color:"#fff",fontSize:18},children:e.messageText}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{style:{color:"#fff",fontSize:18},children:Object(s.jsx)("b",{children:e.messageHashtag})}),Object(s.jsx)("p",{children:e.messageId})]}),Object(s.jsx)("div",{id:"rightControls",style:{flex:1},children:Object(s.jsxs)("div",{id:"likes",style:{display:"flex",flexDirection:"column"},children:[Object(s.jsx)(g.c,{style:{color:"#fff",fontSize:25},onClick:function(){return function(e,t,n,s,c,i){var a={messageId:e,messageText:t,messageColor:n,messageHashtag:s,messageLocation:{locationId:c},messageLikes:i+1,messageChannel:{channelId:S}};u.a.put("http://localhost:8080/upvote",a).then((function(t){200===t.status?console.log("upvoted message "+e):console.log("Upvote failed")}))}(e.messageId,e.messageText,e.messageColor,e.messageHashtag,e.messageLocation.locationId,e.messageLikes)}}),Object(s.jsx)("p",{style:{color:"#fff",fontSize:25,paddingLeft:5},children:e.messageLikes}),Object(s.jsx)(g.b,{style:{color:"#fff",fontSize:25},onClick:function(){return function(e,t,n,s,c,i){var a={messageId:e,messageText:t,messageColor:n,messageHashtag:s,messageLocation:{locationId:c},messageLikes:i-1,messageChannel:{channelId:S}};u.a.put("http://localhost:8080/upvote",a).then((function(t){200===t.status?console.log("Downvoted message "+e):console.log("Downvote failed")}))}(e.messageId,e.messageText,e.messageColor,e.messageHashtag,e.messageLocation.locationId,e.messageLikes)}})]})})]}),Object(s.jsx)("div",{id:"threeDots",style:{display:"flex"},children:Object(s.jsx)(g.d,{style:{color:"#fff",fontSize:30,flex:1},onClick:function(){return function(e){F(!0),console.log("Options for message with ID: "+e),G(e)}(e.messageId)},id:e.messageId})})]})},e.messageId)}))]})};var O=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1];function a(){return(a=Object(d.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/channels");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){a.apply(this,arguments)}()}),[]);var l={channel:{width:350,height:50,display:"flex",alignItems:"center",justifyContent:"center"},OuterContainer:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"#e6e7e8"},InnerContainer:{display:"flex",border:"1px solid #bbbdbf",alignItems:"center",justifyContent:"center",paddingLeft:20,paddingRight:20,backgroundColor:"#e6e7e8"}};return Object(s.jsx)("div",{style:l.OuterContainer,children:n.map((function(e){return Object(s.jsxs)("div",{style:l.InnerContainer,children:[Object(s.jsx)("p",{style:{fontSize:32,color:"grey",display:"flex"},children:"@"}),Object(s.jsx)("h2",{style:l.channel,children:e.channelName}),Object(s.jsx)(g.f,{style:{fontSize:30,color:"grey",display:"flex"}})]},e.channelId)}))})},p=n.p+"static/media/funnyBar.405f03a6.png";n(45);var y=function(){return Object(s.jsx)("div",{className:"Canvas",children:Object(s.jsx)("img",{className:"box2",src:p,width:"100px",height:"100px"})})};n(46);var m=[{name:"James",age:31},{name:"John",age:45},{name:"Paul",age:65},{name:"Ringo",age:49},{name:"George",age:34}];var C=function(){return Object(s.jsx)("div",{children:m.filter((function(e){return e.age<60})).map((function(e){return Object(s.jsx)("li",{children:e.name})}))})};var v=function(){var e=Object(c.useState)("feed"),t=Object(j.a)(e,2),n=t[0],i=t[1],a=function(){i("feed")},l=function(){i("channels")},o=function(){i("options")},r=function(){i("games")};return"feed"===n?Object(s.jsxs)("div",{className:"OuterContainer",children:[Object(s.jsx)(x,{}),Object(s.jsxs)("div",{className:"NavContainer",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange"},children:[Object(s.jsx)("div",{className:"Channels",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:l,children:Object(s.jsx)(h.d,{})})}),Object(s.jsx)("div",{className:"Feed",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:a,children:Object(s.jsx)(h.a,{})})}),Object(s.jsx)("div",{className:"Options",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:o,children:Object(s.jsx)(h.c,{})})}),Object(s.jsx)("div",{className:"Games",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:r,children:Object(s.jsx)(h.b,{})})})]})]}):"channels"===n?Object(s.jsxs)("div",{className:"OuterContainer",children:[Object(s.jsx)(O,{}),Object(s.jsxs)("div",{className:"NavContainer",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange"},children:[Object(s.jsx)("div",{className:"Channels",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:l,children:Object(s.jsx)(h.d,{})})}),Object(s.jsx)("div",{className:"Feed",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:a,children:Object(s.jsx)(h.a,{})})}),Object(s.jsx)("div",{className:"Options",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:o,children:Object(s.jsx)(h.c,{})})}),Object(s.jsx)("div",{className:"Games",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:r,children:Object(s.jsx)(h.b,{})})})]})]}):"options"===n?Object(s.jsxs)("div",{className:"OuterContainer",children:[Object(s.jsx)("h1",{children:"Options"}),Object(s.jsxs)("div",{className:"NavContainer",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange"},children:[Object(s.jsx)("div",{className:"Channels",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:l,children:Object(s.jsx)(h.d,{})})}),Object(s.jsx)("div",{className:"Feed",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:a,children:Object(s.jsx)(h.a,{})})}),Object(s.jsx)("div",{className:"Options",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:o,children:Object(s.jsx)(h.c,{})})}),Object(s.jsx)("div",{className:"Games",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:r,children:Object(s.jsx)(h.b,{})})})]})]}):"games"===n?Object(s.jsxs)("div",{className:"OuterContainer",children:[Object(s.jsx)("h1",{children:"Testing Screen"}),Object(s.jsx)(y,{}),Object(s.jsx)(C,{}),Object(s.jsxs)("div",{className:"NavContainer",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange"},children:[Object(s.jsx)("div",{className:"Channels",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:l,children:Object(s.jsx)(h.d,{})})}),Object(s.jsx)("div",{className:"Feed",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:a,children:Object(s.jsx)(h.a,{})})}),Object(s.jsx)("div",{className:"Options",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:o,children:Object(s.jsx)(h.c,{})})}),Object(s.jsx)("div",{className:"Games",style:{display:"flex"},children:Object(s.jsx)("button",{style:{width:150,height:100,backgroundColor:"#fff",fontSize:42},onClick:r,children:Object(s.jsx)(h.b,{})})})]})]}):void 0};var k=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{style:{textAlign:"center"},children:"Felipe's Messaging Client"}),Object(s.jsx)(v,{}),Object(s.jsx)(f,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),i(e),a(e)}))};l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),S()}},[[47,1,2]]]);
//# sourceMappingURL=main.82746774.chunk.js.map