(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6833:function(e,t,i){Promise.resolve().then(i.t.bind(i,6685,23)),Promise.resolve().then(i.bind(i,8294)),Promise.resolve().then(i.bind(i,9286))},9286:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i(7437),l=i(4548),r=i.n(l),a=i(2265),o=i(4741);i(2759),i(7881);var s=i(1396),u=i.n(s),c=e=>{let{data:t,className:i,autoplay:l=!1,speed:r=300,loop:s=!0}=e,c=(0,a.useMemo)(()=>({infinite:s,speed:r,slidesToShow:5,autoplay:!!l,autoplaySpeed:"boolean"==typeof l?3e3:l}),[l,s,r]);return(0,n.jsxs)("div",{children:["슬라이드 컴포넌트",(0,n.jsx)("div",{className:i,children:(0,n.jsx)(o.Z,{...c,children:null==t?void 0:t.map((e,t)=>(0,n.jsx)(u(),{href:"/reserve/".concat(e.id),children:(0,n.jsx)("picture",{children:(0,n.jsx)("img",{src:e.item,alt:e.name})})},t))})})]})};let d=[{id:0,item:"`http://placehold.it/1200x400`",name:"이미지01"},{id:1,item:"http://placehold.it/1200x400/ff0000",name:"이미지02"},{id:2,item:"http://placehold.it/1200x400/00ffff",name:"이미지03"},{id:3,item:"`http://placehold.it/1200x400`",name:"이미지01"},{id:4,item:"http://placehold.it/1200x400/ff0000",name:"이미지02"},{id:5,item:"http://placehold.it/1200x400/00ffff",name:"이미지03"}];var f=e=>{let{data:t,datatype:i="all",headerTitle:l}=e,[o,s]=(0,a.useState)([]);return(0,a.useEffect)(()=>{if("open"===i){let e=r()(),i=t.filter(t=>{let i=r()(t.startTime);return i.isAfter(e)});s(i)}else s(t)},[]),(0,n.jsxs)("div",{children:[l&&(0,n.jsx)("h4",{className:"text-center",children:l}),(0,n.jsx)("div",{children:(0,n.jsx)(c,{data:d})})]})}},8294:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return s}});var n=i(2265);let l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,i]=(0,n.useState)(),[l,r]=(0,n.useState)(""),a=e=>{let{latitude:t,longitude:n}=e.coords;i({latitude:t,longitude:n})},o=e=>{r(e.message)};return(0,n.useEffect)(()=>{let{geolocation:t}=navigator;if(!t){r("Geolocation is not supported.");return}t.getCurrentPosition(a,o,e)},[e]),{location:t,error:l}};var r=i(5980),a=i(5883);let o={enableHighAccuracy:!0,timeout:1e4,maximumAge:864e5};var s=()=>{let{location:e,error:t}=l(o),i=(0,a.Zl)(r.h);return(0,a.sJ)(r.h),(0,n.useEffect)(()=>{e&&i(e)},[e,i]),null}},5980:function(e,t,i){"use strict";i.d(t,{K:function(){return l},h:function(){return r}});var n=i(5883);let l=(0,n.cn)({key:"userState",default:{atk:"",locationState:{latitude:0,longitude:0}}}),r=(0,n.nZ)({key:"locationSelector",get:e=>{let{get:t}=e,i=t(l);return i.locationState.latitude},set:(e,t)=>{let{set:i}=e;i(l,e=>({...e,locationState:{...e.locationState,latitude:t}}))}})}},function(e){e.O(0,[691,685,205,971,596,744],function(){return e(e.s=6833)}),_N_E=e.O()}]);