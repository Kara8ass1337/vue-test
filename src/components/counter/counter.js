import Vue from 'vue';
import {mapGetters, mapState, mapMutations, mapActions} from 'vuex';
const storeModuleName = 'counter';

Vue.component('counter', {
    template: require('./counter.html'),
    computed: {
        ...mapState(storeModuleName, [
            'count' //this.count = this.$store.state.count
        ]),
        ...mapGetters(storeModuleName, [
            'label' //this.label = this.$store.getters.label
        ]),
    },
    methods: {
        ...mapMutations(storeModuleName, {
            add: 'increment' //this.add() = this.$store.commit('increment')
        }),
        ...mapActions(storeModuleName, {
            addAsync: 'incrementAsync' //this.addAsync() = this.$store.dispatch('increment')
        })
    }
});