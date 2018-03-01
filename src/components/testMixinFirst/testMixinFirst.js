import Vue from 'vue';
import mixin from 'components/index/indexMixins';
import './testMixinFirst.styl';

Vue.component('test-mixin-first', {
    template: require('./testMixinFirst.html'),
    mixins: [mixin],
    data() {
        return {
            title: 'Проверка миксинов компонент первый'
        }
    }
});