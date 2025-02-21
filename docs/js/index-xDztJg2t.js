import{d as b,z as _,D as k,a1 as v,o as g,c as I,i as R,f as d,j as o,ae as y,ab as h,aa as e,b as M,J as B,af as D,q as w,K as C}from"./vendor-RGK81Rd9.js";import"./index-awFttPXd.js";import{A as x,e as q,_ as Y,a as $,u as E,g as S,d as T,B as V}from"./secretHierarchyEnum-jbaofLgQ.js";import{a as A}from"./useModalForm-psK_Mvxo.js";import{D as P}from"./deviceCategoryEnum-upQNdLAM.js";const z=b({__name:"editor",props:{mode:{},record:{}},setup(p){const l=p,{form:c,dataSource:n,loading:u,validate:f}=A(),m=[{label:"申领原因",name:"result",span:8,component:"Input",required:!0,disabled:!0},{label:"申领内容",name:"content",span:8,component:"Input",required:!0,disabled:!0},{label:"申领人",name:"appliance",span:8,component:"Input",required:!0,disabled:!0},{label:"审核人",name:"moderator",span:8,component:"Select",required:!0,disabled:!0},{label:"申领时间",name:"time",span:8,component:"DatePicker",required:!0,disabled:!0},{label:"状态",name:"status",span:8,component:"Select",required:!0,disabled:!0,props:{options:[...x]}}],i=_([]),a=[{title:"序号",dataIndex:"code",align:"center",width:80,render:({rowIndex:t})=>t+1},{title:"设备编号",dataIndex:"code",align:"center"},{title:"设备名称",dataIndex:"name",align:"center"},{title:"设备型号",dataIndex:"model",align:"center"},{title:"设备品牌",dataIndex:"brand",align:"center"},{title:"设备类别",dataIndex:"category",align:"center",render:({record:t})=>P[t.category]}];return k(()=>{v(()=>{l.mode==="edit"&&(n.value={...l.record},i.value=l.record.devices?[...l.record.devices]:[])})}),(t,s)=>(g(),I(o(Y),{width:"1000px",loading:o(u),onBeforeConfirm:t.onBeforeConfirm,footer:!1},{default:R(()=>[d(o(q),{"label-width":"70px",ref_key:"form",ref:c,modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=r=>y(n)?n.value=r:null),configs:m,layout:"horizontal"},null,8,["modelValue"]),d(o(h),{size:"small",columns:a,data:i.value,bordered:{cell:!0},pagination:!1,scroll:{y:300}},null,8,["data"])]),_:1},8,["loading","onBeforeConfirm"]))}}),F={class:"page"},L=b({__name:"index",setup(p){const l=$(Array.from({length:20},(a,t)=>({id:e.Random.id(),result:e.Random.title(),content:e.Random.title(),appliance:e.Random.cname(),time:e.Random.date("yyyy-MM-dd"),moderator:e.Random.cname(),status:e.Random.pick([0,1,2,3,4,5,6]),devices:Array.from({length:20},(s,r)=>({id:e.Random.id(),code:`DEV-${r+1}`,name:`设备名称 ${r+1}`,model:`型号 ${r+1}`,brand:`品牌 ${r+1}`,category:e.Random.pick([0,1,2,3,4,5,6]),security:e.Random.pick([0,1,2,3]),manufacturer:`厂商 ${r+1}`,quantity:e.Random.natural(1,100),unit:e.Random.pick(["个","台"]),registeredBy:e.Random.cname(),registerDate:e.Random.date("yyyy-MM-dd"),purchaseDate:e.Random.date("yyyy-MM-dd")}))}))),{table:c,selected:n,refresh:u}=E(),f=[{label:"申领原因",name:"result",component:"Input"},{label:"申领内容",name:"content",component:"Input"},{label:"申领状态",name:"status",component:"Select",props:{options:[...x]}},{label:"起止时间",name:"range",component:"RangePicker",props:{placeholder:["起始时间","结束时间"],format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD"}}],m=[{title:"申领原因",dataIndex:"result",align:"left",ellipsis:!0,tooltip:!0},{title:"申领内容",dataIndex:"content",align:"left",ellipsis:!0,tooltip:!0},{title:"申领人",dataIndex:"appliance",align:"center",width:120},{title:"申领时间",dataIndex:"time",align:"center",width:160},{title:"审核人",dataIndex:"moderator",align:"center",width:120},{title:"状态",dataIndex:"status",align:"center",width:160,render:({record:a})=>{const t=S[a.status];return d(B,{status:t.status,text:t.text},null)}},{title:"操作",align:"center",width:100,render:({record:a})=>d(C,{size:10},{default:()=>[d(D,{onClick:()=>i.onDetail(a)},{default:()=>[w("详情")]})]})}],i={onDetail:async a=>{await T(z,{mode:"edit",title:"申领详情",record:a})&&u()}};return(a,t)=>(g(),M("div",F,[d(o(V),{selected:o(n),"onUpdate:selected":t[0]||(t[0]=s=>y(n)?n.value=s:null),ref_key:"table",ref:c,title:"申领记录列表","row-key":"result",selection:"checkbox",service:o(l),"table-filter":f,"table-columns":m},null,8,["selected","service"])]))}});export{L as default};
