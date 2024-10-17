var mn=Array.isArray,Tn=Array.from,An=Object.isFrozen,gn=Object.defineProperty,et=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,kn=Object.prototype,xn=Array.prototype,Gt=Object.getPrototypeOf;function In(t){return typeof t=="function"}const Sn=()=>{};function On(t){return t()}function _t(t){for(var n=0;n<t.length;n++)t[n]()}const A=2,ct=4,R=8,vt=16,d=32,Q=64,k=128,Y=256,h=512,w=1024,N=2048,O=4096,C=8192,Vt=16384,pt=32768,Rn=65536,zt=1<<18,st=Symbol("$state"),Nn=Symbol("");function ht(t){return t===this.v}function Kt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Kt(t,this.v)}function $t(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function Cn(){throw new Error("hydration_failed")}function Dn(t){throw new Error("props_invalid_value")}function Jt(){throw new Error("state_unsafe_mutation")}function Et(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function qn(t){var r;const n=Et(t);return n.equals=dt,l!==null&&l.l!==null&&((r=l.l).s??(r.s=[])).push(n),n}function Qt(t,n){return f!==null&&X()&&f.f&A&&Jt(),t.equals(n)||(t.v=n,t.version=Ft(),yt(t,w),X()&&_!==null&&_.f&h&&!(_.f&d)&&(c!==null&&c.includes(t)?(p(_,w),z(_)):y===null?cn([t]):y.push(t))),n}function yt(t,n){var r=t.reactions;if(r!==null)for(var e=X(),s=r.length,o=0;o<s;o++){var u=r[o],a=u.f;a&w||!e&&u===_||(p(u,n),a&(h|k)&&(a&A?yt(u,N):z(u)))}}const Pn=1,bn=2,Fn=16,Mn=1,Ln=2,jn=4,Yn=8,Bn=16,Hn=4,Un=1,Gn=2,tn="[",nn="[!",rn="]",wt={},Vn=Symbol(),zn="http://www.w3.org/2000/svg";function mt(t){console.warn("hydration_mismatch")}let D=!1;function Kn(t){D=t}let E;function B(t){if(t===null)throw mt(),wt;return E=t}function en(){return B(g(E))}function $n(t){if(D){if(g(E)!==null)throw mt(),wt;E=t}}function Zn(){D&&en()}function Wn(){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===rn){if(t===0)return n;t-=1}else(r===tn||r===nn)&&(t+=1)}var e=g(n);n.remove(),n=e}}var ot,Tt,At;function Xn(){if(ot===void 0){ot=window;var t=Element.prototype,n=Node.prototype;Tt=et(n,"firstChild").get,At=et(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function gt(t=""){return document.createTextNode(t)}function $(t){return Tt.call(t)}function g(t){return At.call(t)}function Jn(t){if(!D)return $(t);var n=$(E);return n===null&&(n=E.appendChild(gt())),B(n),n}function Qn(t,n){if(!D){var r=$(t);return r instanceof Comment&&r.data===""?g(r):r}return E}function tr(t,n=!1){if(!D)return g(t);var r=g(E),e=r.nodeType;if(n&&e!==3){var s=gt();return r==null||r.before(s),B(s),s}return B(r),r}function nr(t){t.textContent=""}function kt(t){_===null&&f===null&&Wt(),f!==null&&f.f&k&&Zt(),tt&&$t()}function ut(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&Q)!==0,o=_,u={ctx:l,deps:null,nodes_start:null,nodes_end:null,f:t|w,first:null,fn:n,last:null,next:null,parent:s?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var a=I;try{at(!0),L(u),u.f|=Vt}catch(m){throw V(u),m}finally{at(a)}}else n!==null&&z(u);var i=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null;return!i&&!s&&e&&(o!==null&&ut(u,o),f!==null&&f.f&A&&ut(u,f)),u}function rr(t){const n=q(R,null,!1);return p(n,h),n.teardown=t,n}function er(t){kt();var n=_!==null&&(_.f&R)!==0&&l!==null&&!l.m;if(n){var r=l;(r.e??(r.e=[])).push(t)}else{var e=xt(t);return e}}function sr(t){return kt(),G(t)}function or(t){const n=q(Q,t,!0);return()=>{V(n)}}function xt(t){return q(ct,t,!1)}function ur(t,n){var r=l,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=G(()=>{t(),!e.ran&&(e.ran=!0,Qt(r.l.r2,!0),En(n))})}function ar(){var t=l;G(()=>{if(dn(t.l.r2)){for(var n of t.l.r1){var r=n.effect;P(r)&&L(r),n.ran=!1}t.l.r2.v=!1}})}function G(t){return q(R,t,!0)}function lr(t){return G(t)}function ir(t,n=0){return q(R|vt|n,t,!0)}function fr(t,n=!0){return q(R|d,t,!0,n)}function It(t){var n=t.teardown;if(n!==null){const r=tt,e=f;lt(!0),it(null);try{n.call(null)}finally{lt(r),it(e)}}}function V(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var o=e===s?null:g(e);e.remove(),e=o}r=!0}nt(t,n&&!r),M(t,0),p(t,C);var u=t.transitions;if(u!==null)for(const i of u)i.stop();It(t);var a=t.parent;a!==null&&t.f&d&&a.first!==null&&St(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function St(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function _r(t,n){var r=[];Ot(t,r,!0),sn(r,()=>{V(t),n&&n()})}function sn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ot(t,n,r){if(!(t.f&O)){if(t.f^=O,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var s=e.next,o=(e.f&pt)!==0||(e.f&d)!==0;Ot(e,n,o?r:!1),e=s}}}function cr(t){Rt(t,!0)}function Rt(t,n){if(t.f&O){t.f^=O,P(t)&&L(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&pt)!==0||(r.f&d)!==0;Rt(r,s?n:!1),r=e}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&o.in()}}const on=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let H=!1,U=!1,Z=[],W=[];function Nt(){H=!1;const t=Z.slice();Z=[],_t(t)}function Ct(){U=!1;const t=W.slice();W=[],_t(t)}function vr(t){H||(H=!0,queueMicrotask(Nt)),Z.push(t)}function pr(t){U||(U=!0,on(Ct)),W.push(t)}function un(){H&&Nt(),U&&Ct()}function an(t){let n=A|w;_===null&&(n|=k);const r={deps:null,deriveds:null,equals:ht,f:n,first:null,fn:t,last:null,reactions:null,v:null,version:0};if(f!==null&&f.f&A){var e=f;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function hr(t){const n=an(t);return n.equals=dt,n}function Dt(t){nt(t);var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ln(n[r])}}function qt(t){var n;Dt(t),n=Mt(t);var r=(x||t.f&k)&&t.deps!==null?N:h;p(t,r),t.equals(n)||(t.v=n,t.version=Ft())}function ln(t){Dt(t),M(t,0),p(t,C),t.first=t.last=t.deps=t.reactions=t.fn=null}function fn(t){throw new Error("lifecycle_outside_component")}const Pt=0,_n=1;let j=Pt,F=!1,I=!1,tt=!1;function at(t){I=t}function lt(t){tt=t}let T=[],S=0,f=null;function it(t){f=t}let _=null,c=null,v=0,y=null;function cn(t){y=t}let bt=0,x=!1,l=null;function Ft(){return bt++}function X(){return l!==null&&l.l===null}function P(t){var u,a;var n=t.f;if(n&w)return!0;if(n&N){var r=t.deps,e=(n&k)!==0;if(r!==null){var s;if(n&Y){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(t);t.f^=Y}for(s=0;s<r.length;s++){var o=r[s];if(P(o)&&qt(o),o.version>t.version)return!0;e&&!x&&!((a=o==null?void 0:o.reactions)!=null&&a.includes(t))&&(o.reactions??(o.reactions=[])).push(t)}}e||p(t,h)}return!1}function vn(t,n,r){throw t}function Mt(t){var m;var n=c,r=v,e=y,s=f,o=x;c=null,v=0,y=null,f=t.f&(d|Q)?null:t,x=!I&&(t.f&k)!==0;try{var u=(0,t.fn)(),a=t.deps;if(c!==null){var i;if(M(t,v),a!==null&&v>0)for(a.length=v+c.length,i=0;i<c.length;i++)a[v+i]=c[i];else t.deps=a=c;if(!x)for(i=v;i<a.length;i++)((m=a[i]).reactions??(m.reactions=[])).push(t)}else a!==null&&v<a.length&&(M(t,v),a.length=v);return u}finally{c=n,v=r,y=e,f=s,x=o}}function pn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&A&&(p(n,N),n.f&(k|Y)||(n.f^=Y),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)pn(t,r[e])}function nt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;V(r,n),r=e}}function L(t){var n=t.f;if(!(n&C)){p(t,h);var r=t.ctx,e=_,s=l;_=t,l=r;try{n&vt||nt(t),It(t);var o=Mt(t);t.teardown=typeof o=="function"?o:null,t.version=bt}catch(u){vn(u)}finally{_=e,l=s}}}function Lt(){S>1e3&&(S=0,Xt()),S++}function jt(t){var n=t.length;if(n!==0){Lt();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];if(s.first===null&&!(s.f&d))ft([s]);else{var o=[];Yt(s,o),ft(o)}}}finally{I=r}}}function ft(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(C|O))&&P(e)&&(L(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?St(e):e.fn=null))}}function hn(){if(F=!1,S>1001)return;const t=T;T=[],jt(t),F||(S=0)}function z(t){j===Pt&&(F||(F=!0,queueMicrotask(hn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&d){if(!(r&h))return;p(n,N)}}T.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,o=(s&(C|O))===0,u=(s&d)!==0,a=(s&h)!==0,i=r.first;if(o&&(!u||!a)){if(u&&p(r,h),s&R){if(!u&&P(r)&&(L(r),i=r.first),i!==null){r=i;continue}}else if(s&ct)if(u||a){if(i!==null){r=i;continue}}else e.push(r)}var m=r.next;if(m===null){let b=r.parent;for(;b!==null;){if(t===b)break t;var rt=b.next;if(rt!==null){r=rt;continue t}b=b.parent}}r=m}for(var K=0;K<e.length;K++)i=e[K],n.push(i),Yt(i,n)}function Bt(t){var n=j,r=T;try{Lt();const s=[];j=_n,T=s,F=!1,jt(r);var e=t==null?void 0:t();return un(),(T.length>0||s.length>0)&&Bt(),S=0,e}finally{j=n,T=r}}async function dr(){await Promise.resolve(),Bt()}function dn(t){var n=t.f;if(n&C)return t.v;if(f!==null){var r=f.deps;c===null&&r!==null&&r[v]===t?v++:c===null?c=[t]:c.push(t),y!==null&&_!==null&&_.f&h&&!(_.f&d)&&y.includes(t)&&(p(_,w),z(_))}if(n&A){var e=t;P(e)&&qt(e)}return t.v}function En(t){const n=f;try{return f=null,t()}finally{f=n}}const yn=~(w|N|h);function p(t,n){t.f=t.f&yn|n}function Er(t){return Ht().get(t)}function yr(t,n){return Ht().set(t,n),n}function Ht(t){return l===null&&fn(),l.c??(l.c=new Map(wn(l)||void 0))}function wn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function wr(t,n=!1,r){l={p:l,c:null,e:null,m:!1,s:t,x:null,l:null},n||(l.l={s:null,u:null,r1:[],r2:Et(!1)})}function mr(t){const n=l;if(n!==null){const e=n.e;if(e!==null){n.e=null;for(var r=0;r<e.length;r++)xt(e[r])}l=n.p,n.m=!0}return{}}function Tr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(st in t)J(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&st in r&&J(r)}}}function J(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{J(t[e],n)}catch{}const r=Gt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const o=e[s].get;if(o)try{o.call(t)}catch{}}}}}export{Ln as $,_t as A,En as B,On as C,Tr as D,pt as E,gt as F,$ as G,nn as H,mn as I,Tn as J,O as K,_ as L,Pn as M,Fn as N,bn as O,Ot as P,nr as Q,sn as R,V as S,rn as T,g as U,et as V,Dn as W,Rn as X,jn as Y,dt as Z,Mn as _,mr as a,Yn as a0,an as a1,hr as a2,Bn as a3,An as a4,st as a5,kn as a6,xn as a7,gn as a8,Vn as a9,Hn as aA,Zn as aB,Kt as aC,Gt as aa,fn as ab,Sn as ac,rr as ad,G as ae,vr as af,pr as ag,Nn as ah,zn as ai,Ut as aj,xt as ak,Bt as al,dr as am,ur as an,ar as ao,Un as ap,Gn as aq,Xn as ar,tn as as,wt as at,mt as au,Cn as av,or as aw,vt as ax,Vt as ay,In as az,ir as b,Jn as c,en as d,Wn as e,Qn as f,B as g,D as h,Kn as i,cr as j,fr as k,_r as l,E as m,yr as n,Er as o,wr as p,Qt as q,$n as r,tr as s,lr as t,dn as u,Et as v,qn as w,sr as x,er as y,l as z};
