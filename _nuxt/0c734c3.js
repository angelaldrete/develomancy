(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{501:function(t,e,n){"use strict";n(5),n(7),n(10),n(11);var r=n(1),c=(n(33),n(55),n(31),n(9),n(66),n(34),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(23),n(38),n(41),n(6),n(294),n(2)),o=n(79),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],m=["start","end","center"];function h(t,e){return f.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var y=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},j=h("align",(function(){return{type:String,default:null,validator:y}})),w=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},_=h("justify",(function(){return{type:String,default:null,validator:w}})),C=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},x=h("alignContent",(function(){return{type:String,default:null,validator:C}})),O={align:Object.keys(j),justify:Object.keys(_),alignContent:Object.keys(x)},k={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,n){var r=k[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},j),{},{justify:{type:String,default:null,validator:w}},_),{},{alignContent:{type:String,default:null,validator:C}},x),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var d in n)l+=String(n[d]);var v=S.get(l);return v||function(){var t,e;for(e in v=[],O)O[e].forEach((function(t){var r=n[t],c=P(e,t,r);c&&v.push(c)}));v.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(l,v)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:v}),c)}})},502:function(t,e,n){"use strict";n(7),n(9),n(86),n(31),n(309),n(294),n(80),n(102);var r=n(2);var c,o=n(79);e.a=(c="container",r.a.extend({name:"v-".concat(c),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(c," ").concat(data.staticClass||"").trim();var o=data.attrs;if(o){data.attrs={};var l=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),c)}})},503:function(t,e,n){t.exports=n.p+"img/undraw_programming_2svr.e5bc558.svg"},509:function(t,e,n){var content=n(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("a0fa09ae",content,!0,{sourceMap:!1})},542:function(t,e,n){t.exports=n.p+"img/undraw_web_development_w2vv.153bc29.svg"},543:function(t,e,n){t.exports=n.p+"img/undraw_proud_coder_7ain.95c9bb5.svg"},544:function(t,e,n){t.exports=n.p+"img/undraw_develop_app_re_bi4i.15f9005.svg"},545:function(t,e,n){"use strict";n(509)},546:function(t,e,n){var r=n(13)(!1);r.push([t.i,".goal[data-v-5b2d4476],.hero[data-v-5b2d4476],.projects[data-v-5b2d4476]{height:100vh}.posts-grid[data-v-5b2d4476],.services-grid[data-v-5b2d4476]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:20px;gap:20px}",""]),t.exports=r},555:function(t,e,n){"use strict";n.r(e);n(9),n(5),n(7),n(10),n(6),n(11);var r=n(1),c=(n(37),n(47)),o=n(132),l=n(217),d=n(218),v=n(216);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={name:"Home",components:{Auth:o.default,Projects:l.default,Services:d.default,Posts:v.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({allServices:"services/allServices",allPosts:"posts/allPosts",allProjects:"projects/allProjects",allItems:"contact/allItems"})),data:function(){return{valid:!1,nameRules:[function(t){return!!t||"Name is required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],serviceRules:[function(t){return!!t||"Service is required"}],contact:{name:"",email:"",select:"",message:""},tabs:null,dialogActive:!1}},filters:{ellipsis:function(t){return t.length>130?(t=t.slice(0,129))+"...":t}},methods:{submit:function(){},openAuthDialogHome:function(t){this.dialogActive=!this.dialogActive,this.tabs=t}}},h=(n(545),n(17)),y=n(27),j=n.n(y),w=n(137),_=n(205),C=n(494),x=n(502),O=n(488),k=n(174),P=n(496),S=n(501),T=n(136),D=n(497),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",{staticClass:"pa-0"},[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",[r("div",{staticClass:"hero d-flex justify-center align-center"},[r("div",{staticClass:"title"},[r("div",[r("div",{staticClass:"title"},[r("h1",{staticClass:"display-4 darkText--text font-weight-black",attrs:{id:"imagineTitle"}},[t._v("Imagine.")]),t._v(" "),r("h1",{staticClass:"display-4 darkText--text font-weight-black",attrs:{id:"createTitle"}},[t._v("Create.")]),t._v(" "),r("h1",{staticClass:"display-4 darkText--text font-weight-black",attrs:{id:"shareTitle"}},[t._v("Share.")])])]),t._v(" "),r("div",{staticClass:"font-weight-light mb-5",attrs:{id:"slogan"}},[t._v("Develop your ideas. Make 'em true.")]),t._v(" "),r("v-btn",{attrs:{depressed:"",tile:"",color:"primary"}},[t._v("\n              Start now!\n            ")])],1),t._v(" "),r("div",{staticClass:"hero-image"},[r("v-img",{attrs:{src:n(542),"max-width":"700"}})],1)])])],1)],1),t._v(" "),r("v-container",{staticClass:"mb-15"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",[r("div",{staticClass:"d-flex justify-center align-center mb-10 flex-column"},[r("h1",{staticClass:"display-2 darkText--text mb-5"},[t._v("\n            Start the journey. Develop your app.\n          ")]),t._v(" "),r("div",[r("p",{staticClass:"darkText--text"},[t._v("\n              We develop your app based on your necessities.\n            ")]),t._v(" "),r("p",{staticClass:"darkText--text"},[t._v("\n              This are some of our services we offer.\n            ")])])]),t._v(" "),r("div",{staticClass:"d-flex justify-center align-center"},[r("Services",{staticClass:"services-grid",attrs:{services:t.allServices}})],1),t._v(" "),r("div",{staticClass:"d-flex justify-center mt-10"},[r("p",[t._v("And more.")])])])],1)],1),t._v(" "),r("section",{staticClass:"blog darkText py-15"},[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{md:"10"}},[r("div",{staticClass:"d-flex align-center justify-center"},[r("div",{staticClass:"blog-block mr-10"},[r("h1",{staticClass:"display-4 white--text font-weight-black mb-5"},[t._v("\n                Blog.\n              ")]),t._v(" "),r("p",{staticClass:"white--text font-weight-light"},[t._v("\n                Get to know the latest news on Information Technologies.\n                Opinions, reviews and interesting topics live here.\n                Use this information as an advice and share your thoughts with\n                the community.\n              ")])]),t._v(" "),r("Posts",{staticClass:"posts-grid",attrs:{posts:t.allPosts}})],1)])],1)],1)],1),t._v(" "),r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{md:"8"}},[r("div",{staticClass:"goal d-flex justify-center align-center"},[r("div",{staticClass:"goals-image"},[r("v-img",{attrs:{src:n(503),"max-width":"700"}})],1),t._v(" "),r("div",{staticClass:"goal-block ml-5"},[r("div",[r("h1",{staticClass:"display-4 darkText--text font-weight-black mb-5",attrs:{id:"goalTitle"}},[t._v("Goal.")])]),t._v(" "),r("div",{staticClass:"font-weight-light",attrs:{id:"goalParr"}},[t._v("Our goal is to make your ideas come true. We develop from features to complete applications with the most high quality technology in the industry. We are always seeking for improvement.")])])])])],1)],1),t._v(" "),r("section",{staticClass:"grey lighten-4"},[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{md:"8"}},[r("div",{staticClass:"projects d-flex justify-center align-center"},[r("div",{staticClass:"projects-block"},[r("div",[r("h1",{staticClass:"display-4 darkText--text font-weight-black mb-5",attrs:{id:"projectsTitle"}},[t._v("Projects.")])]),t._v(" "),r("div",{staticClass:"font-weight-light mb-5",attrs:{id:"projectsParr"}},[t._v("Some of our projects.")]),t._v(" "),r("Projects",{attrs:{projects:t.allProjects}})],1),t._v(" "),r("div",{staticClass:"projects-image ml-10"},[r("v-img",{attrs:{src:n(543),"max-width":"700"}})],1)])])],1)],1)],1),t._v(" "),r("section",{staticClass:"blog darkText py-15 mb-15"},[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{md:"6"}},[r("div",{staticClass:"d-flex align-center justify-center"},[r("div",{staticClass:"contact-block mr-10"},[r("h1",{staticClass:"display-4 white--text font-weight-black mb-5"},[t._v("\n                Contact.\n              ")]),t._v(" "),r("p",{staticClass:"white--text font-weight-light"},[t._v("\n                Get in contact with us. Send as a message and we'll be glad to\n                help you out.\n              ")])]),t._v(" "),r("v-card",{staticClass:"pa-5",attrs:{"min-width":"400"}},[r("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("h1",[t._v("Contact")]),t._v(" "),r("v-text-field",{attrs:{"prepend-inner-icon":"mdi-account",label:"Name",rules:t.nameRules,required:""},model:{value:t.contact.name,callback:function(e){t.$set(t.contact,"name",e)},expression:"contact.name"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-inner-icon":"mdi-email",label:"Email",rules:t.emailRules,required:""},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}}),t._v(" "),r("v-textarea",{staticClass:"mb-5",attrs:{"prepend-inner-icon":"mdi-message",label:"Message",hint:"Input message..."},model:{value:t.contact.message,callback:function(e){t.$set(t.contact,"message",e)},expression:"contact.message"}}),t._v(" "),r("v-btn",{attrs:{depressed:"",tile:"",color:"primary",block:""},on:{click:t.submit}},[t._v("\n                  Send\n                ")])],1)],1)],1)])],1)],1)],1),t._v(" "),r("v-container",{staticClass:"mb-10"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",[r("div",{staticClass:"d-flex justify-center align-center mb-10 flex-column"},[r("h1",{staticClass:"display-2 darkText--text mb-5"},[t._v("\n            Or join the community, and become a client and consumer of our content.\n          ")]),t._v(" "),r("h1",{staticClass:"display-2 darkText--text mb-5"},[t._v("\n            You can receive exclusive content, notifications and more.\n          ")]),t._v(" "),r("v-btn",{staticClass:"mb-15 mt-10",attrs:{depressed:"",tile:"","min-width":"200",color:"primary"},on:{click:function(e){return t.openAuthDialogHome(1)}}},[t._v("\n            Join\n          ")]),t._v(" "),r("div",{staticClass:"reminder-image mb-10"},[r("v-img",{attrs:{src:n(544),"max-width":"700"}})],1)],1)])],1)],1)],1)}),[],!1,null,"5b2d4476",null);e.default=component.exports;j()(component,{Services:n(218).default,Posts:n(216).default,Projects:n(217).default}),j()(component,{VBtn:w.a,VCard:_.a,VCol:C.a,VContainer:x.a,VForm:O.a,VImg:k.a,VMain:P.a,VRow:S.a,VTextField:T.a,VTextarea:D.a})}}]);