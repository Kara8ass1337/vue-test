import Vue from 'vue';
import VueRouter from 'vue-router';
import {about} from 'components/about/about';
import {index} from 'components/index/index';
import {err404} from 'components/err-404/err-404';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            // * = любой путь, в данном случае для 404 ошибки
            path: '*',
            component: err404
        },
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