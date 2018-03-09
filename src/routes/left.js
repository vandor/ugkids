import HomeSidebar from '../pages/home/home-left.vue';
import CheckInSidebar from '../pages/checkin/checkin-left.vue';

export default [
  {
    path: '/',
    component: HomeSidebar,
  },
  {
    path: '/login',
    component: HomeSidebar,
  },
  {
    path: '/checkin',
    component: CheckInSidebar,
  },
  {
    path: '/callback',
    component: HomeSidebar,
  },
];
