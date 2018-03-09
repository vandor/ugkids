import HomePage from '../pages/home/home.vue';
import CheckInPage from '../pages/checkin/checkin.vue';
import CallbackPage from '../pages/callback/callback.vue';
import LoginPage from '../pages/login/login.vue';

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
];
