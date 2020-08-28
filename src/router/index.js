import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import PuiltInEditor from '../components/PuiltInEditor'
import Orderform from '../components/Orderform'
import InstantSearch from '../components/InstantSearch'
import SwitchableGrid from '../components/SwitchableGrid'

const routes = [
    {
        path: '/builtInEditor',
        component: PuiltInEditor
    },
    {
        path: '/orderform',
        component: Orderform
    },
    {
        path: '/instantSearch',
        component: InstantSearch
    },
    {
        path: '/switchableGrid',
        component: SwitchableGrid
    }
]
export const router = new VueRouter({
    routes,
    mode: 'history'
})