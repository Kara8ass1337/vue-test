import Vue from 'vue';
import {bus} from 'components/bus/bus';

Vue.component('textarea-test', {
    template: require('./textarea.html'),
    data() {
        return {
            text: '123'
        }
    },
    created() {
        /**
         * @param state {bool}
         */
        bus.$on('stateChanged', (state) => {
            this.text = state;
        });
    }
});