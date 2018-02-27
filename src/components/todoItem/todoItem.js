import Vue from 'vue';
import './todoItem.styl';

Vue.component('todo-item', {
    props: {
        'text': String,
        required: true
    },
    template: require('./todoItem.html'),
    data() {
        return {
            /**
             * mutableText вместо text,
             * чтобы был однонаправленный поток данных
             */
            //mutableText: this.$parent.reverse(this.text)
            mutableText: this.text,
            index: 0
        }
    },
    computed: {},
    methods: {
        reverseMsg() {
            this.mutableText = this.$parent.reverse(this.mutableText)
        },
        /**
         *
         * @param index {number}
         */
        removeTodo(index) {
            //this.$parent.todos.splice(index, 1)
            this.$parent.removeTodo(index)
        }
    }
});