(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{693:function(t,e,n){var content=n(708);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("3dfa3741",content,!0,{sourceMap:!1})},705:function(t,e,n){t.exports=n.p+"img/undraw_Publish_article_re_3x8h.223f608.svg"},706:function(t,e,n){t.exports=n.p+"img/ilya-pavlov-OqtafYT5kTw-unsplash.1e66601.jpg"},707:function(t,e,n){"use strict";n(693)},708:function(t,e,n){var o=n(15)(!1);o.push([t.i,".blog-hero[data-v-e4681b82]{height:100vh}.blog-posts-child[data-v-e4681b82]:not(:first-child){flex:1!important}.posts-grid[data-v-e4681b82]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:20px;gap:20px}",""]),t.exports=o},709:function(t,e,n){var content=n(710);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("50788f08",content,!0,{sourceMap:!1})},710:function(t,e,n){var o=n(15)(!1);o.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=o},738:function(t,e,n){"use strict";n.r(e);n(8),n(5),n(10),n(6),n(11);var o=n(1),r=(n(7),n(35),n(59),n(40)),l=n(265),c=n(269);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{searchInput:""}},components:{Posts:l.default,PostFeatured:c.default},computed:d(d({},Object(r.c)({allPosts:"posts/allPosts",featuredPost:"posts/getFeaturedPost",postTitles:"posts/getPostTitles"})),{},{filteredPosts:function(){var t=this;return this.allPosts.filter((function(e){return e.title.toLowerCase().includes(t.searchInput.toLowerCase())}))}})},m=(n(707),n(19)),v=n(29),I=n.n(v),y=(n(67),n(87),n(90),n(709),n(735)),x=n(158),w=n(88),S=n(0);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=O(O({},y.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),D=y.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:y.a.options.props.menuProps.type,default:function(){return C}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return O(O({},y.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(S.m)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=y.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),O(O({},C),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=y.a.options.computed.listData.call(this);return data.props=O(O({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===S.r.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===S.r.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==S.r.backspace&&t!==S.r.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[o]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,y.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=x.a.options.methods.genInput.call(this);return input.data=Object(w.a)(input.data,{attrs:{"aria-activedescendant":Object(S.l)(this.$refs.menu,"activeTile.id"),autocomplete:Object(S.l)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=y.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?y.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[S.r.home,S.r.end].includes(e)||y.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){y.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){y.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){y.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],r=this.getText(o);null==(e=t.clipboardData)||e.setData("text/plain",r),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),t.preventDefault()}}}}),j=n(682),P=n(690),k=n(676),T=n(202),V=n(684),F=n(689),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-main",{staticClass:"pa-0"},[o("v-container",[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",[o("div",{staticClass:"blog-hero d-flex justify-center align-center"},[o("div",{staticClass:"title"},[o("h1",{staticClass:"display-4 darkText--text font-weight-black mb-5"},[o("span",[o("div",{attrs:{id:"blogTitle"}},[t._v("Blog.")])])]),t._v(" "),o("div",{staticClass:"font-weight-light mb-5",attrs:{id:"blogDesc"}},[t._v("\n              News. Articles. Inspiration. Technology.\n            ")])]),t._v(" "),o("div",{staticClass:"blog-hero-image ml-10"},[o("v-img",{attrs:{id:"blogHeroImage",src:n(705),"max-width":"700"}})],1)])])],1)],1),t._v(" "),o("section",{staticClass:"grey lighten-4 pt-10 pb-10"},[o("v-container",[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{md:"2",lg:"4"}},[o("div",{staticClass:"search-title text-center display-1 font-weight-black"},[t._v("\n            Search Articles.\n          ")]),t._v(" "),o("p",{staticClass:"font-weight-light text-center"},[t._v("Get to know the latest IT news ")]),t._v(" "),o("v-form",{on:{submit:function(t){t.preventDefault()}}},[o("v-autocomplete",{attrs:{filled:"",placeholder:"Search...","solo-inverted":"","append-icon":"mdi-magnify",flat:"",items:t.postTitles},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}})],1)],1)],1)],1),t._v(" "),o("v-container",[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{md:"10",lg:"8"}},[o("div",{staticClass:"posts-section"},[o("PostFeatured",{attrs:{post:t.featuredPost}}),t._v(" "),o("Posts",{staticClass:"posts-grid",attrs:{posts:t.filteredPosts}})],1)])],1)],1)],1),t._v(" "),o("section",{staticClass:"darkText pt-15 pb-15"},[o("v-container",[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{md:"7"}},[o("div",{staticClass:"summary d-flex justify-center align-center"},[o("v-img",{attrs:{"max-width":"400px",src:n(706)}}),t._v(" "),o("div",{staticClass:"summary-desc ml-10"},[o("h1",{staticClass:"display-4 white--text font-weight-black mb-5"},[t._v("\n                Learn.\n              ")]),t._v(" "),o("p",{staticClass:"summ-parr white--text font-weight-light"},[t._v("\n                We expect our community to grow, that's why we'll provide the\n                latest information in our hands. Interesting topics will live\n                here in order to make it easier for the developer to get to\n                know as much as possible.\n              ")]),t._v(" "),o("p",{staticClass:"white--text font-weight-light mt-10"},[t._v("\n                Make sure you're always aware of our news.\n              ")])])],1)])],1)],1)],1)],1)}),[],!1,null,"e4681b82",null);e.default=component.exports;I()(component,{Posts:n(265).default}),I()(component,{VAutocomplete:D,VCol:j.a,VContainer:P.a,VForm:k.a,VImg:T.a,VMain:V.a,VRow:F.a})}}]);