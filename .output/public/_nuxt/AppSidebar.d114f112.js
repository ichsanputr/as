import{r as l,K as n,c as e,F as o,j as d,o as a,z as b}from"./entry.43c9b4a4.js";import u from"./AppMenuItem.e1930eb5.js";import"./layout.296d5a40.js";const m={class:"layout-menu"},p={key:1,class:"menu-separator"},k={__name:"AppSidebar",setup(c){const s=l([{label:"Menu",items:[{user:!1,label:"Profil Desa",icon:"pi pi-fw pi-user",items:[{label:"Tentang Desa",to:"/dashboard/profile/about"},{label:"Visi & Misi",to:"/dashboard/profile/visi"},{label:"Sejarah Desa",to:"/dashboard/profile/history"}]},{user:!0,label:"Informasi Publik",icon:"pi pi-fw pi-book",items:[{label:"Berita",to:"/dashboard/news"},{label:"Galeri",to:"/dashboard/gallery"},{label:"Pengumuman",to:"/dashboard/announcement"},{label:"Kegiatan",to:"/dashboard/activities"},{label:"Potensi Desa",to:"/dashboard/potensi-desa"}]},{user:!1,label:"Pemerintahan",icon:"pi pi-fw pi-sitemap",items:[{label:"Perangkat Desa",to:"/dashboard/perangkat-desa"},{label:"Jabatan",to:"/dashboard/jabatan"},{label:"Lembaga",to:"/dashboard/lembaga"},{label:"Struktur Organisasi",to:"/dashboard/struktur-organisasi"}]},{user:!1,label:"Pengaturan",icon:"pi pi-fw pi-cog",items:[{label:"Gambar Beranda",to:"/dashboard/setting/homepageimage"},{label:"Lokasi Desa",to:"/dashboard/setting/location"},{label:"Footer",to:"/dashboard/setting/footer"},{label:"Header",to:"/dashboard/setting/header"}]},{user:!1,label:"Admin",icon:"pi pi-fw pi-users",to:"/dashboard/admin"}]}]);return s.value[0].items=s.value[0].items.filter(t=>n().value.is_admin==1?t:t.user),(t,h)=>(a(),e("ul",m,[(a(!0),e(o,null,d(s.value,(r,i)=>(a(),e(o,{key:r},[r.separator?(a(),e("li",p)):(a(),b(u,{key:0,item:r,index:i},null,8,["item","index"]))],64))),128))]))}};export{k as default};
