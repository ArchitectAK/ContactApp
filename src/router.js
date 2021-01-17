import Vue from 'vue'
import Router from 'vue-router';

import WelcomePage from './views/WelcomePage.vue';
import PageOne from './views/PageOne.vue';
import ContactDetail from './components/ContactDetail.vue';

Vue.use(Router);

export default new Router ({
  mode: 'history',
  base: '/router-demo/',
  routes : [
    {
    path: '/',
    component: WelcomePage ,
  },
  {
    path: '/ContactsPage',
    component : PageOne, 
    props: true,
    },
  { 
    path: '/ContactsPage/:id',
    component: ContactDetail ,
    props: true,
},
  ]
})