import{r as u,w as m,o as a,c as o,a as t,F as _,j as h,t as p,g as d,_ as f,l as v,e as b,p as C,q as y}from"./entry.43c9b4a4.js";import{h as g}from"./moment.1d2b5d5a.js";const w=t("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-4 text-xl sm:text-2xl font-semibold py-3"},[t("span",null,"Kategori")],-1),$={class:"flex flex-wrap"},k=["onClick"],K={__name:"NewsCategory",async setup(l){let e,n;const c=u(null);return c.value=([e,n]=m(()=>$fetch("/api/news-category?allow_empty=false")),e=await e,n(),e),(i,x)=>(a(),o(_,null,[w,t("div",$,[(a(!0),o(_,null,h(d(c),r=>(a(),o("div",{onClick:s=>i.$router.push("/berita/category/"+r.slug),class:"bg-[#0088CC] cursor-pointer font-medium text-white pa-2 mr-2 mt-2 text-sm w-fit rounded-full"},[t("span",null,p(r.name),1)],8,k))),256))])],64))}};const L=l=>(C("data-v-940c9ca4"),l=l(),y(),l),N=L(()=>t("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mt-5 mb-6 text-xl sm:text-2xl font-semibold py-3"},[t("span",null,"Berita Terbaru")],-1)),B={class:"mb-10"},I=["onClick"],S={class:"w-[140px] flex-none"},z={class:"block ml-3"},F={class:"text-[#0088CC] text-base font-medium"},V={class:"line-clamp-2"},j={class:"mt-1"},q={__name:"LatestNews",async setup(l){let e,n;const c=u(null);return c.value=([e,n]=m(()=>$fetch("/api/berita?limit=5")),e=await e,n(),e).data,(i,x)=>{const r=v("v-img");return a(),o(_,null,[N,t("div",B,[(a(!0),o(_,null,h(d(c),s=>(a(),o("div",{onClick:A=>i.$router.push("/berita/"+s.slug),class:"cursor-pointer px-0 py-3 flex"},[t("div",S,[b(r,{"lazy-src":s.thumbnail,class:"w-full",height:"80",src:s.thumbnail,alt:""},null,8,["lazy-src","src"])]),t("div",z,[t("div",F,[t("span",V,p(s.title),1)]),t("div",j,[t("span",null,p(d(g)(s.created_at).format("LL")),1)])])],8,I))),256))])],64)}}},T=f(q,[["__scopeId","data-v-940c9ca4"]]);export{K as _,T as a};
