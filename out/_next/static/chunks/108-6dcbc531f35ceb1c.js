(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[108],{4440:function(r,e){var o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var r=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}r.exports?(n.default=n,r.exports=n):void 0!==(o=(function(){return n}).apply(e,[]))&&(r.exports=o)}()},622:function(r,e,o){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=o(2265),n=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(r,e,o){var t,a={},c=null,d=null;for(t in void 0!==o&&(c=""+o),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(d=e.ref),e)i.call(e,t)&&!l.hasOwnProperty(t)&&(a[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps)void 0===a[t]&&(a[t]=e[t]);return{$$typeof:n,type:r,key:c,ref:d,props:a,_owner:s.current}}e.jsx=a,e.jsxs=a},7437:function(r,e,o){"use strict";r.exports=o(622)},3986:function(r,e,o){"use strict";o.d(e,{m:function(){return M}});var t=/^\[(.+)\]$/;function n(r,e){var o=r;return e.split("-").forEach(function(r){o.nextPart.has(r)||o.nextPart.set(r,{nextPart:new Map,validators:[]}),o=o.nextPart.get(r)}),o}var i=/\s+/;function s(){for(var r,e,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(e=function r(e){if("string"==typeof e)return e;for(var o,t="",n=0;n<e.length;n++)e[n]&&(o=r(e[n]))&&(t&&(t+=" "),t+=o);return t}(r))&&(t&&(t+=" "),t+=e);return t}function l(r){var e=function(e){return e[r]||[]};return e.isThemeGetter=!0,e}var a=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,d=new Set(["px","full","screen"]),u=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,p=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,f=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function b(r){return x(r)||d.has(r)||c.test(r)||m(r)}function m(r){return S(r,"length",P)}function g(r){return S(r,"size",G)}function v(r){return S(r,"position",G)}function h(r){return S(r,"url",I)}function y(r){return S(r,"number",x)}function x(r){return!Number.isNaN(Number(r))}function w(r){return r.endsWith("%")&&x(r.slice(0,-1))}function k(r){return N(r)||S(r,"number",N)}function z(r){return a.test(r)}function C(){return!0}function j(r){return u.test(r)}function _(r){return S(r,"",E)}function S(r,e,o){var t=a.exec(r);return!!t&&(t[1]?t[1]===e:o(t[2]))}function P(r){return p.test(r)}function G(){return!1}function I(r){return r.startsWith("url(")}function N(r){return Number.isInteger(Number(r))}function E(r){return f.test(r)}var M=function(){for(var r,e,o,l=arguments.length,a=Array(l),c=0;c<l;c++)a[c]=arguments[c];var d=function(i){var s=a[0];return e=(r=function(r){var e,o,i,s,l,a,c,d,u,p,f;return{cache:function(r){if(r<1)return{get:function(){},set:function(){}};var e=0,o=new Map,t=new Map;function n(n,i){o.set(n,i),++e>r&&(e=0,t=o,o=new Map)}return{get:function(r){var e=o.get(r);return void 0!==e?e:void 0!==(e=t.get(r))?(n(r,e),e):void 0},set:function(r,e){o.has(r)?o.set(r,e):n(r,e)}}}(r.cacheSize),splitModifiers:(o=1===(e=r.separator||":").length,i=e[0],s=e.length,function(r){for(var t,n=[],l=0,a=0,c=0;c<r.length;c++){var d=r[c];if(0===l){if(d===i&&(o||r.slice(c,c+s)===e)){n.push(r.slice(a,c)),a=c+s;continue}if("/"===d){t=c;continue}}"["===d?l++:"]"===d&&l--}var u=0===n.length?r:r.substring(a),p=u.startsWith("!"),f=p?u.substring(1):u;return{modifiers:n,hasImportantModifier:p,baseClassName:f,maybePostfixModifierPosition:t&&t>a?t-a:void 0}}),...(d=r.theme,u=r.prefix,p={nextPart:new Map,validators:[]},(f=Object.entries(r.classGroups),u?f.map(function(r){return[r[0],r[1].map(function(r){return"string"==typeof r?u+r:"object"==typeof r?Object.fromEntries(Object.entries(r).map(function(r){return[u+r[0],r[1]]})):r})]}):f).forEach(function(r){var e=r[0];(function r(e,o,t,i){e.forEach(function(e){if("string"==typeof e){(""===e?o:n(o,e)).classGroupId=t;return}if("function"==typeof e){if(e.isThemeGetter){r(e(i),o,t,i);return}o.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(function(e){var s=e[0];r(e[1],n(o,s),t,i)})})})(r[1],p,e,d)}),l=r.conflictingClassGroups,c=void 0===(a=r.conflictingClassGroupModifiers)?{}:a,{getClassGroupId:function(r){var e=r.split("-");return""===e[0]&&1!==e.length&&e.shift(),function r(e,o){if(0===e.length)return o.classGroupId;var t=e[0],n=o.nextPart.get(t),i=n?r(e.slice(1),n):void 0;if(i)return i;if(0!==o.validators.length){var s=e.join("-");return o.validators.find(function(r){return(0,r.validator)(s)})?.classGroupId}}(e,p)||function(r){if(t.test(r)){var e=t.exec(r)[1],o=e?.substring(0,e.indexOf(":"));if(o)return"arbitrary.."+o}}(r)},getConflictingClassGroupIds:function(r,e){var o=l[r]||[];return e&&c[r]?[].concat(o,c[r]):o}})}}(a.slice(1).reduce(function(r,e){return e(r)},s()))).cache.get,o=r.cache.set,d=u,u(i)};function u(t){var n,s,l,a,c,d=e(t);if(d)return d;var u=(s=(n=r).splitModifiers,l=n.getClassGroupId,a=n.getConflictingClassGroupIds,c=new Set,t.trim().split(i).map(function(r){var e=s(r),o=e.modifiers,t=e.hasImportantModifier,n=e.baseClassName,i=e.maybePostfixModifierPosition,a=l(i?n.substring(0,i):n),c=!!i;if(!a){if(!i||!(a=l(n)))return{isTailwindClass:!1,originalClassName:r};c=!1}var d=(function(r){if(r.length<=1)return r;var e=[],o=[];return r.forEach(function(r){"["===r[0]?(e.push.apply(e,o.sort().concat([r])),o=[]):o.push(r)}),e.push.apply(e,o.sort()),e})(o).join(":");return{isTailwindClass:!0,modifierId:t?d+"!":d,classGroupId:a,originalClassName:r,hasPostfixModifier:c}}).reverse().filter(function(r){if(!r.isTailwindClass)return!0;var e=r.modifierId,o=r.classGroupId,t=r.hasPostfixModifier,n=e+o;return!c.has(n)&&(c.add(n),a(o,t).forEach(function(r){return c.add(e+r)}),!0)}).reverse().map(function(r){return r.originalClassName}).join(" "));return o(t,u),u}return function(){return d(s.apply(null,arguments))}}(function(){var r=l("colors"),e=l("spacing"),o=l("blur"),t=l("brightness"),n=l("borderColor"),i=l("borderRadius"),s=l("borderSpacing"),a=l("borderWidth"),c=l("contrast"),d=l("grayscale"),u=l("hueRotate"),p=l("invert"),f=l("gap"),S=l("gradientColorStops"),P=l("gradientColorStopPositions"),G=l("inset"),I=l("margin"),N=l("opacity"),E=l("padding"),M=l("saturate"),O=l("scale"),R=l("sepia"),T=l("skew"),$=l("space"),W=l("translate"),A=function(){return["auto","contain","none"]},L=function(){return["auto","hidden","clip","visible","scroll"]},q=function(){return["auto",z,e]},D=function(){return[z,e]},U=function(){return["",b]},B=function(){return["auto",x,z]},F=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},Y=function(){return["solid","dashed","dotted","double","none"]},H=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},J=function(){return["start","end","center","between","around","evenly","stretch"]},K=function(){return["","0",z]},Q=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},V=function(){return[x,y]},X=function(){return[x,z]};return{cacheSize:500,theme:{colors:[C],spacing:[b],blur:["none","",j,z],brightness:V(),borderColor:[r],borderRadius:["none","","full",j,z],borderSpacing:D(),borderWidth:U(),contrast:V(),grayscale:K(),hueRotate:X(),invert:K(),gap:D(),gradientColorStops:[r],gradientColorStopPositions:[w,m],inset:q(),margin:q(),opacity:V(),padding:D(),saturate:V(),scale:V(),sepia:K(),skew:X(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",z]}],container:["container"],columns:[{columns:[j]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(F(),[z])}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[G]}],"inset-x":[{"inset-x":[G]}],"inset-y":[{"inset-y":[G]}],start:[{start:[G]}],end:[{end:[G]}],top:[{top:[G]}],right:[{right:[G]}],bottom:[{bottom:[G]}],left:[{left:[G]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",k]}],basis:[{basis:q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",z]}],grow:[{grow:K()}],shrink:[{shrink:K()}],order:[{order:["first","last","none",k]}],"grid-cols":[{"grid-cols":[C]}],"col-start-end":[{col:["auto",{span:["full",k]},z]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[C]}],"row-start-end":[{row:["auto",{span:[k]},z]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",z]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(J())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(J(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(J(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[E]}],px:[{px:[E]}],py:[{py:[E]}],ps:[{ps:[E]}],pe:[{pe:[E]}],pt:[{pt:[E]}],pr:[{pr:[E]}],pb:[{pb:[E]}],pl:[{pl:[E]}],m:[{m:[I]}],mx:[{mx:[I]}],my:[{my:[I]}],ms:[{ms:[I]}],me:[{me:[I]}],mt:[{mt:[I]}],mr:[{mr:[I]}],mb:[{mb:[I]}],ml:[{ml:[I]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",z,e]}],"min-w":[{"min-w":["min","max","fit",z,b]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[j]},j,z]}],h:[{h:[z,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",z,b]}],"max-h":[{"max-h":[z,e,"min","max","fit"]}],"font-size":[{text:["base",j,m]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[C]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",z]}],"line-clamp":[{"line-clamp":["none",x,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,b]}],"list-image":[{"list-image":["none",z]}],"list-style-type":[{list:["none","disc","decimal",z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[N]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[N]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(Y(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",b]}],"underline-offset":[{"underline-offset":["auto",z,b]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[N]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(F(),[v])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",g]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},h]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[P]}],"gradient-via-pos":[{via:[P]}],"gradient-to-pos":[{to:[P]}],"gradient-from":[{from:[S]}],"gradient-via":[{via:[S]}],"gradient-to":[{to:[S]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[N]}],"border-style":[{border:[].concat(Y(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[N]}],"divide-style":[{divide:Y()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(Y())}],"outline-offset":[{"outline-offset":[z,b]}],"outline-w":[{outline:[b]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[N]}],"ring-offset-w":[{"ring-offset":[b]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",j,_]}],"shadow-color":[{shadow:[C]}],opacity:[{opacity:[N]}],"mix-blend":[{"mix-blend":H()}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",j,z]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[M]}],sepia:[{sepia:[R]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[N]}],"backdrop-saturate":[{"backdrop-saturate":[M]}],"backdrop-sepia":[{"backdrop-sepia":[R]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",z]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",z]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[k,z]}],"translate-x":[{"translate-x":[W]}],"translate-y":[{"translate-y":[W]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",z]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",z]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",z]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[b,y]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);