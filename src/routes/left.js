import AuthService from '../auth/AuthService'
const auth = new AuthService()
import HomeSidebar from '../pages/home/home-left.vue';
import EmptySidebar from '../pages/empty-left.vue';
import CheckInSidebar from '../pages/checkin/checkin-left.vue';
import ClassListSidebar from '../pages/class-list/class-list-left.vue';

function routeIfAuthenticated(componentIfAuthenticated, componentIfUnauthenticated) {
  return function(routeTo, routeFrom, resolve, reject) {
    if (routeTo && routeFrom && routeTo.path === routeFrom.path) {
      reject()
    } else {
      if (auth.isAuthenticated()) {
        resolve({ component: componentIfAuthenticated })
      } else {
        resolve({ component: componentIfUnauthenticated || HomeSidebar })
      }
    }
  }
}

export default [
  {
    path: '/left',
    component: HomeSidebar,
  },
  {
    path: '/empty-left',
    component: EmptySidebar,
  },
  {
    path: '/login-left',
    component: HomeSidebar,
  },
  {
    path: '/checkin-left',
    async: routeIfAuthenticated(CheckInSidebar),
  },
  {
    path: '/class-list-left',
    async: routeIfAuthenticated(ClassListSidebar),
    routes: [
      {
        path: '/elementary-left',
        async: routeIfAuthenticated(ClassListSidebar),
      },
      {
        path: '/jr-elementary-left',
        async: routeIfAuthenticated(ClassListSidebar),
      },
      {
        path: '/preschool-left',
        async: routeIfAuthenticated(ClassListSidebar),
      },
      {
        path: '/nursery-left',
        async: routeIfAuthenticated(ClassListSidebar),
      },
    ],
  },
];
