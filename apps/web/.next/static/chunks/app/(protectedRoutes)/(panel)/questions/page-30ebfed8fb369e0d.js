(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{2850:function(e,t,s){Promise.resolve().then(s.bind(s,9338))},9338:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return questions_page}});var o=s(7573),n=s(3468),r=s(2056),a=s.n(r),question=function(e){let{questionData:t,index:s}=e;return(0,o.jsx)(a(),{href:"/solve/".concat(t.id),children:(0,o.jsx)("li",{className:"flex px-5 py-5 mb-3 border-2 border-white rounded-lg cursor-pointer hover:bg-white hover:text-black",children:(0,o.jsxs)("div",{className:"flex min-w-0 gap-x-4",children:[(0,o.jsxs)("h2",{children:["Q",s+1]}),(0,o.jsx)("div",{className:"flex-auto min-w-0",children:(0,o.jsx)("p",{className:"text-sm font-semibold leading-6",children:t.question})})]})})},s)},i=s(7653),questions_page=function(){let[e,t]=(0,i.useState)([]),getAllQuestions=async()=>{let e=await n.b.get("".concat("http://localhost:4000","/api/questions"));"success"==e.data.message&&t(e.data.payload.qa)};return(0,i.useEffect)(()=>{getAllQuestions()},[]),(0,o.jsx)("div",{className:"container mx-auto",children:(0,o.jsx)("ul",{role:"list",className:"mb-2",children:e.map((e,t)=>(0,o.jsx)(question,{questionData:e,index:t},t))})})}},3468:function(e,t,s){"use strict";s.d(t,{b:function(){return n}});var o=s(1012);let n=o.Z.create();n.interceptors.request.use(e=>{if(!1===Object.keys(e.headers).includes("Authorization")){let t=localStorage.getItem("accessToken");e.headers.Authorization="Bearer ".concat(t)}return e},e=>(console.error("✉️ ",e),Promise.reject(e))),n.interceptors.response.use(e=>e,e=>{throw console.log(e.toJSON()),console.log(e.response),"Network Error"===e.toJSON().message&&console.log("no internet connection"),500===e.toJSON().status&&window.open("/500","_self"),403===e.toJSON().status&&"unauthorized"===e.response.data.message&&(localStorage.clear(),window.open("".concat("http://localhost:3002","/login"),"_self")),Promise.reject(e.response&&e.response.data),e})}},function(e){e.O(0,[343,56,293,53,744],function(){return e(e.s=2850)}),_N_E=e.O()}]);