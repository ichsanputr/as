import{_ as w}from"./BreadCrumb.dd0e7ea1.js";import{h as k,_ as $}from"./moment.1d2b5d5a.js";import{_ as y}from"./LatestAnnouncement.092c885a.js";import{u as L,r as c,w as P,c as r,e as i,f as T,a as e,F as V,j as B,g as o,k as A,l as z,o as d,n as D,t as p}from"./entry.43c9b4a4.js";const F={class:"animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},N={class:"grid grid-cols-1 md:grid-cols-6 md:gap-x-12"},S={class:"block col-span-1 md:col-span-4 pb-6"},j=e("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3"},[e("span",null,"Pengumuman")],-1),E=["onClick"],H={class:"block"},I={class:"text-base md:text-lg font-semibold"},M={class:"line-clamp-2"},R={class:"text-md flex items-center font-medium mt-2"},U={class:"ml-1"},q={class:"mt-3"},G={class:"text-md sm:text-base line-clamp-2 sm:line-clamp-3"},J={class:"col-span-2"},Z={__name:"index",async setup(K){let a,_;L({title:"Pengumuman"});const n=c(1),u=c(0),m=c(null),{data:g,total:f}=([a,_]=P(()=>$fetch("/api/pengumuman?limit=5&page=1")),a=await a,_(),a);m.value=g,u.value=Math.ceil(f/5);async function v(){const{data:s}=await $fetch(`/api/pengumuman?limit=5&page=${n.value}`);if(m.value=s,navigator.userAgent.includes("Chrome")){window.scrollTo({behavior:"smooth",top:0,left:0});return}windowScrollTo(window,{behavior:"smooth",top:0,left:0})}return(s,l)=>{const h=w,x=$,b=z("v-pagination"),C=y;return d(),r("div",F,[i(h,null,{root:T(()=>[e("span",{onClick:l[0]||(l[0]=t=>("navigateTo"in s?s.navigateTo:o(D))("/pengumuman"))},"Pengumuman")]),_:1}),e("div",N,[e("div",S,[j,(d(!0),r(V,null,B(o(m),t=>(d(),r("div",{onClick:O=>s.$router.push("/pengumuman/"+t.slug),class:"cursor-pointer flex mb-7"},[e("div",H,[e("div",I,[e("span",M,p(t.title),1)]),e("div",R,[i(x,{class:"flex-none"}),e("span",U,p(o(k)(t.created_at).format("LL")),1)]),e("div",q,[e("span",G,p(t.description),1)])])],8,E))),256)),i(b,{size:s.$vuetify.display.mobile?"small":"default",class:"mt-4 mb-14",modelValue:o(n),"onUpdate:modelValue":[l[1]||(l[1]=t=>A(n)?n.value=t:null),v],"total-visible":5,length:o(u)},null,8,["size","modelValue","length"])]),e("div",J,[i(C)])])])}}};export{Z as default};
