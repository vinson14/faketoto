(this.webpackJsonpfaketoto=this.webpackJsonpfaketoto||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(11),a=c.n(r),i=(c(26),c(10)),l=c(2),o=(c(27),c(8)),j=c(36),d=c(0),b=function(e){var t=e.children,c=e.onClick;return Object(d.jsx)("button",{className:"btn btn-pri rounded-0",onClick:c,children:t})},h=function(e){var t=e.children;return Object(d.jsx)("div",{className:"row my-3 justify-content-center",children:t})},u=function(e){var t=e.setShowSelectWinning;return Object(d.jsxs)(h,{children:[Object(d.jsxs)("div",{className:"col-10",children:[Object(d.jsx)("h1",{className:"display-2 text-center",children:"Fake Toto"}),Object(d.jsxs)("p",{className:"text-center",children:["This is a prank website to prank your family and friends",Object(d.jsx)("br",{}),Object(d.jsx)("br",{})," Select your winning numbers and select generate to watch the website simulate a real toto draw",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"This website is in no way affiliated with Singapore Pools Limited."]})]}),Object(d.jsx)("div",{className:"col-3 d-flex justify-content-center",children:Object(d.jsx)(b,{onClick:function(){return t(!0)},children:"Start"})})]})},x=function(e){var t=e.children;return Object(d.jsx)("div",{className:"container d-flex flex-column justify-content-center align-items-center",children:t})},m=c(18),O=function(e){var t=e.showThis,c=e.showNext,n=e.showBack;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"col-3 d-flex justify-content-center",children:Object(d.jsx)(b,{onClick:function(){t(!1),n(!0)},children:"Back"})}),Object(d.jsx)("div",{className:"col-3 d-flex justify-content-center",children:Object(d.jsx)(b,{onClick:function(){t(!1),c(!0)},children:"Next"})})]})},p=function(e){for(var t=e.title,c=e.numbers,n=e.setNumbers,s=e.maxSelection,r=e.showBack,a=e.showNext,i=e.showThis,l=[],o=1;o<50;o++)l.push(o);return Object(d.jsxs)("div",{className:"row my-3 justify-content-center",children:[Object(d.jsx)("div",{className:"col-12 text-center",children:Object(d.jsxs)("h6",{children:["Select ",s," ",t]})}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("div",{className:"row",children:l.map((function(e){var r=c.includes(e);return Object(d.jsx)("div",{className:"col-2 d-flex justify-content-center ".concat(r&&"selected"),onClick:function(r){return function(e,r){for(var a=Object(m.a)(c),i=0;i<a.length;i++)if(a[i]===e)return a.splice(i,1),n(a),void r.currentTarget.classList.toggle("selected");c.length!==s?(r.currentTarget.classList.toggle("selected"),n([].concat(Object(m.a)(c),[e]))):alert("You can only select ".concat(s," ").concat(t))}(e,r)},children:Object(d.jsx)("button",{className:"btn",children:e})},e)}))})}),Object(d.jsx)(O,{showThis:i,showNext:a,showBack:r})]})},N=function(e){var t=e.jackpot,c=e.setJackpot,n=e.showThis,s=e.showNext,r=e.showBack;return Object(d.jsxs)("div",{className:"row my-3 justify-content-center",children:[Object(d.jsx)("div",{className:"col-12 text-center",children:Object(d.jsx)("h6",{children:"Enter the Group 1 jackpot for today"})}),Object(d.jsx)("div",{className:"col-10",children:Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text rounded-0",children:"$"}),Object(d.jsx)("input",{type:"text",className:"form-control rounded-0","aria-label":"Amount (to the nearest dollar)",value:t,onChange:function(e){c(e.target.value)}})]})}),Object(d.jsx)(O,{showThis:n,showNext:s,showBack:r})]})},f=function(e,t,c){var n="?";return e.forEach((function(e,t){n=n.concat("num".concat(t,"=").concat(e,"&"))})),n=n.concat("addNum=".concat(t,"&jackpot=").concat(c))},v=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),a=Object(o.a)(r,2),i=a[0],b=a[1],h=Object(n.useState)(!1),m=Object(o.a)(h,2),O=m[0],v=m[1],g=Object(n.useState)(!1),w=Object(o.a)(g,2),y=w[0],k=w[1],S=Object(n.useState)(!1),T=Object(o.a)(S,2),E=T[0],B=T[1],A=Object(n.useState)([]),C=Object(o.a)(A,2),D=C[0],L=C[1],F=Object(n.useState)([]),P=Object(o.a)(F,2),W=P[0],J=P[1],G=Object(n.useState)(""),$=Object(o.a)(G,2),z=$[0],I=$[1],M=1e3;return Object(d.jsxs)(x,{children:[Object(d.jsx)(j.a,{in:c,appear:!0,timeout:{appear:1e3,enter:1e3,exit:0},mountOnEnter:!0,unmountOnExit:!0,classNames:"transition",children:Object(d.jsx)(u,{setShowSelectWinning:b})}),Object(d.jsx)(j.a,{in:i,timeout:{appear:M,enter:M,exit:0},mountOnEnter:!0,unmountOnExit:!0,classNames:"transition",onEnter:function(){return s(!1)},children:Object(d.jsx)(p,{title:"Winning Numbers",numbers:D,setNumbers:L,maxSelection:6,showNext:v,showBack:s,showThis:b})}),Object(d.jsx)(j.a,{in:O,timeout:{appear:M,enter:M,exit:0},mountOnEnter:!0,unmountOnExit:!0,classNames:"transition",onEnter:function(){return b(!1)},children:Object(d.jsx)(p,{title:"Additional Number",numbers:W,setNumbers:J,maxSelection:1,showNext:k,showBack:b,showThis:v})}),Object(d.jsx)(j.a,{in:y,timeout:{appear:M,enter:M,exit:0},mountOnEnter:!0,unmountOnExit:!0,classNames:"transition",children:Object(d.jsx)(N,{jackpot:z,setJackpot:I,showThis:k,showBack:v,showNext:B})}),Object(d.jsx)(j.a,{in:E,timeout:{appear:M,enter:M,exit:0},mountOnEnter:!0,unmountOnExit:!0,classNames:"transition",children:Object(d.jsx)(l.a,{push:!0,to:{pathname:"/simulation",search:f(D,W,z)}})})]})},g=function(e){var t=e.additionalNumber;return Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-12 grey-table",children:Object(d.jsx)("p",{className:"my-0 text-center p-2",children:"Additional Number"})}),Object(d.jsx)("div",{className:"col-12 light-grey-table",children:Object(d.jsx)("p",{className:"text-center my-0 py-2",children:t})})]})};function w(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var y=function(e){var t=e.jackpot;return Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-12 grey-table",children:Object(d.jsx)("p",{className:"my-0 text-center p-2",children:"Group 1 Prize"})}),Object(d.jsx)("div",{className:"col-12 light-grey-table",children:Object(d.jsxs)("p",{className:"text-center my-0 py-2",children:["$",w(t)]})})]})},k=c.p+"static/media/toto.1a58eb76.png",S=function(e){var t=e.jackpot,c=new Date(Date.now());return Object(d.jsx)("div",{className:"col-12 col-md-6",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-3 d-flex justify-content-center align-items-center",children:Object(d.jsx)("img",{src:k,alt:"Toto Logo",className:"img-fluid"})}),Object(d.jsx)("div",{className:"col-9",children:Object(d.jsxs)("div",{className:"row align-items-center h-100",children:[Object(d.jsxs)("div",{className:"col-5 d-flex flex-column justify-content-center py-3",children:[Object(d.jsx)("p",{className:"my-0",children:"Next Jackpot"}),Object(d.jsx)("p",{className:"my-0",children:"Next Draw"})]}),Object(d.jsxs)("div",{className:"col-7 d-flex flex-column justify-content-center py-3",children:[Object(d.jsxs)("p",{className:"my-0",children:["$",w(t)," est"]}),Object(d.jsxs)("p",{className:"my-0",children:[" ",c.toDateString()]})]})]})})]})})},T=function(e){return Object(d.jsx)("div",{className:"col-5 d-flex justify-content-center",children:Object(d.jsx)(b,{children:Object(d.jsx)(i.b,{to:"/new",children:"Back"})})})},E=function(){var e=new Date(Date.now());return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-6 table-header border border-end border-white",children:Object(d.jsx)("p",{className:"text-center text-white my-0 py-2",children:e.toDateString()})}),Object(d.jsx)("div",{className:"col-6 table-header border border-start border-white",children:Object(d.jsx)("p",{className:"text-center text-white my-0 py-2",children:"Draw No. 3888"})})]})},B=function(e){var t=e.winningNumbers;return Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-12 grey-table",children:Object(d.jsx)("p",{className:"my-0 text-center p-2",children:"Winning Numbers"})}),t.map((function(e){return Object(d.jsx)("div",{className:"col-2 light-grey-table",children:Object(d.jsx)("p",{className:"text-center my-0 py-2",children:e})},e)}))]})},A=function(e){var t=[{group:1,shareAmount:e.jackpot,shares:1},{group:2,shareAmount:188888,shares:8},{group:3,shareAmount:1388,shares:568},{group:4,shareAmount:388,shares:1288},{group:5,shareAmount:50,shares:30888},{group:6,shareAmount:25,shares:33688},{group:7,shareAmount:10,shares:588888}];return Object(d.jsx)("div",{className:"row mt-3",children:Object(d.jsx)("div",{className:"col-12 p-0",children:Object(d.jsxs)("table",{className:"table table-bordered text-center",children:[Object(d.jsx)("thead",{className:"grey-table",children:Object(d.jsx)("tr",{children:Object(d.jsx)("th",{colSpan:3,children:"Winning Shares"})})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Prize Group"}),Object(d.jsx)("th",{children:"Share Amount"}),Object(d.jsx)("th",{children:"No. of Winning Shares"})]}),t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:["Group ",e.group]}),Object(d.jsxs)("td",{children:["$",w(e.shareAmount)]}),Object(d.jsx)("td",{children:w(e.shares)})]},e.group)}))]})]})})})};var C=function(){for(var e=new URLSearchParams(Object(l.g)().search),t=[],c=0;c<6;c++)t.push(e.get("num".concat(c)));var n=[e.get("addNum")],s=e.get("jackpot");return Object(d.jsx)(x,{children:Object(d.jsxs)(h,{children:[Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"row justify-content-center",children:[Object(d.jsx)(S,{jackpot:s}),Object(d.jsxs)("div",{className:"col-10 col-md-5 col-lg-4",children:[Object(d.jsx)(E,{}),Object(d.jsx)(B,{winningNumbers:t}),Object(d.jsx)(g,{additionalNumber:n}),Object(d.jsx)(y,{jackpot:s}),Object(d.jsx)(A,{jackpot:s})]})]})}),Object(d.jsx)(T,{})]})})};function D(){var e=Object(l.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var L=function(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(D,{}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/",children:Object(d.jsx)(v,{})}),Object(d.jsx)(l.b,{path:"/simulation",children:Object(d.jsx)(C,{})})]})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),F()}},[[34,1,2]]]);
//# sourceMappingURL=main.36af1429.chunk.js.map