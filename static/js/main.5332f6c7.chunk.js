(this.webpackJsonpcreate_react_app=this.webpackJsonpcreate_react_app||[]).push([[0],{20:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),i=r(11),s=r.n(i),a=r(7),j=r(2),d=r(6),u=r.n(d),o=r(8),b=r(4),l=r(5),m=r.n(l),O=r(1);function h(e){var t=e.id,r=e.coverImg,n=e.rating,c=e.runtime,i=e.description_full,s=e.title,j=e.summary,d=e.genres;return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:r,alt:s}),Object(O.jsx)("h2",{children:Object(O.jsx)(a.b,{to:"/movie/".concat(t),children:s})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:n&&"rating: ".concat(n)}),Object(O.jsx)("p",{children:c&&"runtime: ".concat(c," (min)")})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:j&&"<summary>"}),Object(O.jsx)("p",{children:j})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:i&&"<description>"}),Object(O.jsx)("p",{children:i})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:d&&"<genres>"}),Object(O.jsx)("ul",{children:d&&d.map((function(e){return Object(O.jsx)("li",{children:e},e)}))})]})]})}h.prototypes={id:m.a.number.isRequired,coverImg:m.a.string.isRequired,title:m.a.string.isRequired,summary:m.a.string.isRequired,genres:m.a.arrayOf(m.a.string).isRequired};var x=h;var v=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),r=t[0],c=t[1],i=Object(n.useState)([]),s=Object(b.a)(i,2),a=s[0],j=s[1],d=function(){var e=Object(o.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,j(r.data.movies),c(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return d()}),[]),Object(O.jsx)("div",{children:r?Object(O.jsx)("h1",{children:"Loading..."}):Object(O.jsx)("div",{children:a.map((function(e){return Object(O.jsx)(x,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var p=function(){var e=Object(j.g)().id,t=Object(n.useState)(!0),r=Object(b.a)(t,2),c=r[0],i=r[1],s=Object(n.useState)([]),a=Object(b.a)(s,2),d=a[0],l=a[1],m=function(){var t=Object(o.a)(u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:r=t.sent,l(r.data.movie);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){m(),i(!1)}),[]),Object(O.jsx)("div",{children:c?Object(O.jsx)("h1",{children:"Loading..."}):Object(O.jsx)("div",{children:Object(O.jsx)(x,{id:d.id,coverImg:d.medium_cover_image,rating:d.rating,runtime:d.runtime,description_full:d.description_full,title:d.title,genres:d.genres},d.id)})})};var f=function(){return Object(O.jsx)(a.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/",element:Object(O.jsx)(v,{})}),Object(O.jsx)(j.a,{path:"/movie/:id",element:Object(O.jsx)(p,{})})]})})};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5332f6c7.chunk.js.map