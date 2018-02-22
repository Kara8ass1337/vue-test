import Vue from 'vue';
import './justTitle.styl';

Vue.component('justTitle', {
    props: ['seen'],
    template: require('./justTitle.html'),
    data() {
        return {
            seenMutated: this.seen,
            seenTrue: 'Этот текст отображается, если seen = true',
            seenFalse: 'Этот текст отображается, если seen = false, null, undefined'
        }
    }
});