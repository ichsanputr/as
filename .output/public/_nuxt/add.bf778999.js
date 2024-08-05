import{_ as f}from"./Loader.c509847a.js";import{u as h,c as l,a,e as o,f as r,I as p,l as s,o as n,z as b}from"./entry.43c9b4a4.js";const v={class:"grid animate-fade"},g={class:"col-12"},k={class:"card"},B=a("h3",{class:"text-2xl font-medium mb-5"},"Tambah Jabatan",-1),j={class:"grid grid-cols-1 gap-3"},x={class:"mt-3"},y={key:0,class:"capitalize"},C={data(){return{form:{job:null},loading:!1}},methods:{async addJabatan(){const{valid:i}=await this.$refs.form.validate();i&&(this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/jabatan",{method:"POST",headers:{Authorization:"Bearer "+p().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/jabatan"))}}},w=Object.assign(C,{__name:"add",setup(i){return h({title:"Tambah Jabatan"}),(t,d)=>{const c=s("v-text-field"),_=s("v-form"),m=f,u=s("v-btn");return n(),l("div",v,[a("div",g,[a("div",k,[B,o(_,{ref:"form"},{default:r(()=>[a("div",j,[a("div",x,[o(c,{rules:[e=>!!e||"Field is required"],modelValue:t.form.job,"onUpdate:modelValue":d[0]||(d[0]=e=>t.form.job=e),variant:"outlined","hide-details":"auto",label:"Jabatan"},null,8,["rules","modelValue"])])])]),_:1},512),o(u,{onClick:t.addJabatan,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:r(()=>[t.loading?(n(),b(m,{key:1})):(n(),l("span",y,"Submit"))]),_:1},8,["onClick"])])])])}}});export{w as default};
