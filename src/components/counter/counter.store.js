export default {
    namespaced: true,
    state: {
        count: 0,
        label: 'Click me'
    },
    mutations: {
        increment(state, n = 1) {
            state.count += n;
        }
    },
    getters: {
        label(state, getters) {
            return state.label.split('').reverse().join('');
        }
    },
    actions: {
        async incrementAsync(context, n) {
            await context.dispatch('actionTimeout');

            context.commit('increment', n);
        },
        actionTimeout() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
            })
        }
    }
}