import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// pages
import HomePage from './pages/HomePage'
import NotesApp from './pages/NotesApp'
import NotFound from './pages/NotFound'
import ModalBlock from './pages/ModalBlock'

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
        }
    ]
})