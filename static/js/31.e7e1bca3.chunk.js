(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[31],{1867:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var i,c,o,r=n(9),l=n(8),d=n(1),u=n(5),a=n(2),s=n(91),j=n(14),b=n(22),x=n(378),h=n(100),O=n(104),m=n(47),f=n(221),p=n(195),g=n.p+"static/media/sliderImg1.b1596d06.jpg",v=n(0),k=Object(u.e)(a.w)(i||(i=Object(l.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.colors.dropdownDeep})),y=u.e.div(c||(c=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-height: calc(100vh - 64px);\n  background: ",";\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),w=u.e.div(o||(o=Object(l.a)(["\n  width: 100%;\n  img {\n    width: 100%;\n    margin: -1em 0 2em;\n  }\n"])));function q(){var e=Object(b.a)().account,t=Object(j.b)().t,n=Object(m.k)(),i=Object(d.useMemo)((function(){return n.map((function(e){return{liquidityToken:Object(m.a)(e),tokens:e}}))}),[n]),c=Object(d.useMemo)((function(){return i.map((function(e){return e.liquidityToken}))}),[i]),o=Object(h.f)(null!==e&&void 0!==e?e:void 0,c),l=Object(r.a)(o,2),u=l[0],q=l[1],A=Object(d.useMemo)((function(){return i.filter((function(e){var t,n=e.liquidityToken;return null===(t=u[n.address])||void 0===t?void 0:t.greaterThan("0")}))}),[i,u]),S=Object(O.c)(A.map((function(e){return e.tokens}))),T=q||(null===S||void 0===S?void 0:S.length)<A.length||(null===S||void 0===S?void 0:S.some((function(e){return!e}))),L=S.map((function(e){return Object(r.a)(e,2)[1]})).filter((function(e){return Boolean(e)}));return Object(v.jsxs)(y,{children:[Object(v.jsx)(w,{children:Object(v.jsx)("img",{src:g,alt:"SwapBanner"})}),Object(v.jsxs)(p.a,{children:[Object(v.jsx)(p.b,{title:t("Your Liquidity"),subtitle:t("Remove liquidity to receive tokens back")}),Object(v.jsxs)(k,{children:[e?T?Object(v.jsx)(a.jc,{color:"textSubtle",textAlign:"center",children:Object(v.jsx)(f.a,{children:t("Loading")})}):(null===L||void 0===L?void 0:L.length)>0?L.map((function(e,t){return Object(v.jsx)(x.b,{pair:e,mb:t<L.length-1?"16px":0},e.liquidityToken.address)})):Object(v.jsx)(a.jc,{color:"textSubtle",textAlign:"center",children:t("No liquidity found.")}):Object(v.jsx)(a.jc,{color:"textSubtle",textAlign:"center",children:t("Connect to a wallet to view your liquidity.")}),e&&!T&&Object(v.jsxs)(a.X,{flexDirection:"column",alignItems:"center",mt:"24px",children:[Object(v.jsx)(a.jc,{color:"textSubtle",mb:"8px",children:t("Don't see a pool you joined?")}),Object(v.jsx)(a.r,{id:"import-pool-link",variant:"secondary",scale:"sm",as:s.a,to:"/find",children:t("Find other LP tokens")})]})]}),Object(v.jsx)(a.x,{style:{textAlign:"center"},children:Object(v.jsx)(a.r,{id:"join-pool-button",as:s.a,to:"/add",width:"100%",startIcon:Object(v.jsx)(a.a,{color:"white"}),children:t("Add Liquidity")})})]})]})}}}]);
//# sourceMappingURL=31.e7e1bca3.chunk.js.map