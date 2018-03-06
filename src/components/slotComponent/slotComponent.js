import Vue from 'vue';

Vue.component('slot-component', {
    template: require('./slotComponent.html'),
    props: {
        'text': {
            default: '123'
        }
    }
});