webpackJsonp([3],{513:function(n,t,e){"use strict";function a(n){e(556)}Object.defineProperty(t,"__esModule",{value:!0});var i=e(558),s=e(559),c=e(19),o=a,l=c(i.a,s.a,!1,o,null,null);t.default=l.exports},516:function(n,t,e){"use strict";t.__esModule=!0;var a=e(517),i=function(n){return n&&n.__esModule?n:{default:n}}(a);t.default=i.default||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}},517:function(n,t,e){n.exports={default:e(518),__esModule:!0}},518:function(n,t,e){e(519),n.exports=e(33).Object.assign},519:function(n,t,e){var a=e(53);a(a.S+a.F,"Object",{assign:e(520)})},520:function(n,t,e){"use strict";var a=e(185),i=e(521),s=e(522),c=e(122),o=e(186),l=Object.assign;n.exports=!l||e(121)(function(){var n={},t={},e=Symbol(),a="abcdefghijklmnopqrst";return n[e]=7,a.split("").forEach(function(n){t[n]=n}),7!=l({},n)[e]||Object.keys(l({},t)).join("")!=a})?function(n,t){for(var e=c(n),l=arguments.length,r=1,u=i.f,d=s.f;l>r;)for(var h,f=o(arguments[r++]),p=u?a(f).concat(u(f)):a(f),m=p.length,x=0;m>x;)d.call(f,h=p[x++])&&(e[h]=f[h]);return e}:l},521:function(n,t){t.f=Object.getOwnPropertySymbols},522:function(n,t){t.f={}.propertyIsEnumerable},556:function(n,t,e){var a=e(557);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(511)("12cf3adc",a,!0)},557:function(n,t,e){t=n.exports=e(510)(!1),t.push([n.i,"#channel{position:absolute;top:0;left:0;right:0;height:100%;overflow:hidden;z-index:999}#channel header{font-size:16px}#channel .content{height:100%;padding-top:44px;background-color:#f8f8f8}#channel .content .container{height:100%}#channel .content .column{margin-top:5px}#channel .content .column .title{font-size:12px;padding:0 10px;line-height:2em;background-color:#f5f5f5;color:#666}#channel .content .column ul{margin:10px 0}#channel .content .column ul li{display:inline-block;width:25%;margin-bottom:10px;-webkit-animation:zoomIn .3s ease;animation:zoomIn .3s ease}#channel .content .column ul li a{display:block;font-size:16px;margin:0 8px;border:1px solid #ccc;line-height:2em;color:#131313;text-align:center;text-decoration:none}#channel .content .column ul li a.news_recommend{background-color:#f0f0f0}",""])},558:function(n,t,e){"use strict";var a=e(187),i=e.n(a),s=e(516),c=e.n(s),o=e(184);t.a={data:function(){return{channel:[{classname:"Test20",classid:20,classpath:"t1"},{classname:"Test21",classid:21,classpath:"t2"},{classname:"Test22",classid:22,classpath:"t3"},{classname:"Test23",classid:23,classpath:"t4"},{classname:"Test24",classid:24,classpath:"t5"},{classname:"Test25",classid:25,classpath:"t6"}]}},computed:c()({},Object(o.c)("index",["indexPage","indexLocation","indexColumn"])),watch:{indexColumn:function(){this.set_indexColumn(this.indexColumn),this.set_indexActive("news_recommend")}},methods:c()({},Object(o.d)("index",["set_indexActive","set_indexPage","set_indexLocation","set_indexColumn"]),Object(o.b)("index",["get_channel_data"]),{get_channel:function(){var n=this;this.get_channel_data().then(function(t){t&&(n.channel=t)})},add:function(n){var t,e=this.channel.splice(n,1);(t=this.indexColumn).push.apply(t,i()(e))},remove:function(n,t){if("news_recommend"!==n.classpath){var e,a=this.indexColumn.splice(t,1);(e=this.channel).push.apply(e,i()(a))}},sync:function(){for(var n={},t={},e=0;e<this.indexColumn.length;e++){var a=this.indexColumn[e].classpath;this.indexPage[a]>1?n[a]=this.indexPage[a]:n[a]=1,this.indexLocation[a]>0?t[a]=this.indexLocation[a]:t[a]=0}this.set_indexPage(n),this.set_indexLocation(t)}}),mounted:function(){},deactivated:function(){this.sync()}}},559:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("transition",{attrs:{name:"fadeIn"}},[e("div",{attrs:{id:"channel"}},[e("my-header",{attrs:{fixed:"",title:"频道管理"}},[e("a",{staticClass:"back-white",attrs:{slot:"left"},on:{click:function(t){n.$router.go(-1)}},slot:"left"})]),n._v(" "),e("div",{staticClass:"content"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:swiperRight",value:!0,expression:"true",arg:"swiperRight"}],staticClass:"container"},[e("section",{staticClass:"column"},[e("p",{staticClass:"title"},[n._v("点击删除以下频道")]),n._v(" "),e("ul",n._l(n.indexColumn,function(t,a){return e("li",{key:a,on:{click:function(e){n.remove(t,a)}}},[e("a",{class:t.classpath,attrs:{href:"javascript:;"}},[n._v(n._s(t.classname))])])}))]),n._v(" "),e("section",{staticClass:"column"},[e("p",{staticClass:"title"},[n._v("点击添加以下频道")]),n._v(" "),e("ul",n._l(n.channel,function(t,a){return e("li",{key:a,on:{click:function(t){n.add(a)}}},[e("a",{attrs:{href:"javascript:;"}},[n._v(n._s(t.classname))])])}))])])])],1)])},i=[],s={render:a,staticRenderFns:i};t.a=s}});