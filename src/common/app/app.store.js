import Vue from 'vue';
import Vuex from 'vuex';
import counter from 'components/counter/counter.store';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        counter //counter: counter, counter = namespace for this store module
    }
});