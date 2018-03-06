import Vue from 'vue';
import VueRouter from 'vue-router';
import 'components/components';
import 'directives/directives';
import {router} from './app.routes.js';

Vue.use(VueRouter);

const vm = window.vm = new Vue({
    router
}).$mount('#app');