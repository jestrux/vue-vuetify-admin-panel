import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'
import routes from './routes'

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

let nextPath = '/home';
let authUser;
router.beforeEach(async (to, from, next) => {
  if(to.name === 'login')
    return next();

  authUser = store.state.authUser;
  if(!authUser){
    // redirect to this path after login
    nextPath = to.path;

    store.subscribe((mutation, state) => {
      if(mutation.type === 'SET_AUTH_USER'){
        if(state.authUser)
          router.replace(nextPath);
        else
          router.replace('/login')
      }
    });

    return next('/login');
  }

  next();
});

export default router;
