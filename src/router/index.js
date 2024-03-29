import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Kontak from '../views/page/Kontak.vue';
import Login from '../views/page/Login.vue';
import Daftar from '../views/page/Daftar.vue';
import Index2 from '../views/page/admin/Index2.vue';
import Profil from '../views/page/admin/Profil.vue';
import Lupapassword from '../views/page/Lupapassword.vue';
import Lomba from '../views/page/admin/Lomba.vue';
import Partisipan from '../views/page/admin/Partisipan.vue';
import Tambahpartisipan from '../views/page/admin/partisipan/Tambahpartisipan.vue';
import Detailpartisipan from '../views/page/admin/partisipan/Detailpartisipan.vue';
import Editpartisipan from '../views/page/admin/partisipan/Editpartisipan.vue';
import Laporan from '../views/page/admin/Laporan.vue';
import Detaillaporan from '../views/page/admin/laporan/Detaillaporan.vue';
import Informasiberita from '../views/page/Informasiberita.vue';
import Berita from '../views/page/admin/Berita.vue';
import Tambahberita from '../views/page/admin/berita/Tambahberita.vue';
import Editberita from '../views/page/admin/berita/Editberita.vue';
import Detailberita from '../views/page/admin/berita/Detailberita.vue';
import Tambahlomba from '../views/page/admin/lomba/Tambahlomba.vue';
import Editlomba from '../views/page/admin/lomba/Editlomba.vue';
import Detaillomba from '../views/page/admin/lomba/Detaillomba.vue';
import Event from '../views/page/admin/Event.vue';
import Pesan from '../views/page/admin/Pesan.vue';


const routes = [
  { path: '/', component: Index },
  { path: '/kontak', component: Kontak},
  { path: '/login', component: Login},
  { path: '/daftar', component: Daftar},
  { path: '/index2', component: Index2},
  { path: '/profil', component: Profil},
  { path: '/lupapassword', component: Lupapassword},
  { path: '/lomba', component: Lomba},
  { path: '/partisipan', component: Partisipan},
  { path: '/tambahpartisipan', component: Tambahpartisipan},
  { path: '/detailpartisipan', component: Detailpartisipan},
  { path: '/editpartisipan', component: Editpartisipan},
  { path: '/laporan', component: Laporan},
  { path: '/detaillaporan', component: Detaillaporan},
  { path: '/informasiberita', component: Informasiberita},
  { path: '/berita', component: Berita},
  { path: '/tambahberita', component: Tambahberita},
  { path: '/editberita', component: Editberita},
  { path: '/detailberita', component: Detailberita},
  { path: '/tambahlomba', component: Tambahlomba},
  { path: '/editlomba', component: Editlomba},
  { path: '/detaillomba', component: Detaillomba},
  { path: '/event', component: Event},
  { path: '/pesan', component: Pesan},
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
