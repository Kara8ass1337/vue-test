/*
import './styles.styl';
import './common/app/app.js';
*/
import './components/components';
import './styles.styl';
import Vue from 'vue';

const vm = window.vm = new Vue({
    el: '#app',
    data() {
        return {
            msg: `Вы загрузили эту страницу в: ${new Date().toLocaleString()}`,
            seen: true,
            todos: [
                {text: 'Посадить дерево'},
                {text: 'Построить дом'},
                {text: 'Вырастить сына'},
            ]
        }
    },
    computed: {
        reverseMsg() {
            return this.reverse(this.msg)
        }
    },
    methods: {
        reverse(msg) {
            return msg.split('').reverse().join('');
        }
    }
});