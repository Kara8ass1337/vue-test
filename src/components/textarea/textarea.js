import Vue from 'vue';
import {globalBus} from 'components/globalBus/globalBus';

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
        globalBus.$on('stateChanged', (state) => {
            this.text = state;
        });
    }
});