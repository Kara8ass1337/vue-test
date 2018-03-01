import Vue from 'vue';
import {globalBus} from 'components/globalBus/globalBus';

Vue.component('checkbox', {
    props: {
        'state': Boolean,
        default: true
    },
    data() {
        return {
            stateMutable: this.state
        }
    },
    template: require('./checkbox.html'),
    methods: {
        changeEmit() {
            globalBus.$emit('stateChanged', this.stateMutable);
        }
    }
});