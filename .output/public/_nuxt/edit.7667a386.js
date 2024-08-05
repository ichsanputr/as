import{_ as k}from"./MediaLibrary.74e44557.js";import{c as L,_ as V}from"./RichEditor.client.34880f37.js";import{_ as P}from"./Loader.c509847a.js";import{u as $,c as m,e as s,f as l,a as t,z as u,i as c,F as B,I as M,l as n,o as r,h as f}from"./entry.43c9b4a4.js";import{c as U}from"./createSlug.32ba2e5c.js";const I=L(V),S={class:"grid animate-fade"},z={class:"col-12"},D={class:"card"},O=t("h3",{class:"text-2xl font-medium mb-5"},"Ubah Potensi Desa",-1),R={class:"grid grid-cols-1 gap-3"},A={class:"col-span-1"},H={class:"mt-4"},T=t("div",{class:"mb-1 text-lg font-medium my-1"},"Thumbnail Berita",-1),q={key:0,class:"relative w-fit"},E=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 48 48"},[t("defs",null,[t("mask",{id:"ipSCloseOne0"},[t("g",{fill:"none","stroke-linejoin":"round","stroke-width":"4"},[t("path",{fill:"#fff",stroke:"#fff",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"}),t("path",{stroke:"#000","stroke-linecap":"round",d:"M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"})])])]),t("path",{fill:"#10B981",d:"M0 0h48v48H0z",mask:"url(#ipSCloseOne0)"})],-1),F=[E],x={class:"mb-6 mt-1"},N=t("div",{class:"flex items-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 20 20"},[t("path",{fill:"white",d:"M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"})]),t("div",{class:"ml-1 font-semibold"},"Media Library")],-1),j=t("div",{class:"mb-3 text-lg font-medium my-1"},"Konten",-1),K={key:0,class:"capitalize"},J={data(){return{openMediaLibrary:!1,potensiCategory:[],renderRichEditor:!1,form:{title:null,description:null,category:null,content:null,thumbnail:null},items:[],toast:!1,loading:!1}},async mounted(){await this.loadData(),await this.loadPotensiCategory(),this.renderRichEditor=!0},methods:{async loadData(){this.form=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/potensi-desa/"+this.$route.query.id)},async loadPotensiCategory(){this.potensiCategory=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/potensi-category")},async updatePotensi(){const{valid:a}=await this.$refs.form.validate();if(a){if(!this.form.thumbnail){this.toast=!0;return}this.loading=!0,this.form.slug=U(this.form.title),await $fetch(this.$config.public.API_PUBLIC_URL+"/api/potensi-desa/"+this.$route.query.id,{method:"PATCH",headers:{Authorization:"Bearer "+M().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/potensi-desa")}},contentChange(a){this.form.content=a},onImageSelected(a){this.form.thumbnail=a}}},Y=Object.assign(J,{__name:"edit",setup(a){return $({title:"Ubah Potensi Desa"}),(e,i)=>{const d=n("v-btn"),p=n("v-snackbar"),h=k,_=n("v-text-field"),v=n("v-textarea"),g=n("v-select"),b=n("v-img"),y=n("v-form"),w=I,C=P;return r(),m(B,null,[s(p,{modelValue:e.toast,"onUpdate:modelValue":i[1]||(i[1]=o=>e.toast=o),color:"red",timeout:3e3},{actions:l(()=>[s(d,{color:"white",variant:"text",onClick:i[0]||(i[0]=o=>e.toastUnauthorized=!1)},{default:l(()=>[f(" Tutup ")]),_:1})]),default:l(()=>[f(" Thumbnail wajib diisi! ")]),_:1},8,["modelValue"]),s(h,{onOnImageSelected:e.onImageSelected,onOnCloseModal:i[2]||(i[2]=o=>e.openMediaLibrary=!1),open:e.openMediaLibrary},null,8,["onOnImageSelected","open"]),t("div",S,[t("div",z,[t("div",D,[O,s(y,{ref:"form"},{default:l(()=>[t("div",R,[t("div",A,[s(_,{rules:[o=>!!o||"Field is required"],modelValue:e.form.title,"onUpdate:modelValue":i[3]||(i[3]=o=>e.form.title=o),variant:"outlined","hide-details":"auto",label:"Judul Potensi Desa"},null,8,["rules","modelValue"])]),t("div",H,[s(v,{rules:[o=>!!o||"Field is required"],rows:"3",variant:"outlined",label:"Deskripsi Potensi Desa",clearable:"",modelValue:e.form.description,"onUpdate:modelValue":i[4]||(i[4]=o=>e.form.description=o)},null,8,["rules","modelValue"])]),s(g,{rules:[o=>!!o||"Field is required"],modelValue:e.form.category,"onUpdate:modelValue":i[5]||(i[5]=o=>e.form.category=o),variant:"outlined",label:"Kategori Potensi",items:e.potensiCategory,"item-value":"uuid","item-title":"name"},null,8,["rules","modelValue","items"]),T,e.form.thumbnail?(r(),m("div",q,[s(b,{src:e.form.thumbnail,width:"300"},null,8,["src"]),t("div",{onClick:i[6]||(i[6]=o=>e.form.thumbnail=null),class:"absolute cursor-pointer right-3 top-3 z-50"},F)])):c("",!0),t("div",x,[s(d,{onClick:i[7]||(i[7]=o=>e.openMediaLibrary=!0),color:"#10B981",class:"flex-none text-white px-3"},{default:l(()=>[N]),_:1})])])]),_:1},512),j,e.renderRichEditor?(r(),u(w,{key:0,data:e.form.content,onContentChange:e.contentChange},null,8,["data","onContentChange"])):c("",!0),s(d,{onClick:e.updatePotensi,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:l(()=>[e.loading?(r(),u(C,{key:1})):(r(),m("span",K,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{Y as default};
