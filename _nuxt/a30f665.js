(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{501:function(t,e,n){"use strict";n(5),n(7),n(10),n(11);var r=n(1),o=(n(33),n(55),n(31),n(9),n(66),n(34),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(23),n(38),n(41),n(6),n(294),n(2)),c=n(78),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],j=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var m=function(t){return[].concat(j,["baseline","stretch"]).includes(t)},h=y("align",(function(){return{type:String,default:null,validator:m}})),w=function(t){return[].concat(j,["space-between","space-around"]).includes(t)},O=y("justify",(function(){return{type:String,default:null,validator:w}})),x=function(t){return[].concat(j,["space-between","space-around","stretch"]).includes(t)},C=y("alignContent",(function(){return{type:String,default:null,validator:x}})),P={align:Object.keys(h),justify:Object.keys(O),alignContent:Object.keys(C)},_={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=_[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},h),{},{justify:{type:String,default:null,validator:w}},O),{},{alignContent:{type:String,default:null,validator:x}},C),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=S.get(l);return f||function(){var t,e;for(e in f=[],P)P[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},502:function(t,e,n){"use strict";n(7),n(9),n(86),n(31),n(309),n(294),n(79),n(102);var r=n(2);var o,c=n(78);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},507:function(t,e,n){var content=n(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("a935b7a0",content,!0,{sourceMap:!1})},537:function(t,e,n){t.exports=n.p+"img/undraw_Code_review_re_woeb.f174733.svg"},538:function(t,e,n){t.exports=n.p+"img/tracy-adams-TEemXOpR3cQ-unsplash.e7eac65.jpg"},539:function(t,e,n){"use strict";n(507)},540:function(t,e,n){var r=n(13)(!1);r.push([t.i,".projects-hero[data-v-40721d94]{height:100vh}.projects-grid[data-v-40721d94]{max-width:1000px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:20px;gap:20px;grid-row-gap:0;row-gap:0}.list-of-projects[data-v-40721d94]{height:100vh}.summ-parr strong[data-v-40721d94]{font-weight:700}",""]),t.exports=r},552:function(t,e,n){"use strict";n.r(e);n(9),n(5),n(7),n(10),n(6),n(11);var r=n(1),o=n(43);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={components:{Projects:n(217).default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({allProjects:"projects/allProjects"}))},d=(n(539),n(16)),f=n(27),v=n.n(f),j=n(494),y=n(502),m=n(174),h=n(496),w=n(501),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",{staticClass:"pa-0"},[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",[r("div",{staticClass:"projects-hero d-flex justify-center align-center"},[r("div",{staticClass:"title"},[r("h1",{staticClass:"display-4 darkText--text font-weight-black"},[r("span",[r("div",{attrs:{id:"projectsTitle"}},[t._v("Projects.")])])]),t._v(" "),r("div",{staticClass:"font-weight-light mb-5",attrs:{id:"projectsDesc"}},[t._v("\n              Check out the latest projects we've been working out lately.\n            ")])]),t._v(" "),r("div",{staticClass:"projects-hero-image"},[r("v-img",{attrs:{id:"projectsHeroImage",src:n(537),"max-width":"700"}})],1)])])],1)],1),t._v(" "),r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",[r("div",{staticClass:"list-of-projects d-flex flex-column justify-center align-center"},[r("h1",{staticClass:"display-3 text-center mb-10"},[t._v("\n            Projects\n          ")]),t._v(" "),r("Projects",{staticClass:"projects-grid mb-10",attrs:{projects:t.allProjects}})],1)])],1)],1),t._v(" "),r("section",{staticClass:"darkText pt-15 pb-15"},[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{md:"7"}},[r("div",{staticClass:"summary d-flex justify-center align-center"},[r("v-img",{attrs:{"max-width":"300px",src:n(538)}}),t._v(" "),r("div",{staticClass:"summary-desc ml-10"},[r("h1",{staticClass:"display-4 white--text font-weight-black mb-5"},[t._v("\n                Experience.\n              ")]),t._v(" "),r("p",{staticClass:"summ-parr white--text font-weight-light"},[t._v("\n                We cover from frontend to backend applications and enjoy\n                giving value. We definitely seek for learning from our projects\n                and expect to grow. "),r("strong",[t._v("Vue")]),t._v(" and\n                "),r("strong",[t._v("Express")]),t._v(" are our main languages for developing\n                both frontend and backend. We also love "),r("strong",[t._v("Nuxt")]),t._v("\n                and "),r("strong",[t._v("Vuex")]),t._v(" for both SEO and Store Management\n                but we'll never reject to work on other languages. Key is to\n                keep programming\n              ")]),t._v(" "),r("p",{staticClass:"white--text font-weight-light mt-10"},[t._v("\n                Hope your project gets listed here soon.\n              ")])])],1)])],1)],1)],1)],1)}),[],!1,null,"40721d94",null);e.default=component.exports;v()(component,{Projects:n(217).default}),v()(component,{VCol:j.a,VContainer:y.a,VImg:m.a,VMain:h.a,VRow:w.a})}}]);