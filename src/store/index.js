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
        ],
        articles: [
            {
                "title": "27 сайтов с задачками для оттачивания навыков программирования",
                "image": "https://media.proglib.io/posts/2020/08/24/f5ed76ab23fd4bda4f1dd01ea54a633b.webp"
            },
            {
                "title": "Готовимся к собеседованию в Google: 8 месяцев непрерывной работы",
                "image": "https://media.proglib.io/wp-uploads/2017/01/1_xiC6icpxVB09SO6d4VsgQ.jpeg"
            },
            {
                "title": "15 материалов по разработке игр",
                "image": "https://media.proglib.io/wp-uploads/2017/09/UHnWfgutZViYEdRn28X8hHU0lN7oSoUV6b7nppfR_l6KGYREVbIWRmjutIJ8I7vU976-CuSh8A75oYWN2uYu0NiOK8p927TY5k-GtK_LQBAn9DaSVF5n5CV93eWtp_YmN.png"
            },
            {
                "title": "10 лучших видеокурсов для изучения Linux",
                "image": "https://media.proglib.io/wp-uploads/2017/04/lrg-2-1.jpg"
            },
            {
                "title": "Учебный план по осваиванию современного JavaScript",
                "image": "https://media.proglib.io/wp-uploads/2016/12/19aqEe1RQXAh77hA07VZN0w.png"
            }
        ],
        query: ''
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
        },
        totalAmount(state) {
            let amount = 0
            state.services.forEach(item => {
                if(item.active) {
                    amount += item.price
                }
            })
            return amount
        },
        articles(state) {
            return state.articles.filter((item) => {
                return item.title.toLowerCase().indexOf(state.query) != -1
            })
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
        },
        searchArticles(state, payload) {
            return state.query = payload
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
        },
        searchArticles(store, payload) {
            return store.commit('searchArticles', payload)
        }
    }
})