"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{174:(e,t,a)=>{a.d(t,{Z:()=>u});var n,s,r,o=a(689),c=a(168),i=a(686),l=a(87);const d=i.Z.ul(n||(n=(0,c.Z)(["\n  list-style-type: none;\n"]))),g=i.Z.li(s||(s=(0,c.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),m=(0,i.Z)(l.rU)(r||(r=(0,c.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"])));var p=a(184);const u=e=>{let{movies:t}=e;const a=(0,o.TH)();return(0,p.jsx)(d,{children:t.length>0&&t.map((e=>{let{id:t,title:n}=e;return(0,p.jsx)(g,{children:(0,p.jsx)(m,{to:"/movies/".concat(t),state:{from:a},children:n})},t)}))})}},485:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n,s,r=a(791),o=a(617),c=a(168),i=a(686);const l=i.Z.div(n||(n=(0,c.Z)(["\npadding: 24px;\n"]))),d=i.Z.h1(s||(s=(0,c.Z)(["\nmargin: 0;\n"])));var g=a(174),m=a(184);const p=()=>{const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(0,o.Tg)().then((e=>{t(e)})).catch((e=>console.error(e.message)))}),[]),(0,m.jsxs)(l,{children:[(0,m.jsx)(d,{children:"Trending movies"}),!!e.length&&(0,m.jsx)(g.Z,{movies:e})]})}},617:(e,t,a)=>{a.d(t,{Bt:()=>l,Tg:()=>r,iJ:()=>o,m4:()=>c,y:()=>i});var n=a(294);n.Z.defaults.baseURL="https://api.themoviedb.org/3";const s="6cbea8cece37cf85eba0b83585dd8520",r=async()=>{const e={api_key:s,page:1},{data:t}=await n.Z.get("/trending/movie/day",{params:e});return t.results},o=async e=>{const t={api_key:s,page:1,query:e},{data:a}=await n.Z.get("/search/movie",{params:t});return console.log(a.results),a.results.filter((t=>t.title.toLowerCase().includes(e.toLowerCase())))},c=async e=>{const t={api_key:s,page:1},{data:a}=await n.Z.get("/movie/".concat(e),{params:t});return a},i=async e=>{const t={api_key:s,page:1,language:"en-US"};try{const{data:a}=await n.Z.get("/movie/".concat(e,"/credits"),{params:t});return a}catch(a){throw console.error(a.message),new Error("Failed to fetch cast")}},l=async e=>{const t={api_key:s,page:1,language:"en-US"},{data:a}=await n.Z.get("/movie/".concat(e,"/reviews"),{params:t});return console.log(a),a.results}}}]);
//# sourceMappingURL=485.8d1381f3.chunk.js.map