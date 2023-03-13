<template>
    <div class="container">
          <div class="notes">
            <h1>{{title}}</h1>
                <errorMessage :errorMessage="errorMessage"/>
                <newNote
                :note="note"
                @store="addNote"
                />
                <div class="notes__preheader">
                <h2>
                    {{ titleNotes }}
                </h2>
                <searchNote :value="search" @search="search = $event"/>
                <div class="notes__views">
                    <svg :class="{ active: grid}"  @click="grid = true" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    <svg :class="{ active: !grid}" @click="grid = false" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
                </div>
                </div>
                <notesList  
                    @removeNote="removeNote"
                    :notes="notesFilter"
                    :grid="grid"
                />
        </div>
    </div>
</template>

<script>
import errorMessage from '@/components/ErrorMessage.vue'
import newNote from '@/components/NewNote.vue'
import notesList from '@/components/NotesList.vue'
import searchNote from '@/components/SearchNote.vue'

export default {
  components: {
    errorMessage, newNote, notesList, searchNote
  },
  data () {
    return {
      title: 'Notes',
      titleNotes: 'Notes list',
      placeholder: '',
      search: '',
      grid: true,
      errorMessage: null,
      num: 0,
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
        select: 'hgsdf',
         priorities: [
            {alias: 'low', name: 'low'},
            {alias: 'middle', name: 'middle'},
            {alias: 'high', name: 'high'}
        ],
      }
    }
  },
  computed: {
    notesFilter() {
      let array = this.notes
      let search = this.search

        if(!search) return array
        search = search.trim().toLowerCase()
        array = array.filter(function(item) {
          if(item.title.toLowerCase().indexOf(search) !== -1) {
            return item
          }
        })
        return array
    }
  },
  methods: {
    addNote (note) {
      let {title, descr, edit, select} = note
      console.log(title)

        if(title === "") {
            this.errorMessage = 'Title required'
            return false
        }

        this.notes.push({
             title,
             descr,
             select,
             edit,
             date: new Date(Date.now()).toLocaleString()
        })
        this.errorMessage = null
    },
    removeNote(index) {
      this.notes.splice(index, 1)
    },
    moreSize() {
      console.log(this.num)
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
  width: 100%;
}
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #A9A9A9;
  width: 100%;
}
.header {
    padding: 25px 0;
    box-shadow: 2px 2px 8px 0 #5a5858;
    width: 100%;
    background-color: #0000002b;
}
.notes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
svg {
  transition: .5s;
  margin-right: 10px;
  &.active {
    color: #e5e524;
    transition: .5s
  }
}
</style>
