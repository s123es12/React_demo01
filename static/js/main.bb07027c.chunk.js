(this.webpackJsonpdemo01=this.webpackJsonpdemo01||[]).push([[0],{182:function(e,t,a){e.exports=a.p+"static/media/Big01.a588c7af.png"},183:function(e,t,a){e.exports=a.p+"static/media/Big02.5a036f58.png"},184:function(e,t,a){e.exports=a.p+"static/media/Big03.ca7d85c2.png"},185:function(e,t,a){e.exports=a.p+"static/media/Big04.7655aba1.png"},186:function(e,t,a){e.exports=a.p+"static/media/Big05.197a1d3b.png"},187:function(e,t,a){e.exports=a.p+"static/media/Big06.2ea1ace5.png"},188:function(e,t,a){e.exports=a.p+"static/media/Big07.1bc8f28a.png"},193:function(e,t,a){e.exports=a.p+"static/media/Big08.ebad7db4.png"},194:function(e,t,a){e.exports=a.p+"static/media/Big09.bd41da84.png"},195:function(e,t,a){e.exports=a.p+"static/media/Big10.d7321431.png"},196:function(e,t,a){e.exports=a.p+"static/media/small01.062edf2c.png"},197:function(e,t,a){e.exports=a.p+"static/media/small02.8dc7b3be.png"},198:function(e,t,a){e.exports=a.p+"static/media/small03.887b0b36.png"},199:function(e,t,a){e.exports=a.p+"static/media/small04.7a21ed9d.png"},205:function(e,t,a){e.exports=a(396)},217:function(e,t,a){},224:function(e,t,a){},381:function(e,t,a){},387:function(e,t,a){},394:function(e,t,a){},395:function(e,t,a){},396:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),o=a(8),i=(a(170),a(21)),s=(a(71),a(16)),u=a(13),m=a(17),d=a(399),p=a(14),b=a(401),g=function(){return r.a.createElement(r.a.Fragment,null,"About")},E=(a(217),function(){return r.a.createElement(r.a.Fragment,null,"Home")}),f=(a(73),a(37)),y=(a(145),a(70)),h=(a(74),a(10)),O=(a(146),a(31)),j=(a(118),a(39)),P=(a(224),function(){var e=Object(p.c)((function(e){return e})),t=Object(p.b)(),a=Object(u.g)(),c=Object(n.useState)(!1),l=Object(o.a)(c,2),i=l[0],s=l[1],m=Object(n.useState)(!1),d=Object(o.a)(m,2),b=d[0],g=d[1],E=Object(n.useState)(),P=Object(o.a)(E,2),v=P[0],k=P[1],x=Object(n.useRef)(null),C=function(){s(!1),x.current.resetFields()},S=function(){s(!1),b?a.replace("/login"):a.replace("/register"),x.current.resetFields()};return r.a.createElement("div",{style:{border:"10px solid yellowgreen"}},r.a.createElement(O.a,{name:"basic",initialValues:{remember:!0},onFinish:function(a){console.log("Success:",a);var n=e.userReducers;console.log(e);for(var r=!0,c=0;c<n.length;c++)n[c].username===a.username&&(console.log("Account is already exists"),k("Account is already exists"),r=!1);r?(console.log(a.username),t({type:"user_register",values:a}),s(!0),g(!0),k("Successfully Registered Account!")):(s(!0),g(!1))},onFinishFailed:function(e){console.log("Failed:",e)},ref:x},r.a.createElement(O.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement(j.a,null)),r.a.createElement(O.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(j.a.Password,null)),r.a.createElement(O.a.Item,{label:"Comfim Password",name:"comfim password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(j.a.Password,null)),r.a.createElement(O.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"},{pattern:new RegExp(/^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]{2,4}$/),message:"Invaild Email! Please input again"}]},r.a.createElement(j.a,null)),r.a.createElement(O.a.Item,null,r.a.createElement(h.a,{type:"primary",htmlType:"submit"},"Register"))),r.a.createElement(f.a,{title:"Result",visible:i,onCancel:C,cancelButtonProps:{style:{display:"none"}},okButtonProps:{style:{display:"none"}}},!0===b?r.a.createElement(y.a,{status:"success",title:v,subTitle:"Now, You can chick the button to login page or cancel",extra:[r.a.createElement(h.a,{type:"primary",key:"login",onClick:S},"Go Login"),r.a.createElement(h.a,{key:"cancel",onClick:C},"Cancel")]}):r.a.createElement(y.a,{status:"error",title:v,subTitle:"Please check and modify the following information before resubmitting.",extra:[r.a.createElement(h.a,{type:"primary",key:"login",onClick:S},"Go Register"),r.a.createElement(h.a,{key:"cancel",onClick:C},"Cancel")]})))}),v=(a(97),a(30)),k=(a(98),a(18)),x=(a(136),a(42)),C=a(182),S=a.n(C),w=a(183),_=a.n(w),I=a(184),N=a.n(I),F=a(185),R=a.n(F),B=a(186),T=a.n(B),A=a(187),J=a.n(A),D=a(188),z=a.n(D),$=s.a.Header,q=s.a.Content,H=x.a.Meta,L=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(""),d=Object(o.a)(m,2),b=d[0],g=d[1],E=Object(n.useState)(),y=Object(o.a)(E,2),h=y[0],O=y[1],j=Object(p.c)((function(e){return e.shopCertReducers})),P=Object(p.b)(),C=[{name:"bigProduct01",src:S.a,description:"bigProduct01",price:9999},{name:"bigProduct02",src:_.a,description:"bigProduct02",price:9999},{name:"bigProduct03",src:N.a,description:"bigProduct03",price:9999},{name:"bigProduct04",src:R.a,description:"bigProduct04",price:9999},{name:"bigProduct05",src:T.a,description:"bigProduct05",price:9999},{name:"bigProduct06",src:J.a,description:"bigProduct06",price:9999},{name:"bigProduct07",src:z.a,description:"bigProduct07",price:9999}];return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null,"BigProduct"),r.a.createElement(q,{style:{display:"flex",padding:"20px"}},r.a.createElement(v.a,null,C.map((function(e,t){return r.a.createElement(k.a,{span:8,key:t},r.a.createElement(x.a,{hoverable:!0,style:{margin:"20px"},cover:r.a.createElement("img",{alt:e.description,src:e.src}),onClick:function(){c(!0),u(e.name),g(e.description),O(e.price)}},r.a.createElement(H,{title:e.name,description:e.description}),r.a.createElement("h1",null,"$",e.price)))})),r.a.createElement(f.a,{title:s,visible:a,onOk:function(){c(!1);var e=!1,t={selectedName:s,selectedDescription:b,selectedPrice:h};j.length>0?j.map((function(a){if(a.product===t.selectedName)e=!0;else for(var n=0;n<j.length;n++)j[n].product===t.selectedName&&(e=!0)})):e=!1,P(e?{type:"add_count",data:t.selectedName}:{type:"add_product",data:t})},onCancel:function(){return c(!1)},okText:"\u8cfc\u8cb7",cancelText:"\u6211\u6c7a\u5b9a\u4e0d\u8cb7\u4e86"},r.a.createElement("p",null,"Description: ",b),r.a.createElement("p",null,"Price: $",h)))))},M=a(193),G=a.n(M),U=a(194),Z=a.n(U),K=a(195),V=a.n(K),Y=s.a.Header,W=s.a.Content,Q=x.a.Meta,X=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(""),d=Object(o.a)(m,2),b=d[0],g=d[1],E=Object(n.useState)(),y=Object(o.a)(E,2),h=y[0],O=y[1],j=Object(p.c)((function(e){return e.shopCertReducers})),P=Object(p.b)(),C=[{name:"runProduct01",src:G.a,description:"runProduct01",price:5e3},{name:"runProduct02",src:Z.a,description:"runProduct02",price:5e3},{name:"runProduct03",src:V.a,description:"runProduct03",price:5e3}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null,"RunProduct"),r.a.createElement(W,{style:{display:"flex",padding:"20px"}},r.a.createElement(v.a,null,C.map((function(e,t){return r.a.createElement(k.a,{span:8,key:t},r.a.createElement(x.a,{hoverable:!0,style:{margin:"20px"},cover:r.a.createElement("img",{alt:e.description,src:e.src}),onClick:function(){c(!0),u(e.name),g(e.description),O(e.price)}},r.a.createElement(Q,{title:e.name,description:e.description}),r.a.createElement("h1",null,"$",e.price)))})),r.a.createElement(f.a,{title:s,visible:a,onOk:function(){c(!1);var e=!1,t={selectedName:s,selectedDescription:b,selectedPrice:h};j.length>0?j.map((function(a){if(a.product===t.selectedName)e=!0;else for(var n=0;n<j.length;n++)j[n].product===t.selectedName&&(e=!0)})):e=!1,P(e?{type:"add_count",data:t.selectedName}:{type:"add_product",data:t})},onCancel:function(){return c(!1)},okText:"\u8cfc\u8cb7",cancelText:"\u6211\u6c7a\u5b9a\u4e0d\u8cb7\u4e86"},r.a.createElement("p",null,"Description: ",b),r.a.createElement("p",null,"Price: $",h)))))},ee=a(196),te=a.n(ee),ae=a(197),ne=a.n(ae),re=a(198),ce=a.n(re),le=a(199),oe=a.n(le),ie=s.a.Header,se=s.a.Content,ue=x.a.Meta,me=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(""),d=Object(o.a)(m,2),b=d[0],g=d[1],E=Object(n.useState)(),y=Object(o.a)(E,2),h=y[0],O=y[1],j=Object(p.c)((function(e){return e.shopCertReducers})),P=Object(p.b)(),C=[{name:"smallProduct01",src:te.a,description:"smallProduct01",price:2e3},{name:"smallProduct02",src:ne.a,description:"smallProduct02",price:2e3},{name:"smallProduct03",src:ce.a,description:"smallProduct03",price:2e3},{name:"smallProduct04",src:oe.a,description:"smallProduct04",price:2e3}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null,"SmallProduct"),r.a.createElement(se,{style:{display:"flex",padding:"20px"}},r.a.createElement(v.a,null,C.map((function(e,t){return r.a.createElement(k.a,{span:8,key:t},r.a.createElement(x.a,{hoverable:!0,style:{margin:"20px"},cover:r.a.createElement("img",{alt:e.description,src:e.src}),onClick:function(){c(!0),u(e.name),g(e.description),O(e.price)}},r.a.createElement(ue,{title:e.name,description:e.description}),r.a.createElement("h1",null,"$",e.price)))})),r.a.createElement(f.a,{title:s,visible:a,onOk:function(){c(!1);var e=!1,t={selectedName:s,selectedDescription:b,selectedPrice:h};j.length>0?j.map((function(a){if(a.product===t.selectedName)e=!0;else for(var n=0;n<j.length;n++)j[n].product===t.selectedName&&(e=!0)})):e=!1,P(e?{type:"add_count",data:t.selectedName}:{type:"add_product",data:t})},onCancel:function(){return c(!1)},okText:"\u8cfc\u8cb7",cancelText:"\u6211\u6c7a\u5b9a\u4e0d\u8cb7\u4e86"},r.a.createElement("p",null,"Description: ",b),r.a.createElement("p",null,"Price: $",h)))))},de=(a(381),s.a.Sider),pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement(de,null,r.a.createElement(i.a,null,r.a.createElement(i.a.Item,null,r.a.createElement(m.b,{to:"/shop/bigProduct"},"\u5927\u578b\u5668\u68b0")),r.a.createElement(i.a.Item,null,r.a.createElement(m.b,{to:"/shop/smallProduct"},"\u555e\u9234")),r.a.createElement(i.a.Item,null,r.a.createElement(m.b,{to:"/shop/runProduct"},"\u8dd1\u6b65\u6a5f")))),r.a.createElement(s.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/shop/bigProduct",component:L}),r.a.createElement(u.b,{path:"/shop/smallProduct",component:me}),r.a.createElement(u.b,{path:"/shop/runProduct",component:X}),r.a.createElement(u.a,{to:"/shop/bigProduct"}))))))},be=(a(397),a(114)),ge=(a(387),function(){var e=Object(p.c)((function(e){return e.shopCertReducers})),t=Object(p.b)(),a=(Object(u.g)(),Object(n.useState)(!1)),c=Object(o.a)(a,2),l=c[0],i=c[1];return r.a.createElement(r.a.Fragment,null,function(){if(1==l)return r.a.createElement(u.a,{to:"/shop"})}(),r.a.createElement(be.b,{itemLayout:"horizontal",dataSource:e,locale:{emptyText:r.a.createElement("span",null,r.a.createElement("h1",null,"\u8cfc\u7269\u8eca\u76ee\u524d\u6c92\u6709\u8ca8\u54c1"),r.a.createElement(h.a,{onClick:function(){return i(!0)}},"Go Shop"))},renderItem:function(e){return r.a.createElement(be.b.Item,null,r.a.createElement(be.b.Item.Meta,{title:e.product,description:e.description}),r.a.createElement(h.a,{onClick:function(){return t({type:"delete_product",data:e.product})}},"Delete"),r.a.createElement(h.a,{shape:"circle",onClick:function(){return t({type:"add_count",data:e.product})}},"+"),r.a.createElement(j.a,{min:1,value:e.count,style:{width:"50px"}}),r.a.createElement(h.a,{shape:"circle",onClick:function(){return t({type:"down_count",data:e.product})}},"-"))}}),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(h.a,{type:"primary",size:"large",style:{margin:"20px"},onClick:function(){t({type:"clear_cert"})}},"Clear Cert")))}),Ee=(a(394),function(){var e=Object(p.c)((function(e){return e})),t=Object(d.a)(["user_id"]),a=Object(o.a)(t,2),c=(a[0],a[1]),l=Object(u.g)(),i=Object(n.useState)(!1),s=Object(o.a)(i,2),m=s[0],b=s[1],g=Object(n.useState)(!1),E=Object(o.a)(g,2),P=E[0],v=E[1],k=Object(n.useState)(),x=Object(o.a)(k,2),C=x[0],S=(x[1],Object(n.useRef)(null)),w=Object(n.useState)(),_=Object(o.a)(w,2),I=_[0],N=_[1],F=function(){b(!1),S.current.resetFields()},R=function(){b(!1),P?(c("user_id",I,{path:"/",maxAge:86400}),l.replace("/login")):l.replace("/login"),S.current.resetFields()};return r.a.createElement("div",{style:{border:"10px solid yellowgreen"}},r.a.createElement(O.a,{name:"basic",initialValues:{remember:!0},onFinish:function(t){for(var a=e.userReducers,n=0;n<a.length;n++)t.username===a[n].username&&t.password===a[n].password&&(v(!0),N(a[n].user_id));P||b(!0)},onFinishFailed:function(e){console.log("Failed:",e)},ref:S},r.a.createElement(O.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement(j.a,null)),r.a.createElement(O.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(j.a.Password,null)),r.a.createElement(O.a.Item,null,r.a.createElement(h.a,{type:"primary",htmlType:"submit"},"Login"))),r.a.createElement(f.a,{title:"Result",visible:m,onCancel:F,cancelButtonProps:{style:{display:"none"}},okButtonProps:{style:{display:"none"}}},!0===P?r.a.createElement(y.a,{status:"success",title:C,subTitle:"Now, You can chick the button to login page or cancel",extra:[r.a.createElement(h.a,{type:"primary",key:"login",onClick:R},"Go Login"),r.a.createElement(h.a,{key:"cancel",onClick:F},"Cancel")]}):r.a.createElement(y.a,{status:"error",title:C,subTitle:"Username or password Invaild! Please input again.",extra:[r.a.createElement(h.a,{type:"primary",key:"login",onClick:R},"Input again"),r.a.createElement(h.a,{key:"cancel",onClick:F},"Cancel")]})))}),fe=(a(395),s.a.Header),ye=s.a.Footer,he=s.a.Content,Oe=(i.a.SubMenu,function(){var e=Object(d.a)(["user_id"]),t=Object(o.a)(e,3),a=t[0],n=(t[1],t[2]),c=Object(p.c)((function(e){return e})).userReducers,l=Object(u.h)(),f=function(e){for(var t=!1,n=0;n<c.length;n++)if(c[n].user_id===e&&a.user_id===e){t=!0;break}return!!t};return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(s.a,{style:{height:"100%"}},r.a.createElement(fe,{style:{backgroundColor:"unset"}},r.a.createElement(i.a,{mode:"horizontal",style:{backgroundColor:"rgba(1,1,1,0.2)"},defaultSelectedKeys:["/home"],selectedKeys:[l.pathname]},r.a.createElement(i.a.Item,{key:"/home"},r.a.createElement(m.b,{to:"/home"},"Home")),r.a.createElement(i.a.Item,{key:"/about"},r.a.createElement(m.b,{to:"/about"},"About")),r.a.createElement(i.a.Item,{key:"/shop"},r.a.createElement(m.b,{to:"/shop"},"Shop")),r.a.createElement(i.a.Item,{key:"/cert"},r.a.createElement(m.b,{to:"/cert"},"Cert")),f(a.user_id)?null:r.a.createElement(i.a.Item,null,r.a.createElement(m.b,{to:"/register"},"Register")),f(a.user_id)?null:r.a.createElement(i.a.Item,null,r.a.createElement(m.b,{to:"/login"},"Login")),f(a.user_id)?r.a.createElement(u.a,{to:"/home/"}):null,r.a.createElement(i.a.Item,{icon:r.a.createElement(b.a,{style:{fontSize:"20px"}}),style:{position:"absolute",right:0,marginRight:"50px"},onClick:function(){n("user_id",{path:"/"})}},"Logout"))),r.a.createElement(he,{style:{height:"100%",padding:"0 50px",marginTop:"5px"}},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/home",component:E}),r.a.createElement(u.b,{path:"/about",component:g}),r.a.createElement(u.b,{path:"/shop",component:pe}),r.a.createElement(u.b,{path:"/cert",component:ge}),r.a.createElement(u.b,{path:"/register",component:P}),r.a.createElement(u.b,{path:"/login",component:Ee}),r.a.createElement(u.a,{to:"/home"}))),r.a.createElement(ye,{style:{bottom:"0",width:"100%"}},"Footer")))}),je=a(44),Pe=a(143),ve=[{user_id:"000",username:"admin",password:"admin",email:"admin@abc.com"},{user_id:"001",username:"a",password:"a",email:"a@abc.com"}],ke=[],xe=Object(je.combineReducers)({userReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user_register":return[].concat(Object(Pe.a)(e),[{user_id:"00"+ve.length,username:t.values.username,password:t.values.password,email:t.values.email}]);default:return e}},shopCertReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_product":var a=JSON.parse(JSON.stringify(e));return a=[].concat(Object(Pe.a)(a),[{product:t.data.selectedName,price:t.data.selectedPrice,description:t.data.selectedDescription,count:1}]);case"add_count":var n=JSON.parse(JSON.stringify(e));return n.map((function(e){e.product===t.data&&e.count++})),n;case"down_count":var r=JSON.parse(JSON.stringify(e));return r.map((function(e){e.product===t.data&&e.count>1&&e.count--})),r;case"delete_product":var c=JSON.parse(JSON.stringify(e));return c=c.filter((function(e){return e.product!==t.data}));case"clear_cert":return[];default:return e}}}),Ce=a(203),Se=a(204),we=Object(je.createStore)(xe,Object(Ce.composeWithDevTools)(Object(je.applyMiddleware)(Se.a))),_e=a(400);l.a.render(r.a.createElement(p.a,{store:we},r.a.createElement(m.a,null,r.a.createElement(_e.a,null,r.a.createElement(Oe,null)))),document.getElementById("root"))}},[[205,1,2]]]);
//# sourceMappingURL=main.bb07027c.chunk.js.map