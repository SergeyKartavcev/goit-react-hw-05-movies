"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[777],{538:function(e,t,n){n.d(t,{aV:function(){return d},gj:function(){return v},iN:function(){return m},oo:function(){return h},q5:function(){return g}});var r=n(861),a=n(757),c=n.n(a),o=n(44),u="69cbf44b099c2de25af69dec6b9fd60c";o.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i="/trending/movie/week",s="/search/movie",f="/movie",l="/credits",p="/reviews",h=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,o.ZP.get("".concat(i,"?api_key=").concat(u,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,o.ZP.get("".concat(s,"?api_key=").concat(u,"&page=").concat(n,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("".concat(f,"/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("/movie/".concat(t).concat(l,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,o.ZP.get("/movie/".concat(t).concat(p,"?api_key=").concat(u,"&language=en-US&page=").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},722:function(e,t,n){n.d(t,{Z:function(){return c}});var r="Heading_heading__f8N4J",a=n(184);function c(e){var t=e.text;return(0,a.jsx)("h1",{className:r,children:t})}},510:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(731),a="MovieList_movie_list__IWl2j",c="MovieList_movie_item__Q205J",o="MovieList_poster__UbPpc",u=n(184);function i(e){var t=e.movies,n=e.prevLocation;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:a,children:t.map((function(e){return(0,u.jsxs)("li",{className:c,children:[(0,u.jsx)(r.rU,{to:{pathname:"movies/".concat(e.id),state:{from:n}},children:(0,u.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"noPhoto",alt:e.title,className:o})}),(0,u.jsx)("span",{children:e.title})]},e.id)}))})})}},777:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(885),a=n(689),c=n(791),o=n(731),u="SearchBar_search_form__JD4pT",i="SearchBar_search_input__fzacM",s="SearchBar_search_button__nzXi6",f=n(184);var l=function(e){var t=e.onSearch,n=(0,c.useState)(""),a=(0,r.Z)(n,2),o=a[0],l=a[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{className:u,onSubmit:function(e){e.preventDefault(),""===o.trim()&&alert("Enter the film title"),t(o),l("")},children:[(0,f.jsx)("input",{className:i,type:"text",name:"searchQuery",value:o,autoComplete:"off",autoFocus:!0,placeholder:"Search ...",onChange:function(e){l(e.target.value.toLowerCase())}}),(0,f.jsx)("button",{className:s,type:"submit",children:"Search"})]})})},p=n(538),h=n(510),v=n(198),d=n(722);var m=function(){var e=(0,o.lr)(),t=(0,r.Z)(e,2),n=t[0],u=t[1],i=(0,c.useState)([]),s=(0,r.Z)(i,2),m=s[0],g=s[1],_=(0,c.useState)(""),x=(0,r.Z)(_,2),Z=x[0],j=x[1],w=(0,c.useState)(!1),S=(0,r.Z)(w,2),b=S[0],k=S[1],y=(0,a.TH)(),N=n.get("query");return(0,c.useEffect)((function(){if(N){k(!0),(0,p.gj)(N).then((function(e){e.length||alert("No movies found!"),g(e)})).catch((function(e){j("Ooops. Something went wrong..."),console.log(e)})).finally(k(!1))}}),[N]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(v.Z,{children:[(0,f.jsx)(d.Z,{text:"Movie Search"}),b&&"Loading ...",Z&&(0,f.jsx)("div",{children:Z}),(0,f.jsx)(l,{onSearch:function(e){u({query:"".concat(e)})}}),m&&(0,f.jsx)(h.Z,{movies:m,prevLocation:y})]})})}}}]);
//# sourceMappingURL=777.dc4b8e00.chunk.js.map