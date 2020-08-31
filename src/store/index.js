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
        modalShow: false,
        services: [
            {
                name: 'Веб разработка',
                price: 300,
                active:true
            },
            {
                name: 'Дизайн',
                price: 400,
                active:false
            },
            {
                name: 'Интеграция',
                price: 250,
                active:false
            },
            {
                name: 'Обучение',
                price: 220,
                active:false
            }
        ]
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
        },
        services(state) {
            return state.services
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
        },
        activeElement(state, payload) {
            return state.services[payload].active = !state.services[payload].active
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
        },
        activeElement(store, payload) {
            return store.commit('activeElement', payload)
        }
    }
})