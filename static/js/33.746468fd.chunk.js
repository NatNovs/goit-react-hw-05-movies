"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{33:(e,n,t)=>{t.r(n),t.d(n,{default:()=>_});var r,a,s,o,i,c,l=t(791),d=t(689),p=t(617),x=t(508),g=t(62),h=t(168),m=t(87),u=t(686);const v=(0,u.Z)(m.rU)(r||(r=(0,h.Z)(["\n  text-decoration: none;\n  color: inherit;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n  margin-bottom: 24px;\n  padding: 8px 16px;\n  border: 1px solid grey;\n  border-radius: 10px;\n  transition: border-color 400ms ease, color 400ms ease;\n\n  &:hover,\n  &:focus,\n  &:active {\n    border-color: #ff7341;\n    color: #ff7341;\n  }\n"]))),f=u.Z.div(a||(a=(0,h.Z)(["\n  padding: 24px;\n"]))),j=u.Z.div(s||(s=(0,h.Z)(["\n  display: flex;\n  gap: 24px;\n  margin-bottom: 16px;\n"]))),y=u.Z.div(o||(o=(0,h.Z)(["\n  border-top: 1px solid grey;\n  border-bottom: 1px solid grey;\n"]))),w=u.Z.ul(i||(i=(0,h.Z)(["\n  list-style: none;\n"]))),b=(0,u.Z)(m.rU)(c||(c=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  text-decoration: none;\n  color: inherit;\n  font-size: 24px;\n  transition: color 400ms ease;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: #ff7341;\n  }\n"])));var Z=t(184);const _=()=>{var e,n;const[t,r]=(0,l.useState)(null),a=(0,d.TH)(),s=(0,l.useRef)(null!==(e=null===(n=a.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),{movieId:o}=(0,d.UO)();if((0,l.useEffect)((()=>{(0,p.m4)(o).then((e=>r(e))).catch((e=>{console.error(e.message),r({})}))}),[o]),!t)return;const{genres:i}=t,c=new Date(t.release_date).getFullYear(),h=t.poster_path,m=t.production_countries;return(0,Z.jsxs)(f,{children:[(0,Z.jsxs)(v,{to:s.current,children:[(0,Z.jsx)(x.A65,{}),"Go back"]}),(0,Z.jsxs)(j,{children:[(0,Z.jsx)("img",{src:h?"".concat("https://image.tmdb.org/t/p/w300").concat(h):g,alt:t.title}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("h2",{children:[t.title," (",c||t.status,")"]}),(0,Z.jsxs)("p",{children:["Made in:"," ",m&&m.map((e=>e.name)).join(", ")]}),(0,Z.jsxs)("p",{children:["User Score: ",function(){const e=t.vote_average;return Math.round(10*e).toFixed(0)+"%"}()]}),(0,Z.jsx)("h3",{children:"Overview"}),(0,Z.jsx)("p",{children:t.overview}),(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsxs)("p",{children:[i&&i.map((e=>e.name)).join(" ")," "]})]})]}),(0,Z.jsxs)(y,{children:[(0,Z.jsx)("h3",{children:"Additional information"}),(0,Z.jsxs)(w,{children:[(0,Z.jsx)("li",{children:(0,Z.jsxs)(b,{to:"cast",children:[(0,Z.jsx)(x.RR_,{}),"Cast"]})}),(0,Z.jsx)("li",{children:(0,Z.jsxs)(b,{to:"reviews",children:[(0,Z.jsx)(x.RR_,{}),"Reviews"]})})]}),(0,Z.jsx)(d.j3,{})]})]})}},617:(e,n,t)=>{t.d(n,{Bt:()=>l,Tg:()=>s,iJ:()=>o,m4:()=>i,y:()=>c});var r=t(294);r.Z.defaults.baseURL="https://api.themoviedb.org/3";const a="6cbea8cece37cf85eba0b83585dd8520",s=async()=>{const e={api_key:a,page:1},{data:n}=await r.Z.get("/trending/movie/day",{params:e});return n.results},o=async e=>{const n={api_key:a,page:1,query:e},{data:t}=await r.Z.get("/search/movie",{params:n});return console.log(t.results),t.results.filter((n=>n.title.toLowerCase().includes(e.toLowerCase())))},i=async e=>{const n={api_key:a,page:1},{data:t}=await r.Z.get("/movie/".concat(e),{params:n});return t},c=async e=>{const n={api_key:a,page:1,language:"en-US"};try{const{data:t}=await r.Z.get("/movie/".concat(e,"/credits"),{params:n});return t}catch(t){throw console.error(t.message),new Error("Failed to fetch cast")}},l=async e=>{const n={api_key:a,page:1,language:"en-US"},{data:t}=await r.Z.get("/movie/".concat(e,"/reviews"),{params:n});return console.log(t),t.results}},62:(e,n,t)=>{e.exports=t.p+"static/media/imgnf.7a718ff088da1d3547ee.jpg"}}]);
//# sourceMappingURL=33.746468fd.chunk.js.map