import{_ as k}from"./MediaLibrary.74e44557.js";import{c as w,_ as C}from"./RichEditor.client.34880f37.js";import{_ as y}from"./Loader.c509847a.js";import{u as L,c as d,e as n,a as e,f as r,F as j,I as M,l as s,o as l,z as c,i as f}from"./entry.43c9b4a4.js";import{c as V}from"./createSlug.32ba2e5c.js";const $=w(C),B={class:"grid animate-fade"},I={class:"col-12"},P={class:"card"},S=e("h3",{class:"text-2xl font-medium mb-5"},"Edit Perangkat Desa",-1),N={class:"grid grid-cols-1 gap-3"},U={class:"col-span-1"},z={class:"col-span-1 mt-3"},E={class:"mt-3"},O=e("div",{class:"mb-3 text-lg font-medium my-1"},"Visi & Misi",-1),R={key:1,class:"relative w-fit mt-4"},A=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 48 48"},[e("defs",null,[e("mask",{id:"ipSCloseOne0"},[e("g",{fill:"none","stroke-linejoin":"round","stroke-width":"4"},[e("path",{fill:"#fff",stroke:"#fff",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"}),e("path",{stroke:"#000","stroke-linecap":"round",d:"M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"})])])]),e("path",{fill:"#10B981",d:"M0 0h48v48H0z",mask:"url(#ipSCloseOne0)"})],-1),H=[A],q={class:"my-1"},F=e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 20 20"},[e("path",{fill:"white",d:"M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"})]),e("div",{class:"ml-1 font-semibold"},"Media Library")],-1),J={key:0,class:"capitalize"},x={data(){return{openMediaLibrary:!1,image:null,renderRichEditor:!1,data:null,form:{name:null,job:null,job_id:null,image:null,slug:null,nip:null,visi:null},loading:!1,jabatan:[],jabatanName:[]}},async mounted(){await this.loadJabatan();const i=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/perangkat-desa/"+this.$route.query.id);this.form=i,this.renderRichEditor=!0},methods:{async loadJabatan(){this.jabatan=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/jabatan"),this.jabatanName=this.jabatan.map(i=>i.name)},async updatePerangkat(){const{valid:i}=await this.$refs.form.validate();i&&(this.form.job_id=this.jabatan.filter(t=>t.name==this.form.job)[0].uuid,this.form.slug=V(this.form.name),this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/perangkat-desa/"+this.$route.query.id,{method:"PATCH",headers:{Authorization:"Bearer "+M().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/perangkat-desa"))},contentChange(i){this.form.visi=i},onImageSelected(i){this.form.image=i}}},Q=Object.assign(x,{__name:"edit",setup(i){return L({title:"Edit Perangkat Desa"}),(t,a)=>{const h=k,m=s("v-text-field"),p=s("v-select"),_=$,g=s("v-img"),u=s("v-btn"),v=s("v-form"),b=y;return l(),d(j,null,[n(h,{onOnImageSelected:t.onImageSelected,onOnCloseModal:a[0]||(a[0]=o=>t.openMediaLibrary=!1),open:t.openMediaLibrary},null,8,["onOnImageSelected","open"]),e("div",B,[e("div",I,[e("div",P,[S,n(v,{ref:"form"},{default:r(()=>[e("div",N,[e("div",U,[n(m,{rules:[o=>!!o||"Field is required"],modelValue:t.form.name,"onUpdate:modelValue":a[1]||(a[1]=o=>t.form.name=o),variant:"outlined","hide-details":"auto",label:"Nama"},null,8,["rules","modelValue"])]),e("div",z,[n(m,{modelValue:t.form.nip,"onUpdate:modelValue":a[2]||(a[2]=o=>t.form.nip=o),variant:"outlined","hide-details":"auto",label:"NIP (Nomor Identitas Pegawai)"},null,8,["modelValue"])]),e("div",E,[n(p,{rules:[o=>!!o||"Field is required"],modelValue:t.form.job,"onUpdate:modelValue":a[3]||(a[3]=o=>t.form.job=o),items:t.jabatanName,variant:"outlined","hide-details":"auto",label:"Jabatan"},null,8,["rules","modelValue","items"])]),O,t.renderRichEditor?(l(),c(_,{key:0,data:t.form.visi,onContentChange:t.contentChange},null,8,["data","onContentChange"])):f("",!0),t.form.image?(l(),d("div",R,[n(g,{src:t.form.image,width:"300"},null,8,["src"]),e("div",{onClick:a[4]||(a[4]=o=>t.form.image=null),class:"absolute cursor-pointer right-3 top-3 z-50"},H)])):f("",!0),e("div",q,[n(u,{onClick:a[5]||(a[5]=o=>t.openMediaLibrary=!0),color:"#10B981",class:"flex-none text-white px-3"},{default:r(()=>[F]),_:1})])])]),_:1},512),n(u,{onClick:t.updatePerangkat,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:r(()=>[t.loading?(l(),c(b,{key:1})):(l(),d("span",J,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{Q as default};
