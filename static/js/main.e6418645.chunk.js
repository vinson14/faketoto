(this.webpackJsonpfaketoto=this.webpackJsonpfaketoto||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(11),a=c.n(r),i=(c(27),c(10)),l=c(2),o=(c(28),c(5)),j=c(36),d=c(0),u=function(e){var t=e.children,c=e.onClick;return Object(d.jsx)("button",{className:"btn btn-pri rounded-0",onClick:c,children:t})},b=function(e){var t=e.children;return Object(d.jsx)("div",{className:"row my-3 justify-content-center",children:t})},h=function(e){var t=e.setShowSelectWinning;return Object(d.jsxs)(b,{children:[Object(d.jsxs)("div",{className:"col-10",children:[Object(d.jsx)("h1",{className:"display-2 text-center",children:"Fake Toto"}),Object(d.jsxs)("p",{className:"text-center",children:["This is a prank website to prank your family and friends",Object(d.jsx)("br",{}),Object(d.jsx)("br",{})," Select your winning numbers and select generate to watch the website simulate a real toto draw",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"This website is in no way affiliated with Singapore Pools Limited."]})]}),Object(d.jsx)("div",{className:"col-3 d-flex justify-content-center",children:Object(d.jsx)(u,{onClick:function(){return t(!0)},children:"Start"})})]})},m=function(e){var t=e.children;return Object(d.jsx)("div",{className:"container d-flex flex-column justify-content-center align-items-center",children:t})},x=c(13),O=function(e){var t=e.showThis,c=e.showNext,n=e.showBack,s=e.validation;return Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"row justify-content-center",children:[Object(d.jsx)("div",{className:"col-3 d-flex justify-content-center",children:Object(d.jsx)(u,{onClick:function(){t(!1),n(!0)},children:"Back"})}),Object(d.jsx)("div",{className:"col-3 d-flex justify-content-center",children:Object(d.jsx)(u,{onClick:function(){s().error?alert(s().error):(t(!1),c(!0))},children:"Next"})})]})})},f=function(e){for(var t=e.winningNumbers,c=e.setWinningNumbers,s=e.additionalNumber,r=e.setAdditionalNumber,a=e.showBack,i=e.showNext,l=e.showThis,j=Object(n.useState)(!1),u=Object(o.a)(j,2),b=u[0],h=u[1],m=[],f=1;f<50;f++)m.push(f);Object(n.useEffect)((function(){6===t.length?h(!0):h(!1)}),[t]);return Object(d.jsxs)("div",{className:"row my-3 justify-content-center",children:[Object(d.jsx)("div",{className:"col-12 text-center",children:Object(d.jsx)("h6",{children:b?0===s.length?"Select 1 Additional Number":"Click next to continue":"Select 6 Winning Numbers"})}),Object(d.jsx)("div",{className:"col-12 col-md-8",children:Object(d.jsx)("div",{className:"row",children:m.map((function(e){var n=t.includes(e),a=s.includes(e);return Object(d.jsx)("div",{className:"col-2 p-2 number d-flex justify-content-center ".concat(n&&"selected"," ").concat(a&&"selected-additional"),onClick:function(n){return function(e,n){for(var a=Object(x.a)(t),i=0;i<a.length;i++){if(a[i]===e)return a.splice(i,1),c(a),void n.currentTarget.classList.toggle("selected");if(1===s.length&&s[0]===e)return r([]),void n.currentTarget.classList.toggle("selected-additional")}b?(console.log("this ran"),n.currentTarget.classList.toggle("selected-additional"),r([e])):(console.log("this runs"),n.currentTarget.classList.toggle("selected"),c([].concat(Object(x.a)(t),[e])))}(e,n)},children:e},e)}))})}),Object(d.jsx)(O,{showThis:l,showNext:i,showBack:a,validation:function(){return b&&0===s.length?{error:"Please select 1 additional number"}:b?{}:{error:"Please select 6 winning numbers"}}})]})},p=function(e){var t=e.jackpot,c=e.setJackpot,n=e.showThis,s=e.showNext,r=e.showBack;return Object(d.jsxs)("div",{className:"row my-3 justify-content-center",children:[Object(d.jsx)("div",{className:"col-12 text-center",children:Object(d.jsx)("h6",{children:"Enter the Group 1 jackpot for today"})}),Object(d.jsx)("div",{className:"col-10",children:Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text rounded-0",children:"$"}),Object(d.jsx)("input",{type:"text",className:"form-control rounded-0","aria-label":"Amount (to the nearest dollar)",value:t,onChange:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&c(e.target.value)}})]})}),Object(d.jsx)(O,{showThis:n,showNext:s,showBack:r,validation:function(){return t?Number.isInteger(parseInt(t))?{}:{error:"Only numbers are allowed"}:{error:"Please do not leave this blank"}}})]})},N=function(e,t,c){var n="?";return e.forEach((function(e,t){n=n.concat("num".concat(t,"=").concat(e,"&"))})),n=n.concat("addNum=".concat(t,"&jackpot=").concat(c))},g=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),a=Object(o.a)(r,2),i=a[0],u=a[1],b=Object(n.useState)(!1),x=Object(o.a)(b,2),O=x[0],g=x[1],v=Object(n.useState)(!1),w=Object(o.a)(v,2),y=w[0],k=w[1],S=Object(n.useState)([]),T=Object(o.a)(S,2),E=T[0],A=T[1],B=Object(n.useState)([]),C=Object(o.a)(B,2),D=C[0],L=C[1],P=Object(n.useState)(""),W=Object(o.a)(P,2),I=W[0],F=W[1],J=1e3;return Object(d.jsxs)(m,{children:[Object(d.jsx)(j.a,{in:c,appear:!0,timeout:{appear:1e3,enter:1e3,exit:0},mountOnEnter:!0,unmountOnExit:!0,classNames:"transition",children:Object(d.jsx)(h,{setShowSelectWinning:u})}),Object(d.jsx)(j.a,{in:i,timeout:{appear:J,enter:J,exit:0},mountOnEnter:!0,unmountOnExit:!0,classNames:"transition",onEnter:function(){return s(!1)},children:Object(d.jsx)(f,{title:"Winning Numbers",winningNumbers:E,setWinningNumbers:A,additionalNumber:D,setAdditionalNumber:L,maxSelection:6,showNext:g,showBack:s,showThis:u})}),Object(d.jsx)(j.a,{in:O,timeout:{appear:J,enter:J,exit:0},mountOnEnter:!0,unmountOnExit:!0,classNames:"transition",children:Object(d.jsx)(p,{jackpot:I,setJackpot:F,showThis:g,showBack:u,showNext:k})}),Object(d.jsx)(j.a,{in:y,timeout:{appear:J,enter:J,exit:0},mountOnEnter:!0,unmountOnExit:!0,classNames:"transition",children:Object(d.jsx)(l.a,{push:!0,to:{pathname:"/simulation",search:N(E,D,I)}})})]})},v=function(e){var t=e.additionalNumber;return Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-12 grey-table",children:Object(d.jsx)("p",{className:"my-0 text-center p-2",children:"Additional Number"})}),Object(d.jsx)("div",{className:"col-12 light-grey-table",children:Object(d.jsx)("p",{className:"text-center my-0 py-2",children:t})})]})};function w(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var y=function(e){var t=e.jackpot;return Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-12 grey-table",children:Object(d.jsx)("p",{className:"my-0 text-center p-2",children:"Group 1 Prize"})}),Object(d.jsx)("div",{className:"col-12 light-grey-table",children:Object(d.jsxs)("p",{className:"text-center my-0 py-2",children:["$",w(t)]})})]})},k=c.p+"static/media/toto.1a58eb76.png",S=function(e){var t=e.jackpot,c=new Date(Date.now());return Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-3 d-flex justify-content-center align-items-center",children:Object(d.jsx)("img",{src:k,alt:"Toto Logo",className:"img-fluid"})}),Object(d.jsx)("div",{className:"col-9",children:Object(d.jsxs)("div",{className:"row align-items-center h-100",children:[Object(d.jsxs)("div",{className:"col-5 d-flex flex-column justify-content-center py-3",children:[Object(d.jsx)("p",{className:"my-0",children:"Next Jackpot"}),Object(d.jsx)("p",{className:"my-0",children:"Next Draw"})]}),Object(d.jsxs)("div",{className:"col-7 d-flex flex-column justify-content-center py-3",children:[Object(d.jsxs)("p",{className:"my-0",children:["$",w(t)," est"]}),Object(d.jsxs)("p",{className:"my-0",children:[" ",c.toDateString()]})]})]})})]})})},T=function(e){return Object(d.jsx)("div",{className:"col-5 d-flex justify-content-center",children:Object(d.jsx)(u,{children:Object(d.jsx)(i.b,{to:"/",children:"Back"})})})},E=function(){var e=new Date(Date.now());return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-6 table-header border border-end border-white",children:Object(d.jsx)("p",{className:"text-center text-white my-0 py-2",children:e.toDateString()})}),Object(d.jsx)("div",{className:"col-6 table-header border border-start border-white",children:Object(d.jsx)("p",{className:"text-center text-white my-0 py-2",children:"Draw No. 3888"})})]})},A=function(e){var t=e.number,c=Object(n.useState)(0),s=Object(o.a)(c,2),r=s[0],a=s[1];Object(n.useEffect)((function(){var e=setInterval((function(){a(i())}),30),c=setTimeout((function(){clearInterval(e),a(t)}),5e3);return function(){clearTimeout(c)}}),[t]);var i=function(){return Math.floor(50*Math.random())};return Object(d.jsx)("div",{className:"col-2 light-grey-table",children:Object(d.jsx)("p",{className:"text-center my-0 py-2",children:r})})},B=function(e){var t=e.winningNumbers,c=Object(n.useState)([t[0]]),s=Object(o.a)(c,2),r=s[0],a=s[1],i=Object(n.useState)(0),l=Object(o.a)(i,2),j=l[0],u=l[1];return Object(n.useEffect)((function(){console.log("useffect ran");var e=setTimeout((function(){j<t.length-1&&(a([].concat(Object(x.a)(r),[t[j+1]])),u(j+1))}),5e3);return function(){clearTimeout(e),console.log("clear useeffect ran")}}),[t,r,j]),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-12 grey-table",children:Object(d.jsx)("p",{className:"my-0 text-center p-2",children:"Winning Numbers"})}),r.map((function(e){return Object(d.jsx)(A,{number:e},e)}))]})},C=function(e){var t=[{group:1,shareAmount:e.jackpot,shares:1},{group:2,shareAmount:188888,shares:8},{group:3,shareAmount:1388,shares:568},{group:4,shareAmount:388,shares:1288},{group:5,shareAmount:50,shares:30888},{group:6,shareAmount:25,shares:33688},{group:7,shareAmount:10,shares:588888}];return Object(d.jsx)("div",{className:"row mt-3",children:Object(d.jsx)("div",{className:"col-12 p-0",children:Object(d.jsxs)("table",{className:"table table-bordered text-center",children:[Object(d.jsx)("thead",{className:"grey-table",children:Object(d.jsx)("tr",{children:Object(d.jsx)("th",{colSpan:3,children:"Winning Shares"})})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Prize Group"}),Object(d.jsx)("th",{children:"Share Amount"}),Object(d.jsx)("th",{children:"No. of Winning Shares"})]}),t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:["Group ",e.group]}),Object(d.jsxs)("td",{children:["$",w(e.shareAmount)]}),Object(d.jsx)("td",{children:w(e.shares)})]},e.group)}))]})]})})})};var D=function(){for(var e=new URLSearchParams(Object(l.g)().search),t=[],c=0;c<6;c++)t.push(e.get("num".concat(c)));var n=[e.get("addNum")],s=e.get("jackpot");return Object(d.jsx)(j.a,{in:!0,appear:!0,timeout:{appear:1e3,enter:1e3,exit:0},mountOnEnter:!0,unmountOnExit:!0,classNames:"transition",children:Object(d.jsxs)(m,{children:[Object(d.jsx)(b,{children:Object(d.jsx)("div",{className:"col-12 col-md-6",children:Object(d.jsxs)("div",{className:"row justify-content-center",children:[Object(d.jsx)(S,{jackpot:s}),Object(d.jsxs)("div",{className:"col-10",children:[Object(d.jsx)(E,{}),Object(d.jsx)(B,{winningNumbers:t}),Object(d.jsx)(v,{additionalNumber:n}),Object(d.jsx)(y,{jackpot:s}),Object(d.jsx)(C,{jackpot:s})]})]})})}),Object(d.jsx)(b,{children:Object(d.jsx)(T,{})})]})})};function L(){var e=Object(l.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var P=function(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(L,{}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/",children:Object(d.jsx)(g,{})}),Object(d.jsx)(l.b,{path:"/simulation",children:Object(d.jsx)(D,{})})]})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root")),W()}},[[35,1,2]]]);
//# sourceMappingURL=main.e6418645.chunk.js.map