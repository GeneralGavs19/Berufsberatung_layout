import { createRouter, createWebHistory, } from 'vue-router';
import MainPage from '@/components/MainPage.vue';
import SpecialtiesPage  from '@/components/SpecialtiesListPage.vue';
import UniversityListPage  from '@/components/UniversityListPage.vue';
import CollegesListPage  from '@/components/CollegesListPage.vue';
import TestPage  from '@/components/TestPage.vue';
import UserPage  from '@/components/UserPage.vue';
import MapPage  from '@/components/MapPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/Specialties', component: SpecialtiesPage },
  { path: '/Universities', component: UniversityListPage },
  { path: '/Colleges', component: CollegesListPage },
  { path: '/Test', component: TestPage },
  { path: '/User', component: UserPage },
  { path: '/Map', component: MapPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
