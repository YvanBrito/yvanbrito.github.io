(function(t){function e(e){for(var r,o,l=e[0],s=e[1],u=e[2],d=0,h=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02ce":function(t,e,n){},"0ab0":function(t,e,n){"use strict";var r=n("c432"),a=n.n(r);a.a},1182:function(t,e,n){},"2fe3":function(t,e,n){"use strict";var r=n("02ce"),a=n.n(r);a.a},"34ba":function(t,e,n){"use strict";var r=n("1182"),a=n.n(r);a.a},"4d8e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas"},[n("NavBar"),n("Dashboard")],1)},i=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("ul",[n("li",[n("a",{staticClass:"active",attrs:{href:"#home"}},[t._v("Mundo")])]),n("li",[n("a",{attrs:{href:"#news"}},[t._v("Brasil")])]),n("li",[n("a",{attrs:{href:"#contact"}},[t._v("Pará")])]),n("li",[n("a",{attrs:{href:"#about"}},[t._v("Sobre")])])])])}],s={},u=s,c=(n("34ba"),n("2877")),d=Object(c["a"])(u,o,l,!1,null,null,null),h=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("Panel"),n("Card",{attrs:{title:"Mortes por dia"}},[n("BarChart",{attrs:{name:"mortespordia1",width:600,height:300}})],1),n("Card",{attrs:{title:"Casos novos por data de confirmação"}},[n("LineChart",{attrs:{name:"mortespordia2",width:600,height:300}})],1),n("Card",{attrs:{title:"Nº de casos por região"}},[n("PieChart",{attrs:{name:"mortespordia3",width:600,height:300}})],1)],1)},p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("Card",{attrs:{title:"Confirmados"}},[t._v(" 19.490 ")]),n("Card",{attrs:{title:"Óbitos"}},[t._v(" 5.239 ")]),n("Card",{attrs:{title:"Letalidade"}},[t._v(" 6,5% ")])],1)},b=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"container"},[n("p",[t._v(t._s(t.title))])]),t._t("default")],2)},g=[],y={name:"Card",props:{title:{type:String,required:!0}}},_=y,C=(n("0ab0"),Object(c["a"])(_,v,g,!1,null,null,null)),w=C.exports,x={components:{Card:w}},O=x,j=(n("645c"),Object(c["a"])(O,m,b,!1,null,null,null)),S=j.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("svg",{attrs:{id:t.name,width:t.width,height:t.height}})])},N=[],E=(n("d81d"),n("b0c0"),n("a9e3"),n("5698")),$={name:"BarChart",props:{name:{type:String,required:!0},width:{type:Number,default:200},height:{type:Number,default:200}},mounted:function(){this.setChart()},methods:{setChart:function(){var t=E["n"]("#".concat(this.name)),e={top:20,right:20,bottom:30,left:50},n=+t.attr("width")-e.left-e.right,r=+t.attr("height")-e.top-e.bottom,a=t.append("g").attr("transform","translate("+e.left+","+e.top+")"),i=E["j"]().rangeRound([0,n]).padding(.1),o=E["k"]().rangeRound([r,0]);E["p"]("./data/morley.tsv").then((function(t){console.log(t),i.domain(t.map((function(t){return t.Run}))),o.domain([0,E["h"](t,(function(t){return Number(t.Speed)}))]),a.append("g").attr("transform","translate(0,"+r+")").call(E["b"](i)),a.append("g").call(E["c"](o)).append("text").attr("fill","#000").attr("transform","rotate(-90)").attr("y",6).attr("dy","0.71em").attr("text-anchor","end").text("Speed"),a.selectAll(".bar").data(t).enter().append("rect").attr("class","bar").attr("x",(function(t){return i(t.Run)})).attr("y",(function(t){return o(Number(t.Speed))})).attr("width",i.bandwidth()).attr("height",(function(t){return r-o(Number(t.Speed))}))}))}}},k=$,M=(n("b8c6"),Object(c["a"])(k,P,N,!1,null,null,null)),B=M.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("svg",{attrs:{id:t.name}})])},q=[],L=(n("4160"),n("159b"),{name:"LineChart",props:{name:{type:String,required:!0},width:{type:Number,default:200},height:{type:Number,default:200}},mounted:function(){this.setChart()},methods:{setChart:function(){var t={top:20,right:20,bottom:50,left:70},e=this.width-t.left-t.right,n=this.height-t.top-t.bottom,r=E["o"]("%d-%b-%y"),a=E["m"]().range([0,e]),i=E["k"]().range([n,0]),o=E["g"]().x((function(t){return a(t.date)})).y((function(t){return i(t.close)})),l=E["n"]("#".concat(this.name)).attr("width",e+t.left+t.right).attr("height",n+t.top+t.bottom).append("g").attr("transform","translate("+t.left+","+t.top+")");E["d"]("./data/data.csv").then((function(t){console.log(t),t.forEach((function(t){t.date=r(t.date),t.close=+t.close})),a.domain(E["f"](t,(function(t){return t.date}))),i.domain([0,E["h"](t,(function(t){return t.close}))]),l.append("path").data([t]).attr("class","line").attr("d",o),l.append("g").attr("transform","translate(0,"+n+")").call(E["b"](a)),l.append("g").call(E["c"](i))}))}}}),A=L,T=(n("9d7f"),Object(c["a"])(A,R,q,!1,null,null,null)),D=T.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("svg",{attrs:{id:t.name,width:t.width,height:t.height}})])},z=[],F={name:"PieChart",props:{name:{type:String,required:!0},width:{type:Number,default:200},height:{type:Number,default:200}},mounted:function(){this.setChart()},methods:{setChart:function(){var t=40,e=Math.min(this.width,this.height)/2-t,n=E["n"]("#".concat(this.name)).append("g").attr("transform","translate("+this.width/2+","+this.height/2+")"),r={a:9,b:20,c:30,d:8,e:12},a=E["l"]().domain(r).range(["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56"]),i=E["i"]().value((function(t){return t.value})),o=i(E["e"](r));n.selectAll("whatever").data(o).enter().append("path").attr("d",E["a"]().innerRadius(0).outerRadius(e)).attr("fill",(function(t){return a(t.data.key)})).attr("stroke","black").style("stroke-width","2px").style("opacity",.7)}}},G=F,H=Object(c["a"])(G,J,z,!1,null,null,null),I=H.exports,K={components:{Panel:S,Card:w,BarChart:B,LineChart:D,PieChart:I}},Q=K,U=(n("2fe3"),Object(c["a"])(Q,f,p,!1,null,null,null)),V=U.exports,W={name:"App",components:{NavBar:h,Dashboard:V}},X=W,Y=Object(c["a"])(X,a,i,!1,null,null,null),Z=Y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Z)}}).$mount("#app")},"645c":function(t,e,n){"use strict";var r=n("a8a4"),a=n.n(r);a.a},"9d7f":function(t,e,n){"use strict";var r=n("4d8e"),a=n.n(r);a.a},a8a4:function(t,e,n){},b8c6:function(t,e,n){"use strict";var r=n("e4de"),a=n.n(r);a.a},c432:function(t,e,n){},e4de:function(t,e,n){}});
//# sourceMappingURL=app.81714608.js.map