global.webpackJsonp([14],{123:function(e,t){},15:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(89),a=s.n(o),i=s(48),n=!1;var u=function(e){n||s(123)},r=s(2)(a.a,i.a,u,null,null);r.options.__file="C:\\Users\\Admin\\Desktop\\bbsj\\pages\\my\\my_ser.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] my_ser.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports},48:function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"page"},[s("view",{directives:[{name:"show",rawName:"v-show",value:e.showMask,expression:"showMask"}],staticClass:"mask",attrs:{eventid:"0"},on:{click:e.hide}}),e._v(" "),s("view",{directives:[{name:"show",rawName:"v-show",value:e.showState.middle,expression:"showState.middle"}],staticClass:"popup popup-middle"},[s("view",{staticClass:"desc"},[s("p",[e._v("手机号码:0592-6397953")]),e._v(" "),s("p",[e._v("微信:Bbobi688922")])],1)]),e._v(" "),s("view",{staticClass:"btn-row"},[s("button",{staticClass:"btn",attrs:{type:"button",eventid:"1"},on:{click:e.show}},[e._v("联系客服")])],1)])};o._withStripped=!0;var a={render:o,staticRenderFns:[]};t.a=a},64:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(s(1)),a=i(s(15));function i(e){return e&&e.__esModule?e:{default:e}}s(0).default;new o.default(a.default).$mount(),t.default={config:{navigationBarTitleText:"我"}}},89:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s(0).default;t.default={data:function(){return{title:"popup",showState:{top:!1},showMask:!1,activePop:"middle"}},methods:{show:function(e){switch(e.target.dataset.position){case"top":this.activePop="top"}this.showMask=!0,this.showState[this.activePop]=!0},hide:function(){this.showMask=!1,this.showState[this.activePop]=!1}}}}},[64]);
//# sourceMappingURL=../../../../.sourcemap/pages/my/my_ser.js.map