"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var s=t(791),r=t(689),n=t(461),c=t(617),o=t(184);const i=()=>{const[e,a]=(0,s.useState)([]),{movieId:t}=(0,r.UO)();function i(e){const a=new Date(e);return(0,n.WU)(a,"yyyy-MM-dd (HH:mm:ss)")}return(0,s.useEffect)((()=>{(0,c.Bt)(t).then((e=>a(e))).catch((e=>{console.error(e.message),a([])}))}),[t]),(0,o.jsx)(o.Fragment,{children:e.length>0?(0,o.jsx)("ul",{children:e.map((e=>(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author: ",e.author]}),(0,o.jsxs)("p",{children:["Date of create: ",i(e.created_at)]}),(0,o.jsx)("p",{children:e.content})]},e.id)))}):(0,o.jsx)("p",{children:"SORRY! But We don't have any revies for this movie"})})}},617:(e,a,t)=>{t.d(a,{Bt:()=>l,Tg:()=>n,iJ:()=>c,m4:()=>o,y:()=>i});var s=t(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3";const r="6cbea8cece37cf85eba0b83585dd8520",n=async()=>{const e={api_key:r,page:1},{data:a}=await s.Z.get("/trending/movie/day",{params:e});return a.results},c=async e=>{const a={api_key:r,page:1,query:e},{data:t}=await s.Z.get("/search/movie",{params:a});return console.log(t.results),t.results.filter((a=>a.title.toLowerCase().includes(e.toLowerCase())))},o=async e=>{const a={api_key:r,page:1},{data:t}=await s.Z.get("/movie/".concat(e),{params:a});return t},i=async e=>{const a={api_key:r,page:1,language:"en-US"};try{const{data:t}=await s.Z.get("/movie/".concat(e,"/credits"),{params:a});return t}catch(t){throw console.error(t.message),new Error("Failed to fetch cast")}},l=async e=>{const a={api_key:r,page:1,language:"en-US"},{data:t}=await s.Z.get("/movie/".concat(e,"/reviews"),{params:a});return console.log(t),t.results}}}]);
//# sourceMappingURL=186.08aa2396.chunk.js.map