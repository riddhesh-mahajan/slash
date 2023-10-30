(()=>{var e={};e.id=848,e.ids=[848],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},9491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},358:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1658:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var a=s(6965),r=s(4902),o=s(6408),n=s.n(o),i=s(4346),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let d=["",{children:["(protectedRoutes)",{children:["(panel)",{children:["questions",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1889)),"C:\\Users\\91882\\Desktop\\slash\\apps\\admin\\app\\(protectedRoutes)\\(panel)\\questions\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,2611)),"C:\\Users\\91882\\Desktop\\slash\\apps\\admin\\app\\(protectedRoutes)\\(panel)\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,8903)),"C:\\Users\\91882\\Desktop\\slash\\apps\\admin\\app\\(protectedRoutes)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5438,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,6952))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1442)),"C:\\Users\\91882\\Desktop\\slash\\apps\\admin\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5438,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,6952))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\91882\\Desktop\\slash\\apps\\admin\\app\\(protectedRoutes)\\(panel)\\questions\\page.tsx"],u="/(protectedRoutes)/(panel)/questions/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(protectedRoutes)/(panel)/questions/page",pathname:"/questions",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1336:(e,t,s)=>{Promise.resolve().then(s.bind(s,1217))},3924:(e,t,s)=>{Promise.resolve().then(s.bind(s,2992))},7940:(e,t,s)=>{Promise.resolve().then(s.bind(s,7696))},1217:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>DashboardLayout});var a=s(4196),r=s(8726),o=s(4288),n=s.n(o),i=s(4555);let processStoredValue=e=>{try{return JSON.parse(e)}catch(t){return e}},parseStoredValue=e=>{try{return JSON.parse(e)}catch(t){return e}};function useLocalStorage(e,t){let s=(0,r.useRef)(!1),[a,o]=(0,r.useState)(t);return(0,r.useEffect)(()=>{try{let t=window.localStorage.getItem(e);t&&o(parseStoredValue(t))}catch(e){console.log(e)}return()=>{s.current=!1}},[e]),(0,r.useEffect)(()=>{s.current?window.localStorage.setItem(e,processStoredValue(a)):s.current=!0},[e,a]),[a,o]}function DashboardLayout({children:e}){let t=(0,i.usePathname)(),[s,o]=(0,r.useState)("dashboard"),[l,d]=(0,r.useState)(!1),[c,u]=useLocalStorage("accessToken",""),[p,m]=useLocalStorage("email",""),x=(0,i.useSearchParams)(),h=x.get("accessToken"),f=x.get("email");return(0,r.useEffect)(()=>{h&&""!=h&&u(h),f&&""!=f&&m(f)},[h,f]),(0,r.useEffect)(()=>{window.location.href.includes("dashboard")&&o("dashboard"),window.location.href.includes("questions")&&o("questions")},[t]),(0,a.jsxs)("section",{className:"h-screen p-8",onClick:()=>{d(!1)},children:[(0,a.jsxs)("div",{className:"flex justify-between mb-6 align-middle",children:[(0,a.jsxs)("h1",{className:"text-3xl font-bold leading-tight text-center",children:[a.jsx("span",{className:"text-blue-600",children:"/"}),"Admin"]}),a.jsx("div",{className:"flex align-middle",children:a.jsx(n(),{href:"/questions",children:a.jsx("button",{className:"questions"==s?"w-full text-black font-semibold py-3 px-8 rounded-full border-white bg-white border-2":"w-full text-white font-semibold py-3 px-8 rounded-full border-white border-2",children:"Questions"})})}),a.jsx("div",{className:"flex align-middle cursor-pointer ps-14",onClick:e=>{e.stopPropagation(),d(!l)},children:a.jsx("div",{className:"flex items-center justify-center w-12 h-12 text-white border-2 border-white rounded-full",children:a.jsx("span",{className:"text-2xl font-semibold select-none",suppressHydrationWarning:!0,children:p&&""!=p?p[0].toUpperCase():"*"})})}),a.jsx("div",{onClick:e=>{e.stopPropagation(),d(!l)},className:`absolute right-0 z-10 w-32 mt-14 me-10 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${l?"transition ease-out duration-10 transform opacity-100 scale-100":"transition ease-in duration-75 transform opacity-0 scale-95"}`,role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabIndex:-1,children:a.jsx("div",{className:"py-1",role:"none",children:a.jsx("a",{href:"/login",onClick:()=>{localStorage.clear()},className:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabIndex:-1,id:"menu-item-0",children:"Logout"})})})]}),e]})}},2992:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>page});var a=s(4196),r=s(1082),o=s(2341),n=s(4206),i=s(4138),l=s(3024);let d=l.Z.create();d.interceptors.response.use(e=>e,e=>{throw console.log(e.toJSON()),console.log(e.response),"Network Error"===e.toJSON().message&&console.log("no internet connection"),500===e.toJSON().status&&window.open("/500","_self"),403===e.toJSON().status&&"unauthorized"===e.response.data.message&&(localStorage.clear(),window.open(`${process.env.NEXT_PUBLIC_LANDINGG_BASE_URL}/login`,"_self")),Promise.reject(e.response&&e.response.data),e});var c=s(2758),u=s(8726);let page=function(){let e=o.Ry().shape({qa:o.IX().of(o.Ry().shape({qid:o.Z_().required(),question:o.Z_().required(),testCases:o.Z_().required(),template:o.Z_().required()}))}),t=(0,r.TA)({initialValues:{qa:[{qid:(0,c.Z)(),question:"",testCases:[],template:""}]},validationSchema:e,onSubmit:async(e,{setErrors:t,setSubmitting:s})=>{console.log(e);try{let t=await d.post("http://localhost:4000/api/admin/questions",JSON.stringify(e));t.data.message}catch(e){console.log(e)}}}),{errors:s,touched:l,handleSubmit:p,isSubmitting:m,getFieldProps:x,values:h,setFieldValue:f}=t,getqa=async()=>{let e=await d.get("http://localhost:4000/api/admin/questions");"success"==e.data.message&&f("qa",e.data.payload.qa)};return(0,u.useEffect)(()=>{getqa()},[]),a.jsx("div",{children:a.jsx(r.Hy,{value:t,children:a.jsx(r.l0,{autoComplete:"off",noValidate:!0,onSubmit:p,children:a.jsx("div",{className:"container mx-auto",children:a.jsx("div",{className:"mb-4",children:a.jsx(r.F2,{...x("qa"),render:e=>(0,a.jsxs)("div",{children:["string"!=typeof h?.qa&&h?.qa?.map((t,o)=>a.jsxs("div",{className:"mb-6",children:[a.jsxs("div",{className:"flex justify-between mb-2 align-middle",children:[a.jsxs("h2",{className:"mb-2 text-2xl font-semibold",children:["Question ",o+1]}),a.jsx(n.FontAwesomeIcon,{icon:i.g82,onClick:()=>e.remove(o),className:"text-3xl text-red-400 cursor-pointer hover:text-red-500"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("p",{className:"mb-1 text-md text-slate-400",children:"Question"}),a.jsx(r.gN,{as:"textarea",rows:10,placeholder:"Question",name:`qa.${o}.question`,className:"w-full p-3 text-black rounded-sm"}),a.jsx("span",{className:"text-red-400",style:{display:Object.keys(s).includes("qa")&&s.qa?.length!=0&&s?.qa?.[o]?.question?"block":"none"},children:"Question is required"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("p",{className:"mb-1 text-md text-slate-400",children:"Test cases (Array of objects)"}),a.jsx(r.gN,{as:"textarea",rows:10,placeholder:"Test cases",name:`qa.${o}.testCases`,className:"w-full p-3 text-black rounded-sm"}),a.jsx("span",{className:"text-red-400",style:{display:Object.keys(s).includes("qa")&&s.qa?.length!=0&&s?.qa?.[o]?.testCases?"block":"none"},children:"Test cases is required"})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("p",{className:"mb-1 text-md text-slate-400",children:"Template"}),a.jsx(r.gN,{as:"textarea",rows:10,placeholder:"Template",name:`qa.${o}.template`,className:"w-full p-3 text-black rounded-sm"}),a.jsx("span",{className:"text-red-400",style:{display:Object.keys(s).includes("qa")&&s.qa?.length!=0&&s?.qa?.[o]?.template?"block":"none"},children:"Template is required"})]}),a.jsxs("div",{children:[a.jsx("p",{className:"mb-1 text-md text-slate-400",children:"Answer (Array of answers for each testcase)"}),a.jsx(r.gN,{as:"textarea",placeholder:"Answer",name:`qa.${o}.answer`,className:"w-full p-3 text-black rounded-sm"}),a.jsx("span",{className:"text-red-400",style:{display:Object.keys(s).includes("qa")&&s.qa?.length!=0&&s?.qa?.[o]?.answer?"block":"none"},children:"Answer is required"})]})]},o)),(0,a.jsxs)("div",{className:"flex justify-between w-full",children:[a.jsx("div",{children:a.jsx("button",{type:"button",onClick:()=>e.push({qid:(0,c.Z)(),question:"",answer:"",testCases:[],template:""}),className:"px-8 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800",children:"Add New Question"})}),a.jsx("div",{children:a.jsx("button",{type:"submit",className:"px-8 py-3 font-semibold text-white bg-teal-400 rounded-lg",disabled:m,children:m?"Saving...":"Save"})})]})]})})})})})})})}},7696:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>ProtectedRoutesLayout});var a=s(8726);function ProtectedRoutesLayout({children:e}){return(0,a.useEffect)(()=>{setTimeout(()=>{localStorage.getItem("accessToken")||window.open("/login","_self")},1e3)},[]),e}},2611:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>l});var a=s(4074);let r=(0,a.createProxy)(String.raw`C:\Users\91882\Desktop\slash\apps\admin\app\(protectedRoutes)\(panel)\layout.tsx`),{__esModule:o,$$typeof:n}=r,i=r.default,l=i},1889:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>l});var a=s(4074);let r=(0,a.createProxy)(String.raw`C:\Users\91882\Desktop\slash\apps\admin\app\(protectedRoutes)\(panel)\questions\page.tsx`),{__esModule:o,$$typeof:n}=r,i=r.default,l=i},8903:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>l});var a=s(4074);let r=(0,a.createProxy)(String.raw`C:\Users\91882\Desktop\slash\apps\admin\app\(protectedRoutes)\layout.tsx`),{__esModule:o,$$typeof:n}=r,i=r.default,l=i},6952:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(6819);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[323,819,642,745,500,570],()=>__webpack_exec__(1658));module.exports=s})();