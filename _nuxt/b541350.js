(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{296:function(t,e,n){"use strict";var r=n(11),c=n(1),l=n(4),o=n(116),v=n(16),f=n(12),_=n(207),d=n(42),m=n(85),C=n(206),x=n(5),h=n(86).f,N=n(35).f,k=n(18).f,y=n(297),I=n(298).trim,E="Number",w=c.Number,A=w.prototype,T=c.TypeError,S=l("".slice),F=l("".charCodeAt),M=function(t){var e=C(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,c,l,o,v,code,f=C(t,"number");if(m(f))throw T("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=I(f),43===(e=F(f,0))||45===e){if(88===(n=F(f,2))||120===n)return NaN}else if(48===e){switch(F(f,1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+f}for(o=(l=S(f,2)).length,v=0;v<o;v++)if((code=F(l,v))<48||code>c)return NaN;return parseInt(l,r)}return+f};if(o(E,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var R,j=function(t){var e=arguments.length<1?0:w(M(t)),n=this;return d(A,n)&&x((function(){y(n)}))?_(Object(e),n,j):e},L=r?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;L.length>P;P++)f(w,R=L[P])&&!f(j,R)&&k(j,R,N(w,R));j.prototype=A,A.constructor=j,v(c,E,j,{constructor:!0})}},297:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},298:function(t,e,n){var r=n(4),c=n(24),l=n(13),o=n(299),v=r("".replace),f="["+o+"]",_=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t){return function(e){var n=l(c(e));return 1&t&&(n=v(n,_,"")),2&t&&(n=v(n,d,"")),n}};t.exports={start:m(1),end:m(2),trim:m(3)}},299:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},338:function(t,e,n){"use strict";n.r(e);var r=n(10),c=(n(53),n(25),n(145),n(296),n(41)),l=n.n(c),o={watchQuery:["page"],data:function(){return{posts:[],total:[],next:[],previous:[],current_page:0}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,data,o,v,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=void 0!==n.query.page?"?page=".concat(n.query.page):"",e.next=4,l.a.get("https://spa--blog.herokuapp.com/api/posts/".concat(r));case 4:return c=e.sent,data=c.data,o=null!=data.next?data.next.split("/")[5]:data.next,v=null!=data.previous?data.previous.split("/")[5]:data.previous,f=n.query.page,e.abrupt("return",{posts:data.results,total:Math.ceil(data.count/6),next:o,previous:v,current_page:Number(f)});case 10:case"end":return e.stop()}}),e)})))()}},v=n(15),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"my-3"},[t._v("Последние записи блога")]),t._v(" "),n("div",{staticClass:"row"},t._l(t.posts,(function(e){return n("div",{key:e.slug,staticClass:"col-md-4"},[n("div",{staticClass:"card mb-4 shadow-sm"},[n("img",{staticClass:"card-img-top",attrs:{src:e.image,alt:""}}),t._v(" "),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v(t._s(e.h1))]),t._v(" "),n("div",{staticClass:"truncate",domProps:{innerHTML:t._s(e.description)}}),t._v(" "),n("div",{staticClass:"mb-2"},t._l(e.tags,(function(e){return n("span",[n("nuxt-link",{staticClass:"mr-1 badge badge-info",attrs:{to:"/tags/"+e}},[t._v("#"+t._s(e))])],1)})),0),t._v(" "),n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",{staticClass:"btn-group"},[n("nuxt-link",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{to:"/posts/"+e.slug}},[t._v("Подробнее")])],1),t._v(" "),n("small",{staticClass:"text-muted"},[t._v(t._s(e.created_at))])])])])])})),0),t._v(" "),n("nav",{attrs:{"aria-label":"Paginate me"}},[n("ul",{staticClass:"pagination justify-content-center"},[null!=t.previous?n("nuxt-link",{staticClass:"page-link",attrs:{to:t.previous,tabindex:"-1"}},[t._v("Предыдущая")]):n("li",{staticClass:"page-item disabled"},[n("a",{staticClass:"page-link disabled",attrs:{href:"#",tabindex:"-1"}},[t._v("Предыдущая")])]),t._v(" "),t._l(t.total,(function(i){return n("span",[t.current_page===i||"/"===t.$route.query.page&&1===i?n("li",{staticClass:"page-item active"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:"?page="+i}},[t._v(t._s(i))])],1):n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:"?page="+i}},[t._v(t._s(i))])],1)])})),t._v(" "),null!=t.next?n("nuxt-link",{staticClass:"page-link",attrs:{to:t.next}},[t._v("Следующая")]):n("li",{staticClass:"page-item disabled"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Следующая")])])],2)]),t._v(" "),n("br")])}),[],!1,null,null,null);e.default=component.exports}}]);