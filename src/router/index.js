import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Kontak from '../views/page/Kontak.vue';
import Login from '../views/page/Login.vue';
import Daftar from '../views/page/Daftar.vue';
import Index2 from '../views/page/admin/Index2.vue';
import Profil from '../views/page/admin/Profil.vue';
import Lupapassword from '../views/page/Lupapassword.vue';
import Tambahlomba from '../views/page/admin/Tambahlomba.vue';
import Tambahjuri from '../views/page/admin/Tambahjuri.vue';
import Laporan from '../views/page/admin/Laporan.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/kontak', component: Kontak},
  { path: '/login', component: Login},
  { path: '/daftar', component: Daftar},
  { path: '/index2', component: Index2},
  { path: '/profil', component: Profil},
  { path: '/lupapassword', component: Lupapassword},
  { path: '/tambahlomba', component: Tambahlomba},
  { path: '/tambahjuri', component: Tambahjuri},
  { path: '/laporan', component: Laporan},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
