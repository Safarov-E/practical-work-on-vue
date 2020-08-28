import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        routes: [
            {
                url: '/builtInEditor',
                text: 'Built-in editor'
            },
            {
                url: '/orderform',
                text: 'Order form'
            },
            {
                url: '/instantSearch',
                text: 'Instant search'
            },
            {
                url: '/switchableGrid',
                text: 'Switchable grid'
            }
        ]
    },
    getters: {
        routes(state) {
            return state.routes
        }
    },
    mutations: {

    },
    actions: {

    }
})