import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resolvers/:resolver/domains/:domain',
      name: 'query',
      component: () => import('../views/DnsRecordListView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  switch (to.name) {
    case 'query':
      document.title = 'DNS Checker - ' + to.params.domain.toString();
      break;
    case 'about':
      document.title = 'DNS Checker - About';
      break;
    default:
      document.title = 'DNS Checker - Home';
      break;
  }

  next();
});

export default router
