(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{87:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var r=n(9),a=n.n(r),o=n(30),c=n.n(o),s=n(1),i=n.n(s),u=n(0),l=n(85),f=n(4),p=n(32),d=n(12),b=n(47),j=n(74),g=n(86),w=n(56),x=n(14),O="black",h="#3A3D40",y="#5C5C60",m=n(123),v=n(21),k=n(3);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(){var e=Object(u.useState)(!0),t=c()(e,2),n=t[0],r=t[1],o=Object(u.useState)(""),s=c()(o,2),f=s[0],O=s[1],P=Object(u.useState)({}),D=c()(P,2),C=D[0],I=D[1];Object(u.useEffect)((function(){console.log("useEffect \uc2e4\ud589"),E()}),[]);var T=function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(v.a.setItem("@toDos",JSON.stringify(e)));case 2:case"end":return t.stop()}}),null,null,null,Promise)},E=function(){var e,t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(v.a.getItem("@toDos"));case 2:return"string"===typeof(e=a.sent)&&I(JSON.parse(e)),a.next=6,i.a.awrap(v.a.getItem("@working"));case 6:t=a.sent,r("true"===t),console.log("working >>",n);case 9:case"end":return a.stop()}}),null,null,null,Promise)};console.log("toDos >>",C);return Object(k.jsxs)(d.a,{style:z.container,children:[Object(k.jsx)(l.a,{style:"auto"}),Object(k.jsxs)(d.a,{style:z.header,children:[Object(k.jsx)(b.a,{onPress:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.next=3,i.a.awrap(v.a.setItem("@working","true"));case 3:return t.next=5,i.a.awrap(v.a.getItem("@working"));case 5:e=t.sent,console.log(e);case 7:case"end":return t.stop()}}),null,null,null,Promise)},activeOpacity:0,children:Object(k.jsx)(p.a,{style:{fontSize:44,fontWeight:"600",color:n?"white":h},children:"Work"})}),Object(k.jsx)(b.a,{onPress:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!1),t.next=3,i.a.awrap(v.a.setItem("@working","false"));case 3:return t.next=5,i.a.awrap(v.a.getItem("@working"));case 5:e=t.sent,console.log(e);case 7:case"end":return t.stop()}}),null,null,null,Promise)},children:Object(k.jsx)(p.a,{style:{fontSize:44,fontWeight:"600",color:n?h:"white"},children:"Travel"})})]}),Object(k.jsx)(j.a,{style:z.input,placeholder:n?"\ud560\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694":"\uc5b4\ub514\ub85c \uac08\ub798\uc694?",onChangeText:function(e){return O(e)},value:f,onSubmitEditing:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==f){t.next=2;break}return t.abrupt("return");case 2:return e=S(S({},C),{},a()({},Date.now(),{text:f,working:n})),I(e),t.next=6,i.a.awrap(T(e));case 6:O("");case 7:case"end":return t.stop()}}),null,null,null,Promise)},returnKeyType:"done"}),Object(k.jsx)(g.a,{children:Object.keys(C).map((function(e){return C[e].working===n?Object(k.jsxs)(d.a,{style:z.todo,children:[Object(k.jsx)(p.a,{style:z.todoText,children:C[e].text}),Object(k.jsx)(b.a,{onPress:function(){return function(e){if("web"===x.a.OS){if(confirm("\uc774 \ubaa9\ub85d \uc9c0\uc6b8\ub798\uc694?")){var t=S({},C);delete t[e],I(t),T(t),O("")}}else w.a.alert("\uc9c4\uc9dc \uc9c0\uc6b8\ub824\uad6c?","\uc988\uc751\ub9d0?",[{text:"cancel"},{text:"sure!",onPress:function(){var t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return delete(t=S({},C))[e],I(t),n.next=5,i.a.awrap(T(t));case 5:O("");case 6:case"end":return n.stop()}}),null,null,null,Promise)}}])}(e)},children:Object(k.jsx)(m.a,{name:"trash",size:16,color:y})})]},e):null}))})]})}var z=f.a.create({container:{flex:1,backgroundColor:O,paddingHorizontal:20},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},input:{backgroundColor:"white",paddingVertical:15,paddingHorizontal:20,borderRadius:20,marginVertical:20,fontSize:18},todo:{backgroundColor:h,marginBottom:10,paddingVertical:20,paddingHorizontal:40,borderRadius:15,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},todoText:{color:"white",fontSize:16,fontWeight:"500"}})},88:function(e,t,n){e.exports=n(115)}},[[88,1,2]]]);
//# sourceMappingURL=app.3560ff28.chunk.js.map