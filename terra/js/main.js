!function(t){var e={};function i(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){"use strict";i.r(e);i(2);document.addEventListener("DOMContentLoaded",(function(t){gsap.registerPlugin(ScrollTrigger,ScrollToPlugin),gsap.timeline({scrollTrigger:{trigger:".section1",start:"top top",end:"bottom top",scrub:!0,pin:!0}}).to(".section1__img",{x:0,y:0,scale:.63}).to(".section1__title",{scale:1},0).to(".section1__text",{x:0,y:0,scale:1},0).from(".section1__bg-img rect",{y:0},0),gsap.timeline({scrollTrigger:{trigger:".section2",start:"top top",end:"bottom top",scrub:.5,pin:!0}}).to(".section2__block_1",{x:-500,y:-500,autoAlpha:0}).to(".section2__img",{x:0,y:0,scale:1,rotation:0,ease:"none"},0).to(".section2__img-shadow",{opacity:1,ease:"none"},0).from(".section2__block_2",{x:500,y:500,autoAlpha:0},0),gsap.timeline({scrollTrigger:{trigger:".list",start:"top top",end:"+=3000",scrub:.5,pin:!0}}).to(".list__item_1",{x:615,y:-270},0).to(".list__img_1",{scale:.7,opacity:.4},0).to(".list__block-text_1",{x:100,y:-100,opacity:0},0).to(".list__item_2",{x:0,y:-60},0).to(".list__img_2",{scale:1,opacity:1},0).to(".list__block-text_2",{x:0,y:0,opacity:1},0).to(".list__item_2",{x:-650,y:-270},1).to(".list__img_2",{scale:.7,opacity:.4},1).to(".list__block-text_2",{x:-100,y:-100,opacity:0},1).to(".list__item_3",{x:0,y:0},1).to(".list__img_3",{scale:1,opacity:1},1).to(".list__block-text_3",{x:0,y:0,opacity:1},1).to(".list__img_1",{opacity:0},1).to(".list__item_3",{x:610,y:-250},2).to(".list__img_3",{scale:.7,opacity:.4},2).to(".list__block-text_3",{x:-100,y:-100,opacity:0},2).to(".list__item_4",{x:0,y:-40},2).to(".list__img_4",{scale:1,opacity:1},2).to(".list__block-text_4",{x:0,y:0,opacity:1},2).to(".list__img_2",{opacity:0},2),gsap.timeline({scrollTrigger:{trigger:".section4-1",start:"top center",end:"+=300",scrub:!0}}).to(".section4-1__img",{y:0}),gsap.timeline({scrollTrigger:{trigger:".section4-2",start:"top top",end:"bottom top",scrub:!0,pin:!0}}).to(".section4-2__img_1",{x:0,y:0,scale:1,opacity:1,rotation:0},0).from(".section4-2__img_2",{x:0,y:0,scale:1,opacity:1,rotation:0},0).to(".section4-2__block-text_1",{opacity:0},0).to(".section4-2__block-text_2",{opacity:1},.5),gsap.timeline({scrollTrigger:{trigger:".section5",start:"top top",end:"bottom top",scrub:.5,pin:!0}}).to(".section5__img",{x:0,y:0,rotation:0},0).to(".section5__block-text_1",{y:-400,opacity:0},0).to(".section5__block-text_2",{y:0,opacity:1},.2),gsap.timeline({scrollTrigger:{trigger:".section6",start:"top top",end:"bottom top",scrub:!0,pin:!0}}).to(".section6__block",{x:0,y:0,opacity:1},.5).to(".section6__img",{x:0,y:0,rotation:0,opacity:1},1).to(".section6__svg-el",{y:-40},2),gsap.utils.toArray(".link_js").forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),gsap.to(window,{duration:.5,scrollTo:t.target.getAttribute("href")})}))}))}))},function(t,e,i){"use strict";
/*! npm.im/object-fit-images 3.2.4 */var o="bfred-it:object-fit-images",r=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,n="undefined"==typeof Image?{style:{"object-position":1}}:new Image,c="object-fit"in n.style,s="object-position"in n.style,l="background-size"in n.style,a="string"==typeof n.currentSrc,g=n.getAttribute,u=n.setAttribute,p=!1;function _(t,e,i){var o="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(i||0)+"'%3E%3C/svg%3E";g.call(t,"src")!==o&&u.call(t,"src",o)}function f(t,e){t.naturalWidth?e(t):setTimeout(f,100,t,e)}function y(t){var e=function(t){for(var e,i=getComputedStyle(t).fontFamily,o={};null!==(e=r.exec(i));)o[e[1]]=e[2];return o}(t),i=t[o];if(e["object-fit"]=e["object-fit"]||"fill",!i.img){if("fill"===e["object-fit"])return;if(!i.skipTest&&c&&!e["object-position"])return}if(!i.img){i.img=new Image(t.width,t.height),i.img.srcset=g.call(t,"data-ofi-srcset")||t.srcset,i.img.src=g.call(t,"data-ofi-src")||t.src,u.call(t,"data-ofi-src",t.src),t.srcset&&u.call(t,"data-ofi-srcset",t.srcset),_(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{!function(t){var e={get:function(e){return t[o].img[e||"src"]},set:function(e,i){return t[o].img[i||"src"]=e,u.call(t,"data-ofi-"+i,e),y(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!a&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(i.img),t.style.backgroundImage='url("'+(i.img.currentSrc||i.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=e["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(e["object-fit"])?f(i.img,(function(){i.img.naturalWidth>t.width||i.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"})):t.style.backgroundSize=e["object-fit"].replace("none","auto").replace("fill","100% 100%"),f(i.img,(function(e){_(t,e.naturalWidth,e.naturalHeight)}))}function m(t,e){var i=!p&&!t;if(e=e||{},t=t||"img",s&&!e.skipTest||!l)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][o]=t[r][o]||{skipTest:e.skipTest},y(t[r]);i&&(document.body.addEventListener("load",(function(t){"IMG"===t.target.tagName&&m(t.target,{skipTest:e.skipTest})}),!0),p=!0,t="img"),e.watchMQ&&window.addEventListener("resize",m.bind(null,t,{skipTest:e.skipTest}))}m.supportsObjectFit=c,m.supportsObjectPosition=s,function(){function t(t,e){return t[o]&&t[o].img&&("src"===e||"srcset"===e)?t[o].img:t}s||(HTMLImageElement.prototype.getAttribute=function(e){return g.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return u.call(t(this,e),e,String(i))})}(),t.exports=m}]);