<template>
  <div  id="app">
    <input @click="changeMode" type="checkbox">
    <h1>{{title}}</h1>
        <div v-if="errorMessage" class="error">{{errorMessage}}</div>
        <div class="new__note">
            <input v-model="note.title" type="text" class="new__title">
            <input v-model="note.description" type="desc" class="new__desc">
            <button @click="addNote" class="new__btn">add note</button>
        </div>
        <ul>
            <li v-for="(note, index) in notes" :key="index">
                <h4>{{note.title}}</h4>
                <div>{{note.description}}</div>
                <div>{{note.date}}</div>
            </li>
        </ul>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  data () {
    return {
      title: 'Notes',
      errorMessage: null,
      notes: [
          {
              title: "First note",
              description: 'desc about first note',
              date: new Date(Date.now()).toLocaleString()
          },
          {
              title: "Second note",
              description: 'desc about first note',
              date: new Date(Date.now()).toLocaleString()
          },
          {
              title: "Third note",
              description: 'desc about first note',
              date: new Date(Date.now()).toLocaleString()
          }
      ],
      note: {
          title: '',
          description: ''
      }
    }
  },
  methods: {
    addNote () {
        let {title, description} = this.note

        if(title === "") {
            this.errorMessage = 'need title'
            return false                                        
        }

        this.notes.push({
            title, 
            description,
            date: new Date(Date.now()).toLocaleString()
        })
        this.note.title = ""
        this.note.description = ""
        this.errorMessage = null
    },
    changeMode () {
      
    }
}
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  color: #A9A9A9;
}
</style>
