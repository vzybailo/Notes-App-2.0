<template>
  <div  id="app">
    <h1>{{title}}</h1>  
        <errorMessage :errorMessage="errorMessage"/>  
        <newNote 
         :note="note"
          @store="addNote"
        />
        <h2>{{ titleNotes }}</h2>
        <notesList 
          @removeNote="removeNote"
          :notes="notes"
        />
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
    removeNote() {
      this.notes.splice(2)
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
  width: 1200px;
  margin: 0 auto;
  color: #A9A9A9;
}
ul.notes__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
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
</style>
