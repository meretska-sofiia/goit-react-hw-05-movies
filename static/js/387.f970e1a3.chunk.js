"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{102:function(e,r,t){t.d(r,{aQ:function(){return i},h$:function(){return o},hY:function(){return h},hx:function(){return f},w7:function(){return p}});var n=t(861),c=t(757),a=t.n(c),u=t(44),s=u.ZP.create({baseURL:"https://api.themoviedb.org/3/"}),i=function(){var e=(0,n.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/".concat("trending/movie/week"),{params:{api_key:"7cfdacb6fc50ec091436b65cc18a4ccd"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/".concat("search/movie"),{params:{api_key:"7cfdacb6fc50ec091436b65cc18a4ccd",query:r}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r),{params:{api_key:"7cfdacb6fc50ec091436b65cc18a4ccd"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/credits"),{params:{api_key:"7cfdacb6fc50ec091436b65cc18a4ccd"}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/reviews"),{params:{api_key:"7cfdacb6fc50ec091436b65cc18a4ccd"}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},387:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var n,c=t(861),a=t(885),u=t(757),s=t.n(u),i=t(102),o=t(791),p=t(739),f=t(168),h=t(444).ZP.ul(n||(n=(0,f.Z)(["\n  list-style: none;\n"]))),d=t(150),v=t(184),l=function(){var e=(0,o.useState)([]),r=(0,a.Z)(e,2),t=r[0],n=r[1],u=(0,o.useState)(""),f=(0,a.Z)(u,2),l=f[0],m=f[1],x=(0,p.UO)().movieId,w=(0,o.useCallback)((0,c.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.hY)(x);case 3:r=e.sent,n(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[x]);return(0,o.useEffect)((function(){w()}),[w]),l?(0,v.jsx)(d.W2,{children:(0,v.jsx)("p",{children:"Something went wrong..."})}):t?(0,v.jsx)(d.W2,{children:0!==t.length?(0,v.jsx)(h,{children:t.map((function(e){var r=e.author,t=e.content,n=e.id;return(0,v.jsxs)("li",{children:[(0,v.jsx)("h2",{children:r&&r}),(0,v.jsx)("p",{children:t&&t})]},n)}))}):(0,v.jsx)("p",{children:"We don't have any reviews for this movie"})}):(0,v.jsx)(d.W2,{children:(0,v.jsx)("p",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=387.f970e1a3.chunk.js.map