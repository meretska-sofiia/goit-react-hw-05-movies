"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{102:function(n,t,r){r.d(t,{aQ:function(){return s},h$:function(){return i},hY:function(){return d},hx:function(){return p},w7:function(){return f}});var e=r(861),c=r(757),a=r.n(c),u=r(44),o=u.ZP.create({baseURL:"https://api.themoviedb.org/3/"}),s=function(){var n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/".concat("trending/movie/week"),{params:{api_key:"7cfdacb6fc50ec091436b65cc18a4ccd"}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/".concat("search/movie"),{params:{api_key:"7cfdacb6fc50ec091436b65cc18a4ccd",query:t}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(t),{params:{api_key:"7cfdacb6fc50ec091436b65cc18a4ccd"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(t,"/credits"),{params:{api_key:"7cfdacb6fc50ec091436b65cc18a4ccd"}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(t,"/reviews"),{params:{api_key:"7cfdacb6fc50ec091436b65cc18a4ccd"}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},146:function(n,t,r){r.d(t,{Z:function(){return v}});var e,c,a,u=r(739),o=r(168),s=r(444),i=r(731),f=s.ZP.ul(e||(e=(0,o.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),p=s.ZP.li(c||(c=(0,o.Z)(["\n  font-size: 18px;\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),d=(0,s.ZP)(i.rU)(a||(a=(0,o.Z)(["\n  text-decoration: none;\n  color: inherit;\n\n  &:hover,\n  &:focus {\n    color: rgb(84, 117, 201);\n  }\n"]))),l=r(184),v=function(n){var t=n.movieList,r=(0,u.TH)();return(0,l.jsx)(f,{children:t?t.map((function(n){return(0,l.jsx)(p,{children:(0,l.jsx)(d,{to:"/movies/".concat(n.id),state:{from:r},children:n.name||n.title})},n.id)})):null})}},544:function(n,t,r){r.r(t);var e=r(861),c=r(885),a=r(757),u=r.n(a),o=r(102),s=r(146),i=r(791),f=r(398),p=r(150),d=r(184);t.default=function(){var n=(0,i.useState)(null),t=(0,c.Z)(n,2),r=t[0],a=t[1],l=(0,i.useCallback)((0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.aQ)();case 2:t=n.sent,a(t);case 4:case"end":return n.stop()}}),n)}))),[]);return(0,i.useEffect)((function(){l()}),[l]),(0,d.jsxs)(p.W2,{children:[(0,d.jsx)(f.D,{children:"Trending today:"}),r?(0,d.jsx)(s.Z,{movieList:r}):null]})}},398:function(n,t,r){r.d(t,{D:function(){return a}});var e,c=r(168),a=r(444).ZP.h1(e||(e=(0,c.Z)(["\n  color: rgb(84, 117, 201);\n"])))}}]);
//# sourceMappingURL=544.0dbde812.chunk.js.map