import HomePage from '../pages/home/home.vue';
import CheckInPage from '../pages/checkin/checkin.vue';
import CallbackPage from '../pages/callback/callback.vue';
import LoginPage from '../pages/login/login.vue';
import ClassListPage from '../pages/class-list/class-list.vue';
import ElementaryClassPage from '../pages/class-list/elementary/elementary-gallery.vue';
import ToddlersClassPage from '../pages/class-list/toddlers/toddlers-gallery.vue';
import PreschoolClassPage from '../pages/class-list/preschool/preschool-gallery.vue';
import NurseryClassPage from '../pages/class-list/nursery/nursery-gallery.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/checkin',
    component: CheckInPage,
  },
  {
    path: '/callback',
    component: CallbackPage,
  },
  {
    path: '/class-list',
    component: ClassListPage,
    routes: [
      {
        path: '/elementary',
        component: ElementaryClassPage,
      },
      {
        path: '/toddlers',
        component: ToddlersClassPage,
      },
      {
        path: '/preschool',
        component: PreschoolClassPage,
      },
      {
        path: '/nursery',
        component: NurseryClassPage,
      },
    ],
  },
];
