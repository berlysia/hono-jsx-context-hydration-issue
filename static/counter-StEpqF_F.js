import{u as i,a as l,b as d,c as a,j as t}from"./client-34eeoqkv.js";import{M as C}from"./context-DAOsDeBA.js";function x(){const[e,r]=i(C),[o,c]=l(0),[,u]=d(n=>n+1,0),s=a();return console.log({id:s,count:o,contextCount:e}),t("div",{children:[t("h2",{children:"Counter"}),t("p",{children:["context ",e," ",t("button",{type:"button",onClick:()=>r(n=>n+1),children:"+"})]}),t("p",{children:["state ",o," ",t("button",{type:"button",onClick:()=>c(n=>n+1),children:"+"})]}),t("button",{onClick:()=>u(null),children:"rerender"})]})}export{x as default};