(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(1),s=a(5),m="https://danyu.github.io/dinopediadata/dinos.json",l={local:0,remote:1};a(3);var u=a(6),d="/resources/icons/",p=Object.freeze({weight:"weighing-scale.svg",height:"ruler.svg",length:"ruler.svg",diet:"dinner.svg"});var g=function(e){var t=e.dino;return r.a.createElement("div",{className:"basic-info-container"},["weight","height","length","diet"].map(function(e){return r.a.createElement("div",{key:e},r.a.createElement("div",{className:"basic-info-row"},r.a.createElement("img",{className:"icon",src:d+p[e]}),r.a.createElement("span",{className:"basic-info-title"},e," "),": ",t[e]||"n/a"))}))};function h(e){var t=e.dino,a=t.name,n=t.imgSrc;return r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"dino-pic-container"},r.a.createElement("img",{src:n,alt:a})),r.a.createElement("div",null,r.a.createElement(g,{dino:Object(u.a)({},t)})))}var f=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)({}),u=Object(o.a)(c,2),d=u[0],p=u[1];return Object(n.useEffect)(function(){(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.local)===l.local?new Promise(function(e){return e(s)}):window.fetch(m).then(function(e){return e.json()})})(l.remote).then(function(e){i(function(e){return e.sort(function(e,t){for(var a=e.name,n=t.name,r=0,i=!1;r<a.length&&r<n.length;){if(i=i||a.charCodeAt(r)-n.charCodeAt(r))return i;r++}return i})}(e)),p(e[0])})},[]),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"dino-name-list"},a.map(function(e,t){return r.a.createElement("div",{key:e.name+t,className:"dino-name-container ".concat(e.name===d.name?"dino-name-selected":""),onClick:function(){return function(e){return p(e)}(e)}},r.a.createElement("div",{className:"dino-name"},r.a.createElement("span",{className:"dino-name-text"},e.name),r.a.createElement("div",{className:"progress-fill"})))})),r.a.createElement("div",{className:"dino-profile"},r.a.createElement(h,{dino:d})))};function v(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Welcome to Eric & Ethan's DinoPedia"),r.a.createElement(f,null))}var E=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),E)},3:function(e,t,a){},5:function(e){e.exports=[{name:"T-Rex",imgSrc:"https://thenypost.files.wordpress.com/2019/12/dinosaur-feature.jpg?quality=80&strip=all"},{name:"Troodon",imgSrc:"https://images.dinosaurpictures.org/Troodon_3c60.jpg"},{name:"T-rex",imgSrc:"https://natgeo.imgix.net/factsheets/thumbnails/01-trex-scotty_publicity_websize-credit--beth-zaiken.adapt.1900.1.jpg?auto=compress,format&w=1600&h=900&fit=crop"},{name:"Triceratops",imgSrc:"https://live.mrf.io/statics/i/ps/cdn.zmescience.com/wp-content/uploads/2018/03/Triceratops_BWMK.jpg?width=1200&enable=upscale"},{name:"Brachiosaurus",imgSrc:"https://images.dinosaurpictures.org/papo_brachiosaurus_2012_cf3f.jpg"},{name:"therizinosaurus",imgSrc:"https://museum.wa.gov.au/sites/default/files/imagecache/wam_v2_article_full_nocrop/att-images/2014/Therizinosaurus_0.jpg"},{name:"Stegosaurus",imgSrc:"https://www.renderhub.com/treeworld3d/game-ready-dinosaur-stegosaurus/game-ready-dinosaur-stegosaurus-01.jpg"},{name:"Giganotosaurus",imgSrc:"https://i0.wp.com/iknowdino.com/wp-content/uploads/2018/02/Giganotos_Db.jpg?fit=1280%2C640&ssl=1"},{name:"Carcharodontosaurus",imgSrc:"https://i.imgur.com/AQXjZ3E.jpg"}]},7:function(e,t,a){e.exports=a(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.fe6372e6.chunk.js.map