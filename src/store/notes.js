export default {
    state: {
        title: "Notes",
        notes: [
            {
                title: "First note",
                descr: 'desc about first note',
                date: new Date(Date.now()).toLocaleString(),
                edit: false
            },
            {
                title: "Second note",
                descr: 'desc about first note',
                date: new Date(Date.now()).toLocaleString(),
                edit: false
            },
            {
                title: "Third note",
                descr: 'desc about first note',
                date: new Date(Date.now()).toLocaleString(),
                edit: false
            }
        ],
        note: {
            title: '',
            descr: '',
            priorities: [
                {alias: 'low', name: 'low'},
                {alias: 'middle', name: 'middle'},
                {alias: 'high', name: 'high'}
            ],
          }
    },
    mutations: {
        setNote(state, note){
           state.notes.push(note)
        }
    },
    actions: {
        setNote({commit}, payload) {
            commit('setNote', payload)
        }
    },
    getters: {
        getNotes(state) {
            return state.notes
        },
        getTitle(state) {
            return state.title
        },
        getNote(state) {
            return state.note
        }
    }
}