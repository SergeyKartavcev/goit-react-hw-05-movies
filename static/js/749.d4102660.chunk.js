"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[749],{538:function(t,n,e){e.d(n,{aV:function(){return h},gj:function(){return v},iN:function(){return g},oo:function(){return d},q5:function(){return m}});var r=e(861),a=e(757),c=e.n(a),u=e(44),o="69cbf44b099c2de25af69dec6b9fd60c";u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i="/trending/movie/week",s="/search/movie",f="/movie",p="/credits",l="/reviews",d=function(){var t=(0,r.Z)(c().mark((function t(){var n,e,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,u.ZP.get("".concat(i,"?api_key=").concat(o,"&page=").concat(n,"&language=en-US&include_adult=false"));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.ZP.get("".concat(s,"/?api_key=").concat(o,"&page=").concat(e,"&query=").concat(n,"&language=en-US&include_adult=false"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(f,"/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n).concat(p,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.ZP.get("/movie/".concat(n).concat(l,"?api_key=").concat(o,"&language=en-US&page=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},722:function(t,n,e){e.d(n,{Z:function(){return c}});var r="Heading_heading__f8N4J",a=e(184);function c(t){var n=t.text;return(0,a.jsx)("h1",{className:r,children:n})}},510:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(731),a="MovieList_movie_list__IWl2j",c="MovieList_movie_item__Q205J",u="MovieList_poster__UbPpc",o=e(184);function i(t){var n=t.movies,e=t.prevLocation;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{className:a,children:n.map((function(t){return(0,o.jsxs)("li",{className:c,children:[(0,o.jsx)(r.rU,{to:{pathname:"movies/".concat(t.id),state:{from:e}},children:(0,o.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):"noPhoto",alt:t.title,className:u})}),(0,o.jsx)("span",{children:t.title})]},t.id)}))})})}},749:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(885),a=e(791),c=e(538),u=e(198),o=e(722),i=e(510),s=e(184);function f(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],f=n[1],p=(0,a.useState)(null),l=(0,r.Z)(p,2),d=l[0],v=l[1],h=(0,a.useState)(!1),g=(0,r.Z)(h,2),m=g[0],_=g[1];return(0,a.useEffect)((function(){_(!0),(0,c.oo)().then((function(t){f(t)})).catch((function(t){v("something went wrong..."),console.log(t)})).finally((function(){return _(!1)}))}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(o.Z,{text:"Trending Movies"}),m&&"Loading...",d&&(0,s.jsx)("div",{children:d}),e&&(0,s.jsx)(i.Z,{movies:e})]})})}}}]);
//# sourceMappingURL=749.d4102660.chunk.js.map