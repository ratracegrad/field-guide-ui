(function(e){function t(t){for(var a,l,o=t[0],s=t[1],c=t[2],d=0,f=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},i=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/field-guide-ui/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05ed":function(e,t,n){"use strict";var a=n("dce0"),r=n.n(a);r.a},"0834":function(e,t,n){e.exports=n.p+"img/bird_1.f065e68b.jpg"},"1e86":function(e,t,n){},2028:function(e,t,n){},"33ee":function(e,t,n){"use strict";var a=n("9617"),r=n.n(a);r.a},"33f2":function(e,t,n){"use strict";var a=n("1e86"),r=n.n(a);r.a},"3b0e":function(e,t,n){},"3d66":function(e,t,n){},"3fde":function(e,t,n){"use strict";var a=n("e6b2"),r=n.n(a);r.a},"42fe":function(e,t,n){"use strict";var a=n("6803"),r=n.n(a);r.a},4348:function(e,t,n){},4518:function(e,t,n){"use strict";var a=n("3d66"),r=n.n(a);r.a},"51b3":function(e,t,n){},"52e0":function(e,t,n){"use strict";var a=n("4348"),r=n.n(a);r.a},5550:function(e,t,n){"use strict";var a=n("bd35"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),r=n("998c"),i=n.n(r),l=(n("d48d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fg-container",{attrs:{mobile:""},scopedSlots:e._u([{key:"sidebar",fn:function(t){return[n("fg-side-bar",{staticClass:"side-bar",attrs:{toggle:t.toggle,title:"Field Guide",page:e.currentRouteName}},[n("fg-content",[t.isMobile?e._e():n("fg-header-large",[e._v(" FIELD GUIDE ")]),t.isMobile?e._e():n("br"),n("fg-header-medium",[e._v(" Overview ")]),e._l(e.overviewLinks,(function(a){return n("router-link",{key:a.label,attrs:{to:a.to},nativeOn:{click:function(e){return t.close(e)}}},[e._v(" "+e._s(e.getLinkText(a))+" ")])})),n("fg-header-medium",[e._v(" Components ")]),e._l(e.componentLinks,(function(a){return n("router-link",{key:a.label,attrs:{to:a.to},nativeOn:{click:function(e){return t.close(e)}}},[e._v(" "+e._s(e.getLinkText(a))+" ")])}))],2)],1)]}}])},[n("template",{slot:"content"},[n("fg-content",{attrs:{padding:""}},[n("router-view")],1)],1)],2)}),o=[],s=(n("b0c0"),n("4160"),n("b64b"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello-world"},[n("span",[e._v(" Hello World: "+e._s(this.msg)+" ")])])}),c=[],u={name:"FgHelloWorld",props:{msg:String}},d=u,f=(n("5550"),n("2877")),p=Object(f["a"])(d,s,c,!1,null,"75e13a94",null),g=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"side-bar",class:{mobile:e.isMobile}},[e.isMobile?[n("div",{staticClass:"skinny-sidebar"},[n("div",{staticClass:"page"},[e._v(e._s(e.page))]),n("div",{staticClass:"title"},[e._v(e._s(e.title))]),n("span",{staticClass:"menu-icon",on:{click:e.toggleExpanded}},[n("Menu")],1)]),n("div",{staticClass:"off-screen"},[e._t("default")],2)]:[e._t("default")]],2)},b=[],v=n("8aa8"),h={name:"FgSideBar",components:{Menu:v["a"]},props:{title:String,page:String,mobile:Boolean,toggle:Function},data:function(){return{width:window.innerWidth,expanded:!1}},created:function(){var e=this;window.addEventListener("resize",(function(){e.width=window.innerWidth}))},computed:{isMobile:function(){return this.width<600}},methods:{toggleExpanded:function(){this.toggle()}}},_=h,x=(n("fd2b"),Object(f["a"])(_,m,b,!1,null,"70ea9841",null)),y=x.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",class:{expanded:e.expanded}},[e.mobile?[e._t("sidebar",null,{close:e.close,toggle:e.toggle,isExpanded:e.isExpanded,isMobile:e.isMobile}),e._t("content")]:[e._t("default")]],2)},V=[],w={name:"FgContainer",data:function(){return{width:window.innerWidth,expanded:!1}},props:{title:String,mobile:Boolean},created:function(){var e=this;window.addEventListener("resize",(function(){e.width=window.innerWidth,e.close()}))},computed:{isMobile:function(){return this.width<600},isExpanded:function(){return this.isMobile&&this.expanded}},methods:{toggle:function(){this.expanded=!this.expanded},close:function(){this.expanded=!1}}},E=w,j=(n("7967"),Object(f["a"])(E,C,V,!1,null,null,null)),F=j.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scrollbox"},[n("div",{staticClass:"content",class:{padding:e.padding}},[e._t("default")],2)])},k=[],T={name:"FgContent",props:{padding:Boolean}},I=T,S=(n("33ee"),Object(f["a"])(I,O,k,!1,null,"fdbb0976",null)),L=S.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"header-large"},[e._t("default")],2)},M=[],A={name:"FgHeaderLarge"},B=A,P=(n("b1b6"),Object(f["a"])(B,$,M,!1,null,"2052ff3a",null)),W=P.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"header-medium"},[e._t("default")],2)},D=[],N={name:"FgHeaderMedium"},R=N,z=(n("dfc6"),Object(f["a"])(R,H,D,!1,null,"265c8361",null)),U=z.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"text-large"},[e._t("default")],2)},q=[],J={name:"FgTextLarge"},K=J,Q=(n("ff8c"),Object(f["a"])(K,G,q,!1,null,"1a985f03",null)),X=Q.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("hr",{staticClass:"divider"})},Z=[],ee={name:"FgDivider"},te=ee,ne=(n("b702"),Object(f["a"])(te,Y,Z,!1,null,"0e56d2d8",null)),ae=ne.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image-container"},[n("img",{attrs:{src:e.src}}),n("div",{staticClass:"caption"},[e._t("caption")],2)])},ie=[],le={name:"FgImageContainer",props:{src:String}},oe=le,se=(n("05ed"),Object(f["a"])(oe,re,ie,!1,null,"7bdaea2c",null)),ce=se.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-content"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code,expression:"code"}]},[n("code",{staticClass:"xml"})])])},de=[],fe=(n("8da8"),{name:"FgCodeContent",props:{code:String}}),pe=fe,ge=(n("42fe"),Object(f["a"])(pe,ue,de,!1,null,"933774d0",null)),me=ge.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-container",class:{shadow:e.shadow}},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-header-left"}),n("div",{staticClass:"card-header-title"},[n("fg-header-medium",[e._v(" "+e._s(e.title)+" ")])],1),n("div",{staticClass:"card-header-right"})]),n("div",{staticClass:"card-body"},[e._t("default")],2)])},ve=[],he={name:"FgCard",props:{title:String,shadow:Boolean}},_e=he,xe=(n("8f37"),Object(f["a"])(_e,be,ve,!1,null,"1a488836",null)),ye=xe.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-container"},[n("table",[n("thead",[n("tr",e._l(e.headers,(function(t,a){return n("th",{key:a,style:{textAlign:t.align?t.align:"left"}},[e._v(" "+e._s(t.label)+" ")])})),0)]),n("tbody",e._l(e.items,(function(t,a){return n("tr",{key:"row"+a},e._l(Object.keys(t).length,(function(a,r){return n("td",{key:"col"+r,style:{textAlign:e.headers[r].align?e.headers[r].align:"left"}},[e._v(" "+e._s(t[e.headers[r].value])+" ")])})),0)})),0)])])},Ve=[],we=(n("a623"),{name:"FgTable",props:{items:{type:Array,required:!0,default:function(){return[]}},headers:{type:Array,required:!0,default:function(){return[]},validator:function(e){var t=["label","valueKey"];return e.every((function(e){return t.every((function(t){return Object.prototype.hasOwnProperty.call(e,t)}))}))}}}}),Ee=we,je=(n("52e0"),Object(f["a"])(Ee,Ce,Ve,!1,null,"7206ad4c",null)),Fe=je.exports;n("4fa8");var Oe={FgHelloWorld:g,FgSideBar:y,FgContainer:F,FgContent:L,FgHeaderLarge:W,FgHeaderMedium:U,FgTextLarge:X,FgDivider:ae,FgImageContainer:ce,FgCodeContent:me,FgCard:ye,FgTable:Fe};Object.keys(Oe).forEach((function(e){a["a"].component(e,Oe[e])}));var ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-example"},[n("fg-card",{attrs:{title:e.title}},[n("div",{staticClass:"label",on:{click:e.toggleCode}},[e._v(" "+e._s(e.labelText)+" ")]),e.viewingCode?n("fg-code-content",{attrs:{code:e.code}}):n("div",[e._t("example")],2)],1)],1)},Te=[],Ie={name:"FgCodeExample",props:{title:String,code:String},computed:{labelText:function(){return this.viewingCode?"[ View Results ]":"[ View Code ]"}},data:function(){return{viewingCode:!1}},methods:{toggleCode:function(){this.viewingCode=!this.viewingCode}}},Se=Ie,Le=(n("5d71"),Object(f["a"])(Se,ke,Te,!1,null,"67c40198",null)),$e=Le.exports,Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("fg-header-large",[e._v(" Usage ")]),e.props.length?n("fg-header-medium",[e._v(" Props ")]):e._e(),e._l(e.props,(function(t,a){return n("div",{key:a},[n("fg-text-large",[e._v(" "+e._s(t.name)+" | "+e._s(t.type)+" | "+e._s(t.description)+" ")])],1)})),e.slots.length?n("fg-header-medium",[e._v(" Slots ")]):e._e(),e._l(e.slots,(function(t,a){return n("div",{key:"slot-"+a},[n("fg-text-large",[e._v(" "+e._s(t.name)+" | "+e._s(t.description)+" ")])],1)}))],2)},Ae=[],Be={name:"FgUsage",props:{props:{type:Array,default:function(){return[]}},slots:{type:Array,default:function(){return[]}}}},Pe=Be,We=Object(f["a"])(Pe,Me,Ae,!1,null,"5c8ec792",null),He=We.exports,De={FgCodeExample:$e,FgUsage:He};Object.keys(De).forEach((function(e){a["a"].component(e,De[e])}));var Ne={name:"app",computed:{currentRouteName:function(){return this.$route.name}},data:function(){return{componentLinks:[{to:"/FgImageContainer",label:"Image Container"},{to:"/FgCard",label:"Card"},{to:"/FgTable",label:"Table"}],overviewLinks:[{to:"/Introduction",label:"Introduction"},{to:"/Setup",label:"Setup"}]}},methods:{getLinkText:function(e){return this.$route.path===e.to?"> ".concat(e.label):e.label}}},Re=Ne,ze=(n("3fde"),Object(f["a"])(Re,l,o,!1,null,"74cbe8fc",null)),Ue=ze.exports,Ge=n("8c4f"),qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("fg-divider"),n("fg-text-large",[e._v(" A design system inspired by the simplicity and useability found in vintage field guides. ")]),n("fg-divider"),e._l(e.images,(function(e,t){return n("fg-image-container",{key:t,attrs:{src:e}})}))],2)},Je=[],Ke=n("0834"),Qe=n.n(Ke),Xe=n("b536"),Ye=n.n(Xe),Ze=n("ea0c"),et=n.n(Ze),tt=n("efd9"),nt=n.n(tt),at=n("7022"),rt=n.n(at),it=n("acc2"),lt=n.n(it),ot=n("d6f6"),st=n.n(ot),ct=n("ff60"),ut=n.n(ct),dt=n("b9d9"),ft=n.n(dt),pt={name:"FgLandingPage",data:function(){return{images:[Qe.a,Ye.a,et.a,nt.a,rt.a,lt.a,st.a,ut.a,ft.a]}}},gt=pt,mt=(n("33f2"),Object(f["a"])(gt,qe,Je,!1,null,"77f5b126",null)),bt=mt.exports,vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("fg-divider"),n("fg-header-large",[e._v(" IMAGE CONTAINER ")]),n("fg-text-large",[e._v(" The `fg-image-container` component provides the ability to render images. ")]),n("fg-code-example",{attrs:{title:"Basic Example",code:e.basicExample},scopedSlots:e._u([{key:"example",fn:function(){return[n("fg-image-container",{attrs:{src:e.basicExampleImage}})]},proxy:!0}])}),n("br"),n("br"),n("fg-usage",{attrs:{props:e.props,slots:e.slots}}),n("br"),n("br"),n("fg-code-example",{attrs:{title:"With Caption",code:e.labelExample},scopedSlots:e._u([{key:"example",fn:function(){return[n("fg-image-container",{attrs:{src:e.labelExampleImage},scopedSlots:e._u([{key:"caption",fn:function(){return[n("span",[e._v(" This is a caption. ")])]},proxy:!0}])})]},proxy:!0}])})],1)},ht=[],_t={name:"FgImageContainerDocs",data:function(){return{basicExampleImage:Qe.a,basicExample:"<template>\n  <fg-image-container :src=\"birdImage\">\n</template>\n\n<script>\nimport birdImage from '../assets/field_note_examples/bird_1.jpg';\n\nexport default {\n  name: 'FgImageContainer',\n  data: () => ({\n    birdImage,\n  }),\n};\n<script>",labelExampleImage:et.a,labelExample:"<template>\n  <fg-image-container :src=\"labelImage\">\n   <template v-slot:caption>\n     <span>\n       This is a caption.\n     </span>\n   </template>\n  </fg-image-container>\n</template>\n\n<script>\nimport labelImage from '../assets/field_note_examples/bird_4.jpg';\n\nexport default {\n  name: 'FgImageContainer',\n  data: () => ({\n    labelImage,\n  }),\n};\n<script>",props:[{name:"src",type:"string",description:"Image to be rendered"}],slots:[{name:"caption",description:"Renders below the image.  Typically used for captions."}]}}},xt=_t,yt=(n("f3ad"),Object(f["a"])(xt,vt,ht,!1,null,"27caae08",null)),Ct=yt.exports,Vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("fg-divider"),n("fg-header-large",[e._v(" Card ")]),n("fg-text-large",[e._v(" The `fg-card` component provides the ability to organize content into different sections. ")]),n("fg-code-example",{attrs:{title:"Basic Example",code:e.basicExample},scopedSlots:e._u([{key:"example",fn:function(){return[n("fg-card",{attrs:{title:"Card Title"}},[n("fg-text-large",[e._v(" Card Body ")])],1)]},proxy:!0}])}),n("br"),n("br"),n("fg-usage",{attrs:{props:e.props,slots:e.slots}}),n("br"),n("br"),n("fg-code-example",{attrs:{title:"With Shadow",code:e.shadowExample},scopedSlots:e._u([{key:"example",fn:function(){return[n("fg-card",{attrs:{title:"Card Title",shadow:""}},[n("fg-text-large",[e._v(" Card Body ")])],1)]},proxy:!0}])})],1)},wt=[],Et={name:"FgCardDocs",data:function(){return{basicExample:"<template>\n  <fg-card title=\"Card Title\">\n    <fg-text-large>\n      Card Body\n    </fg-text-large>\n  </fg-card>\n</template>\n\n<script>\nexport default {\n  name: 'CardExample',\n};\n<script>",shadowExample:"<template>\n  <fg-card\n    title=\"Card Title\"\n    shadow\n  >\n    <fg-text-large>\n      Card Body\n    </fg-text-large>\n  </fg-card>\n</template>\n\n<script>\nexport default {\n  name: 'CardExample',\n};\n<script>",props:[{name:"title",type:"string",description:"Title of card"}],slots:[]}}},jt=Et,Ft=(n("4518"),Object(f["a"])(jt,Vt,wt,!1,null,"7e45cf94",null)),Ot=Ft.exports,kt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("fg-divider"),n("fg-header-large",[e._v(" Table ")]),n("fg-text-large",[e._v(" The `fg-table` component provides the ability to organize content into different rows. ")]),n("fg-code-example",{attrs:{title:"Basic Example",code:e.basicExample},scopedSlots:e._u([{key:"example",fn:function(){return[n("fg-table",{attrs:{items:e.items,headers:e.headers}})]},proxy:!0}])}),n("br"),n("br"),n("fg-usage",{attrs:{props:e.props,slots:e.slots}})],1)},Tt=[],It="<template>\n  <fg-table\n    :items=\"items\"\n    :headers=\"headers\"\n  />\n</template>\n\n<script>\nexport default {\n  name: 'TableExample',\n  data: () => ({\n    headers: [\n      {\n        label: 'Label1',\n        value: 'Value1',\n        },\n      {\n        label: 'Label2',\n        value: 'Value2',\n        },\n      {\n        label: 'Label3',\n        value: 'Value3',\n        },\n      {\n        label: 'Label4',\n        value: 'Value4',\n        align: 'right',\n      },\n    ],\n    items: [\n      {\n        Value1: 'Value1',\n        Value2: 'Value2',\n        Value3: 'Value3',\n        Value4: 'Value4',\n      },\n      {\n        Value1: 'Value1',\n        Value2: 'Value2',\n        Value3: 'Value3',\n        Value4: 'Value4',\n      },\n      {\n        Value1: 'Value1',\n        Value2: 'Value2',\n        Value3: 'Value3',\n        Value4: 'Value4',\n      },\n      {\n        Value1: 'Value1',\n        Value2: 'Value2',\n        Value3: 'Value3',\n        Value4: 'Value4',\n      },\n    ],\n  }),\n};\n<\/script>",St={name:"FgTableDocs",data:function(){return{headers:[{label:"Label1",value:"Value1"},{label:"Label2",value:"Value2"},{label:"Label3",value:"Value3"},{label:"Label4",value:"Value4",align:"right"}],items:[{Value1:"Value1",Value2:"Value2",Value3:"Value3",Value4:"Value4"},{Value1:"Value1",Value2:"Value2",Value3:"Value3",Value4:"Value4"},{Value1:"Value1",Value2:"Value2",Value3:"Value3",Value4:"Value4"},{Value1:"Value1",Value2:"Value2",Value3:"Value3",Value4:"Value4"}],props:[{name:"Headers",type:"Array",description:"Array of header objects {label: x, value: x, align: x}"},{name:"Items",type:"Array",description:"Array of item objects"}],slots:[],basicExample:It}}},Lt=St,$t=(n("9136"),Object(f["a"])(Lt,kt,Tt,!1,null,"1f987b5d",null)),Mt=$t.exports;a["a"].use(Ge["a"]);var At=new Ge["a"]({routes:[{path:"/",name:"LandingPage",component:bt},{path:"/Introduction",name:"Introduction",component:bt},{path:"/FgImageContainer",name:"Image Container",component:Ct},{path:"/FgCard",name:"Card",component:Ot},{path:"/FgTable",name:"Table",component:Mt}]});a["a"].config.productionTip=!1,a["a"].use(i.a),new a["a"]({render:function(e){return e(Ue)},router:At}).$mount("#app")},"5d71":function(e,t,n){"use strict";var a=n("8895"),r=n.n(a);r.a},6803:function(e,t,n){},7022:function(e,t,n){e.exports=n.p+"img/bird_5.4f228e4a.jpg"},7967:function(e,t,n){"use strict";var a=n("51b3"),r=n.n(a);r.a},8860:function(e,t,n){},8895:function(e,t,n){},"8d9c":function(e,t,n){},"8f37":function(e,t,n){"use strict";var a=n("c502"),r=n.n(a);r.a},9136:function(e,t,n){"use strict";var a=n("fe26"),r=n.n(a);r.a},9617:function(e,t,n){},acc2:function(e,t,n){e.exports=n.p+"img/fossil_1.1941035b.jpg"},b1b6:function(e,t,n){"use strict";var a=n("8d9c"),r=n.n(a);r.a},b536:function(e,t,n){e.exports=n.p+"img/bird_2.73059b11.jpg"},b702:function(e,t,n){"use strict";var a=n("2028"),r=n.n(a);r.a},b9d9:function(e,t,n){e.exports=n.p+"img/plant_1.9830f6f0.jpg"},bd35:function(e,t,n){},c502:function(e,t,n){},d6f6:function(e,t,n){e.exports=n.p+"img/fossil_2.f94d7aa6.jpg"},dce0:function(e,t,n){},dfc6:function(e,t,n){"use strict";var a=n("faba"),r=n.n(a);r.a},e6b2:function(e,t,n){},ea0c:function(e,t,n){e.exports=n.p+"img/bird_3.5d8c597f.jpg"},efd9:function(e,t,n){e.exports=n.p+"img/bird_4.dbddcde9.jpg"},f34c:function(e,t,n){},f3ad:function(e,t,n){"use strict";var a=n("3b0e"),r=n.n(a);r.a},faba:function(e,t,n){},fd2b:function(e,t,n){"use strict";var a=n("f34c"),r=n.n(a);r.a},fe26:function(e,t,n){},ff60:function(e,t,n){e.exports=n.p+"img/fossil_3.12883e3c.jpg"},ff8c:function(e,t,n){"use strict";var a=n("8860"),r=n.n(a);r.a}});
//# sourceMappingURL=app.225ff628.js.map