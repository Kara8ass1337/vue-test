import VueRouter from 'vue-router';
import {about} from 'components/about/about';
import {index} from 'components/index/index';

export const router = new VueRouter({
   routes: [
       {
           path: '/',
           component: index
       },
       {
           path: '/about',
           component: about
       }
   ]
});