(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),l=n.n(a),s=(n(12),n(2)),u=n(7),i={createArray:function(e){return Array.from({length:e},(function(e,t){return t}))},sampleArray:function(e,t){for(var n=e.slice(0),c=[],r=0;r<t&&r<n.length;r++){var a=Math.floor(Math.random()*n.length);c.push(n.splice(a,1)[0])}return c},arrayCrossCounts:function(e,t){var n=0,c=0;e:for(var r=0;r<e.length;r++){for(var a=0;a<t.length;a++)if(t[a]===e[r]){n+=1;continue e}c+=1}return[n,c]}},o=n(0),h="white",j="lightblue",b="lightgreen",d="pink",O=function(e){var t=e.width,n=e.gameStatus,c=e.isChallenge,r=e.isPicked,a=e.onClick,l=h;return n!==f.NEW&&(r?l=c?b:d:!c||n!==f.CHALLENGE&&n!==f.LOST||(l=j)),Object(o.jsx)("div",{className:"cell",style:{width:"".concat(t,"%"),backgroundColor:l},onClick:a})},m={NEW:"You will have a few seconds to memorize the blue random cells",CHALLENGE:"Remember these blue cells now",PLAYING:"Which cells were blue?",WON:"Victory!",LOST:"Game Over"};var g=function(e){var t=e.gameStatus,n=e.startGame,c=e.countdown,r=e.resetGame,a=e.nextChallenge;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"message",children:m[t]}),Object(o.jsx)("div",{className:"button",children:function(){switch(t){case f.NEW:return Object(o.jsx)("button",{onClick:n,children:"Start Game"});case f.CHALLENGE:break;case f.PLAYING:return c;case f.WON:return Object(o.jsx)("button",{onClick:a,children:"Play next challenge"});case f.LOST:return Object(o.jsx)("button",{onClick:r,children:"Play Again"})}}()})]})},f={NEW:"NEW",CHALLENGE:"CHALLENGE",PLAYING:"PLAYING",WON:"WON",LOST:"LOST"};var L=function(e){var t=e.cellIds,n=e.challengeCellIds,r=e.cellWidth,a=e.challengeSize,l=e.challengeSeconds,h=e.playSeconds,j=e.maxWrongAttempts,b=e.autoStart,d=e.resetGame,m=e.nextChallenge,L=e.currentLevel,N=Object(c.useState)(b?f.CHALLENGE:f.NEW),C=Object(s.a)(N,2),S=C[0],v=C[1],x=Object(c.useState)([]),E=Object(s.a)(x,2),A=E[0],G=E[1],y=Object(c.useState)(h),W=Object(s.a)(y,2),p=W[0],I=W[1];return Object(c.useEffect)((function(){var e;return S===f.CHALLENGE&&(e=setTimeout((function(){return v(f.PLAYING)}),1e3*l)),S===f.PLAYING&&(e=setInterval((function(){I((function(t){return 1===t&&(clearTimeout(e),v(f.LOST)),t-1}))}),1e3)),function(){return clearTimeout(e)}}),[S,l]),Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("h5",{children:[" Level : ",L]})}),Object(o.jsx)("div",{className:"grid",children:t.map((function(e){return Object(o.jsx)(O,{width:r,gameStatus:S,isChallenge:n.includes(e),isPicked:A.includes(e),onClick:function(){return function(e){S===f.PLAYING&&G((function(t){if(t.includes(e))return t;var c=[].concat(Object(u.a)(t),[e]),r=i.arrayCrossCounts(c,n),l=Object(s.a)(r,2),o=l[0],h=l[1];return o===a&&v(f.WON),h===j&&v(f.LOST),c}))}(e)}},e)}))}),Object(o.jsx)(g,{gameStatus:S,startGame:function(){return v(f.CHALLENGE)},countdown:p,resetGame:d,nextChallenge:m})]})},N=function(){var e=Object(c.useState)(5),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(3),l=Object(s.a)(a,2),u=l[0],h=l[1],j=Object(c.useState)(1),b=Object(s.a)(j,2),d=b[0],O=b[1],m=Object(c.useState)(1),g=Object(s.a)(m,2),f=g[0],N=g[1],C=i.createArray(n*n),S=100/n,v=i.sampleArray(C,u);return Object(o.jsx)(L,{cellIds:C,currentLevel:f,challengeCellIds:v,cellWidth:S,challengeSize:u,challengeSeconds:3,nextChallenge:function(){u%2===0&&r(n+1),O((function(e){return e+1})),h(u+1),N(f+1)},playSeconds:10,maxWrongAttempts:3,autoStart:d>1,resetGame:function(){h(3),r(5),N(1),O((function(e){return e+1}))}},d)};n(14);var C=function(){return Object(o.jsx)(N,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),c(e),r(e),a(e),l(e)}))};l.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),S()}},[[15,1,2]]]);
//# sourceMappingURL=main.7cfd914a.chunk.js.map