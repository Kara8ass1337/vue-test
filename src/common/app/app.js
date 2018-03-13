import Vue from 'vue';
import 'components/components';
import 'directives/directives';
import {router} from './app.routes.js';
import {store} from './app.store';

const vm = window.vm = new Vue({
    router,
    store
}).$mount('#app');