(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t){},117:function(e,t,a){},118:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n,c=a(0),s=a.n(c),r=a(61),m=a.n(r),o=(a(73),a(19)),l=a(1),i=a(8),u=(a(74),function(e){var t=Object(c.useState)(),a=Object(i.a)(t,2),n=a[0],r=a[1],m=Object(c.useState)(),l=Object(i.a)(m,2),u=l[0],A=l[1];return s.a.createElement("div",{className:"join__container"},s.a.createElement("div",{className:"join__container--inner"},s.a.createElement("h1",{className:"join__heading"},"Join"),s.a.createElement("div",{className:"join__form-container"},s.a.createElement("input",{placeholder:"Tell me your name",className:"join__input",type:"text",onChange:function(e){r(e.target.value)}}),s.a.createElement("input",{placeholder:"Select the room",className:"join__input mt-2",type:"text",onChange:function(e){A(e.target.value)}}),s.a.createElement(o.b,{to:"/chat?name=".concat(n,"&room=").concat(u),onClick:function(e){return(!u||!n)&&e.preventDefault()}},s.a.createElement("button",{className:"join__button mt-2",type:"submit"},"Sign In")))))}),A=a(67),f=a(63),E=a.n(f),g=a(64),p=a.n(g),d=a(65),_=a.n(d),v=a(20),N=a.n(v),b=(a(117),function(e){var t=e.room;return s.a.createElement("div",{className:"info-bar"},s.a.createElement("div",{className:"info-bar__left"},s.a.createElement("img",{className:"online-icon",src:N.a,alt:"online icon"}),s.a.createElement("h3",null,t)),s.a.createElement("div",{className:"info-bar__right"},s.a.createElement("a",{href:"/"},s.a.createElement("img",{src:_.a,alt:"close icon"}))))}),h=(a(118),function(e){var t=e.message,a=e.messageHandler,n=e.enterHandler,c=e.sendMessage;return s.a.createElement("form",{className:"form"},s.a.createElement("input",{className:"form__input",type:"text",placeholder:"Type some message ...",value:t,onChange:a,onKeyPress:n}),s.a.createElement("button",{className:"form__button",onClick:c},"Send"))}),j=a(66),O=a.n(j),S=a(35),y=a.n(S),C=(a(164),function(e){var t=e.name,a=e.message,n=a.text,c=a.user,r=!1;return c===t.trim().toLowerCase()&&(r=!0),r?s.a.createElement("div",{className:"message__container justify-end"},s.a.createElement("p",{className:"message__send"},t),n&&s.a.createElement("div",{className:"message__box"},s.a.createElement("p",{className:"message__text"},y.a.emojify(n)))):s.a.createElement("div",{className:"message__container justify-start"},n&&s.a.createElement("div",{className:"message__box"},s.a.createElement("p",{className:"message__text"},y.a.emojify(n))),s.a.createElement("p",{className:"message__send"},c))}),I=(a(165),function(e){var t=e.messages,a=e.name;return s.a.createElement(O.a,{className:"messages"},t.map((function(e,t){return s.a.createElement("div",{key:t},s.a.createElement(C,{message:e,name:a}))})))}),x=(a(166),function(e){var t=e.users;return s.a.createElement("div",{className:"textContainer"},t?s.a.createElement("div",null,s.a.createElement("h1",null,"People currently chatting:"),s.a.createElement("div",{className:"activeContainer"},s.a.createElement("h2",null,t.map((function(e){var t=e.name;return s.a.createElement("div",{key:t,className:"activeItem"},t,s.a.createElement("img",{alt:"Online Icon",src:N.a}))}))))):null)}),R=(a(167),function(e){console.log("Render...");var t=e.location.search,a=Object(c.useState)(""),r=Object(i.a)(a,2),m=r[0],o=r[1],l=Object(c.useState)(""),u=Object(i.a)(l,2),f=u[0],g=u[1],d=Object(c.useState)(""),_=Object(i.a)(d,2),v=_[0],N=_[1],j=Object(c.useState)([]),O=Object(i.a)(j,2),S=O[0],y=O[1],C=Object(c.useState)(""),R=Object(i.a)(C,2),U=R[0],w=R[1],k=function(e){e.preventDefault(),v&&n.emit("sendMessage",v,(function(){N("")}))};return Object(c.useEffect)((function(){var e=E.a.parse(t),a=e.name,c=e.room;return(n=p()("https://chat-app-yn.herokuapp.com/")).emit("join",{name:a,room:c},(function(e){})),g(c),o(a),function(){n.emit("disconnect"),n.off()}}),[g,o,t]),Object(c.useEffect)((function(){n.on("message",(function(e){y([].concat(Object(A.a)(S),[e]))})),n.on("roomData",(function(e){var t=e.users;w(t)}))}),[S]),s.a.createElement("div",{className:"output__container"},s.a.createElement("div",{className:"output__contianer--inner"},s.a.createElement(b,{room:f}),s.a.createElement(I,{messages:S,name:m}),s.a.createElement(h,{message:v,messageHandler:function(e){return e.preventDefault(),N(e.target.value)},enterHandler:function(e){if("Enter"===e.key)return k(e)},sendMessage:k})),s.a.createElement(x,{users:U}))}),U=function(){return s.a.createElement(o.a,null,s.a.createElement(l.a,{path:"/",exact:!0,component:u}),s.a.createElement(l.a,{path:"/chat",exact:!0,component:R}))};m.a.render(s.a.createElement(U,null),document.getElementById("root"))},20:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},65:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},68:function(e,t,a){e.exports=a(168)},73:function(e,t,a){},74:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.9e044664.chunk.js.map