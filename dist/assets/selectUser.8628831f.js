import{z as L,r as f,A,d as s,o as P,j as Q,w as l,k as v,e,m as _,f as n,i as N,x as E,C as F,D as O,B as G,s as H}from"./index.d3ed4b68.js";import{u as J,d as M}from"./role.71983a9c.js";const W={class:"dialog-footer"},X=L({name:"SelectUser"}),ee=Object.assign(X,{props:{roleId:{type:[Number,String]}},emits:["ok"],setup(S,{expose:k,emit:C}){const I=S,{proxy:p}=H(),{sys_normal_disable:V}=p.useDict("sys_normal_disable"),h=f([]),i=f(!1),g=f(0),y=f([]),a=A({pageNum:1,pageSize:10,roleId:void 0,userName:void 0,phonenumber:void 0});function x(){a.roleId=I.roleId,b(),i.value=!0}function U(r){p.$refs.refTable.toggleRowSelection(r)}function R(r){y.value=r.map(o=>o.userId)}function b(){J(a).then(r=>{h.value=r.rows,g.value=r.total})}function m(){a.pageNum=1,b()}function T(){p.resetForm("queryRef"),m()}function K(){const r=a.roleId,o=y.value.join(",");if(o==""){p.$modal.msgError("\u8BF7\u9009\u62E9\u8981\u5206\u914D\u7684\u7528\u6237");return}M({roleId:r,userIds:o}).then(d=>{p.$modal.msgSuccess(d.msg),d.code===200&&(i.value=!1,C("ok"))})}return k({show:x}),(r,o)=>{const d=s("el-input"),w=s("el-form-item"),c=s("el-button"),z=s("el-form"),u=s("el-table-column"),B=s("dict-tag"),D=s("el-table"),$=s("pagination"),j=s("el-row"),q=s("el-dialog");return P(),Q(q,{title:"\u9009\u62E9\u7528\u6237",modelValue:n(i),"onUpdate:modelValue":o[5]||(o[5]=t=>G(i)?i.value=t:null),width:"800px",top:"5vh","append-to-body":""},{footer:l(()=>[v("div",W,[e(c,{type:"primary",onClick:K},{default:l(()=>[_("\u786E \u5B9A")]),_:1}),e(c,{onClick:o[4]||(o[4]=t=>i.value=!1)},{default:l(()=>[_("\u53D6 \u6D88")]),_:1})])]),default:l(()=>[e(z,{model:n(a),ref:"queryRef",inline:!0},{default:l(()=>[e(w,{label:"\u7528\u6237\u540D\u79F0",prop:"userName"},{default:l(()=>[e(d,{modelValue:n(a).userName,"onUpdate:modelValue":o[0]||(o[0]=t=>n(a).userName=t),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\u79F0",clearable:"",style:{width:"200px"},onKeyup:N(m,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(w,{label:"\u624B\u673A\u53F7\u7801",prop:"phonenumber"},{default:l(()=>[e(d,{modelValue:n(a).phonenumber,"onUpdate:modelValue":o[1]||(o[1]=t=>n(a).phonenumber=t),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",clearable:"",style:{width:"200px"},onKeyup:N(m,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(w,null,{default:l(()=>[e(c,{type:"primary",icon:"Search",onClick:m},{default:l(()=>[_("\u641C\u7D22")]),_:1}),e(c,{icon:"Refresh",onClick:T},{default:l(()=>[_("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),e(j,null,{default:l(()=>[e(D,{onRowClick:U,ref:"refTable",data:n(h),onSelectionChange:R,height:"260px"},{default:l(()=>[e(u,{type:"selection",width:"55"}),e(u,{label:"\u7528\u6237\u540D\u79F0",prop:"userName","show-overflow-tooltip":!0}),e(u,{label:"\u7528\u6237\u6635\u79F0",prop:"nickName","show-overflow-tooltip":!0}),e(u,{label:"\u90AE\u7BB1",prop:"email","show-overflow-tooltip":!0}),e(u,{label:"\u624B\u673A",prop:"phonenumber","show-overflow-tooltip":!0}),e(u,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:l(t=>[e(B,{options:n(V),value:t.row.status},null,8,["options","value"])]),_:1}),e(u,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180"},{default:l(t=>[v("span",null,E(r.parseTime(t.row.createTime)),1)]),_:1})]),_:1},8,["data"]),F(e($,{total:n(g),page:n(a).pageNum,"onUpdate:page":o[2]||(o[2]=t=>n(a).pageNum=t),limit:n(a).pageSize,"onUpdate:limit":o[3]||(o[3]=t=>n(a).pageSize=t),onPagination:b},null,8,["total","page","limit"]),[[O,n(g)>0]])]),_:1})]),_:1},8,["modelValue"])}}});export{ee as default};
