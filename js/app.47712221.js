(function(t){function e(e){for(var a,s,i=e[0],c=e[1],u=e[2],d=0,l=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&l.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(l.length)l.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,s=1;s<o.length;s++){var c=o[s];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},r={app:0},n=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"88d2d315"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,a){o=r[t]=[e,a]}));e.push(o[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var u=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(d);var o=r[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",u.name="ChunkLoadError",u.type=a,u.request=n,o[1](u)}r[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},2395:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a,r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},s=[],i=(o("7c55"),o("2877")),c={},u=Object(i["a"])(c,n,s,!1,null,null,null),d=u.exports,p=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("div",{staticClass:"drawBorad"},[o("vue-p5",t._g({},{setup:t.setup,draw:t.draw,keypressed:t.keypressed}))],1),o("div",{staticClass:"change"},[o("p",[t._v("Choose a brush color")]),o("v-swatches",{attrs:{"popover-x":"left",swatches:"text-advanced"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),o("p",[t._v("Adjust brush size")]),o("vue-slider",{model:{value:t.Weight,callback:function(e){t.Weight=e},expression:"Weight"}}),o("div",{staticClass:"btn-wrap"},[o("button",{staticStyle:{display:"none"},on:{click:t.Redraw}},[t._v("重新绘制")]),o("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{type:"button"}},[t._v(" Copy code ")]),o("button",{on:{click:t.exportcode}},[t._v("Export P5 code")])]),o("a",{attrs:{href:"https://editor.p5js.org/",target:"_blank"}},[t._v("Go to P5 editor")]),t._v(" "+t._s(t.code)+" ")],1)])},h=[],f=(o("99af"),o("159b"),o("e25d")),v=o.n(f),m=o("7f75"),g=o.n(m),b=(o("b3a4"),o("4971")),y=o.n(b),w=(o("3e39"),o("cff8")),$=o.n(w),k=o("b012"),C={name:"Home",components:{VueP5:v.a,VSwatches:g.a,VueSlider:y.a},data:function(){return{printList:[],code:"",color:"#1CA085",savecolor:"",Weight:10,saveWeight:"",isRedraw:!1,createCanvas:{with:"",height:"",background:""}}},mounted:function(){var t=$()("p5Picture");console.log(t),this.$data.printList=t||[],this.$data.isRedraw=!0},methods:{Redraw:function(){a.clear(),a.background("green"),this.$data.isRedraw=!0},onCopy:function(){alert("You just copied")},onError:function(){alert("Failed to copy texts")},exportcode:function(){var t="",e="";t="\n          createCanvas(".concat(this.$data.createCanvas.with,", ").concat(this.$data.createCanvas.height,");\n          background('").concat(this.$data.createCanvas.background,"');\n       "),this.$data.printList.forEach((function(t){"stroke"==t.ptype&&(e+="\n           strokeWeight(".concat(t.Weight,");\n           stroke('").concat(t.Color,"');\n           ")),"line"==t.ptype&&(e+="\n           line(".concat(t.pmouseX,", ").concat(t.pmouseY,", ").concat(t.mouseX,", ").concat(t.mouseY,");\n\n           "))}));var o="\n            function setup() {\n                 ".concat(t,"\n            }\n\n            function draw() {\n                ").concat(e,"\n            }\n\n                  ");console.log(o),this.$data.code=o},setup:function(t){a=t,t.createCanvas(800,800),t.background("green"),this.$data.createCanvas={with:800,height:800,background:"green"},t.strokeWeight(this.$data.Weight),t.stroke(this.$data.color),this.$data.printList.push({ptype:"stroke",Weight:this.$data.Weight,Color:this.$data.color})},draw:function(t){0==this.$data.isRedraw?(this.$data.savecolor!=this.$data.color&&(t.strokeWeight(this.$data.Weight),t.stroke(this.$data.color),this.$data.savecolor=this.$data.color,this.$data.printList.push({ptype:"stroke",Weight:this.$data.Weight,Color:this.$data.color})),this.$data.saveWeight!=this.$data.Weight&&(t.strokeWeight(this.$data.Weight),t.stroke(this.$data.color),this.$data.saveWeight=this.$data.Weight,this.$data.printList.push({ptype:"stroke",Weight:this.$data.Weight,Color:this.$data.color})),!0===t.mouseIsPressed&&t.pmouseX>0&&t.pmouseY<800&&t.mouseX>0&&t.mouseY<800&&(t.line(t.pmouseX,t.pmouseY,t.mouseX,t.mouseY),console.log(t.pmouseX,t.pmouseY,t.mouseX,t.mouseY),this.$data.printList.push({ptype:"line",pmouseX:t.pmouseX,pmouseY:t.pmouseY,mouseX:t.mouseX,mouseY:t.mouseY}))):(this.$data.printList.forEach((function(e){"line"==e.ptype&&t.line(e.pmouseX,e.pmouseY,e.mouseX,e.mouseY),"stroke"==e.ptype&&(t.strokeWeight(e.Weight),t.stroke(e.Color))})),this.$data.isRedraw=!1)},keypressed:function(t){var e=String.fromCharCode(t.keyCode);t.print(e)}},watch:{printList:k((function(t){console.log(t),$()("p5Picture",t)}),100)},render:function(t){return t(v.a,{on:this})}},W=C,_=(o("8d10"),Object(i["a"])(W,l,h,!1,null,"4c4d84c6",null)),x=_.exports;r["default"].use(p["a"]);var j=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],P=new p["a"]({routes:j}),Y=P,X=o("2f62");r["default"].use(X["a"]);var O=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}}),E=o("4eb5"),L=o.n(E);L.a.config.autoSetContainer=!0,r["default"].use(L.a),r["default"].config.productionTip=!1,new r["default"]({router:Y,store:O,render:function(t){return t(d)}}).$mount("#app")},"72e7":function(t,e,o){},"7c55":function(t,e,o){"use strict";o("2395")},"8d10":function(t,e,o){"use strict";o("72e7")}});
//# sourceMappingURL=app.47712221.js.map