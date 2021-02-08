(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],p=0,m=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],r=!0,i=1;i<s.length;i++){var l=s[i];0!==a[l]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},a={app:0},n=[];function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(s,r,function(e){return t[e]}.bind(null,r));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dc_test_vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("f9e3");var r=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("AddPersonForm",{attrs:{savePersons:t.savePersons}}),s("PersonsTable",{attrs:{persons:t.persons}})],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-5"},[s("div",{staticClass:"col-sm-10 mx-auto"},[s("form",{staticClass:"row"},[s("div",{staticClass:"col-lg-3"},[s("label",{staticClass:"visually-hidden",attrs:{for:"inputFirstName"}},[t._v("Имя")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"form-control",attrs:{type:"text",id:"inputFirstName",placeholder:"Имя"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),s("div",{staticClass:"col-lg-3"},[s("label",{staticClass:"visually-hidden",attrs:{for:"inputLastName"}},[t._v("Фамилия")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"form-control",attrs:{type:"text",id:"inputLastName",placeholder:"Фамилия"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),s("div",{staticClass:"col-lg-3"},[s("label",{staticClass:"visually-hidden",attrs:{for:"inputAge"}},[t._v("Возраст")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.age,expression:"age"}],staticClass:"form-control",attrs:{type:"text",id:"inputAge",placeholder:"Возраст"},domProps:{value:t.age},on:{input:function(e){e.target.composing||(t.age=e.target.value)}}})]),s("div",{staticClass:"col-lg-3"},[s("button",{staticClass:"btn btn-primary mb-3",attrs:{type:"button"},on:{click:t.addPerson}},[t._v("Добавить")])])])])])},i=[],l=(s("498a"),{name:"AddPersonForm",props:["savePersons"],data:function(){return{persons:[],firstName:null,lastName:null,age:null}},methods:{addPerson:function(){if(this.firstName&&this.lastName&&this.age&&""!=this.firstName.trim()&&""!=this.lastName.trim()&&""!=this.age.trim()){var t={firstName:this.firstName.trim(),lastName:this.lastName.trim(),age:this.age.trim()};this.persons.push(t),this.firstName="",this.lastName="",this.age="",this.savePersons({persons:this.persons})}}}}),c=l,u=s("2877"),p=Object(u["a"])(c,o,i,!1,null,"3b25cdc2",null),m=p.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-5"},[s("div",{staticClass:"col-sm-10 mx-auto"},[s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.persons,(function(e,r){return s("tr",{key:r},[s("td",[t._v(t._s(e.firstName))]),s("td",[t._v(t._s(e.lastName))]),s("td",[t._v(t._s(e.age))])])})),0)])])])},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Имя")]),s("th",{attrs:{scope:"col"}},[t._v("Фамилия")]),s("th",{attrs:{scope:"col"}},[t._v("Возраст")])])])}],v={name:"PersonsTable",props:{persons:Array}},h=v,g=Object(u["a"])(h,f,d,!1,null,"11e9f800",null),b=g.exports,N={name:"App",data:function(){return{persons:[]}},components:{AddPersonForm:m,PersonsTable:b},mounted:function(){if(localStorage.getItem("persons"))try{this.persons=JSON.parse(localStorage.getItem("persons"))}catch(t){localStorage.removeItem("persons")}},methods:{savePersons:function(t){this.persons=t.persons;var e=JSON.stringify(this.persons);localStorage.setItem("persons",e)}}},_=N,y=(s("034f"),Object(u["a"])(_,a,n,!1,null,null,null)),P=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.b16a7297.js.map