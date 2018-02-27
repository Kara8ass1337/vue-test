import Vue from 'vue';
import './index.styl';
import {testOnPostfix} from './testOnPostfix/testOnPostfix';
import {inputText} from './inputText/inputText';

Vue.component('index', {
    template: require('./index.html'),
    /**
     * в components определяем
     * локальные компоненты,
     * которые доступны только внутри родителя
     */
    components: {
        'test-on-postfix': testOnPostfix,
        'input-text': inputText,
    },
    data() {
        return {
            msg: `Вы загрузили эту страницу в: ${new Date().toLocaleString()}`,
            seen: true,
            text: '',
            newTodo: '',
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
        },

        addTodo() {
            this.todos.push({
                text: this.newTodo
            });

            this.newTodo = '';
        },

        removeTodo(index) {
            this.todos.splice(index, 1)
        }
    }
});