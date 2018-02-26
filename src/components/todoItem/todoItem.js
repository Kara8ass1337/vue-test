import Vue from 'vue';
import './todoItem.styl';

Vue.component('todoItem', {
    props: ['text'],
    template: require('./todoItem.html'),
    data() {
        return {
            /**
             * mutableText вместо text из-за принципа неизменяемости входных данных,
             * чтобы мы могли всегда обратиться к исходным данным
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