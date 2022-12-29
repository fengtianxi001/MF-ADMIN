import{r as $,c as S,bY as _e,bZ as me,bR as ee,b_ as te,f as oe,bQ as z,h as s,bP as fe,d as C,a as x,e as m,z as L,j as V,bW as ve,u as p,bU as I,s as d,n as ge,b as ye,q as h,o as v,C as A,p as M,N as j,F,b$ as B,t as k,bT as R,k as he,M as E,v as q,c0 as be,A as se,Q as J,at as le,K as re,L as ie,c1 as xe,x as G,B as N,l as H}from"./index-b15cb7d1.js";import{b as ke,_ as Ce,a as we,M as ae}from"./index.vue_vue_type_script_setup_true_lang-6cfa4633.js";import{u as $e}from"./index-28ec1896.js";import{B as Le}from"./index-56d760ae.js";function Ve(o){const e=$(!1),t=S(()=>e.value?_e:me),r=()=>{e.value=!e.value,e.value?l():i()},i=()=>{const n=o.value;n.style.overflow="hidden";const c=n.children[0].clientHeight+"px";n.style.height=c,n.style.opacity="1"},l=()=>{const n=o.value,c=n.children[0].clientHeight+"px";n.style.height=c,setTimeout(()=>{n.style.height="0px",n.style.padding="0px",n.style.opacity="0"},0)};return{collapsed:e,icon:t,toggle:r}}function Me(o,e){const t=ee(),r=ee(),i=te({}),l=te({}),n=oe({lat:0,lng:0});let c;const a=()=>{const f=o.value;["relative","absolute","fixed"].includes(f.style.position)||(f.style.position="relative");const g=document.createElement("div");return g.className="map-container",g.style.position="relative",g.style.width="100%",g.style.height="100%",f.appendChild(g),g},u=()=>{c=a(),t.value=z.map(c,e),r.value=z.tileLayer(e.tile),r.value.addTo(t.value),_()},_=()=>{t.value.on("mousemove",f=>{const{lat:y,lng:g}=f.latlng;n.lng=g,n.lat=y})},b=f=>{const y=z.layerGroup().addTo(t.value);return l[f]={layer:y,visible:$(!0)},l[f]},w=f=>l[f]?l[f]:b(f);return{map:t,tile:r,geoList:i,groupList:l,coordPicker:n,initialize:u,addGeoJson:(f,y)=>{const g=z.geoJSON(f,{style:function(P){return P.properties&&P.properties.style}});return(y?w(y).layer:t.value).addLayer(g),g},addMarker:(f,y)=>{const{component:g,componentProps:U,coordinates:P}=f,K=s(g,U),ue=document.createElement("template");fe(K,ue);const de=K.el,pe=z.divIcon({html:de,iconSize:[40,40],iconAnchor:[20,40]}),Z=z.marker(P,{icon:pe});return(y?w(y).layer:t.value).addLayer(Z),Z},flyto:(f,y)=>{t.value&&t.value.flyTo(f,y)},fitBounds:f=>{const[y,g,U,P]=ke(f);t.value.fitBounds([[g,y],[P,U]])}}}const Pe=C({__name:"index",props:{title:null,width:null,loading:{type:Boolean}},setup(o){const e=o,t=$(),{icon:r,collapsed:i,toggle:l}=Ve(t),n=S(()=>({width:e.width||"auto"}));return(c,a)=>{const u=h("a-spin");return v(),x("div",{class:ge(["base-collapse",{collapsed:p(i)}]),style:ye(p(n)),onDblclick:a[1]||(a[1]=I(()=>{},["stop"])),onMousedown:a[2]||(a[2]=I(()=>{},["stop"])),onMouseover:a[3]||(a[3]=I(()=>{},["stop"])),onWheelPassive:a[4]||(a[4]=I(()=>{},["stop"]))},[m("div",{class:"collapse-title",onClick:a[0]||(a[0]=I((..._)=>p(l)&&p(l)(..._),["stop"]))},[m("span",null,L(o.title),1),(v(),V(ve(p(r))))]),m("div",{ref_key:"container",ref:t,class:"collapse-content"},[s(u,{loading:o.loading,tip:"信息加载中"},{default:d(()=>[A(c.$slots,"default",{},void 0,!0)]),_:3},8,["loading"])],512)],38)}}});const T=M(Pe,[["__scopeId","data-v-7c7024fa"]]),ze={class:"control-layer"},Ie=C({__name:"ControlLayer",props:{list:null},setup(o){const e=B("mapInstance"),t=(r,i)=>{const l=e.map.value;l&&(r.value?l.addLayer(i):l.removeLayer(i))};return(r,i)=>{const l=h("a-checkbox");return v(),V(T,{title:"图层管理",width:"160px"},{default:d(()=>[m("div",ze,[(v(!0),x(F,null,j(o.list,({visible:n,layer:c},a)=>(v(),x("li",{key:a},[s(l,{modelValue:n.value,"onUpdate:modelValue":u=>n.value=u,onChange:u=>t(n,c)},{default:d(()=>[k(L(a),1)]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]))),128))])]),_:1})}}});const Se=M(Ie,[["__scopeId","data-v-3245a813"]]),Be={class:"control-coord-picker"},Te=C({__name:"ControlCoordPicker",props:{data:null},setup(o){const e=B("mapInstance"),t=oe({isDev:!1,continuous:!1,single:!1,coordinates:[]}),r=S(()=>t.continuous?"continuous":t.single?"single":"none"),i=l=>{const n=l.latlng,c=n.lat.toFixed(4),a=n.lng.toFixed(4);r.value==="continuous"?(t.coordinates.push([c,a]),E.success("经纬度信息已成功复制到粘贴板")):r.value==="single"&&(t.coordinates=[c,a],E.success("经纬度信息已成功复制到粘贴板")),navigator.clipboard.writeText(JSON.stringify(t.coordinates,null,2))};return R(()=>{var n;t.continuous&&(t.single=!1),t.single&&(t.continuous=!1);const l=document.querySelector(".leaflet-grab");t.continuous||t.single?(l&&(l.style.cursor="crosshair"),e.map.value.on("click",i)):(l&&(l.style.cursor="grab"),(n=e.map.value)==null||n.off("click",i))}),(l,n)=>{const c=h("a-tag"),a=h("a-switch");return v(),V(T,{title:"地图参数",width:"160px"},{default:d(()=>[m("ul",Be,[m("li",null,[s(c,null,{default:d(()=>[k("纬度:")]),_:1}),m("span",null,L(o.data.lat.toFixed(4)),1)]),m("li",null,[s(c,null,{default:d(()=>[k("经度:")]),_:1}),m("span",null,L(o.data.lng.toFixed(4)),1)]),t.isDev?(v(),x(F,{key:0},[m("li",null,[s(c,null,{default:d(()=>[k("开启取点:")]),_:1}),s(a,{modelValue:t.single,"onUpdate:modelValue":n[0]||(n[0]=u=>t.single=u),size:"small",type:"round"},null,8,["modelValue"])]),m("li",null,[s(c,null,{default:d(()=>[k("开启连续取点:")]),_:1}),s(a,{modelValue:t.continuous,"onUpdate:modelValue":n[1]||(n[1]=u=>t.continuous=u),size:"small",type:"round"},null,8,["modelValue"])])],64)):he("",!0)])]),_:1})}}});const Ue=M(Te,[["__scopeId","data-v-96b78b91"]]),Fe={class:"board-left"},Re={class:"board-right"},qe=C({__name:"index",setup(o){const e=$(null),t=Me(e,{center:[26.3503,119.8294],zoom:13,zoomControl:!1,attributionControl:!1,tile:"https://tile.openstreetmap.org/{z}/{x}/{y}.png"});return q(()=>{t.initialize()}),be("mapInstance",t),(r,i)=>(v(),x("div",{ref_key:"container",ref:e,class:"base-map"},[m("div",Fe,[A(r.$slots,"default",{},void 0,!0)]),m("div",Re,[s(Se,{list:p(t).groupList},null,8,["list"]),s(Ue,{data:p(t).coordPicker},null,8,["data"])])],512))}});const De=M(qe,[["__scopeId","data-v-2b968a7f"]]),Ee=()=>new Promise(o=>{setTimeout(()=>o([{name:"张三",title:"主任医师",department:"肛肠科",status:1,coordinates:[26.3699,119.837]},{name:"李四",title:"副主任医师",department:"生殖内科",status:1,coordinates:[26.3562,119.8057]},{name:"王五",title:"副主任医师",department:"泌尿科",status:0,coordinates:[26.3477,119.8366]},{name:"赵六",title:"副主任医师",department:"泌尿科",status:0,coordinates:[26.3451,119.8258]},{name:"孙七",title:"副主任医师",department:"泌尿科",status:0,coordinates:[26.3485,119.8541]},{name:"周八",title:"副主任医师",department:"泌尿科",status:0,coordinates:[26.3599,119.8325]}]),1e3)}),Ae=()=>new Promise(o=>{setTimeout(()=>o([{name:"京A-00001",department:"肛肠科",status:1,coordinates:[26.3614,119.7891]},{name:"京A-00002",department:"生殖内科",status:1,coordinates:[26.3856,119.8109]},{name:"京A-00003",department:"泌尿科",status:0,coordinates:[26.3688,119.8217]},{name:"京A-00004",department:"泌尿科",status:0,coordinates:[26.3499,119.8135]},{name:"京A-00005",department:"泌尿科",status:0,coordinates:[26.3465,119.8406]},{name:"京A-00007",department:"泌尿科",status:0,coordinates:[26.3754,119.8504]}]),1e3)}),je=()=>new Promise(o=>{setTimeout(()=>o([{name:"围栏一",mode:1,status:1,buffer:5,color:"#2852f5",geojson:{type:"Feature",properties:{style:{color:"#2852f5",lineCap:"round",weight:2,lineJoin:"round"}},geometry:{type:"Polygon",coordinates:[[[119.805307,26.328422],[119.805307,26.346499],[119.827538,26.346499],[119.827538,26.328422],[119.805307,26.328422]]]}}},{name:"围栏二",mode:1,status:1,buffer:10,color:"#e59d37",geojson:{type:"Feature",properties:{style:{color:"#e59d37",lineCap:"round",weight:2,lineJoin:"round"}},geometry:{type:"Polygon",coordinates:[[[119.808741,26.354805],[119.808741,26.372801],[119.832602,26.372801],[119.832602,26.354805],[119.808741,26.354805]]]}}}]),1e3)});function Y(o){const{loading:e,openLoading:t,closeLoading:r}=$e(),i=$([]),l=$(""),n=async()=>{t();const c=await o(l.value);i.value=c,r()};return n(),{loading:e,dataSource:i,query:l,run:n}}const ce=o=>(re("data-v-f26df450"),o=o(),ie(),o),Je={class:"marker"},Ge=ce(()=>m("div",{class:"marker-dot"},null,-1)),Ne=ce(()=>m("div",{class:"marker-popup"},[m("img",{src:xe,alt:""})],-1)),He={class:"marker-descriptions"},Ye={class:"value"},Oe=C({__name:"UserMarker",props:{data:null},setup(o){const e=o,t=$(),r=()=>{};return q(()=>{t.value=[{label:"姓名",value:e.data.name},{label:"坐标",value:`${e.data.coordinates[0]}, ${e.data.coordinates[1]}`},{label:"状态",value:e.data.status===1?"在线":"离线"},{label:"时间",value:"2022-09-01 12:00:00"}]}),(i,l)=>(v(),x("div",Je,[Ge,s(p(le),{title:"员工信息",position:"right",class:"marker-label",trigger:"hover"},{content:d(()=>[m("ul",He,[(v(!0),x(F,null,j(t.value,({label:n,value:c},a)=>(v(),x("li",{key:a,class:"marker-descriptions-item"},[s(p(se),{class:"label"},{default:d(()=>[k(L(n)+":",1)]),_:2},1024),m("span",Ye,L(c),1)]))),128))]),s(p(J),{type:"primary",long:"",size:"mini",onClick:r},{default:d(()=>[k(" 查看详细信息 ")]),_:1})]),default:d(()=>[Ne]),_:1})]))}});const Qe=M(Oe,[["__scopeId","data-v-f26df450"]]);const We={},Xe={class:"board-panel"};function Ke(o,e){return v(),x("div",Xe,[A(o.$slots,"default",{},void 0,!0)])}const O=M(We,[["render",Ke],["__scopeId","data-v-cb40251e"]]),Ze=C({__name:"StaffLocation",setup(o){const e=B("mapInstance"),t=[{title:"基本信息",dataIndex:"name",width:140,render:({record:a})=>s(Le,{data:a},null)},{title:"所属单位",dataIndex:"department"},{title:"状态",dataIndex:"status",render:({record:a})=>{const u=a.status===1?"success":"normal",_=a.status===1?"在线":"离线";return s(N,{status:u,text:_},null)}}],{dataSource:r,query:i,loading:l,run:n}=Y(Ee),c=a=>e==null?void 0:e.flyto(a.coordinates,16);return R(()=>{e!=null&&e.map.value&&H.forEach(r.value,a=>{const u={component:Qe,componentProps:{data:a},coordinates:a.coordinates};e.addMarker(u,"人员定位")})}),(a,u)=>{const _=h("a-input"),b=h("a-table");return v(),V(T,{title:"项目负责人定位",width:"300px",loading:p(l)},{default:d(()=>[s(O,null,{default:d(()=>[s(_,{modelValue:p(i),"onUpdate:modelValue":u[0]||(u[0]=w=>G(i)?i.value=w:null),size:"mini",placeholder:"人员搜索",onChange:p(n)},null,8,["modelValue","onChange"]),s(b,{size:"small",columns:t,data:p(r),bordered:!1,pagination:!1,onRowClick:c},null,8,["data"])]),_:1})]),_:1},8,["loading"])}}}),et=o=>(re("data-v-a707d773"),o=o(),ie(),o),tt={class:"marker"},at=et(()=>m("div",{class:"marker-dot"},null,-1)),nt={class:"marker-popup"},ot={class:"marker-descriptions"},st={class:"value"},lt=C({__name:"CarMarker",props:{data:null},setup(o){const e=o,t=$([]),r=()=>{};return q(()=>{t.value=[{label:"车牌",value:e.data.name},{label:"坐标",value:`${e.data.coordinates[0]}, ${e.data.coordinates[1]}`},{label:"状态",value:e.data.status===1?"在线":"离线"},{label:"时间",value:"2022-09-01 12:00:00"}]}),(i,l)=>(v(),x("div",tt,[at,s(p(le),{title:"车辆信息",position:"right",class:"marker-label",trigger:"hover"},{content:d(()=>[m("ul",ot,[(v(!0),x(F,null,j(t.value,({label:n,value:c},a)=>(v(),x("li",{key:a,class:"marker-descriptions-item"},[s(p(se),{class:"label"},{default:d(()=>[k(L(n)+":",1)]),_:2},1024),m("span",st,L(c),1)]))),128))]),s(p(J),{type:"primary",style:{width:"100%","margin-top":"4px"},size:"mini",onClick:r},{default:d(()=>[k(" 查看详细信息 ")]),_:1})]),default:d(()=>[m("div",nt,[m("span",null,L(o.data.name),1)])]),_:1})]))}});const rt=M(lt,[["__scopeId","data-v-a707d773"]]),it=C({__name:"CarLocation",setup(o){const e=B("mapInstance"),t=[{title:"车牌",dataIndex:"name",width:100},{title:"所属单位",dataIndex:"department"},{title:"状态",render:({record:a})=>{const u=a.status===1?"success":"normal",_=a.status===1?"在线":"离线";return s(N,{status:u,text:_},null)}}],{dataSource:r,query:i,loading:l,run:n}=Y(Ae),c=a=>e==null?void 0:e.flyto(a.coordinates,16);return R(()=>{e!=null&&e.map.value&&H.forEach(r.value,a=>{const u={component:rt,componentProps:{data:a},coordinates:a.coordinates};e.addMarker(u,"车辆定位")})}),(a,u)=>{const _=h("a-input"),b=h("a-table");return v(),V(T,{title:"工程车辆定位",width:"300px",loading:p(l)},{default:d(()=>[s(O,null,{default:d(()=>[s(_,{modelValue:p(i),"onUpdate:modelValue":u[0]||(u[0]=w=>G(i)?i.value=w:null),size:"small",placeholder:"车牌搜索",onChange:p(n)},null,8,["modelValue","onChange"]),s(b,{size:"small",columns:t,data:p(r),bordered:!1,pagination:!1,onRowClick:c},null,8,["data"])]),_:1})]),_:1},8,["loading"])}}}),ne=C({__name:"FenceLocationEdit",props:{data:null},setup(o){const e=o,t=S(()=>[{label:"围栏名称",name:"name",component:"Input",required:!0},{label:"告警方式",name:"mode",component:"Select",required:!0,props:{options:[{label:"出围栏告警",value:0},{label:"进围栏告警",value:1}]}},{label:"缓冲时间",name:"buffer",component:"Select",required:!0,props:{options:[{label:"5秒",value:5},{label:"10秒",value:10},{label:"20秒",value:20},{label:"30秒",value:30}]}},{label:"围栏颜色",name:"color",component:"ColorPicker",required:!0},{label:"围栏区域",name:"geojson",component:"MapPicker",required:!0}]),r=$({}),i=$(),l=S(()=>e.data?"编辑围栏":"添加新围栏"),n=async()=>await i.value.validate()?!1:(await new Promise(a=>setTimeout(a,1e3)),E.success("操作成功"),!0);return q(()=>{e.data&&(r.value={...e.data})}),(c,a)=>(v(),V(we,{title:p(l),width:"500px",onBeforeConfirm:n},{default:d(()=>[s(Ce,{ref_key:"formRef",ref:i,modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=u=>r.value=u),configs:p(t),size:"small"},null,8,["modelValue","configs"])]),_:1},8,["title"]))}}),ct=C({__name:"FenceLocation",setup(o){const e=B("mapInstance"),t=[{title:"围栏名称",dataIndex:"name",width:80},{title:"告警方式",dataIndex:"department",render:({record:_})=>_.mode===0?"出围栏告警":"进围栏告警"},{title:"状态",align:"center",render:({record:_})=>{const b=_.status===1?"success":"normal",w=_.status===1?"在线":"离线";return s(N,{status:b,text:w},null)}},{title:"操作",align:"center",render:({record:_})=>s(J,{size:"mini",type:"text",onClick:b=>{b.stopPropagation(),u(_)}},{default:()=>[k("编辑")]})}],{dataSource:r,query:i,loading:l,run:n}=Y(je),c=_=>e==null?void 0:e.fitBounds(_.geojson),a=async()=>await ae(ne,{}),u=async _=>await ae(ne,{data:_});return R(()=>{e!=null&&e.map.value&&H.forEach(r.value,_=>{e==null||e.addGeoJson(_.geojson,"电子围栏")})}),(_,b)=>{const w=h("a-input"),D=h("a-col"),Q=h("a-button"),W=h("a-row"),X=h("a-table");return v(),V(T,{title:"电子围栏",width:"300px",loading:p(l)},{default:d(()=>[s(O,null,{default:d(()=>[s(W,{gutter:6},{default:d(()=>[s(D,{span:16},{default:d(()=>[s(w,{modelValue:p(i),"onUpdate:modelValue":b[0]||(b[0]=f=>G(i)?i.value=f:null),long:"",size:"mini",placeholder:"围栏名称搜索",onChange:p(n)},null,8,["modelValue","onChange"])]),_:1}),s(D,{span:8},{default:d(()=>[s(Q,{size:"mini",type:"primary",onClick:a},{default:d(()=>[k(" 添加新围栏 ")]),_:1})]),_:1})]),_:1}),s(X,{size:"small",data:p(r),columns:t,bordered:!1,pagination:!1,onRowClick:c},null,8,["data"])]),_:1})]),_:1},8,["loading"])}}}),ft=C({__name:"index",setup(o){return(e,t)=>(v(),V(De,null,{default:d(()=>[s(Ze),s(it),s(ct)]),_:1}))}});export{ft as default};
