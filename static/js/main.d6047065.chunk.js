(this.webpackJsonpfaketoto=this.webpackJsonpfaketoto||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(9),i=n.n(s),a=(n(26),n(19)),l=n(2),o=n(0),j=function(){return Object(o.jsx)("h1",{children:"About Page"})},u=(n(28),n(11)),d=n(36),b=n.p+"static/media/toto.1a58eb76.png";function m(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var h=function(e){var t=e.groupOnePrize,n=new Date(Date.now());return Object(o.jsx)("div",{className:"col-12 col-md-6",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-3 d-flex justify-content-center align-items-center",children:Object(o.jsx)("img",{src:b,alt:"Toto Logo",className:"img-fluid"})}),Object(o.jsx)("div",{className:"col-9",children:Object(o.jsxs)("div",{className:"row align-items-center h-100",children:[Object(o.jsxs)("div",{className:"col-5 d-flex flex-column justify-content-center py-3",children:[Object(o.jsx)("p",{className:"my-0",children:"Next Jackpot"}),Object(o.jsx)("p",{className:"my-0",children:"Next Draw"})]}),Object(o.jsxs)("div",{className:"col-7 d-flex flex-column justify-content-center py-3",children:[Object(o.jsxs)("p",{className:"my-0",children:["$",m(t)," est"]}),Object(o.jsxs)("p",{className:"my-0",children:[" ",n.toDateString()]})]})]})})]})})},x=function(){var e=new Date(Date.now());return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-6 table-header border border-end border-white",children:Object(o.jsx)("p",{className:"text-center text-white my-0 py-2",children:e.toDateString()})}),Object(o.jsx)("div",{className:"col-6 table-header border border-start border-white",children:Object(o.jsx)("p",{className:"text-center text-white my-0 py-2",children:"Draw No. 3888"})})]})},O=function(e){var t=e.winningNumbers;return Object(o.jsxs)("div",{className:"row mt-3",children:[Object(o.jsx)("div",{className:"col-12 grey-table",children:Object(o.jsx)("p",{className:"my-0 text-center p-2",children:"Winning Numbers"})}),t.map((function(e){return Object(o.jsx)("div",{className:"col-2 light-grey-table",children:Object(o.jsx)("p",{className:"text-center my-0 py-2",children:e})},e)}))]})},N=function(e){var t=[{group:1,shareAmount:e.groupOnePrize,shares:1},{group:2,shareAmount:188888,shares:8},{group:3,shareAmount:1388,shares:568},{group:4,shareAmount:388,shares:1288},{group:5,shareAmount:50,shares:30888},{group:6,shareAmount:25,shares:33688},{group:7,shareAmount:10,shares:588888}];return Object(o.jsx)("div",{className:"row mt-3",children:Object(o.jsx)("div",{className:"col-12 p-0",children:Object(o.jsxs)("table",{className:"table table-bordered text-center",children:[Object(o.jsx)("thead",{className:"grey-table",children:Object(o.jsx)("tr",{children:Object(o.jsx)("th",{colSpan:3,children:"Winning Shares"})})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Prize Group"}),Object(o.jsx)("th",{children:"Share Amount"}),Object(o.jsx)("th",{children:"No. of Winning Shares"})]}),t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("td",{children:["Group ",e.group]}),Object(o.jsxs)("td",{children:["$",m(e.shareAmount)]}),Object(o.jsx)("td",{children:m(e.shares)})]},e.group)}))]})]})})})},p=function(e){var t=e.additionalNumber;return Object(o.jsxs)("div",{className:"row mt-3",children:[Object(o.jsx)("div",{className:"col-12 grey-table",children:Object(o.jsx)("p",{className:"my-0 text-center p-2",children:"Additional Number"})}),Object(o.jsx)("div",{className:"col-12 light-grey-table",children:Object(o.jsx)("p",{className:"text-center my-0 py-2",children:t})})]})},g=function(e){var t=e.groupOnePrize;return Object(o.jsxs)("div",{className:"row mt-3",children:[Object(o.jsx)("div",{className:"col-12 grey-table",children:Object(o.jsx)("p",{className:"my-0 text-center p-2",children:"Group 1 Prize"})}),Object(o.jsx)("div",{className:"col-12 light-grey-table",children:Object(o.jsxs)("p",{className:"text-center my-0 py-2",children:["$",m(t)]})})]})},f=function(e){var t=e.children,n=e.onClick;return Object(o.jsx)("button",{className:"btn btn-pri rounded-0",onClick:n,children:t})},v=function(e){var t=e.setStartEmulation;return Object(o.jsx)("div",{className:"col-5 d-flex justify-content-center",children:Object(o.jsx)(f,{onClick:function(){return t(!1)},children:"Return Home"})})},y=function(e){var t=e.winningNumbers,n=e.additionalNumber,c=e.groupOnePrize,r=e.setStartEmulation;return Object(o.jsx)("div",{className:"col-12",children:Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)(h,{groupOnePrize:c}),Object(o.jsxs)("div",{className:"col-10 col-md-5 col-lg-4",children:[Object(o.jsx)(x,{}),Object(o.jsx)(O,{winningNumbers:t}),Object(o.jsx)(p,{additionalNumber:n}),Object(o.jsx)(g,{groupOnePrize:c}),Object(o.jsx)(N,{groupOnePrize:c})]}),Object(o.jsx)(v,{setStartEmulation:r})]})})},w=n(17),S=function(e){for(var t=e.title,n=e.numbers,c=e.setNumbers,r=e.maxSelection,s=[],i=1;i<50;i++)s.push(i);return Object(o.jsxs)("div",{className:"row my-3",children:[Object(o.jsx)("div",{className:"col-12",children:Object(o.jsxs)("h6",{children:["Select ",r," ",t]})}),s.map((function(e){var s=n.includes(e);return Object(o.jsx)("div",{className:"col-2 d-flex justify-content-center ".concat(s&&"selected"),onClick:function(s){return function(e,s){for(var i=Object(w.a)(n),a=0;a<i.length;a++)if(i[a]===e)return i.splice(a,1),c(i),void s.currentTarget.classList.toggle("selected");n.length!==r?(s.currentTarget.classList.toggle("selected"),c([].concat(Object(w.a)(n),[e]))):alert("You can only select ".concat(r," ").concat(t))}(e,s)},children:Object(o.jsx)("button",{className:"btn",children:e})})}))]})},P=function(e){var t=e.startEmulation,n=e.setStartEmulation,c=e.winningNumbers,r=e.additionalNumber;return Object(o.jsx)(f,{onClick:function(){6!==c.length?alert("Please select 6 Winning Numbers"):1!==r.length?alert("Please select 1 Additional Number"):n(!t)},children:"Start Emulation"})},E=function(e){var t=e.groupOnePrize,n=e.setGroupOnePrize;return Object(o.jsxs)("div",{className:"row my-3 justify-content-center",children:[Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("h6",{children:"Enter the Group 1 jackpot for today"})}),Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("span",{className:"input-group-text rounded-0",children:"$"}),Object(o.jsx)("input",{type:"text",className:"form-control rounded-0","aria-label":"Amount (to the nearest dollar)",value:t,onChange:function(e){n(e.target.value)}})]})]})},z=function(e){var t=e.winningNumbers,n=e.additionalNumber,c=e.groupOnePrize,r=e.setGroupOnePrize,s=e.setWinningNumbers,i=e.setAdditionalNumber,a=e.startEmulation,l=e.setStartEmulation;return Object(o.jsxs)("div",{className:"col-10 col-md-5 col-lg-4 d-flex flex-column justify-content-center align-items-center",children:[Object(o.jsx)(E,{groupOnePrize:c,setGroupOnePrize:r}),Object(o.jsx)(S,{title:"Winning Numbers",numbers:t,setNumbers:s,maxSelection:6}),Object(o.jsx)(S,{title:"Additional Number",numbers:n,setNumbers:i,maxSelection:1}),Object(o.jsx)(P,{winningNumbers:t,additionalNumber:n,startEmulation:a,setStartEmulation:l})]})},A=function(){return Object(o.jsxs)("div",{className:"col-10",children:[Object(o.jsx)("h1",{className:"display-2 text-center",children:"Fake Toto"}),Object(o.jsxs)("p",{className:"text-center",children:["This is a prank website to prank your family and friends",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})," Select your winning numbers and select generate to watch the website emulate a real toto draw",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"This website is in no way affiliated with Singapore Pools Limited."]})]})},k=function(e){var t=e.children;return Object(o.jsx)("div",{className:"container",children:t})},C=function(e){var t=e.children;return Object(o.jsx)(k,{children:t.map((function(e){return Object(o.jsx)("div",{className:"row justify-content-center my-3",children:e})}))})},D=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(u.a)(s,2),a=i[0],l=i[1],j=Object(c.useState)(""),b=Object(u.a)(j,2),m=b[0],h=b[1],x=Object(c.useState)(!1),O=Object(u.a)(x,2),N=O[0],p=O[1];return Object(o.jsxs)(C,{children:[Object(o.jsx)(d.a,{in:!N,mountOnEnter:!0,unmountOnExit:!0,timeout:{appear:2e3,enter:2e3,exit:0},classNames:"emulation",children:Object(o.jsx)(A,{})}),Object(o.jsx)(d.a,{in:!N,mountOnEnter:!0,unmountOnExit:!0,timeout:{appear:2e3,enter:2e3,exit:0},classNames:"emulation",children:Object(o.jsx)(z,{winningNumbers:n,additionalNumber:a,groupOnePrize:m,setWinningNumbers:r,setAdditionalNumber:l,startEmulation:N,setStartEmulation:p,setGroupOnePrize:h})}),Object(o.jsx)(d.a,{in:N,mountOnEnter:!0,unmountOnExit:!0,timeout:{appear:2e3,enter:2e3,exit:0},classNames:"emulation",children:Object(o.jsx)(y,{winningNumbers:n,additionalNumber:a,groupOnePrize:m,setStartEmulation:p})})]})},G=function(){return Object(o.jsx)(a.a,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsx)(D,{})}),Object(o.jsx)(l.a,{exact:!0,path:"/about",children:Object(o.jsx)(j,{})})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(G,{})}),document.getElementById("root")),T()}},[[34,1,2]]]);
//# sourceMappingURL=main.d6047065.chunk.js.map