import{e as H,a as b,t as w,s as p}from"../chunks/disclose-version.CqonUCmH.js";import{f as S,c as s,s as e,t as _,r as t,q as x,u as r,w as T}from"../chunks/runtime.DKKVhXn3.js";import{e as W,i as j}from"../chunks/each.3PVFfs69.js";import{r as z}from"../chunks/attributes.DPF-LA93.js";import{b as B}from"../chunks/input.UVfDDOax.js";import{p as y}from"../chunks/props.D_WEFfWJ.js";var D=w('<div class="mb-2"><strong> </strong> <span> </span></div>'),E=w('<h1 class="mb-4 text-2xl font-bold"> </h1> <div class="chat-history mb-4"></div> <div class="send-message flex"><input type="text" placeholder="Type a message" class="flex-1 rounded-lg border border-gray-300 p-2"> <button class="ml-2 rounded-lg bg-blue-500 p-2 text-white">Send</button></div>',1);function O(I,v){let k=y(v,"chatId",8),o=y(v,"messages",28,()=>[{sender:"Alice",content:"Hey, how are you?"},{sender:"You",content:"I’m good, thanks!"},{sender:"Alice",content:"What’s up?"}]),a=T("");function A(){r(a).trim()&&(o([...o(),{sender:"You",content:r(a)}]),x(a,""))}var u=E(),n=S(u),M=s(n);t(n);var i=e(e(n));W(i,5,o,j,(l,g)=>{var c=D(),m=s(c),q=s(m);t(m);var h=e(e(m)),C=s(h);t(h),t(c),_(()=>{p(q,`${r(g).sender??""}:`),p(C,r(g).content)}),b(l,c)}),t(i);var f=e(e(i)),d=s(f);z(d);var Y=e(e(d));t(f),_(()=>p(M,`Chat ${k()??""}`)),B(d,()=>r(a),l=>x(a,l)),H("click",Y,A),b(I,u)}export{O as component};
