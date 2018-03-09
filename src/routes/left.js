import HomeSidebar from '../pages/home/home-left.vue';
import CheckInSidebar from '../pages/checkin/checkin-left.vue';
import ClassListSidebar from '../pages/class-list/class-list-left.vue';

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
  {
    path: '/class-list',
    component: ClassListSidebar,
    routes: [
      {
        path: '/elementary',
        component: ClassListSidebar,
      },
      {
        path: '/toddlers',
        component: ClassListSidebar,
      },
      {
        path: '/preschool',
        component: ClassListSidebar,
      },
      {
        path: '/nursery',
        component: ClassListSidebar,
      },
    ],
  },
];
