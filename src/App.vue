<template>
  <div  id="app">
    <h1>{{title}}</h1>
        <errorMessage :errorMessage="errorMessage"/>
        <newNote :note="note" @store="addNote"/>
        <div class="notes__header">
          <h2>{{ titleNotes }}</h2>
          <div class="notes__icons">
            <svg :class="{active: grid}" @click="grid=true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <svg :class="{active: !grid}" @click="grid=false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
          </div>
        </div>
        <notesList @removeNote="removeNote" :notes="notes" :grid="grid"/>
  </div>
</template>

<script>
import errorMessage from './components/ErrorMessage.vue'
import newNote from './components/NewNote.vue'
import notesList from './components/NotesList.vue'

export default {
  components: {
    errorMessage, newNote, notesList
  },
  data () {
    return {
      title: 'Notes',
      titleNotes: 'Notes list',
      errorMessage: null,
      grid: true,
      notes: [
          {
              title: "First note",
              descr: 'desc about first note',
              date: new Date(Date.now()).toLocaleString()
          },
          {
              title: "Second note",
              descr: 'desc about first note',
              date: new Date(Date.now()).toLocaleString()
          },
          {
              title: "Third note",
              descr: 'desc about first note',
              date: new Date(Date.now()).toLocaleString()
          }
      ],
      note: {
        title: '',
        descr: ''
      }
    }
  },
  methods: {
    addNote (note) {
      let {title, descr} = note

        if(title === "") {
            this.errorMessage = 'Title required'
            return false
        }

        this.notes.push({
             title,
             descr,
             date: new Date(Date.now()).toLocaleString()
        })
        this.errorMessage = null
    },
    removeNote(index) {
      this.notes.splice(index, 1)
    }
}
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
h4 {
  margin: 0;
}
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  position: relative;
  height: 100vh;
  background-color: #1f2029;
}
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  color: #A9A9A9;
}
ul.notes__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    &.full {
    grid-template-columns: repeat(1, 1fr);
  }
}
li.notes__item {
    padding: 15px 25px;
    background-color: #f5fbfb;
    border-radius: 10px;
    box-shadow: 4px 4px 3px 0 #5a5858;
    transition: .3s;
    &:hover {
      transform: translate(3px, 3px);
      transition: .3s;
    }
}
.notes__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: baseline;
}
.notes__delete {
  cursor: pointer;
}
.notes__title, .notes__desc {
    color: #1f2029;
}
.notes__title {
  margin-bottom: 10px;
}
.notes__desc {
  margin-bottom: 15px;
}
.new__note {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-bottom: 40px;
}
.new__desc, .new__title {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: none;
  outline: none;
  resize: none;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  transition: .3s;
  &:focus::placeholder {
    color: transparent;
    transition: .3s;
  }
}
.new__desc {
  margin-bottom: 25px;
}
button.new__btn {
    width: 50%;
    margin: auto;
    border: none;
    padding: 10px 0;
    cursor: pointer;
    border-radius: 10px;
    text-transform: uppercase;
    transition: .3s;
    background-color: #e5e524;
    &:hover {
      background-color: rgb(47, 226, 71);
      transform: translate(3px, 3px);
      transition: .3s;
    }
}
svg {
  cursor: pointer;
  margin-right: 15px;
  &.active {
    color: yellow;
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
