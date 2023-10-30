(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[813],{8778:function(e,t,r){Promise.resolve().then(r.bind(r,2198))},2198:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return DashboardLayout}});var n=r(7573),o=r(7653),s=r(2056),a=r.n(s),i=r(2859);let processStoredValue=e=>{try{return JSON.parse(e)}catch(t){return e}},parseStoredValue=e=>{try{return JSON.parse(e)}catch(t){return e}};function useLocalStorage(e,t){let r=(0,o.useRef)(!1),[n,s]=(0,o.useState)(t);return(0,o.useEffect)(()=>{try{let t=window.localStorage.getItem(e);t&&s(parseStoredValue(t))}catch(e){console.log(e)}return()=>{r.current=!1}},[e]),(0,o.useEffect)(()=>{r.current?window.localStorage.setItem(e,processStoredValue(n)):r.current=!0},[e,n]),[n,s]}function DashboardLayout(e){let{children:t}=e,r=(0,i.usePathname)(),[s,l]=(0,o.useState)("dashboard"),[c,u]=(0,o.useState)(!1),[d,f]=useLocalStorage("accessToken",""),[h,p]=useLocalStorage("email",""),m=(0,i.useSearchParams)(),x=m.get("accessToken"),b=m.get("email");return(0,o.useEffect)(()=>{x&&""!=x&&f(x),b&&""!=b&&p(b)},[x,b]),(0,o.useEffect)(()=>{window.location.href.includes("dashboard")&&l("dashboard"),window.location.href.includes("questions")&&l("questions")},[r]),(0,n.jsxs)("section",{className:"h-screen p-8",onClick:()=>{u(!1)},children:[(0,n.jsxs)("div",{className:"flex justify-between mb-6 align-middle",children:[(0,n.jsxs)("h1",{className:"text-3xl font-bold leading-tight text-center",children:[(0,n.jsx)("span",{className:"text-blue-600",children:"/"}),"Admin"]}),(0,n.jsx)("div",{className:"flex align-middle",children:(0,n.jsx)(a(),{href:"/questions",children:(0,n.jsx)("button",{className:"questions"==s?"w-full text-black font-semibold py-3 px-8 rounded-full border-white bg-white border-2":"w-full text-white font-semibold py-3 px-8 rounded-full border-white border-2",children:"Questions"})})}),(0,n.jsx)("div",{className:"flex align-middle cursor-pointer ps-14",onClick:e=>{e.stopPropagation(),u(!c)},children:(0,n.jsx)("div",{className:"flex items-center justify-center w-12 h-12 text-white border-2 border-white rounded-full",children:(0,n.jsx)("span",{className:"text-2xl font-semibold select-none",suppressHydrationWarning:!0,children:h&&""!=h?h[0].toUpperCase():"*"})})}),(0,n.jsx)("div",{onClick:e=>{e.stopPropagation(),u(!c)},className:"absolute right-0 z-10 w-32 mt-14 me-10 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ".concat(c?"transition ease-out duration-10 transform opacity-100 scale-100":"transition ease-in duration-75 transform opacity-0 scale-95"),role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabIndex:-1,children:(0,n.jsx)("div",{className:"py-1",role:"none",children:(0,n.jsx)("a",{href:"/login",onClick:()=>{localStorage.clear()},className:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabIndex:-1,id:"menu-item-0",children:"Logout"})})})]}),t]})}},8294:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7653),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,s={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=q,t.jsxs=q},7573:function(e,t,r){"use strict";e.exports=r(8294)},2056:function(e,t,r){e.exports=r(9265)},2859:function(e,t,r){e.exports=r(7699)}},function(e){e.O(0,[265,293,53,744],function(){return e(e.s=8778)}),_N_E=e.O()}]);