import{F as A,D as N,e as w,C as T,f as b,g as C}from"./client-34eeoqkv.js";var g=({children:i,fallback:h})=>{const l=A({children:i});return l[N]=(d,a)=>{if(!(d instanceof Promise))throw d;return d.finally(a),h},l};const S=(i,h)=>{let l=0;const d=async(n,s)=>{const e=s.childNodes[s.childNodes.length-1];(e==null?void 0:e.nodeName)==="TEMPLATE"&&(e==null?void 0:e.getAttribute(C))!==null&&(n.children=await c(e.content.childNodes))},a=async n=>{const s={children:await c(n.childNodes)},e=n.attributes;for(let t=0;t<e.length;t++)s[e[t].name]=e[t].value;return i(n.nodeName,{key:++l,...s})},c=async n=>{const s=[];for(let e=0;e<n.length;e++){const t=n[e];if(t.nodeType!==8)if(t.nodeType===3)s.push(t.textContent);else if(t.nodeName==="TEMPLATE"&&t.id.match(/(?:H|E):\d+/)){const r=document.createElement("hono-placeholder");r.style.display="none";let f;const u=new Promise(o=>f=o);t.replaceWith=o=>{c(o.childNodes).then(f),r.remove()};let p=[];for(r.appendChild(t);e<n.length;e++){const o=n[e];if(o.nodeType===8){r.appendChild(o),e--;break}else o.nodeType===3?p.push(o.textContent):p.push(await a(o))}const E=document.querySelectorAll(`[data-hono-target="${t.id}"]`);if(E.length>0){const o=E[E.length-1];p=await c(o.content.childNodes)}if(p.length===0&&t.id.startsWith("E:")){let o;const y=new Promise(m=>o=m);p=await i(g,{fallback:[],children:[await i(()=>w(y),{})]}),r.insertBefore=m=>{c(m.childNodes).then(o)}}document.body.appendChild(r),s.push(await i(g,{fallback:p,children:[await i(()=>w(u),{})]}))}else{let r;const f=t.getAttribute(T);if(f&&(r=await h(f)),r){const u=JSON.parse(t.getAttribute(b)||"{}");await d(u,t),s.push(await i(r,{key:++l,...u}))}else s.push(await a(t))}}return s};return c},O=async i=>{const h=new Set,l=new Set;if(document.querySelectorAll('template[id^="H:"], template[id^="E:"]').forEach(a=>{a.parentElement&&(h.add(a),l.add(a.parentElement))}),l.size===0)return;const d=new MutationObserver(a=>{const c=new Set;a.forEach(n=>{n.target instanceof Element&&(c.add(n.target),n.removedNodes.forEach(s=>{h.delete(s)}))}),c.forEach(n=>{i(n)}),h.size===0&&d.disconnect()});l.forEach(a=>{d.observe(a,{childList:!0})})};export{S as buildCreateChildrenFn,O as hydrateComponentHonoSuspense};
