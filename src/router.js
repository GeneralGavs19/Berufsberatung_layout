import { createRouter, createWebHistory, } from 'vue-router';
import MainPage from '@/components/MainPage.vue';
import SpecialtiesPage  from '@/components/SpecialtiesListPage.vue';
import InstitutionsPage  from '@/components/InstitutionsListPage.vue';
import TestPage  from '@/components/TestPage.vue';
import UserPage  from '@/components/UserPage.vue';
import MapPage  from '@/components/MapPage.vue';





const routes = [
  { path: '/', component: MainPage },
  { path: '/Specialties', component: SpecialtiesPage },
  { path: '/Institutions', component: InstitutionsPage },
  { path: '/Test', component: TestPage },
  { path: '/User', component: UserPage },
  { path: '/Map', component: MapPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
