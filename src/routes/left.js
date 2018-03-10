import AuthService from '../auth/AuthService'
const auth = new AuthService()
import HomeSidebar from '../pages/home/home-left.vue';
import CheckInSidebar from '../pages/checkin/checkin-left.vue';
import ClassListSidebar from '../pages/class-list/class-list-left.vue';

function routeIfAuthenticated(componentIfAuthenticated, componentIfUnauthenticated) {
  return function(routeTo, routeFrom, resolve, reject) {
    if (auth.isAuthenticated()) {
      resolve({ component: componentIfAuthenticated })
    } else {
      resolve({ component: componentIfUnauthenticated || HomeSidebar })
    }
  }
}

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
    path: '/callback',
    component: HomeSidebar,
  },
  {
    path: '/checkin',
    async: routeIfAuthenticated(CheckInSidebar),
  },
  {
    path: '/class-list',
    async: routeIfAuthenticated(ClassListSidebar),
    routes: [
      {
        path: '/elementary',
        async: routeIfAuthenticated(ClassListSidebar),
      },
      {
        path: '/jr-elementary',
        async: routeIfAuthenticated(ClassListSidebar),
      },
      {
        path: '/preschool',
        async: routeIfAuthenticated(ClassListSidebar),
      },
      {
        path: '/nursery',
        async: routeIfAuthenticated(ClassListSidebar),
      },
    ],
  },
];
