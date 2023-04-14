import{l as G,c as J,a as M,b as P,d as Q,e as W}from"./cache.2f2e271b.js";import{z as X,r,d as c,K as Y,o as b,c as Z,e,w as t,m as f,C as S,j as B,f as n,k,s as ee}from"./index.b397180e.js";const te={class:"app-container"},ae=k("span",{style:{"vertical-align":"middle"}},"\u7F13\u5B58\u5217\u8868",-1),le=k("span",{style:{"vertical-align":"middle"}},"\u952E\u540D\u5217\u8868",-1),ne=k("span",{style:{"vertical-align":"middle"}},"\u7F13\u5B58\u5185\u5BB9",-1),oe=X({name:"CacheList"}),re=Object.assign(oe,{setup(ce){const{proxy:u}=ee(),N=r([]),V=r([]),s=r({}),_=r(!0),g=r(!1),m=r(""),x=r(window.innerHeight-200);function K(){_.value=!0,G().then(l=>{N.value=l.data,_.value=!1})}function O(){K(),u.$modal.msgSuccess("\u5237\u65B0\u7F13\u5B58\u5217\u8868\u6210\u529F")}function F(l){J(l.cacheName).then(a=>{u.$modal.msgSuccess("\u6E05\u7406\u7F13\u5B58\u540D\u79F0["+m.value+"]\u6210\u529F"),p()})}function p(l){const a=l!==void 0?l.cacheName:m.value;a!==""&&(g.value=!0,M(a).then(y=>{V.value=y.data,g.value=!1,m.value=a}))}function U(){p(),u.$modal.msgSuccess("\u5237\u65B0\u952E\u540D\u5217\u8868\u6210\u529F")}function j(l){P(l).then(a=>{u.$modal.msgSuccess("\u6E05\u7406\u7F13\u5B58\u952E\u540D["+l+"]\u6210\u529F"),p()})}function A(l){return l.cacheName.replace(":","")}function H(l){return l.replace(m.value,"")}function L(l){Q(m.value,l).then(a=>{s.value=a.data})}function z(){W().then(l=>{u.$modal.msgSuccess("\u6E05\u7406\u5168\u90E8\u7F13\u5B58\u6210\u529F")})}return K(),(l,a)=>{const y=c("Collection"),h=c("el-button"),i=c("el-table-column"),$=c("el-table"),v=c("el-card"),d=c("el-col"),E=c("Key"),I=c("Document"),C=c("el-input"),w=c("el-form-item"),D=c("el-row"),T=c("el-form"),R=Y("loading");return b(),Z("div",te,[e(D,{gutter:10},{default:t(()=>[e(d,{span:8},{default:t(()=>[e(v,{style:{height:"calc(100vh - 125px)"}},{header:t(()=>[e(y,{style:{width:"1em",height:"1em","vertical-align":"middle"}}),f(),ae,e(h,{style:{float:"right",padding:"3px 0"},link:"",type:"primary",icon:"Refresh",onClick:a[0]||(a[0]=o=>O())})]),default:t(()=>[S((b(),B($,{data:n(N),height:n(x),"highlight-current-row":"",onRowClick:p,style:{width:"100%"}},{default:t(()=>[e(i,{label:"\u5E8F\u53F7",width:"60",type:"index"}),e(i,{label:"\u7F13\u5B58\u540D\u79F0",align:"center",prop:"cacheName","show-overflow-tooltip":!0,formatter:A}),e(i,{label:"\u5907\u6CE8",align:"center",prop:"remark","show-overflow-tooltip":!0}),e(i,{label:"\u64CD\u4F5C",width:"60",align:"center","class-name":"small-padding fixed-width"},{default:t(o=>[e(h,{link:"",type:"primary",icon:"Delete",onClick:q=>F(o.row)},null,8,["onClick"])]),_:1})]),_:1},8,["data","height"])),[[R,n(_)]])]),_:1})]),_:1}),e(d,{span:8},{default:t(()=>[e(v,{style:{height:"calc(100vh - 125px)"}},{header:t(()=>[e(E,{style:{width:"1em",height:"1em","vertical-align":"middle"}}),f(),le,e(h,{style:{float:"right",padding:"3px 0"},link:"",type:"primary",icon:"Refresh",onClick:a[1]||(a[1]=o=>U())})]),default:t(()=>[S((b(),B($,{data:n(V),height:n(x),"highlight-current-row":"",onRowClick:L,style:{width:"100%"}},{default:t(()=>[e(i,{label:"\u5E8F\u53F7",width:"60",type:"index"}),e(i,{label:"\u7F13\u5B58\u952E\u540D",align:"center","show-overflow-tooltip":!0,formatter:H}),e(i,{label:"\u64CD\u4F5C",width:"60",align:"center","class-name":"small-padding fixed-width"},{default:t(o=>[e(h,{link:"",type:"primary",icon:"Delete",onClick:q=>j(o.row)},null,8,["onClick"])]),_:1})]),_:1},8,["data","height"])),[[R,n(g)]])]),_:1})]),_:1}),e(d,{span:8},{default:t(()=>[e(v,{bordered:!1,style:{height:"calc(100vh - 125px)"}},{header:t(()=>[e(I,{style:{width:"1em",height:"1em","vertical-align":"middle"}}),f(),ne,e(h,{style:{float:"right",padding:"3px 0"},link:"",type:"primary",icon:"Refresh",onClick:a[2]||(a[2]=o=>z())},{default:t(()=>[f("\u6E05\u7406\u5168\u90E8")]),_:1})]),default:t(()=>[e(T,{model:n(s)},{default:t(()=>[e(D,{gutter:32},{default:t(()=>[e(d,{offset:1,span:22},{default:t(()=>[e(w,{label:"\u7F13\u5B58\u540D\u79F0:",prop:"cacheName"},{default:t(()=>[e(C,{modelValue:n(s).cacheName,"onUpdate:modelValue":a[3]||(a[3]=o=>n(s).cacheName=o),readOnly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{offset:1,span:22},{default:t(()=>[e(w,{label:"\u7F13\u5B58\u952E\u540D:",prop:"cacheKey"},{default:t(()=>[e(C,{modelValue:n(s).cacheKey,"onUpdate:modelValue":a[4]||(a[4]=o=>n(s).cacheKey=o),readOnly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{offset:1,span:22},{default:t(()=>[e(w,{label:"\u7F13\u5B58\u5185\u5BB9:",prop:"cacheValue"},{default:t(()=>[e(C,{modelValue:n(s).cacheValue,"onUpdate:modelValue":a[5]||(a[5]=o=>n(s).cacheValue=o),type:"textarea",rows:8,readOnly:!0},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}});export{re as default};
