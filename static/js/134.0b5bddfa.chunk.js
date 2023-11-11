"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{207:function(e,t,r){r(791);var n=r(689),a=r(87),c=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,c.jsx)("ul",{className:"movieLinkList",children:t.map((function(e){return(0,c.jsx)(a.rU,{state:{from:r},className:"movieLink",to:"/movies/".concat(e.id),children:(0,c.jsxs)("li",{className:"movieItem",children:[(0,c.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:130,height:180,alt:"poster"}),(0,c.jsx)("p",{children:e.title?e.title:e.name})]})},e.id)}))})}},134:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(207),i=r(791),o=r(881),p=r(87),f=r(174),l=r(323),m=r(184);t.default=function(){var e=(0,p.lr)(),t=(0,a.Z)(e,2),r=t[0],c=t[1],v=(0,i.useState)({}),h=(0,a.Z)(v,2),d=h[0],x=h[1],b=(0,i.useState)(!1),g=(0,a.Z)(b,2),w=g[0],k=g[1],Z=r.get("query");(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Z){e.next=3;break}return e.abrupt("return");case 3:return k(!0),e.next=6,(0,l.UR)(Z);case 6:t=e.sent,x(t.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),f.Am.error(e.t0.message);case 13:return e.prev=13,k(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchMovieByName.value;c({query:t}),e.currentTarget.reset()},children:[(0,m.jsxs)("label",{children:[(0,m.jsx)("p",{children:"Search movie by name"}),(0,m.jsx)("input",{className:"input",type:"text",name:"searchMovieByName"})]}),(0,m.jsx)("button",{className:"btnSubmit",children:"Submit"})]}),w&&(0,m.jsx)(o.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),d.length>0&&(0,m.jsx)(u.Z,{movies:d}),(0,m.jsx)(f.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})}},323:function(e,t,r){r.d(t,{Fb:function(){return i},Pg:function(){return o},UR:function(){return l},tx:function(){return f},vQ:function(){return p}});var n=r(861),a=r(757),c=r.n(a),s=r(294),u="https://api.themoviedb.org/3/";s.Z.defaults.params={api_key:"baa4c44aec2e3cf8e4547ba86148755f"};var i=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"trending/all/day"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"search/movie?query=").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.0b5bddfa.chunk.js.map