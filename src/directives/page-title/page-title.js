import Vue from 'vue';

Vue.directive('page-title', {
    inserted(el, {value}) {
        document.title = value;
    }
});