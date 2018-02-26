import Vue from 'vue';

Vue.component('index', {
    template: require('./index.html'),
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
        },

        addTodo() {
            this.todos.push({
                text: 'Ещё одна todo'
            })
        }
    }
});