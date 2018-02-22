import Vue from 'vue';

Vue.component('todoItem', {
    props: ['text'],
    template: require('./todoItem.html'),
    data() {
        return {
            /**
             * mutableText вместо text из-за принципа неизменяемости входных данных,
             * чтобы мы могли всегда обратиться к исходным данным
             */
            mutableText: this.$parent.reverse(this.text)
        }
    },
    computed: {},
    methods: {
        reverseMsg() {
            this.mutableText = this.$parent.reverse(this.mutableText)
        }
    }
});