import{_ as C}from"./MediaLibrary.74e44557.js";import{c as y,_ as V}from"./RichEditor.client.34880f37.js";import{_ as L}from"./Loader.c509847a.js";import{u as M,c as m,e as a,f as s,a as t,i as u,z as c,F as S,I as B,l,o as r,h,J as $}from"./entry.43c9b4a4.js";import{c as z}from"./createSlug.32ba2e5c.js";const O=y(V),T={class:"grid animate-fade"},x={class:"col-12"},I={class:"card"},U=t("h3",{class:"text-2xl font-medium mb-5"},"Tambah Kegiatan",-1),A={class:"grid grid-cols-1 gap-3"},E={class:"col-span-1"},H={class:"mt-3"},K=t("div",{class:"mb-3 text-lg font-medium my-1"},"Thumbnail",-1),N={key:0,class:"relative w-fit"},R=$('<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipSCloseOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"></path></g></mask></defs><path fill="#10B981" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)"></path></svg>',1),F=[R],j={class:"mb-6 mt-6"},P=t("div",{class:"flex items-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 20 20"},[t("path",{fill:"white",d:"M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"})]),t("div",{class:"ml-1 font-semibold"},"Media Library")],-1),q=t("div",{class:"mb-3 text-lg font-medium my-1"},"Konten",-1),J={key:0,class:"capitalize"},D={data(){return{image:null,renderRichEditor:!1,openMediaLibrary:!1,data:null,form:{title:null,description:null,content:null,thumbnail:null},loading:!1,toast:!1}},async mounted(){this.renderRichEditor=!0},methods:{async addAnnouncement(){const{valid:i}=await this.$refs.form.validate();if(i){if(!this.form.thumbnail){this.toast=!0;return}this.loading=!0,this.form.content=this.data,this.form.slug=z(this.form.title),await $fetch(this.$config.public.API_PUBLIC_URL+"/api/activities",{method:"POST",headers:{Authorization:"Bearer "+B().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/activities")}},contentChange(i){this.data=i},onImageSelected(i){this.form.thumbnail=i}}},Y=Object.assign(D,{__name:"add",setup(i){return M({title:"Tambah Kegiatan"}),(e,o)=>{const d=l("v-btn"),f=l("v-snackbar"),p=C,_=l("v-text-field"),v=l("v-textarea"),g=l("v-form"),b=l("v-img"),k=O,w=L;return r(),m(S,null,[a(f,{modelValue:e.toast,"onUpdate:modelValue":o[1]||(o[1]=n=>e.toast=n),color:"red",timeout:3e3},{actions:s(()=>[a(d,{color:"white",variant:"text",onClick:o[0]||(o[0]=n=>e.toastUnauthorized=!1)},{default:s(()=>[h(" Tutup ")]),_:1})]),default:s(()=>[h(" Thumbnail wajib diisi! ")]),_:1},8,["modelValue"]),a(p,{onOnImageSelected:e.onImageSelected,onOnCloseModal:o[2]||(o[2]=n=>e.openMediaLibrary=!1),open:e.openMediaLibrary},null,8,["onOnImageSelected","open"]),t("div",T,[t("div",x,[t("div",I,[U,a(g,{ref:"form"},{default:s(()=>[t("div",A,[t("div",E,[a(_,{rules:[n=>!!n||"Field is required"],modelValue:e.form.title,"onUpdate:modelValue":o[3]||(o[3]=n=>e.form.title=n),variant:"outlined","hide-details":"auto",label:"Judul Kegiatan"},null,8,["rules","modelValue"])]),t("div",H,[a(v,{rules:[n=>!!n||"Field is required"],rows:"3",variant:"outlined",label:"Deskripsi Kegiatan",clearable:"",modelValue:e.form.description,"onUpdate:modelValue":o[4]||(o[4]=n=>e.form.description=n)},null,8,["rules","modelValue"])])])]),_:1},512),K,e.form.thumbnail?(r(),m("div",N,[a(b,{src:e.form.thumbnail,width:"300"},null,8,["src"]),t("div",{onClick:o[5]||(o[5]=n=>e.form.thumbnail=null),class:"absolute cursor-pointer right-3 top-3 z-50"},F)])):u("",!0),t("div",j,[a(d,{onClick:o[6]||(o[6]=n=>e.openMediaLibrary=!0),color:"#10B981",class:"flex-none text-white px-3"},{default:s(()=>[P]),_:1})]),q,e.renderRichEditor?(r(),c(k,{key:1,data:e.data,onContentChange:e.contentChange},null,8,["data","onContentChange"])):u("",!0),a(d,{onClick:e.addAnnouncement,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:s(()=>[e.loading?(r(),c(w,{key:1})):(r(),m("span",J,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{Y as default};
