import{a1 as A,r as g,B as S,D,c as s,t as d,i as u,m as c,a as r,z as f,f as k,a2 as N,l as h,o as i,a3 as j,a4 as z,F as E,j as F}from"./entry.43c9b4a4.js";import{u as L}from"./layout.296d5a40.js";const R={key:0,class:"layout-menuitem-root-text"},T=["href","target"],W={class:"layout-menuitem-texttext-sm sm:text-base"},O={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},V={class:"layout-menuitem-texttext-sm sm:text-base"},q={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},G={class:"layout-submenu"},P={__name:"AppMenuItem",props:{item:{type:Object,default:()=>({})},index:{type:Number,default:0},root:{type:Boolean,default:!0},parentItemKey:{type:String,default:null}},setup(e){const I=A(),{layoutConfig:M,layoutState:x,setActiveMenuItem:C,onMenuToggle:K}=L(),m=e,o=g(!1),n=g(null);S(()=>{n.value=m.parentItemKey?m.parentItemKey+"-"+m.index:String(m.index);const t=x.activeMenuItem;o.value=t===n.value||t?t.startsWith(n.value+"-"):!1}),D(()=>M.activeMenuItem.value,t=>{o.value=t===n.value||t.startsWith(n.value+"-")});const b=(t,a)=>{if(a.disabled){t.preventDefault();return}const{overlayMenuActive:v,staticMenuMobileActive:y}=x;(a.to||a.url)&&(y.value||v.value)&&K(),a.command&&a.command({originalEvent:t,item:a});const l=a.items?o.value?m.parentItemKey:n:n.value;C(l)},w=t=>I.path===t.to;return(t,a)=>{const v=h("router-link"),y=h("app-menu-item",!0);return i(),s("li",{class:c(["cursor-pointer",{"layout-root-menuitem":e.root,"active-menuitem":o.value}])},[e.root&&e.item.visible!==!1?(i(),s("div",R,d(e.item.label),1)):u("",!0),(!e.item.to||e.item.items)&&e.item.visible!==!1?(i(),s("a",{key:1,href:e.item.url,onClick:a[0]||(a[0]=l=>b(l,e.item,e.index)),class:c(e.item.class),target:e.item.target,tabindex:"0"},[r("i",{class:c([e.item.icon,"text-sm sm:text-base layout-menuitem-icon"])},null,2),r("span",W,d(e.item.label),1),e.item.items?(i(),s("i",O)):u("",!0)],10,T)):u("",!0),e.item.to&&!e.item.items&&e.item.visible!==!1?(i(),f(v,{key:2,onClick:a[1]||(a[1]=l=>b(l,e.item,e.index)),class:c([e.item.class,{"active-route":w(e.item)}]),tabindex:"0",to:e.item.to},{default:k(()=>[r("i",{class:c([e.item.icon,"text-sm sm:text-base layout-menuitem-icon"])},null,2),r("span",V,d(e.item.label),1),e.item.items?(i(),s("i",q)):u("",!0)]),_:1},8,["class","to"])):u("",!0),e.item.items&&e.item.visible!==!1?(i(),f(N,{key:3,name:"layout-submenu"},{default:k(()=>[j(r("ul",G,[(i(!0),s(E,null,F(e.item.items,(l,B)=>(i(),f(y,{key:l,index:B,item:l,parentItemKey:n.value,root:!1},null,8,["index","item","parentItemKey"]))),128))],512),[[z,e.root?!0:o.value]])]),_:1})):u("",!0)],2)}}};export{P as default};