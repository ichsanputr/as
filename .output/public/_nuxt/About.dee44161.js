import{c as f,_ as g}from"./RichEditor.client.34880f37.js";import{_ as C}from"./Loader.c509847a.js";import{u as b,c as l,e as i,f as o,a as e,z as r,i as k,F as v,I as B,l as _,o as s,h as u}from"./entry.43c9b4a4.js";const y=f(g),S=e("div",{class:"text-2xl font-semibold mb-2"},"Tentang Desa",-1),V={class:"grid animate-fade"},w={class:"col-12"},x={class:"card"},R=e("h3",{class:"mb-3 text-xl font-medium"},"Konten",-1),T={key:0,class:"capitalize"},E={data(){return{data:null,renderRichEditor:!1,loading:!1,toastSuccess:!1}},async mounted(){const a=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/tentang");this.data=a.tentang,this.renderRichEditor=!0},methods:{async updateContent(){this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/tentang",{method:"POST",headers:{Authorization:"Bearer "+B().token},body:{content:this.data}}),this.loading=!1,this.toastSuccess=!0},contentChange(a){this.data=a}}},U=Object.assign(E,{__name:"About",setup(a){return b({title:"Tentang Desa"}),(t,n)=>{const c=_("v-btn"),m=_("v-snackbar"),h=y,p=C;return s(),l(v,null,[i(m,{modelValue:t.toastSuccess,"onUpdate:modelValue":n[1]||(n[1]=d=>t.toastSuccess=d),color:"#10B981",timeout:2500},{actions:o(()=>[i(c,{color:"white",variant:"text",onClick:n[0]||(n[0]=d=>t.toastSuccess=!1)},{default:o(()=>[u(" Tutup ")]),_:1})]),default:o(()=>[u(" Data berhasil diperbarui! ")]),_:1},8,["modelValue"]),S,e("div",V,[e("div",w,[e("div",x,[R,t.renderRichEditor?(s(),r(h,{key:0,data:t.data,onContentChange:t.contentChange},null,8,["data","onContentChange"])):k("",!0),i(c,{onClick:t.updateContent,color:"#10B981",class:"mt-4 text-white px-3 py-2"},{default:o(()=>[t.loading?(s(),r(p,{key:1})):(s(),l("span",T,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{U as default};