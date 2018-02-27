import Vue from 'vue';
import {bus} from 'components/bus/bus';

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
            bus.$emit('stateChanged', this.stateMutable);
        }
    }
});