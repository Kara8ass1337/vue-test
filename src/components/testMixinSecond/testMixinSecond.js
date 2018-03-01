import Vue from 'vue';
import mixin from 'components/index/indexMixins';
import './testMixinSecond.styl';

Vue.component('test-mixin-second', {
    template: require('./testMixinSecond.html'),
    mixins: [mixin],
    data() {
        return {
            title: 'Проверка миксинов компонент второй',
            desc: 'У него и описание есть, типа немного от первого отличается'
        }
    }
});