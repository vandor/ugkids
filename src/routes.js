import CheckInPage from './pages/checkin.vue';
import PanelLeftPage from './pages/panel-left.vue';
import Callback from './components/Callback.vue';
import HomePage from './pages/home.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/checkin',
    component: CheckInPage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/callback',
    component: Callback,
  },
];
