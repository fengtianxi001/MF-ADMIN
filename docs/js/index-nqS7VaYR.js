import{d as b,z as k,D as x,a1 as v,o as g,c as R,i as h,f as s,j as o,ae as y,ab as I,aa as e,b as M,J as B,af as w,q as D,K as q}from"./vendor-RGK81Rd9.js";import"./index-awFttPXd.js";import{A as _,e as C,_ as Y,a as $,u as E,g as S,d as T,B as V}from"./secretHierarchyEnum-jbaofLgQ.js";import{a as A}from"./useModalForm-psK_Mvxo.js";const P=b({__name:"editor",props:{mode:{},record:{}},setup(p){const l=p,{form:c,dataSource:n,loading:u,validate:f}=A(),m=[{label:"报废原因",name:"result",span:8,component:"Input",required:!0,disabled:!0},{label:"报废内容",name:"content",span:8,component:"Input",required:!0,disabled:!0},{label:"报废人",name:"appliance",span:8,component:"Input",required:!0,disabled:!0},{label:"审核人",name:"moderator",span:8,component:"Select",required:!0,disabled:!0},{label:"报废时间",name:"time",span:8,component:"DatePicker",required:!0,disabled:!0},{label:"状态",name:"status",span:8,component:"Select",required:!0,disabled:!0,props:{options:[..._]}}],i=k([]),a=[{title:"序号",dataIndex:"code",align:"center",width:80,render:({rowIndex:t})=>t+1},{title:"待报废设备编号",dataIndex:"code",align:"center"},{title:"待报废设备名称",dataIndex:"name",align:"center"},{title:"待报废设备型号",dataIndex:"model",align:"center"}];return x(()=>{v(()=>{l.mode==="edit"&&(n.value={...l.record},i.value=l.record.devices?[...l.record.devices]:[])})}),(t,d)=>(g(),R(o(Y),{width:"1000px",loading:o(u),onBeforeConfirm:t.onBeforeConfirm,footer:!1},{default:h(()=>[s(o(C),{"label-width":"70px",ref_key:"form",ref:c,modelValue:o(n),"onUpdate:modelValue":d[0]||(d[0]=r=>y(n)?n.value=r:null),configs:m,layout:"horizontal"},null,8,["modelValue"]),s(o(I),{size:"small",columns:a,data:i.value,bordered:{cell:!0},pagination:!1,scroll:{y:300}},null,8,["data"])]),_:1},8,["loading","onBeforeConfirm"]))}}),z={class:"page"},J=b({__name:"index",setup(p){const l=$(Array.from({length:20},(a,t)=>({id:e.Random.id(),result:e.Random.title(),content:e.Random.title(),appliance:e.Random.cname(),time:e.Random.date("yyyy-MM-dd"),moderator:e.Random.cname(),status:e.Random.pick([0,1,2,3,4,5,6]),devices:Array.from({length:20},(d,r)=>({id:e.Random.id(),code:`DEV-${r+1}`,name:`设备名称 ${r+1}`,model:`型号 ${r+1}`,brand:`品牌 ${r+1}`,category:e.Random.pick([0,1,2,3,4,5,6]),security:e.Random.pick([0,1,2,3]),manufacturer:`厂商 ${r+1}`,quantity:e.Random.natural(1,100),unit:e.Random.pick(["个","台"]),registeredBy:e.Random.cname(),registerDate:e.Random.date("yyyy-MM-dd"),purchaseDate:e.Random.date("yyyy-MM-dd")}))}))),{table:c,selected:n,refresh:u}=E(),f=[{label:"报废原因",name:"result",component:"Input"},{label:"报废内容",name:"content",component:"Input"},{label:"状态",name:"status",component:"Select",props:{options:[..._]}},{label:"起止时间",name:"range",component:"RangePicker",props:{placeholder:["起始时间","结束时间"],format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD"}}],m=[{title:"报废原因",dataIndex:"result",align:"left",ellipsis:!0,tooltip:!0},{title:"报废内容",dataIndex:"content",align:"left",ellipsis:!0,tooltip:!0},{title:"报废人",dataIndex:"appliance",align:"center",width:120},{title:"报废时间",dataIndex:"time",align:"center",width:160},{title:"审核人",dataIndex:"moderator",align:"center",width:120},{title:"状态",dataIndex:"status",align:"center",width:160,render:({record:a})=>{const t=S[a.status];return s(B,{status:t.status,text:t.text},null)}},{title:"操作",align:"center",width:100,render:({record:a})=>s(q,{size:10},{default:()=>[s(w,{onClick:()=>i.onDetail(a)},{default:()=>[D("详情")]})]})}],i={onDetail:async a=>{await T(P,{mode:"edit",title:"报废申请详情",record:a})&&u()}};return(a,t)=>(g(),M("div",z,[s(o(V),{selected:o(n),"onUpdate:selected":t[0]||(t[0]=d=>y(n)?n.value=d:null),ref_key:"table",ref:c,title:"报废记录列表","row-key":"result",selection:"checkbox",service:o(l),"table-filter":f,"table-columns":m},null,8,["selected","service"])]))}});export{J as default};
