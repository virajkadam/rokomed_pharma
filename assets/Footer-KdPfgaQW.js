import{j as t,C as F,F as p,f as M,a as n,r as R,b as L,c as V,d as k,e as _}from"./index-PwvKnakS.js";import{g as q,r as b,L as h}from"./vendor-BZPOwlWN.js";var O={exports:{}};(function(y,w){(function(){function x(){var r=window,i=document;if("scrollBehavior"in i.documentElement.style&&r.__forceSmoothScrollPolyfill__!==!0)return;var c=r.HTMLElement||r.Element,a=468,l={scroll:r.scroll||r.scrollTo,scrollBy:r.scrollBy,elementScroll:c.prototype.scroll||S,scrollIntoView:c.prototype.scrollIntoView},f=r.performance&&r.performance.now?r.performance.now.bind(r.performance):Date.now;function C(e){var s=["MSIE ","Trident/","Edge/"];return new RegExp(s.join("|")).test(e)}var N=C(r.navigator.userAgent)?1:0;function S(e,s){this.scrollLeft=e,this.scrollTop=s}function X(e){return .5*(1-Math.cos(Math.PI*e))}function g(e){if(e===null||typeof e!="object"||e.behavior===void 0||e.behavior==="auto"||e.behavior==="instant")return!0;if(typeof e=="object"&&e.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function T(e,s){if(s==="Y")return e.clientHeight+N<e.scrollHeight;if(s==="X")return e.clientWidth+N<e.scrollWidth}function E(e,s){var o=r.getComputedStyle(e,null)["overflow"+s];return o==="auto"||o==="scroll"}function B(e){var s=T(e,"Y")&&E(e,"Y"),o=T(e,"X")&&E(e,"X");return s||o}function P(e){for(;e!==i.body&&B(e)===!1;)e=e.parentNode||e.host;return e}function Y(e){var s=f(),o,m,d,u=(s-e.startTime)/a;u=u>1?1:u,o=X(u),m=e.startX+(e.x-e.startX)*o,d=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,m,d),(m!==e.x||d!==e.y)&&r.requestAnimationFrame(Y.bind(r,e))}function v(e,s,o){var m,d,u,j,I=f();e===i.body?(m=r,d=r.scrollX||r.pageXOffset,u=r.scrollY||r.pageYOffset,j=l.scroll):(m=e,d=e.scrollLeft,u=e.scrollTop,j=S),Y({scrollable:m,method:j,startTime:I,startX:d,startY:u,x:s,y:o})}r.scroll=r.scrollTo=function(){if(arguments[0]!==void 0){if(g(arguments[0])===!0){l.scroll.call(r,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:r.scrollX||r.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:r.scrollY||r.pageYOffset);return}v.call(r,i.body,arguments[0].left!==void 0?~~arguments[0].left:r.scrollX||r.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:r.scrollY||r.pageYOffset)}},r.scrollBy=function(){if(arguments[0]!==void 0){if(g(arguments[0])){l.scrollBy.call(r,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}v.call(r,i.body,~~arguments[0].left+(r.scrollX||r.pageXOffset),~~arguments[0].top+(r.scrollY||r.pageYOffset))}},c.prototype.scroll=c.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(g(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var e=arguments[0].left,s=arguments[0].top;v.call(this,this,typeof e>"u"?this.scrollLeft:~~e,typeof s>"u"?this.scrollTop:~~s)}},c.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(g(arguments[0])===!0){l.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},c.prototype.scrollIntoView=function(){if(g(arguments[0])===!0){l.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var e=P(this),s=e.getBoundingClientRect(),o=this.getBoundingClientRect();e!==i.body?(v.call(this,e,e.scrollLeft+o.left-s.left,e.scrollTop+o.top-s.top),r.getComputedStyle(e).position!=="fixed"&&r.scrollBy({left:s.left,top:s.top,behavior:"smooth"})):r.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}}y.exports={polyfill:x}})()})(O);var D=O.exports;const A=q(D),H=()=>{const[y,w]=b.useState(!1);b.useEffect(()=>{document.documentElement.style.scrollBehavior="smooth",A.polyfill()},[]);const x=b.useCallback(()=>{window.scrollY>300?w(!0):w(!1)},[]);b.useEffect(()=>{let a=!1;const l=()=>{a||(window.requestAnimationFrame(()=>{x(),a=!1}),a=!0)};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[x]);const r=()=>{try{window.scrollTo({top:0,behavior:"smooth"})}catch{const l=()=>{const f=window.pageYOffset;f>0&&(window.requestAnimationFrame(l),window.scrollTo(0,f-f/8))};l()}},i=[{path:"/about",label:"About"},{path:"/mission-vision",label:"Mission & Vision"},{path:"/products",label:"Products"},{path:"/careers",label:"Careers"},{path:"/wholesaler",label:"Wholesaler Portal"},{path:"/contact",label:"Contact"}],c=[{path:"/products/generic-medicines",label:"Generic Medicines"},{path:"/products/specialty-medicines",label:"Specialty Medicines"},{path:"/products/otc-products",label:"OTC Products"}];return t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx("button",{onClick:r,className:`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg 
          bg-primary hover:bg-primary/90 text-white 
          transition-all duration-500 ease-in-out
          transform hover:scale-110 active:scale-95
          hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
          ${y?"opacity-100 translate-y-0":"opacity-0 translate-y-10 pointer-events-none"}`,"aria-label":"Scroll to top",style:{willChange:"transform, opacity",backfaceVisibility:"hidden"},children:t.jsx(p,{icon:M,className:"text-xl transform transition-transform group-hover:scale-110"})}),t.jsxs("footer",{className:"bg-neutral-900 text-white",children:[t.jsx("div",{className:"container mx-auto px-4 py-16",children:t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",children:[t.jsxs("div",{children:[t.jsxs(h,{to:"/",className:"flex items-center gap-3 mb-6",children:[t.jsx("img",{src:R,alt:n.name,className:"h-10 w-auto"}),t.jsx("span",{className:"text-2xl font-bold text-primary",children:n.name})]}),t.jsx("p",{className:"text-neutral-400 mb-6",children:"Leading pharmaceutical company committed to delivering high-quality, affordable medicines while maintaining the highest standards of manufacturing and ethical business practices."})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"text-lg font-semibold mb-6",children:"Quick Links"}),t.jsx("ul",{className:"space-y-4",children:i.map((a,l)=>t.jsx("li",{children:t.jsxs(h,{to:a.path,className:"text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2",children:[t.jsx(p,{icon:L,className:"text-xs"}),a.label]})},l))})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"text-lg font-semibold mb-6",children:"Our Products"}),t.jsx("ul",{className:"space-y-4",children:c.map((a,l)=>t.jsx("li",{children:t.jsxs(h,{to:a.path,className:"text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2",children:[t.jsx(p,{icon:L,className:"text-xs"}),a.label]})},l))})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"text-lg font-semibold mb-6",children:"Contact Us"}),t.jsxs("ul",{className:"space-y-4",children:[t.jsxs("li",{className:"flex items-start gap-3 text-neutral-400",children:[t.jsx(p,{icon:V,className:"mt-1"}),t.jsxs("p",{children:[n.addresses.corporate.line1,t.jsx("br",{}),n.addresses.corporate.line2,t.jsx("br",{}),n.addresses.corporate.line3]})]}),t.jsx("li",{children:t.jsxs("a",{href:`tel:${n.phone}`,className:"text-neutral-400 hover:text-white transition-colors flex items-center gap-3",children:[t.jsx(p,{icon:k}),n.phone]})}),t.jsx("li",{children:t.jsxs("a",{href:`mailto:${n.email}`,className:"text-neutral-400 hover:text-white transition-colors flex items-center gap-3",children:[t.jsx(p,{icon:_}),n.email]})})]})]})]})}),t.jsx("div",{className:"border-t border-neutral-800",children:t.jsx("div",{className:"container mx-auto px-4 py-6",children:t.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[t.jsxs("div",{className:"text-neutral-400 text-sm",children:["© ",new Date().getFullYear()," ",n.name,". All rights reserved."]}),t.jsxs("div",{className:"flex gap-6 text-sm",children:[t.jsx(h,{to:"/privacy-policy",className:"text-neutral-400 hover:text-white transition-colors",children:"Privacy Policy"}),t.jsx(h,{to:"/terms",className:"text-neutral-400 hover:text-white transition-colors",children:"Terms of Use"}),t.jsx(h,{to:"/sitemap",className:"text-neutral-400 hover:text-white transition-colors",children:"Sitemap"})]})]})})})]})]})};export{H as default};
//# sourceMappingURL=Footer-KdPfgaQW.js.map
