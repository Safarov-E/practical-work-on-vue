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
        ],
        textValue: 'Правь меня.',
        modalShow: false
    },
    getters: {
        routes(state) {
            return state.routes
        },
        textValue(state) {
            return state.textValue
        },
        modalShow(state) {
            return state.modalShow
        }
    },
    mutations: {
        hideModalEdit(state) {
            return state.modalShow = false
        },
        showModalEdit(state) {
            return state.modalShow = !state.modalShow
        },
        textModalEdit(state, payload) {
            return state.textValue =  payload
        }
    },
    actions: {
        hideModalEdit(store) {
            return store.commit('hideModalEdit')
        },
        showModalEdit(store) {
            return store.commit('showModalEdit')
        },
        textModalEdit(store, payload) {
            return store.commit('textModalEdit', payload)
        }
    }
})