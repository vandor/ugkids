import AuthService from '../auth/AuthService'
const auth = new AuthService()
import HomePage from '../pages/home/home.vue';
import CheckInPage from '../pages/checkin/checkin.vue';
import LoginPage from '../pages/login/login.vue';
import ClassListPage from '../pages/class-list/class-list.vue';
import ElementaryClassPage from '../pages/class-list/elementary/elementary-gallery.vue';
import JrElementaryClassPage from '../pages/class-list/jr-elementary/jr-elementary-gallery.vue';
import PreschoolClassPage from '../pages/class-list/preschool/preschool-gallery.vue';
import NurseryClassPage from '../pages/class-list/nursery/nursery-gallery.vue';

function routeIfAuthenticated(componentIfAuthenticated, componentIfUnauthenticated) {
  return function(routeTo, routeFrom, resolve, reject) {
    if (auth.isAuthenticated()) {
      resolve({ component: componentIfAuthenticated })
    } else {
      resolve({ component: componentIfUnauthenticated || HomePage })
    }
  }
}

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage,
    options: {
      animate: false,
      pushState: false,
    },
  },
  {
    path: '/checkin',
    async: routeIfAuthenticated(CheckInPage),
  },
  {
    path: '/class-list',
    async: routeIfAuthenticated(ClassListPage),
    routes: [
      {
        path: '/elementary',
        async: routeIfAuthenticated(ElementaryClassPage),
      },
      {
        path: '/jr-elementary',
        async: routeIfAuthenticated(JrElementaryClassPage),
      },
      {
        path: '/preschool',
        async: routeIfAuthenticated(PreschoolClassPage),
      },
      {
        path: '/nursery',
        async: routeIfAuthenticated(NurseryClassPage),
      },
    ],
  },
];
