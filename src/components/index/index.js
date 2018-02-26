import Vue from 'vue';

Vue.component('index', {
    template: require('./index.html'),
    data() {
        return {
            msg: `Вы загрузили эту страницу в: ${new Date().toLocaleString()}`,
            seen: true,
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