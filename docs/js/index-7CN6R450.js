import{d as v,z as k,D as I,a1 as B,o as M,c as $,i as m,f as t,j as a,K as h,L as x,q as g,ab as V,ae as R,aa as e,b as Y,af as C}from"./vendor-RGK81Rd9.js";import"./index-awFttPXd.js";import{e as T,_ as q,a as z,u as E,A,d as P,B as S}from"./secretHierarchyEnum-jbaofLgQ.js";import{_ as F}from"./index.vue_vue_type_script_setup_true_lang-n1xqOAjb.js";import{a as L}from"./useModalForm-psK_Mvxo.js";const N=v({__name:"editor",props:{mode:{},record:{}},setup(b){const r=b,d=k(),{form:i,dataSource:s,loading:f,validate:u}=L(),y=[{label:"申请原因",name:"result"},{label:"申请内容",name:"content"},{label:"申请时间",name:"time"},{label:"申请人",name:"appliance"}],n=[{label:"审核人",name:"moderator",component:"Input",span:12,required:!0},{label:"审核时间",name:"time",component:"DatePicker",span:12,required:!0},{label:"审核意见",name:"approval",component:"Textarea",span:24,required:!0}],o=k([]),p=[{title:"序号",dataIndex:"code",align:"center",width:80,render:({rowIndex:c})=>c+1},{title:"待更换设备编号",dataIndex:"code",align:"center"},{title:"待更换设备名称",dataIndex:"name",align:"center"},{title:"待更换设备型号",dataIndex:"model",align:"center"}],l=async()=>{await u()||d.value.hide()},w=async()=>{await u()||d.value.hide()};return I(()=>{B(()=>{r.mode==="edit"&&(s.value={...r.record},o.value=r.record.devices?[...r.record.devices]:[])})}),(c,_)=>(M(),$(a(q),{ref_key:"modal",ref:d,width:"1000px","ok-text":"同意","cancel-text":"驳回",loading:a(f)},{footer:m(()=>[t(a(h),null,{default:m(()=>[t(a(x),{onClick:w},{default:m(()=>[g("驳回")]),_:1}),t(a(x),{type:"primary",onClick:l},{default:m(()=>[g("同意")]),_:1})]),_:1})]),default:m(()=>[t(a(F),{size:"small",column:3,configs:y,modelValue:c.record,bordered:""},null,8,["modelValue"]),t(a(V),{style:{"margin-top":"15px"},size:"small",columns:p,data:o.value,bordered:{cell:!0},pagination:!1,scroll:{y:300}},null,8,["data"]),t(a(T),{style:{"margin-top":"20px"},"label-width":"70px",ref_key:"form",ref:i,modelValue:a(s),"onUpdate:modelValue":_[0]||(_[0]=D=>R(s)?s.value=D:null),layout:"horizontal",configs:n},null,8,["modelValue"])]),_:1},8,["loading"]))}}),U={class:"page"},J=v({__name:"index",setup(b){const r=z(Array.from({length:20},(n,o)=>({id:e.Random.id(),result:e.Random.title(),content:e.Random.title(),appliance:e.Random.cname(),time:e.Random.date("yyyy-MM-dd"),moderator:e.Random.cname(),status:e.Random.pick([0,1,2,3,4,5,6]),devices:Array.from({length:20},(p,l)=>({id:e.Random.id(),code:`DEV-${l+1}`,name:`设备名称 ${l+1}`,model:`型号 ${l+1}`,brand:`品牌 ${l+1}`,category:e.Random.pick([0,1,2,3,4,5,6]),security:e.Random.pick([0,1,2,3]),manufacturer:`厂商 ${l+1}`,quantity:e.Random.natural(1,100),unit:e.Random.pick(["个","台"]),registeredBy:e.Random.cname(),registerDate:e.Random.date("yyyy-MM-dd"),purchaseDate:e.Random.date("yyyy-MM-dd")}))}))),{table:d,selected:i,refresh:s}=E(),f=[{label:"更换原因",name:"result",component:"Input"},{label:"更换内容",name:"content",component:"Input"},{label:"状态",name:"status",component:"Select",props:{options:[...A]}},{label:"起止时间",name:"range",component:"RangePicker",props:{placeholder:["起始时间","结束时间"],format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD"}}],u=[{title:"申请原因",dataIndex:"result",align:"left",ellipsis:!0,tooltip:!0},{title:"申请内容",dataIndex:"content",align:"left",ellipsis:!0,tooltip:!0},{title:"申请类型",dataIndex:"type",align:"center",width:160},{title:"申请人",dataIndex:"appliance",align:"center",width:120},{title:"申请时间",dataIndex:"time",align:"center",width:160},{title:"操作",align:"center",width:100,render:({record:n})=>t(h,{size:10},{default:()=>[t(C,{onClick:()=>y.onDetail(n)},{default:()=>[g("办理")]})]})}],y={onDetail:async n=>{await P(N,{mode:"edit",title:"更换申请详情",record:n})&&s()}};return(n,o)=>(M(),Y("div",U,[t(a(S),{selected:a(i),"onUpdate:selected":o[0]||(o[0]=p=>R(i)?i.value=p:null),ref_key:"table",ref:d,title:"待审批列表","row-key":"result",selection:"checkbox",service:a(r),"table-filter":f,"table-columns":u},null,8,["selected","service"])]))}});export{J as default};
