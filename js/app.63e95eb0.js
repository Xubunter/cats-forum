(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01cc":function(t,e,n){},"05ff":function(t,e,n){"use strict";var r=n("e9cd"),o=n.n(r);o.a},"485b":function(t,e,n){"use strict";var r=n("01cc"),o=n.n(r);o.a},"4bd7":function(t,e,n){"use strict";var r=n("b016"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"filters-block"},[n("Filters",{model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1),t.error?n("div",{staticClass:"error"},[n("h2",[t._v(t._s(t.error))])]):t.loading?n("div",{staticClass:"loading"},[n("h2",[t._v("Загрузка...")])]):0===t.postsList.length?n("div",{staticClass:"empty"},[n("h2",[t._v("Ничего не найдено")])]):n("PostList",{attrs:{value:t.postsList}})],1)])},s=[],a=(n("a4d3"),n("99af"),n("4de4"),n("7db0"),n("4160"),n("d81d"),n("13d5"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),i=(n("96cf"),n("1da1")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filters"},[n("div",{staticClass:"title"},[t._v("Фильтры")]),n("div",{staticClass:"input"},[n("div",{staticClass:"input__label"},[t._v("Имя/название")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input__field",attrs:{type:"text"},domProps:{value:t.title},on:{input:[function(e){e.target.composing||(t.title=e.target.value)},t.inputHandler]}})]),n("div",{staticClass:"input"},[n("div",{staticClass:"input__label"},[t._v("Контент")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"input__field",attrs:{type:"text"},domProps:{value:t.content},on:{input:[function(e){e.target.composing||(t.content=e.target.value)},t.inputHandler]}})])])},u=[],l={name:"Filters",data:function(){return{title:"",content:""}},methods:{inputHandler:function(){this.$emit("input",{title:this.title,content:this.content})}}},d=l,p=(n("05ff"),n("2877")),f=Object(p["a"])(d,c,u,!1,null,"d91132ec",null),m=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("transition-group",{attrs:{name:"posts-slide",tag:"div"}},t._l(t.value,(function(t){return n("div",{key:t.id,staticClass:"posts-list"},[n("Post",{attrs:{value:t}})],1)})),0)],1)},b=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("div",{staticClass:"post__wrapper"},[n("img",{staticClass:"post__avatar",attrs:{src:t.value.image,alt:"",width:"100",height:"100"}}),n("div",{staticClass:"post__info"},[n("div",{staticClass:"username"},t._l(t.value.username,(function(e){return n("span",{key:e.id,class:{found:"found"===e.type},domProps:{textContent:t._s(e.value)}})})),0),n("h2",{staticClass:"title"},t._l(t.value.title,(function(e){return n("span",{key:e.id,class:{found:"found"===e.type},domProps:{textContent:t._s(e.value)}})})),0)]),n("div",{staticClass:"post__body"},t._l(t.value.body,(function(e){return n("span",{key:e.id,class:{found:"found"===e.type},domProps:{textContent:t._s(e.value)}})})),0),t.showComments?t._e():n("div",{staticClass:"post__footer"},[n("button",{staticClass:"comments-toggle",on:{click:t.openComments}},[t._v(" Открыть комментарии ")])])]),n("transition",{attrs:{name:"comments-slide"}},[t.showComments?n("div",{staticClass:"comments"},[t.error?n("div",{staticClass:"comments__error"},[t._v(t._s(t.error))]):n("div",{staticClass:"comments__list"},[t.loadingComments?n("div",[t._v("Загрузка...")]):n("div",t._l(t.comments,(function(t){return n("Comment",{key:t.id,attrs:{value:t}})})),1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loadingComments,expression:"!loadingComments"}],staticClass:"comments__footer"},[n("button",{staticClass:"comments-toggle",on:{click:t.hideComments}},[t._v(" Скрыть комментарии ")])])]):t._e()])],1)},_=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("div",{staticClass:"comment__wrapper"},[n("img",{staticClass:"comment__avatar",attrs:{src:t.value.image,alt:"",width:"40",height:"80"}}),n("div",{staticClass:"comment__info"},[n("div",{staticClass:"comment__name"},[t._v(" "+t._s(t.value.name)+" "),n("span",{staticClass:"comment__after-name"},[t._v("промурчал")])]),n("div",{staticClass:"comment__body"},[t._v(t._s(t.value.body))])])])])},y=[],C={name:"Comment",props:{value:Object}},O=C,j=(n("4bd7"),Object(p["a"])(O,g,y,!1,null,"25eb8ba9",null)),w=j.exports,P=(n("d3b7"),function(){return fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then((function(t){return{data:t}})).catch((function(){return{error:"Ошибка получения постов"}}))}),x=function(){return fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(t){return{data:t}})).catch((function(){return{error:"Ошибка получения пользователей"}}))},k=function(t){return fetch("https://jsonplaceholder.typicode.com/comments?postId=".concat(t)).then((function(t){return t.json()})).then((function(t){return{data:t}})).catch((function(){return{error:"Не удалось получить комментарии"}}))},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return"https://placekitten.com/g/".concat(t,"/").concat(e)};function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var L={name:"Post",components:{Comment:w},props:{value:Object},data:function(){return{showComments:!1,loadingComments:!1,comments:[],error:null}},methods:{openComments:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.showComments=!0,!(t.comments.length>0)){e.next=3;break}return e.abrupt("return");case 3:return t.loadingComments=!0,t.error=null,e.next=7,k(t.value.id);case 7:if(n=e.sent,!n.error){e.next=12;break}return t.error=n.error,t.loadingComments=!1,e.abrupt("return");case 12:t.comments=n.data.map((function(t){return D({},t,{image:E(+t.id+40,+t.postId+80)})})),t.loadingComments=!1;case 14:case"end":return e.stop()}}),e)})))()},hideComments:function(){this.showComments=!1}}},$=L,M=(n("485b"),Object(p["a"])($,h,_,!1,null,"6564a303",null)),R=M.exports,F={name:"PostList",components:{Post:R},props:{value:Array}},H=F,I=(n("c76b"),Object(p["a"])(H,v,b,!1,null,"15a27ccb",null)),N=I.exports,T=(n("c975"),n("fb6a"),function(t,e){if(!t||!e)return{found:!1,data:[{id:"0, -1",type:"default",value:t}]};var n=[],r=function(t,e,r,o){n.push({id:"".concat(r,",").concat(o),type:t,value:e.slice(r,o)})},o=-1,s=0;while(-1!==(o=t.toLowerCase().indexOf(e.toLowerCase(),o+1)))o!==s&&r("default",t,s,o),r("found",t,o,o+e.length),s=o+e.length;return s!==t.length&&r("default",t,s,t.length),{found:0!==s,data:n}});function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var U={name:"app",components:{Filters:m,PostList:N},data:function(){return{filters:{},posts:[],users:[],comments:{},error:null,loading:!1}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.error=null,e.next=4,P();case 4:return n=e.sent,e.next=7,x();case 7:if(r=e.sent,t.loading=!1,!n.error){e.next=12;break}return t.error=n.error,e.abrupt("return");case 12:if(!r.error){e.next=15;break}return t.error=r.error,e.abrupt("return");case 15:return o=function(t){var e=r.data.find((function(e){return e.id===t}));return{username:e?e.username:"Unknown",image:E(+t+100)}},e.next=18,n.data.map((function(t){return A({},t,{},o(t.userId))}));case 18:t.posts=e.sent;case 19:case"end":return e.stop()}}),e)})))()},computed:{postsList:function(){var t=this.filters,e=t.title,n=t.content;return this.posts.reduce((function(t,r){var o=T(r.title,e),s=T(r.username,e),a=T(r.body,n),i=!e||o.found||s.found,c=!n||a.found;return i&&c?t.concat([A({},r,{title:o.data,username:s.data,body:a.data})]):t}),[])}}},q=U,z=(n("5c0b"),Object(p["a"])(q,o,s,!1,null,null,null)),B=z.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(B)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(t,e,n){},b016:function(t,e,n){},c76b:function(t,e,n){"use strict";var r=n("d68e"),o=n.n(r);o.a},d68e:function(t,e,n){},e9cd:function(t,e,n){}});
//# sourceMappingURL=app.63e95eb0.js.map