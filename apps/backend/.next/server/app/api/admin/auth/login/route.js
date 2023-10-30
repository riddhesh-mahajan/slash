"use strict";(()=>{var e={};e.id=840,e.ids=[840],e.modules={3524:e=>{e.exports=require("@prisma/client")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},2254:e=>{e.exports=require("node:buffer")},6005:e=>{e.exports=require("node:crypto")},5673:e=>{e.exports=require("node:events")},8849:e=>{e.exports=require("node:http")},2286:e=>{e.exports=require("node:https")},7261:e=>{e.exports=require("node:util")},3480:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>_,originalPathname:()=>h,requestAsyncStorage:()=>g,routeModule:()=>x,serverHooks:()=>S,staticGenerationAsyncStorage:()=>E,staticGenerationBailout:()=>P});var s={};t.r(s),t.d(s,{POST:()=>POST}),t(4388);var a=t(5789),i=t(4902),o=t(3002),n=t(9873),u=t.n(n),d=t(7568),p=t(3387),l=t(5062),m=t(4443);let c=new o.PrismaClient,R=process.env.JWT_KEY;async function POST(e){let{email:r,password:t}=await e.json(),s=await c.user.findUnique({where:{email:r}});if(!s)return(0,m.r)({message:p.Z.ERROR,payload:{error:"User does not exist"},status:l.Z.BAD_REQUEST});let a=await u().compare(t,s.password);if(!a)return(0,m.r)({message:p.Z.ERROR,payload:{error:"Password is incorrect"},status:l.Z.BAD_REQUEST});if(!s.admin)return(0,m.r)({message:p.Z.ERROR,payload:{error:"User is not admin"},status:l.Z.BAD_REQUEST});let i=new TextEncoder().encode(R),o=await new d.N6({id:s.id}).setProtectedHeader({alg:"HS256"}).setIssuedAt().setIssuer("urn:example:issuer").setAudience("urn:example:audience").setExpirationTime("1y").sign(i);return(0,m.r)({message:p.Z.SUCCESS,payload:{token:o,user:{id:s.id,email:s.email}},status:l.Z.OK})}let x=new a.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/admin/auth/login/route",pathname:"/api/admin/auth/login",filename:"route",bundlePath:"app/api/admin/auth/login/route"},resolvedPagePath:"C:\\Users\\91882\\Desktop\\slash\\apps\\backend\\app\\api\\admin\\auth\\login\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:g,staticGenerationAsyncStorage:E,serverHooks:S,headerHooks:_,staticGenerationBailout:P}=x,h="/api/admin/auth/login/route"},3002:(e,r,t)=>{var s=t(3524);t.o(s,"PrismaClient")&&t.d(r,{PrismaClient:function(){return s.PrismaClient}})},3387:(e,r,t)=>{t.d(r,{Z:()=>s});let s={SUCCESS:"success",ERROR:"error"}},4443:(e,r,t)=>{t.d(r,{r:()=>createResponse});var s=t(3387),a=t(5062);let createResponse=e=>Response.json({message:e.message||s.Z.SUCCESS,payload:e.payload||{}},{status:e.status||a.Z.OK})},5062:(e,r,t)=>{t.d(r,{Z:()=>s});let s={OK:200,BAD_REQUEST:400}}};var r=require("../../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[701,599],()=>__webpack_exec__(3480));module.exports=t})();