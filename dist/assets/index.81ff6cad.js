import{z as pe,a as ce,r as c,A as me,L as fe,a1 as _e,d as i,K as T,o as _,c as j,C as s,D as F,f as n,e,w as l,i as L,B as Y,m as g,j as v,k as G,x as M,M as be,N as ge,a2 as ve,s as he}from"./index.b397180e.js";import{a as ye,b as we,s as Ce,p as Ne,d as ke}from"./gen.731b1b22.js";import xe from"./importTable.aec2c334.js";const Se={class:"app-container"},Ve=pe({name:"Gen"}),Re=Object.assign(Ve,{setup($e){const I=ce(),{proxy:u}=he(),R=c([]),S=c(!0),N=c(!0),V=c([]),q=c(!0),U=c(!0),$=c(0),z=c([]),h=c([]),P=c(""),Q=me({queryParams:{pageNum:1,pageSize:10,tableName:void 0,tableComment:void 0},preview:{open:!1,title:"\u4EE3\u7801\u9884\u89C8",data:{},activeName:"domain.java"}}),{queryParams:r,preview:m}=fe(Q);_e(()=>{const o=I.query.t;o!=null&&o!=P.value&&(P.value=o,r.value.pageNum=Number(I.query.pageNum),h.value=[],u.resetForm("queryForm"),y())});function y(){S.value=!0,ye(u.addDateRange(r.value,h.value)).then(o=>{R.value=o.rows,$.value=o.total,S.value=!1})}function w(){r.value.pageNum=1,y()}function K(o){const t=o.tableName||z.value;if(t==""){u.$modal.msgError("\u8BF7\u9009\u62E9\u8981\u751F\u6210\u7684\u6570\u636E");return}o.genType==="1"?we(o.tableName).then(D=>{u.$modal.msgSuccess("\u6210\u529F\u751F\u6210\u5230\u81EA\u5B9A\u4E49\u8DEF\u5F84\uFF1A"+o.genPath)}):u.$download.zip("/tool/gen/batchGenCode?tables="+t,"ruoyi.zip")}function A(o){const t=o.tableName;u.$modal.confirm('\u786E\u8BA4\u8981\u5F3A\u5236\u540C\u6B65"'+t+'"\u8868\u7ED3\u6784\u5417\uFF1F').then(function(){return Ce(t)}).then(()=>{u.$modal.msgSuccess("\u540C\u6B65\u6210\u529F")}).catch(()=>{})}function H(){u.$refs.importRef.show()}function J(){h.value=[],u.resetForm("queryRef"),w()}function W(o){Ne(o.tableId).then(t=>{m.value.data=t.data,m.value.open=!0,m.value.activeName="domain.java"})}function X(){u.$modal.msgSuccess("\u590D\u5236\u6210\u529F")}function Z(o){V.value=o.map(t=>t.tableId),z.value=o.map(t=>t.tableName),q.value=o.length!=1,U.value=!o.length}function O(o){const t=o.tableId||V.value[0];ve.push({path:"/tool/gen-edit/index/"+t,query:{pageNum:r.value.pageNum}})}function B(o){const t=o.tableId||V.value;u.$modal.confirm('\u662F\u5426\u786E\u8BA4\u5220\u9664\u8868\u7F16\u53F7\u4E3A"'+t+'"\u7684\u6570\u636E\u9879\uFF1F').then(function(){return ke(t)}).then(()=>{y(),u.$modal.msgSuccess("\u5220\u9664\u6210\u529F")}).catch(()=>{})}return y(),(o,t)=>{const D=i("el-input"),k=i("el-form-item"),ee=i("el-date-picker"),d=i("el-button"),te=i("el-form"),x=i("el-col"),le=i("right-toolbar"),ae=i("el-row"),b=i("el-table-column"),C=i("el-tooltip"),ne=i("el-table"),oe=i("pagination"),ie=i("el-link"),re=i("el-tab-pane"),se=i("el-tabs"),ue=i("el-dialog"),f=T("hasPermi"),de=T("loading"),E=T("copyText");return _(),j("div",Se,[s(e(te,{model:n(r),ref:"queryRef",inline:!0},{default:l(()=>[e(k,{label:"\u8868\u540D\u79F0",prop:"tableName"},{default:l(()=>[e(D,{modelValue:n(r).tableName,"onUpdate:modelValue":t[0]||(t[0]=a=>n(r).tableName=a),placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u79F0",clearable:"",style:{width:"200px"},onKeyup:L(w,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(k,{label:"\u8868\u63CF\u8FF0",prop:"tableComment"},{default:l(()=>[e(D,{modelValue:n(r).tableComment,"onUpdate:modelValue":t[1]||(t[1]=a=>n(r).tableComment=a),placeholder:"\u8BF7\u8F93\u5165\u8868\u63CF\u8FF0",clearable:"",style:{width:"200px"},onKeyup:L(w,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(k,{label:"\u521B\u5EFA\u65F6\u95F4",style:{width:"308px"}},{default:l(()=>[e(ee,{modelValue:n(h),"onUpdate:modelValue":t[2]||(t[2]=a=>Y(h)?h.value=a:null),"value-format":"YYYY-MM-DD",type:"daterange","range-separator":"-","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),e(k,null,{default:l(()=>[e(d,{type:"primary",icon:"Search",onClick:w},{default:l(()=>[g("\u641C\u7D22")]),_:1}),e(d,{icon:"Refresh",onClick:J},{default:l(()=>[g("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),[[F,n(N)]]),e(ae,{gutter:10,class:"mb8"},{default:l(()=>[e(x,{span:1.5},{default:l(()=>[s((_(),v(d,{type:"primary",plain:"",icon:"Download",onClick:K},{default:l(()=>[g("\u751F\u6210")]),_:1})),[[f,["tool:gen:code"]]])]),_:1},8,["span"]),e(x,{span:1.5},{default:l(()=>[s((_(),v(d,{type:"info",plain:"",icon:"Upload",onClick:H},{default:l(()=>[g("\u5BFC\u5165")]),_:1})),[[f,["tool:gen:import"]]])]),_:1},8,["span"]),e(x,{span:1.5},{default:l(()=>[s((_(),v(d,{type:"success",plain:"",icon:"Edit",disabled:n(q),onClick:O},{default:l(()=>[g("\u4FEE\u6539")]),_:1},8,["disabled"])),[[f,["tool:gen:edit"]]])]),_:1},8,["span"]),e(x,{span:1.5},{default:l(()=>[s((_(),v(d,{type:"danger",plain:"",icon:"Delete",disabled:n(U),onClick:B},{default:l(()=>[g("\u5220\u9664")]),_:1},8,["disabled"])),[[f,["tool:gen:remove"]]])]),_:1},8,["span"]),e(le,{showSearch:n(N),"onUpdate:showSearch":t[3]||(t[3]=a=>Y(N)?N.value=a:null),onQueryTable:y},null,8,["showSearch"])]),_:1}),s((_(),v(ne,{data:n(R),onSelectionChange:Z},{default:l(()=>[e(b,{type:"selection",align:"center",width:"55"}),e(b,{label:"\u5E8F\u53F7",type:"index",width:"50",align:"center"},{default:l(a=>[G("span",null,M((n(r).pageNum-1)*n(r).pageSize+a.$index+1),1)]),_:1}),e(b,{label:"\u8868\u540D\u79F0",align:"center",prop:"tableName","show-overflow-tooltip":!0}),e(b,{label:"\u8868\u63CF\u8FF0",align:"center",prop:"tableComment","show-overflow-tooltip":!0}),e(b,{label:"\u5B9E\u4F53",align:"center",prop:"className","show-overflow-tooltip":!0}),e(b,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"160"}),e(b,{label:"\u66F4\u65B0\u65F6\u95F4",align:"center",prop:"updateTime",width:"160"}),e(b,{label:"\u64CD\u4F5C",align:"center",width:"330","class-name":"small-padding fixed-width"},{default:l(a=>[e(C,{content:"\u9884\u89C8",placement:"top"},{default:l(()=>[s(e(d,{link:"",type:"primary",icon:"View",onClick:p=>W(a.row)},null,8,["onClick"]),[[f,["tool:gen:preview"]]])]),_:2},1024),e(C,{content:"\u7F16\u8F91",placement:"top"},{default:l(()=>[s(e(d,{link:"",type:"primary",icon:"Edit",onClick:p=>O(a.row)},null,8,["onClick"]),[[f,["tool:gen:edit"]]])]),_:2},1024),e(C,{content:"\u5220\u9664",placement:"top"},{default:l(()=>[s(e(d,{link:"",type:"primary",icon:"Delete",onClick:p=>B(a.row)},null,8,["onClick"]),[[f,["tool:gen:remove"]]])]),_:2},1024),e(C,{content:"\u540C\u6B65",placement:"top"},{default:l(()=>[s(e(d,{link:"",type:"primary",icon:"Refresh",onClick:p=>A(a.row)},null,8,["onClick"]),[[f,["tool:gen:edit"]]])]),_:2},1024),e(C,{content:"\u751F\u6210\u4EE3\u7801",placement:"top"},{default:l(()=>[s(e(d,{link:"",type:"primary",icon:"Download",onClick:p=>K(a.row)},null,8,["onClick"]),[[f,["tool:gen:code"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[de,n(S)]]),s(e(oe,{total:n($),page:n(r).pageNum,"onUpdate:page":t[4]||(t[4]=a=>n(r).pageNum=a),limit:n(r).pageSize,"onUpdate:limit":t[5]||(t[5]=a=>n(r).pageSize=a),onPagination:y},null,8,["total","page","limit"]),[[F,n($)>0]]),e(ue,{title:n(m).title,modelValue:n(m).open,"onUpdate:modelValue":t[7]||(t[7]=a=>n(m).open=a),width:"80%",top:"5vh","append-to-body":"",class:"scrollbar"},{default:l(()=>[e(se,{modelValue:n(m).activeName,"onUpdate:modelValue":t[6]||(t[6]=a=>n(m).activeName=a)},{default:l(()=>[(_(!0),j(be,null,ge(n(m).data,(a,p)=>(_(),v(re,{label:p.substring(p.lastIndexOf("/")+1,p.indexOf(".vm")),name:p.substring(p.lastIndexOf("/")+1,p.indexOf(".vm")),key:a},{default:l(()=>[s((_(),v(ie,{underline:!1,icon:"DocumentCopy",style:{float:"right"}},{default:l(()=>[g("\xA0\u590D\u5236")]),_:2},1024)),[[E,a],[E,X,"callback"]]),G("pre",null,M(a),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["title","modelValue"]),e(n(xe),{ref:"importRef",onOk:w},null,512)])}}});export{Re as default};
