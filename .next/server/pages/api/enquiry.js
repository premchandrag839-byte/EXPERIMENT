"use strict";(()=>{var e={};e.id=81,e.ids=[81],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},9997:(e,t,r)=>{r.r(t),r.d(t,{config:()=>y,default:()=>g,routeModule:()=>A});var n={};r.r(n),r.d(n,{default:()=>m});var i=r(1802),s=r(7153),o=r(6249);let a=require("fs");var u=r.n(a);let l=require("path");var d=r.n(l);let c=d().join(process.cwd(),".data"),p=d().join(c,"enquiries.json"),f=require("nodemailer");var P=r.n(f);async function m(e,t){if("POST"!==e.method)return t.setHeader("Allow",["POST"]),t.status(405).json({ok:!1,error:"Method not allowed"});try{let{name:r,email:n,phone:i,message:s}=e.body||{};if(!r||!n||!i||!s)return t.status(400).json({ok:!1,error:"Missing required fields"});let o={name:r,email:n,phone:i,message:s,createdAt:new Date().toISOString()};await function(e){u().existsSync(c)||u().mkdirSync(c,{recursive:!0}),u().existsSync(p)||u().writeFileSync(p,"[]","utf8");let t=JSON.parse(u().readFileSync(p,"utf8"));t.push(e),u().writeFileSync(p,JSON.stringify(t,null,2),"utf8")}(o);let a=process.env.NOTIFY_EMAIL_USER,l=process.env.NOTIFY_EMAIL_PASS;if(a&&l){let e=P().createTransport({host:"smtp.gmail.com",port:465,secure:!0,auth:{user:a,pass:l}}),t={from:a,to:a,subject:"New Online Enquiry",text:`New enquiry submitted:

Name: ${r}
Email: ${n}
Phone: ${i}
Message:
${s}

Submitted at: ${o.createdAt}`,html:`
          <h2>New Online Enquiry</h2>
          <p><strong>Name:</strong> ${r}</p>
          <p><strong>Email:</strong> ${n}</p>
          <p><strong>Phone:</strong> ${i}</p>
          <p><strong>Message:</strong><br/>${s.replace(/\n/g,"<br/>")}</p>
          <p><em>Submitted at: ${o.createdAt}</em></p>
        `,replyTo:n};try{await e.sendMail(t)}catch(e){}}return t.status(200).json({ok:!0})}catch(e){return t.status(500).json({ok:!1,error:"Failed to store enquiry"})}}let g=(0,o.l)(n,"default"),y=(0,o.l)(n,"config"),A=new i.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/enquiry",pathname:"/api/enquiry",bundlePath:"",filename:""},userland:n})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=9997);module.exports=r})();