(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{501:function(t,e,n){"use strict";n(5),n(7),n(10),n(11);var r=n(1),o=(n(33),n(55),n(31),n(9),n(66),n(34),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(23),n(38),n(41),n(6),n(294),n(2)),c=n(79),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var h=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},w=y("align",(function(){return{type:String,default:null,validator:h}})),j=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},x=y("justify",(function(){return{type:String,default:null,validator:j}})),C=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},_=y("alignContent",(function(){return{type:String,default:null,validator:C}})),O={align:Object.keys(w),justify:Object.keys(x),alignContent:Object.keys(_)},k={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=k[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},w),{},{justify:{type:String,default:null,validator:j}},x),{},{alignContent:{type:String,default:null,validator:C}},_),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=P.get(l);return f||function(){var t,e;for(e in f=[],O)O[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},502:function(t,e,n){"use strict";n(7),n(9),n(86),n(31),n(309),n(294),n(80),n(102);var r=n(2);var o,c=n(79);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},503:function(t,e,n){t.exports=n.p+"img/undraw_programming_2svr.e5bc558.svg"},504:function(t,e,n){var content=n(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("1cb2e7e5",content,!0,{sourceMap:!1})},511:function(t,e,n){t.exports=n.p+"img/undraw_web_developer_p3e5.bc1fefb.svg"},512:function(t,e,n){t.exports=n.p+"img/undraw_education_f8ru.cbced3d.svg"},513:function(t,e,n){t.exports=n.p+"img/undraw_community_8nwl.fb1d8da.svg"},514:function(t,e,n){t.exports=n.p+"img/undraw_visionary_technology_33jy.00dd5ff.svg"},515:function(t,e,n){"use strict";n(504)},516:function(t,e,n){var r=n(13)(!1);r.push([t.i,".about-community[data-v-3a71eb80],.about-develomancy[data-v-3a71eb80],.about-goal[data-v-3a71eb80],.about-learning[data-v-3a71eb80],.about-vision[data-v-3a71eb80]{height:100vh}",""]),t.exports=r},549:function(t,e,n){"use strict";n.r(e);var r={},o=(n(515),n(17)),c=n(27),l=n.n(c),d=n(494),f=n(502),v=n(174),m=n(496),y=n(501),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",{staticClass:"pa-0"},[r("v-container",{staticClass:"mb-10"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{lg:"8"}},[r("div",{staticClass:"about-develomancy d-flex justify-center align-center"},[r("div",{staticClass:"about-wrapper d-flex flex-column justify-center align-center"},[r("v-img",{staticClass:"mb-10",attrs:{"max-width":"400",src:n(511)}}),t._v(" "),r("h1",{staticClass:"font-weight-black darkText--text display-4"},[t._v("\n              Develomancy.\n            ")])],1),t._v(" "),r("p",{staticClass:"font-weight-light ml-10"},[t._v("\n            Software development needs to grow more, whenever we have the\n            opportunity to share, we should do it. Develomancy stands as the \n            destiny for developers to create their project, and receive the \n            needed support.\n          ")])])])],1)],1),t._v(" "),r("section",{staticClass:"grey lighten-4 pt-10 pb-10"},[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{md:"8"}},[r("div",{staticClass:"about-goal d-flex justify-center align-center mb-10 flex-column"},[r("div",{staticClass:"about-develomancy d-flex justify-center align-center"},[r("p",{staticClass:"font-weight-light mr-10"},[t._v("\n                Our goal is to make your ideas come true. We develop from\n                features to complete applications with the most high quality\n                technology in the industry. We are always seeking for improvement.\n              ")]),t._v(" "),r("div",{staticClass:"about-wrapper d-flex flex-column justify-center align-center"},[r("v-img",{staticClass:"mb-10",attrs:{"max-width":"600",src:n(503)}}),t._v(" "),r("h1",{staticClass:"font-weight-black darkText--text display-4"},[t._v("\n                  Goal.\n                ")])],1)])])])],1)],1)],1),t._v(" "),r("section",{staticClass:"blog grey lighten-3 py-15"},[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{md:"8"}},[r("div",{staticClass:"about-learning d-flex align-center justify-center"},[r("div",{staticClass:"about-develomancy d-flex justify-center align-center"},[r("div",{staticClass:"about-wrapper d-flex flex-column justify-center align-center"},[r("v-img",{staticClass:"mb-10",attrs:{"max-width":"600",src:n(512)}}),t._v(" "),r("h1",{staticClass:"font-weight-black darkText--text display-4"},[t._v("\n                  Learning.\n                ")])],1),t._v(" "),r("p",{staticClass:"font-weight-light ml-10"},[t._v("\n                We really hope that we can offer as much learning as we can.\n                Developers from our team get to learn everyday whilst loving\n                what they do. So, for those joining the community, we'll love\n                to share with you our experiences.\n              ")])])])])],1)],1)],1),t._v(" "),r("section",{staticClass:"grey lighten-2"},[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{md:"8"}},[r("div",{staticClass:"about-community d-flex justify-center align-center"},[r("div",{staticClass:"about-develomancy d-flex justify-center align-center"},[r("p",{staticClass:"font-weight-light ml-10"},[t._v("\n                Being a software developer, is becoming a lot more common\n                nowadays, and that's not an issue. It is a benefit that there \n                is more software out there built by an entire community. In \n                Develomancy, we want to offer that, a space that we can use to\n                share experiences and information.\n              ")]),t._v(" "),r("div",{staticClass:"about-wrapper d-flex flex-column justify-center align-center"},[r("v-img",{staticClass:"mb-10",attrs:{"max-width":"600",src:n(513)}}),t._v(" "),r("h1",{staticClass:"font-weight-black darkText--text display-4"},[t._v("\n                  Community.\n                ")])],1)])])])],1)],1)],1),t._v(" "),r("section",{staticClass:"blog darkText py-15"},[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{md:"8"}},[r("div",{staticClass:"about-vision d-flex align-center justify-center"},[r("div",{staticClass:"about-develomancy d-flex justify-center align-center"},[r("v-img",{staticClass:"mb-10",attrs:{"max-width":"600",src:n(514)}}),t._v(" "),r("div",{staticClass:"about-wrapper d-flex flex-column justify-center align-center"},[r("h1",{staticClass:"font-weight-black white--text display-4 mb-5"},[t._v("\n                  Vision.\n                ")]),t._v(" "),r("p",{staticClass:"white--text font-weight-light ml-10"},[t._v("\n                  We hope our services and information get to grow so the web\n                  gets bigger everyday. Our vision is to become a Saas platform\n                  that will form a solid community so that we can offer the\n                  opportunity to clients and developers to grow.\n                ")])])],1)])])],1)],1)],1)],1)}),[],!1,null,"3a71eb80",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:f.a,VImg:v.a,VMain:m.a,VRow:y.a})}}]);