import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// pages
import HomePage from './pages/HomePage'
import NotesApp from './pages/NotesApp'

export default new Router({
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
        }
    ]
})