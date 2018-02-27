import Vue from 'vue';
import './justTitle.styl';

Vue.component('just-title', {
    props: {
        'seen': String,
        required: true
    },
    template: require('./justTitle.html'),
    data() {
        return {
            seenMutated: this.seen,
            seenTrue: 'Этот текст отображается, если seen = true',
            seenFalse: 'Этот текст отображается, если seen = false, null, undefined'
        }
    }
});