import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// pages
import HomePage from './pages/HomePage.vue'
import NotesApp from './pages/NotesApp.vue'
import NotFound from './pages/NotFound.vue'
import ModalBlock from './pages/ModalBlock.vue'
import ShopPage from './pages/ShopPage.vue'
import ProductItem from './pages/ProductItem.vue'
import CrmPage from './pages/CrmPage.vue'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            name: 'home',
            component: HomePage
        },
        {
            path: '/notesapp',
            name: 'notesapp',
            component: NotesApp
        },
        {
            path: '/modals',
            name: 'modalblock',
            component: ModalBlock
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/shop',
            name: 'shop',
            component: ShopPage
        },
        {
            path: '/shop/:id',
            name: 'product',
            component: ProductItem
        },
        {
            path: '/crm',
            name: 'crm',
            component: CrmPage
        }
    ]
})