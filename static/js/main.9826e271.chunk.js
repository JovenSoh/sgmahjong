(this.webpackJsonpsgmahjong=this.webpackJsonpsgmahjong||[]).push([[0],{127:function(e,n,t){},128:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(41),a=t.n(i),c=t(15),o=t(6),s=t(32),l=t.n(s),u=t(10),d=t(73),b=t(7),j=t(63),f=t(53),h=t(50);function O(e,n){if(e.suit<n.suit)return-1;if(e.suit>n.suit)return 1;if(e.suit===n.suit){if(e.value<n.value)return-1;if(e.value>n.value)return 1}return 0}function x(e){var n,t=[],r=new Map,i=Object(h.a)(e);try{for(i.s();!(n=i.n()).done;){var a=n.value;r.has(a.value)||(r.set(a.value,!0),t.push({suit:a.suit,value:a.value,id:a.id,picture:a.picture}))}}catch(c){i.e(c)}finally{i.f()}return t}function p(e,n,t,r,i,a,s){var l,u,d=e.concat(n.concat(a).concat(s)).sort(O),b=e.concat(n.concat(a).concat(s)).sort(O),h=[{name:"allPong",value:!1,points:2},{name:"\u81ed\u5e73\u548c",value:!1,points:1},{name:"\u5e73\u548c",value:!1,points:4},{name:"\u6e05\u4e00\u8272",value:!1,points:4},{name:"\u6df7\u4e00\u8272",value:!1,points:2},{name:"oneNine",value:!1,points:5},{name:"halfOneNine",value:!1,points:1},{name:"\u4e03\u5bf9\u5b50",value:!1,points:3},{name:"\u5341\u4e09\u5e7a",value:!1,points:5}],p=function(e){var n=e.reduce((function(e,n){return e["".concat(n.suit," ").concat(n.value)]=++e["".concat(n.suit," ").concat(n.value)]||0,e}),{}),t=e.filter((function(e){return 1===n["".concat(e.suit," ").concat(e.value)]}));if(console.log("Pairs: ",t),14===t.length)return[!0,[],[],[],"\u4e03\u5bf9\u5b50"];var r=e.filter((function(e){return"bamboo"===e.suit&&1===e.value||"bamboo"===e.suit&&9===e.value||"circles"===e.suit&&1===e.value||"circles"===e.suit&&9===e.value||"numbers"===e.suit&&1===e.value||"numbers"===e.suit&&9===e.value||"~north"===e.suit||"~south"===e.suit||"~east"===e.suit||"~west"===e.suit||"~red"===e.suit||"~green"===e.suit||"~white"===e.suit}));console.log("\u5341\u4e09\u5e7a: ",r);var i=Object(f.a)(new Map(r.map((function(e){return[JSON.stringify([e.suit,e.value]),e]}))).values());if(14===r.length&&13===i.length)return[!0,[],[],[],"\u5341\u4e09\u5e7a"];for(var a=[],c=function(n){if(e[n]){var t=e.filter((function(t){return t.suit===e[n].suit&&(t.value===e[n].value-1||t.value===e[n].value-2)}));if(2===(t=x(t)).length){a=a.concat([[t[0],t[1],e[n]]]);var r=e.indexOf(e[n]),i=e.findIndex((function(e){return e.suit===t[1].suit&&e.value===t[1].value&&e.id===t[1].id})),c=e.findIndex((function(e){return e.suit===t[0].suit&&e.value===t[0].value&&e.id===t[0].id}));e.splice(r,1),e.splice(i,1),e.splice(c,1)}}},o=e.length-1;o>=2;o--)c(o);var s=e.reduce((function(e,n){return e["".concat(n.suit," ").concat(n.value)]=++e["".concat(n.suit," ").concat(n.value)]||0,e}),{}),l=e.filter((function(e){return s["".concat(e.suit," ").concat(e.value)]>=2})),u=e=e.filter((function(e){return s["".concat(e.suit," ").concat(e.value)]<2}));return console.log("Chow sets: ",a),console.log("Pong sets: ",l),console.log("Eye:",u),2===u.length&&u[0].suit===u[1].suit&&u[0].value===u[1].value?[!0,a,l,u,null]:[!1]}(d),g=Object(o.a)(p,5),m=g[0],v=g[1],w=g[2],S=g[3],y=g[4];if(y)"\u4e03\u5bf9\u5b50"===y?h[h.findIndex((function(e){return"\u4e03\u5bf9\u5b50"===e.name}))].value=!0:"\u5341\u4e09\u5e7a"===y&&(h[h.findIndex((function(e){return"\u5341\u4e09\u5e7a"===e.name}))].value=!0);else if(m){if(w.length>=12&&(h[h.findIndex((function(e){return"allPong"===e.name}))].value=!0),"~red"!=S[0].suit&&"~green"!=S[0].suit&&"~white"!=S[0].suit&&S[0].suit!=r&&S[0].suit!=i&&4===v.length)if(0!==a.length){var T=v.filter((function(e){return e.indexOf(a)>0}));T[0]!==a&&T[2]!==a||(0===t.length?h[h.findIndex((function(e){return"\u5e73\u548c"===e.name}))].value=!0:h[h.findIndex((function(e){return"\u81ed\u5e73\u548c"===e.name}))].value=!0)}else 0===t.length?h[h.findIndex((function(e){return"\u5e73\u548c"===e.name}))].value=!0:h[h.findIndex((function(e){return"\u81ed\u5e73\u548c"===e.name}))].value=!0;var P=Object(f.a)(new Set(b.map((function(e){return e.suit})))),C=["~east","~south","~west","~north","~red","~green","~white"];console.log("Suits: ",P),console.log("Filtered suits:",P.filter((function(e){return!C.includes(e)}))),1===P.length?h[h.findIndex((function(e){return"\u6e05\u4e00\u8272"===e.name}))].value=!0:1===P.filter((function(e){return!C.includes(e)})).length&&(h[h.findIndex((function(e){return"\u6df7\u4e00\u8272"===e.name}))].value=!0);var I=Object(f.a)(new Set(b.map((function(e){return e.value}))));console.log("oneNine: ",I.filter((function(e){return 9!==e&&1!==e&&null!==e}))),0===I.filter((function(e){return 9!==e&&1!==e})).length?h[h.findIndex((function(e){return"oneNine"===e.name}))].value=!0:0===I.filter((function(e){return 9!==e&&1!==e&&null!==e})).length&&(h[h.findIndex((function(e){return"halfOneNine"===e.name}))].value=!0);var N,D=["cat","mouse","rooster","centipede"],k=t.filter((function(e){return D.includes(e.suit)})).length;console.log("Animals: ",k);var R=["~east","~south","~west","~north"],A=t.filter((function(e){return!D.includes(e.suit)&&R[e.value-1]===i})).length;console.log("Winds: ",A);var E=["~red","~green","~white"],W=Math.floor(w.filter((function(e){return E.includes(e.suit)})).length/3);console.log("Dragon Tiles: ",W);var F=Math.floor(w.filter((function(e){return e.suit===r})).length/3);console.log("Table Wind: ",F);var M=Math.floor(w.filter((function(e){return e.suit===i})).length/3);function e(e,n){return e+n}console.log("Your Wind: ",M);var J=h.filter((function(e){return!0===e.value})).map((function(e){return e.points})).reduce(e,0);console.log("Combi points: ",J),N=W+F+M+J+k+A>5?5:W+F+M+J+k+A,console.log("Total points: ",N),u=h.filter((function(e){return!0===e.value})).map((function(e){return Object(c.a)({},e.name,e.points)})),l=Object(j.a)(Object(j.a)({},u[0]),{},{animalPoints:k,windPoints:A,dragonPoints:W,tableWindPoints:F,yourWindPoints:M,totalPoints:N,selfDrawn:0===a.length})}return[m,l]}var g=t(71),m=t(3);function v(e){var n=e.picture,t=e.color,r=e.hoveredTile;if(!t);return r?n===r.picture?Object(m.jsx)(g.a,{src:"/images/"+n+".jpg",h:"6vh",borderRadius:"5px",borderWidth:"1px",borderColor:"#343434",borderStyle:"solid",boxShadow:"3px 4px ".concat(t)}):Object(m.jsx)(g.a,{src:"/images/"+n+".jpg",opacity:"30%",h:"6vh",borderRadius:"5px",borderWidth:"1px",borderColor:"#343434",borderStyle:"solid",boxShadow:"300px 400px 100px ".concat(t)}):Object(m.jsx)(g.a,{src:"/images/"+n+".jpg",h:"6vh",borderRadius:"5px",borderWidth:"1px",borderColor:"#343434",borderStyle:"solid",boxShadow:"3px 4px ".concat(t)})}function w(e){var n=e.tiles,t=e.direction,r=e.hoveredTile;if("vertical"===t){var i=0;return n.length>10&&(i=.14*n.length),Object(m.jsx)(d.h,{spacing:"-".concat(i,"vh"),children:n.map((function(e){return Object(m.jsx)(v,{picture:e.picture,hoveredTile:r})}))})}return Object(m.jsx)(d.d,{spacing:"1px",children:n.map((function(e){return Object(m.jsx)(v,{picture:e.picture,hoveredTile:r})}))})}function S(e){var n=e.playerID,t=e.username,r=e.currentPlayer,i=e.wind;return Object(m.jsx)(d.b,{children:Object(m.jsxs)(d.c,{h:"3vh",textColor:"#fafafa",overflow:"hidden",bgColor:r===n?"#a36453":"#55342b",px:"5px",borderRadius:"10px",borderWidth:"1px",borderColor:"black",borderStyle:"solid",children:[t,Object(m.jsx)(g.a,{p:"2px",borderRadius:"5px",src:i?"/images/".concat(i,".jpg"):null,w:"2.3vh",h:"2.8vh"})]})})}function y(e){var n=e.gameState,t=e.gameStateIndex,r=e.currentPlayer,i=e.playerIndex,a=e.hoveredTile,c=function(e){return Array.apply(null,Array(n[e].handLength)).map((function(){})).map((function(){return Object(m.jsx)(d.a,{h:"3.5vh",w:"2vh",borderRadius:"5px",borderWidth:"1px",borderColor:"black",bg:"white",borderStyle:"solid"})}))};return 1===i?Object(m.jsx)(d.a,{children:n[(t+1)%4]&&Object(m.jsxs)(d.h,{spacing:"10px",children:[Object(m.jsx)(S,{playerID:n[(t+1)%4].playerID,username:n[(t+1)%4].username,currentPlayer:r,wind:n[(t+1)%4].wind}),Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.a,{w:"60px",children:Object(m.jsx)(w,{direction:"vertical",tiles:n[(t+1)%4].revealedTiles.concat(n[(t+1)%4].bonusTiles),hoveredTile:a})}),Object(m.jsx)(d.a,{children:Object(m.jsx)(d.h,{spacing:"2px",children:c((t+1)%4)})})]})]})}):2===i?Object(m.jsx)(d.a,{children:n[(t+2)%4]&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S,{playerID:n[(t+2)%4].playerID,username:n[(t+2)%4].username,currentPlayer:r,wind:n[(t+2)%4].wind}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.b,{children:Object(m.jsx)(d.d,{spacing:"2px",children:function(e){return Array.apply(null,Array(n[e].handLength)).map((function(){})).map((function(){return Object(m.jsx)(d.a,{h:"2vh",w:"3.5vh",borderRadius:"5px",borderWidth:"1px",borderColor:"black",bg:"white",borderStyle:"solid"})}))}((t+2)%4)})}),Object(m.jsx)(d.b,{children:Object(m.jsx)(w,{tiles:n[(t+2)%4].revealedTiles.concat(n[(t+2)%4].bonusTiles),hoveredTile:a})})]})]})}):3===i?Object(m.jsx)(d.a,{children:n[(t+3)%4]&&Object(m.jsxs)(d.h,{spacing:"10px",children:[Object(m.jsx)(S,{playerID:n[(t+3)%4].playerID,username:n[(t+3)%4].username,currentPlayer:r,wind:n[(t+3)%4].wind}),Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.a,{children:Object(m.jsx)(d.h,{spacing:"2px",children:c((t+3)%4)})}),Object(m.jsx)(d.a,{w:"60px",children:Object(m.jsx)(w,{direction:"vertical",tiles:n[(t+3)%4].revealedTiles.concat(n[(t+3)%4].bonusTiles),hoveredTile:a})})]})]})}):void 0}var T=t(43);function P(e){var n=e.discards,t=e.hoveredTile,r=e.setHoveredTile,i=e.handleHover,a=n.map((function(e){return Object(m.jsx)(T.a.div,{onHoverStart:function(){return i(e)},onHoverEnd:function(){return r(null)},whileHover:{scale:1.1},children:Object(m.jsx)(v,{picture:e.picture,hoveredTile:t})})}));return Object(m.jsx)(d.i,{spacing:"5px",h:"50vh",w:"50vh",children:a})}function C(e){var n,t,i=Object(r.useRef)(null);return n=i,t=e.handleSelectTile,Object(r.useEffect)((function(){function e(e){n.current&&!n.current.contains(e.target)&&t(null)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[n]),Object(m.jsx)("div",{ref:i,children:e.children})}var I=t(74);function N(e){var n=e.lastDiscard,t=e.sequentialTiles,r=e.pongTiles,i=e.kongTiles,a=e.game,o=e.handleChow,s=e.handlePong,l=e.handleKong,u=e.handleGame,b=t.map((function(e){return Object(m.jsx)(d.a,{p:"5px",bg:"#55342b",_hover:{bg:"#a36453"},borderRadius:"5px",borderWidth:"1px",borderColor:"#343434",borderStyle:"solid",boxShadow:"3px 4px #000000",onClick:function(){console.log("Selected chow set",e),o(e.concat(n).sort(O))},children:Object(m.jsx)(w,{tiles:e.concat(n).sort(O)})})})),j=r.map((function(e){return Object(m.jsx)(d.a,{p:"5px",bg:"#55342b",_hover:{bg:"#a36453"},borderRadius:"5px",borderWidth:"1px",borderColor:"#343434",borderStyle:"solid",boxShadow:"3px 4px #000000",onClick:function(){console.log("Selected pong set",e),s(e.sort(O))},children:Object(m.jsx)(w,{tiles:e.sort(O)})})})),f=i.map((function(e){if(e.length>1){var n=e[4];return e=e.slice(0,4),Object(m.jsx)(d.a,{p:"5px",bg:"#55342b",_hover:{bg:"#a36453"},borderRadius:"5px",borderWidth:"1px",borderColor:"#343434",borderStyle:"solid",boxShadow:"3px 4px #000000",onClick:function(){console.log("Selected kong set",e),l(e.sort(O),n)},children:Object(m.jsx)(w,{tiles:e.sort(O)})})}}));return Object(m.jsxs)(d.d,{h:"100px",children:[t.length>0?b:null,r.length>0?j:null,i.length>0?f:null,a?function(){var e;return Object(m.jsx)(I.a,(e={p:"5px",variant:"ghost",_hover:{bg:"rgba(255,255,255,0.2)"},bg:"rgba(255,255,255,0.1)",borderRadius:"10px"},Object(c.a)(e,"p","5px"),Object(c.a)(e,"onClick",u),Object(c.a)(e,"display",a?"block":"none"),Object(c.a)(e,"children","Game"),e))}():null]})}function D(e){var n=e.clientID,t=e.tiles,i=e.newTile,a=e.handleSelectTile,c=e.currentTurn,s=e.currentPlayer,l=e.gameState,u=e.discards,b=e.selectedTile,j=e.handleDiscard,f=e.lastDiscard,h=e.pongTiles,O=e.handlePong,x=e.sequentialTiles,p=e.handleChow,g=e.kongTiles,S=e.handleKong,I=e.game,D=e.handleGame,k=Object(r.useState)(),R=Object(o.a)(k,2),A=R[0],E=R[1],W=l.findIndex((function(e){return e.playerID===n})),F={selected:{y:-15},unselected:{y:0}},M=function(e){E(e)},J=t.map((function(e,n){var t="#343434";return e===i&&c&&(t="#ff4a4a"),Object(m.jsx)(T.a.div,{onHoverStart:function(){return M(e)},onHoverEnd:function(){return E(null)},whileHover:{scale:1.1},variants:F,animate:b===e?"selected":"unselected",children:Object(m.jsx)(d.a,{value:e,onClick:function(){return function(e){b===e&&c?j():a(e)}(e)},children:Object(m.jsx)(v,{picture:e.picture,color:t})},n)})}));return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(d.h,{h:"95vh",w:"95vh",m:"auto",mt:"2vh",bgColor:"#006442",borderWidth:"5px",borderColor:"#55342b",borderStyle:"solid",children:[l[(W+2)%4]?Object(m.jsx)(y,{gameState:l,gameStateIndex:W,currentPlayer:s,playerIndex:2,hoveredTile:A}):Object(m.jsx)(d.f,{}),Object(m.jsx)(d.f,{}),Object(m.jsxs)(d.d,{w:"100%",children:[l[(W+3)%4]?Object(m.jsx)(y,{gameState:l,gameStateIndex:W,currentPlayer:s,playerIndex:3,hoveredTile:A}):Object(m.jsx)(d.f,{}),Object(m.jsx)(d.f,{}),Object(m.jsx)(P,{discards:u,hoveredTile:A,setHoveredTile:E,handleHover:M}),Object(m.jsx)(d.f,{}),l[(W+1)%4]?Object(m.jsx)(y,{gameState:l,gameStateIndex:W,currentPlayer:s,playerIndex:1,hoveredTile:A}):Object(m.jsx)(d.f,{})]}),Object(m.jsx)(d.f,{}),0===x.length&&0===h.length&&g.reduce((function(e,n){return e+n.length}),0)<=1&&!I?Object(m.jsx)(d.a,{h:"100px"}):Object(m.jsx)(N,{lastDiscard:f,sequentialTiles:x,pongTiles:h,kongTiles:g,game:I,handleChow:p,handlePong:O,handleKong:S,handleGame:D}),l[W]&&Object(m.jsxs)(d.a,{position:"relative",zIndex:2,children:[Object(m.jsx)(d.a,{w:"100%",m:"auto",children:Object(m.jsx)(d.b,{mb:"5px",children:Object(m.jsx)(w,{tiles:l[W].revealedTiles.concat(l[W].bonusTiles)})})}),Object(m.jsx)(d.b,{w:"100%",m:"auto",mb:"5px",children:Object(m.jsx)(C,{handleSelectTile:a,children:Object(m.jsx)(d.d,{spacing:"1px",children:J})})})]})]})})}var k=t(75),R=t(77);function A(e){var n=e.username,t=e.roundEnd,i=e.summary,a=e.handleNewGame,c=e.draw,s=e.isOpen,l=e.onOpen,u=e.onClose,b=Object(r.useState)(!0),j=Object(o.a)(b,2),f=j[0],h=j[1];Object(r.useEffect)((function(){t&&(l(),setTimeout((function(){h(!1)}),3e3))}),[t]);var O={animalPoints:"Animal Tiles",dragonPoints:"Dragon Set",windPoints:"Seat Flower",tableWindPoints:"Prevailing Wind Set",yourWindPoints:"Seat Wind Set",totalPoints:"Total tai",allPong:"All Pong","\u81ed\u5e73\u548c":"All Chow","\u5e73\u548c":"Ping Wu","\u6e05\u4e00\u8272":"Full Color","\u6df7\u4e00\u8272":"Half Color",oneNine:"All Terminals",halfOneNine:"Terminals and Honors","\u4e03\u5bf9\u5b50":"7 Pairs","\u5341\u4e09\u5e7a":"13 Wonders"};if(t){var x=[];i=Object.keys(i).forEach((function(e){i[e]>0&&(x=x.concat({name:O[e],points:i[e]}))}));var p=x.map((function(e){return Object(m.jsxs)(k.f,{children:[Object(m.jsx)(k.c,{children:e.name}),Object(m.jsx)(k.c,{isNumeric:!0,children:e.points})]})}));return console.log("Summary filtered",x),c?Object(m.jsxs)(R.a,{isOpen:s,onClose:u,children:[Object(m.jsx)(R.g,{}),Object(m.jsxs)(R.d,{children:[Object(m.jsx)(R.f,{children:"Draw"}),Object(m.jsx)(R.c,{}),Object(m.jsx)(R.e,{children:Object(m.jsx)(I.a,{isDisabled:f,onClick:a,children:"New game"})})]})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(R.a,{isOpen:s,onClose:u,children:[Object(m.jsx)(R.g,{}),Object(m.jsxs)(R.d,{children:[Object(m.jsx)(R.f,{h:"10px",children:Object(m.jsxs)(d.b,{children:[n.username," wins!"]})}),Object(m.jsx)(R.c,{}),Object(m.jsx)(R.b,{children:Object(m.jsxs)(k.a,{variant:"striped",size:"sm",children:[Object(m.jsx)(k.e,{children:Object(m.jsxs)(k.f,{children:[Object(m.jsx)(k.d,{children:"Name"}),Object(m.jsx)(k.d,{isNumeric:!0,children:"Double"})]})}),Object(m.jsx)(k.b,{children:p})]})}),Object(m.jsx)(R.e,{children:Object(m.jsx)(I.a,{size:"sm",isDisabled:f,onClick:a,children:"New game"})})]})]})})}return null}var E=t(78),W=t(76),F=t(65),M=t(29);function J(e){var n=e.name,t=e.score,r=e.info,i=e.pictures,a=Object(u.e)(),c=a.isOpen,o=a.onToggle,s=i.map((function(e){return""===e?Object(m.jsx)(d.a,{w:"10px"}):Object(m.jsx)(g.a,{src:"/images/"+e+".jpg",h:"26px",borderRadius:"5px",borderWidth:"1px",borderColor:"#343434",borderStyle:"solid",boxShadow:"1.2px 2px #000000"})}));return Object(m.jsxs)(d.a,{children:[Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{_hover:{"text-decoration":"underline"},onClick:o,children:n}),Object(m.jsx)(d.f,{}),t]}),Object(m.jsxs)(M.a,{in:c,children:[r.split(".").map((function(e){return Object(m.jsx)(d.g,{align:"left",justifyContent:!0,fontSize:12,children:e})})),Object(m.jsx)(d.d,{spacing:"0px",children:s})]})]})}function G(e){var n,t=e.tableWind,r=e.yourWind,i=e.playerID,a=e.currentPlayer,c=e.gameState,o=e.handleNewGame,s=e.roundEnd,l=e.onOpen,b=Object(u.c)(window.location.href),j=b.hasCopied,f=b.onCopy,h=c.map((function(e){return Object(m.jsxs)(d.c,{w:"100%",children:[e.username,Object(m.jsx)(d.f,{}),e.score]})})),O={"~east":1,"~south":2,"~west":3,"~north":4},x=[{name:"Prevailing wind set",score:1,info:"Pong or kong of prevailing wind",pictures:t?[t,t,t]:["~east","~east","~east"]},{name:"Seat wind set",score:1,info:"Pong or kong of seat wind",pictures:r?[r,r,r]:["~east","~east","~east"]},{name:"Dragon tiles set",score:1,info:"Pong or kong of any dragon tiles",pictures:["~red","~red","~red"]},{name:"All Chow",score:1,info:"Four sets of sequentials with an eye. Eye must not be prevailing or seat wind or dragon tile. Unless self-drawn, must have a two-sided wait",pictures:["bamboo1","bamboo2","bamboo3","circles1","circles2","circles3","numbers5","numbers5"]},{name:"Seat flower",score:1,info:"Flower corresponding to your seat position",pictures:r?["flowers"+O[r],"flowers"+(O[r]+4)]:["flowers1","flowers5"]},{name:"Animal tile",score:1,info:"Any animal tile",pictures:["cat","mouse","rooster","centipede"]},{name:"All Pong",score:2,info:"Four sets of pong or kong with an eye",pictures:["bamboo2","bamboo2","bamboo2","numbers6","numbers6","numbers6","~white","~white"]},{name:"Mixed suit",score:2,info:"Mahjong with one suit and honors",pictures:["~east","~east","~east","bamboo9","bamboo9","bamboo9","~red","~red"]},{name:"Terminals and Honors",score:2,info:"Mahjong with 1s, 9s, and honors",pictures:["circles1","circles1","circles1","numbers9","numbers9","numbers9","~north","~north"]},{name:"7 Pairs",score:3,info:"7 eyes",pictures:["~east","~east","~west","~west","~green","~green","circles5","circles5"]},{name:"Ping Wu",score:4,info:"All chow without flower or animal tiles",pictures:["bamboo4","bamboo5","bamboo6","circles4","circles5","circles6","numbers7","numbers7"]},{name:"Full Color",score:4,info:"Mahjong with only one suit",pictures:["numbers1","numbers2","numbers3","numbers8","numbers8","numbers8","numbers9","numbers9"]},{name:"13 Wonders",score:5,info:"Each terminal and honors. Any eye",pictures:["bamboo1","bamboo9","~east","~south","~west","~north","~red","~red"]},{name:"All Terminals",score:5,info:"Mahjong with only 1s and 9s",pictures:["numbers1","numbers1","numbers1","circles1","circles1","circles1","bamboo9","bamboo9"]}].map((function(e){return Object(m.jsx)(J,{name:e.name,score:e.score,info:e.info,pictures:e.pictures})})),p=[{name:"Predator Prey",score:1,info:"Cat-mouse rooster-centipede pair",pictures:["cat","mouse","","rooster","centipede"]},{name:"Flower Pair",score:1,info:"Own an opponent flower pair",pictures:["flowers"+(O[r]+1)%8,"flowers"+(O[r]+5)%8]},{name:"Concealed Kong",score:2,info:"Perform a one/three tiles concealed kong",pictures:["bamboo8","bamboo8","bamboo8","bamboo8"]},{name:"Flowers Set (u/c)",score:4,info:"Own all red or black flowers",pictures:["flowers1","flowers2","flowers3","flowers4","flowers5","flowers6","flowers7","flowers8"]},{name:"Animals Set (u/c)",score:4,info:"Own all animal tiles",pictures:["cat","mouse","rooster","centipede"]}].map((function(e){return Object(m.jsx)(J,{name:e.name,score:e.score,info:e.info,pictures:e.pictures})}));return c.find((function(e){return e.playerID===i}))&&(n=c.find((function(e){return e.playerID===i})).username,console.log("USERNAME: ",n)),Object(m.jsxs)(E.e,{mr:"10px",align:"center",variant:"enclosed",isFitted:!0,children:[Object(m.jsxs)(E.b,{children:[Object(m.jsx)(E.a,{children:"Table"}),Object(m.jsx)(E.a,{children:"Scoring"})]}),Object(m.jsxs)(E.d,{children:[Object(m.jsx)(E.c,{w:"200px",children:Object(m.jsxs)(d.h,{spacing:"25px",children:[Object(m.jsxs)(d.a,{mt:"5px",children:[Object(m.jsx)(S,{playerID:i,username:n,currentPlayer:a,wind:r}),Object(m.jsxs)(d.c,{w:"190px",children:["Prevailing Wind ",Object(m.jsx)(d.f,{})," ",Object(m.jsx)(g.a,{src:"/images/"+t+".jpg",fallbackSrc:"/images/blank.jpg",h:"30px",borderRadius:"5px"})," "]})]}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.e,{fontSize:20,mb:"5px",children:"Leaderboard"}),Object(m.jsx)(d.a,{w:"190px",children:h})]}),Object(m.jsx)(d.c,{children:Object(m.jsxs)(I.b,{isAttached:!0,size:"sm",variant:"outline",children:[Object(m.jsx)(I.a,{disabled:!s,onClick:l,children:"Summary"}),Object(m.jsx)(I.a,{disabled:!s,onClick:o,children:"New game"})]})}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.g,{textAlign:"left",p:"0px",m:"0px",children:"Invite link"}),Object(m.jsxs)(W.b,{children:[Object(m.jsx)(W.a,{h:"30px",px:"2px",variant:"filled",value:j?"Copied!":window.location.href,isReadOnly:!0}),Object(m.jsx)(W.c,{h:"30px",children:Object(m.jsxs)(I.a,{h:"30px",onClick:f,variant:"outline",children:[" ",j?Object(m.jsx)(F.a,{h:"20px"}):Object(m.jsx)(F.b,{h:"20px"})," "]})})]})]})]})}),Object(m.jsxs)(E.c,{w:"200px",children:[Object(m.jsxs)(d.c,{w:"100%",children:[Object(m.jsx)("strong",{children:"Name"}),Object(m.jsx)(d.f,{}),Object(m.jsx)("strong",{children:"Double"})]}),x,Object(m.jsxs)(d.c,{w:"100%",mt:"10px",children:[Object(m.jsx)("strong",{children:"Instant Payout"}),Object(m.jsx)(d.f,{}),Object(m.jsx)("strong",{children:"Points"})]}),p]})]})]})}var H=t(48);function L(e){var n=e.sendMessage,t=Object(u.e)({defaultIsOpen:!0}),i=t.isOpen,a=(t.onOpen,t.onClose),c=Object(r.useState)(""),s=Object(o.a)(c,2),l=s[0],b=s[1],j=function(){a(),n("Username: "+l)};return Object(m.jsxs)(R.a,{isOpen:i,onClose:a,closeOnOverlayClick:!1,children:[Object(m.jsx)(R.g,{}),Object(m.jsxs)(R.d,{children:[Object(m.jsx)(R.f,{children:"Username"}),Object(m.jsxs)(H.a,{px:"20px",children:[Object(m.jsx)(W.a,{onKeyPress:function(e){"Enter"===e.key?j():console.log()},onChange:function(e){b(e.target.value)},value:l,placeholder:"Username"}),Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.f,{}),Object(m.jsx)(I.a,{my:"10px",onClick:j,type:"submit",children:"Submit"})]})]})]})]})}function U(){var e,n,t,i,a=Object(b.g)().gameId,j=Object(r.useState)("wss://mahjong.irscybersec.tk/api/".concat(a)),f=Object(o.a)(j,2),h=f[0],g=(f[1],Object(r.useState)([])),v=Object(o.a)(g,2),w=(v[0],v[1]),S=Object(r.useState)([]),y=Object(o.a)(S,2),T=(y[0],y[1]),P=Object(r.useState)([]),C=Object(o.a)(P,2),I=C[0],N=C[1],k=Object(r.useState)(),R=Object(o.a)(k,2),E=R[0],W=R[1],F=Object(r.useState)(),M=Object(o.a)(F,2),J=M[0],H=M[1],U=Object(r.useState)(null),z=Object(o.a)(U,2),K=z[0],q=z[1],Y=Object(r.useState)([]),_=Object(o.a)(Y,2),B=_[0],V=_[1],Q=Object(r.useState)(),X=Object(o.a)(Q,2),Z=X[0],$=X[1],ee=Object(r.useState)([]),ne=Object(o.a)(ee,2),te=ne[0],re=ne[1],ie=Object(r.useState)([]),ae=Object(o.a)(ie,2),ce=ae[0],oe=ae[1],se=Object(r.useState)(""),le=Object(o.a)(se,2),ue=le[0],de=le[1],be=Object(r.useState)(""),je=Object(o.a)(be,2),fe=je[0],he=je[1],Oe=Object(r.useState)([]),xe=Object(o.a)(Oe,2),pe=xe[0],ge=xe[1],me=Object(r.useState)(),ve=Object(o.a)(me,2),we=ve[0],Se=ve[1],ye=Object(r.useState)([]),Te=Object(o.a)(ye,2),Pe=Te[0],Ce=Te[1],Ie=Object(r.useState)([]),Ne=Object(o.a)(Ie,2),De=Ne[0],ke=Ne[1],Re=Object(r.useState)([]),Ae=Object(o.a)(Re,2),Ee=Ae[0],We=Ae[1],Fe=Object(r.useState)(!1),Me=Object(o.a)(Fe,2),Je=Me[0],Ge=Me[1],He=Object(r.useState)(),Le=Object(o.a)(He,2),Ue=Le[0],ze=Le[1],Ke=Object(r.useState)(!1),qe=Object(o.a)(Ke,2),Ye=qe[0],_e=qe[1],Be=Object(u.e)(),Ve=Be.isOpen,Qe=Be.onOpen,Xe=Be.onClose,Ze=Object(r.useState)(!1),$e=Object(o.a)(Ze,2),en=$e[0],nn=$e[1],tn=Object(r.useState)(!1),rn=Object(o.a)(tn,2),an=rn[0],cn=rn[1],on=Object(r.useState)(1),sn=Object(o.a)(on,2),ln=sn[0],un=(sn[1],Object(r.useState)(3e3)),dn=Object(o.a)(un,2),bn=dn[0],jn=(dn[1],Object(r.useState)([])),fn=Object(o.a)(jn,2),hn=fn[0],On=fn[1],xn=Object(r.useState)(null),pn=Object(o.a)(xn,2),gn=pn[0],mn=pn[1],vn=B.reduce((function(e,n){return e["".concat(n.suit," ").concat(n.value)]=++e["".concat(n.suit," ").concat(n.value)]||0,e}),{}),wn=function(){yn("New game!")},Sn=l()(h),yn=Sn.sendMessage,Tn=Sn.lastMessage,Pn=Sn.readyState,Cn=(e={},Object(c.a)(e,s.ReadyState.CONNECTING,"Connecting"),Object(c.a)(e,s.ReadyState.OPEN,"Connected"),Object(c.a)(e,s.ReadyState.CLOSING,"Closing"),Object(c.a)(e,s.ReadyState.CLOSED,"Closed"),Object(c.a)(e,s.ReadyState.UNINSTANTIATED,"Uninstantiated"),e)[Pn];return Object(r.useEffect)((function(){if(null!==Tn)if(console.log("Last message: ",Tn.data),w((function(e){return e.concat(Tn)})),Tn.data.includes("Online users:")){var e=Tn.data.replace("Online users: ","");T(e)}else if(Tn.data.includes("Game state")){var r=Tn.data.replace("Game state: ","");console.log("Game state: ",r),On(JSON.parse(r))}else if(Tn.data.includes("Your ID")){var a=Tn.data.replace("Your ID: ","");N(a)}else if(Tn.data.includes("Tiles")){var c=JSON.parse(Tn.data.replace("Tiles: ",""));if(13===c.length?V(c.sort(O)):V((function(e){return e.concat(c).sort(O)})),$(c),console.log("New tiles:",c),13!==c.length){console.log("Tiles:",B);var s=p(B,ce,te,fe,ue,[],c),l=Object(o.a)(s,2),u=l[0],d=l[1];!function(e){var n=B.filter((function(n){return n.suit===e.suit&&n.value===e.value})).concat(e),t=B.filter((function(e){return 3==vn["".concat(e.suit," ").concat(e.value)]}));4==n.length?(We([n.concat("four")]),console.log("Four concealed kong",n)):t&&(We([t.concat("four")]),console.log("kongSets",t));var r=hn.findIndex((function(e){return e.playerID===I})),i=hn[r].revealedTiles.filter((function(n){return n.suit===e.suit&&n.value===e.value})).concat(e);4==i.length&&(We([i.concat("four")]),console.log("One concealed kong",i))}(c),Ge(u),ze(d)}}else if(Tn.data.includes("Bonus")){var b=JSON.parse(Tn.data.replace("Bonus: ",""));2===(g=b).filter((function(e){return"cat"===e.suit||"mouse"===e.suit})).length?(console.log("CAT MOUSE PAIR"),yn("AnimalPair")):2===g.filter((function(e){return"rooster"===e.suit||"centipede"===e.suit})).length&&(console.log("ROOSTER CENTIPEDE PAIR"),yn("AnimalPair")),2===g.filter((function(e){return 1===e.value})).length?(console.log("FlowerPair 1"),yn("FlowerPair ~east")):2===g.filter((function(e){return 2===e.value})).length?(console.log("2 FLOWER PAIR"),yn("FlowerPair ~south")):2===g.filter((function(e){return 3===e.value})).length?(console.log("3 FLOWER PAIR"),yn("FlowerPair ~west")):2===g.filter((function(e){return 4===e.value})).length&&(console.log("4 FLOWER PAIR"),yn("FlowerPair ~north")),g.forEach((function(e){"mouse"===e.suit&&te.filter((function(e){return"cat"===e.suit})).length>0||"cat"===e.suit&&te.filter((function(e){return"mouse"===e.suit})).length>0?(console.log("CAT MOUSE PAIR"),yn("AnimalPair")):("rooster"===e.suit&&te.filter((function(e){return"centipede"===e.suit})).length>0||"centipede"===e.suit&&te.filter((function(e){return"rooster"===e.suit})).length>0)&&(console.log("ROOSTER CENTIPEDE PAIR"),yn("AnimalPair")),1===te.filter((function(n){return n.value===e.value})).length&&console.log("".concat(e.value," FLOWER PAIR"))})),re((function(e){return e.concat(b)}))}else if(Tn.data.includes("Table wind"))he(Tn.data.replace("Table wind: ",""));else if(Tn.data.includes("Your wind"))de(Tn.data.replace("Your wind: ",""));else if(Tn.data.includes("It is your turn"))_e(!0);else if(Tn.data.includes("Discards")){var j=JSON.parse(Tn.data.replace("Discards: ",""));ge(j),Se(j.at(-1)),console.log("Last discarded",j.at(-1)),function(e){if(e&&I!==K){var r=p(B,ce,te,fe,ue,e,[]),a=Object(o.a)(r,2),c=a[0],s=a[1];ze(s),console.log("Summary: ",s),c&&s.totalpoints>=ln&&(Ge(c),setTimeout((function(){Ge(!1)}),bn));var l=B.filter((function(n){return n.suit===e.suit&&n.value===e.value})).concat(e);if(console.log("Same tiles: ",l),3==l.length?(ke([l]),setTimeout((function(){ke([])}),bn)):4==l.length&&(We([l.concat("three")]),setTimeout((function(){We([])}),bn)),hn.at(hn.findIndex((function(e){return e.playerID===I}))-1).playerID===K){n=B.filter((function(n){return n.suit===e.suit&&(n.value===e.value-1||n.value===e.value-2)})),t=B.filter((function(n){return n.suit===e.suit&&(n.value===e.value-1||n.value===e.value+1)})),i=B.filter((function(n){return n.suit===e.suit&&(n.value===e.value+1||n.value===e.value+2)})),n=x(n),t=x(t),i=x(i);var u=[n,t,i].filter((function(e){return 2===e.length}));u.length>0&&(Ce(u),setTimeout((function(){Ce([])}),bn))}}}(j.at(-1))}else if(Tn.data.includes("Previous player: "))q(Tn.data.replace("Previous player: ",""));else if(Tn.data.includes("Revealed"))!function(){var e=JSON.parse(Tn.data.replace("Revealed: ","")),n=B;console.log("New Tiles: ",n);for(var t=function(t){console.log("Target: ",e[t]),console.log("Target Index: ",n.indexOf(e[t])),n=n.filter((function(n){return!(n.suit===e[t].suit&&n.value===e[t].value)}))},r=0;r<e.length;r++)t(r);V(n),oe((function(n){return n.concat(e).sort(O)}))}();else if(Tn.data.includes("Current player: ")){var f=Tn.data.replace("Current player: ","");H(f.substring(1,f.length-1))}else if(Tn.data.includes("New game!"))cn(!1),nn(!1),ge([]),Se(),re([]),oe([]),mn(),ze();else if(Tn.data.includes("wins")){yn("ShowAll: "+JSON.stringify(B)),V([]),cn(!0);var h=JSON.parse(Tn.data.split(" ")[2]);ze(h),W(Tn.data.split(" ")[0])}else Tn.data.includes("Draw:")&&(nn(!0),cn(!0),yn("ShowAll: "+JSON.stringify(B)),V([]));var g}),[Tn,w]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(L,{sendMessage:yn}),Object(m.jsxs)(d.c,{children:[Object(m.jsx)(D,{clientID:I,tiles:B,newTile:Z,handleSelectTile:function(e){console.log(e),mn(e)},currentTurn:Ye,currentPlayer:J,gameState:hn,discards:pe,selectedTile:gn,handleDiscard:function(){if(!an){Ge(!1),console.log("Discarding ",gn),yn("Discard: "+JSON.stringify(gn));var e=B.filter((function(e){return!(e.suit===gn.suit&&e.value===gn.value&&e.id===gn.id)}));V(e),mn(null),We([]),_e(!1)}},lastDiscard:we,pongTiles:De,handlePong:function(e){console.log("PONG!",De),ke([]),yn(I+" pong "+JSON.stringify(e))},handleChow:function(e){console.log("CHOW!",Pe),Ce([]),yn(I+" chow "+JSON.stringify(e))},sequentialTiles:Pe,kongTiles:Ee,handleKong:function(e,n){console.log("KONG!",e,n),We([]),"three"===n?yn(I+" threekong "+JSON.stringify(e)):"four"===n?yn(I+" fourkong "+JSON.stringify(e)):"one"===n&&yn(I+" onekong "+JSON.stringify(e))},game:Je,handleGame:function(){yn(I+" WINS! "+JSON.stringify(Ue)+" "+JSON.stringify(B)),Ge(!1),V([])}}),Object(m.jsx)(G,{tableWind:fe,yourWind:ue,playerID:I,currentPlayer:J,gameState:hn,handleNewGame:wn,roundEnd:an,onOpen:Qe})]}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(A,{username:hn.find((function(e){return e.playerID===E})),roundEnd:an,summary:Ue,handleNewGame:wn,draw:en,isOpen:Ve,onOpen:Qe,onClose:Xe}),Object(m.jsxs)("p",{children:["Connection Status: ",Cn]})]})]})}var z=t.p+"static/media/mahjongVid.74b8b9da.webm";t(127);function K(){var e=Object(b.f)();return Object(m.jsxs)(d.b,{h:"100vh",w:"100vw",bg:"rgba(90,90,90,0.3)",children:[Object(m.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,id:"video",children:Object(m.jsx)("source",{src:z,type:"video/webm"})}),Object(m.jsxs)(d.a,{w:"300px",p:"10px",bgColor:"rgba(240,240,240,0.9)",borderRadius:"10px",children:[Object(m.jsx)(d.b,{children:Object(m.jsxs)(d.g,{fontSize:"24px",textAlign:"center",children:["Play ",Object(m.jsx)("strong",{children:"Singapore Mahjong"})," with your friends"]})}),Object(m.jsx)(I.a,{onClick:function(){e("/game/".concat(function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+e()}()))},w:"100%",variant:"outline",borderWidth:"1px",borderStyle:"solid",borderColor:"green",borderRadius:"10px",children:"Create game"})]})]})}var q=t(49);function Y(){return Object(m.jsx)(q.a,{children:Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{path:"/",exact:!0,element:Object(m.jsx)(K,{})}),Object(m.jsx)(b.a,{path:"/game/:gameId",exact:!0,element:Object(m.jsx)(U,{})})]})})}var _=t(14);a.a.render(Object(m.jsx)(_.a,{children:Object(m.jsx)(Y,{})}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.9826e271.chunk.js.map