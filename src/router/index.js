import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import PuiltInEditor from '../components/PuiltInEditor'
import Orderform from '../components/Orderform'
import InstantSearch from '../components/InstantSearch'
import SwitchableGrid from '../components/SwitchableGrid'
import E404 from '../components/E404'

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
    },
    {
        path: '*',
        component: E404
    }
]
export const router = new VueRouter({
    routes,
    mode: 'history'
})