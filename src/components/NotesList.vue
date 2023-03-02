<template>
    <ul :class="{full: !grid}" class="notes__list">
        <li v-for="(note, index) in notes" :key="index" class="notes__item">
            <div class="notes__header">
                <div class="notes__title">
                    <h4 @click="editTitle(note, index)" v-if="!note.edit" class="notes__name">{{note.title}}</h4>
                    <input 
                        class="edit__input" 
                        type="text" 
                        v-if="note.edit"
                        v-model="note.title" 
                        v-on:keyup.enter="saveTitle(note)"
                        v-on:keyup.esc="cancelSave(note)"
                    >
                    <svg class="notes__edit" height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 32 32" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28.535,3.464c0,0 0,0 0,0c-0.938,-0.937 -2.209,-1.464 -3.535,-1.464c-1.327,0 -2.598,0.527 -3.536,1.464c-5.227,5.227 -15.871,15.871 -15.871,15.871c-0.119,0.119 -0.206,0.266 -0.253,0.428l-2.3,7.899c-0.102,0.349 -0.006,0.725 0.25,0.984c0.256,0.258 0.631,0.357 0.981,0.258l7.957,-2.242c0.165,-0.047 0.315,-0.135 0.436,-0.256c0,0 10.644,-10.644 15.871,-15.87c0.938,-0.938 1.465,-2.21 1.465,-3.536c-0,-1.326 -0.527,-2.598 -1.465,-3.536Zm-8.864,4.622l4.243,4.242l-12.479,12.479c-0,0.001 -5.971,1.683 -5.971,1.683c0,-0 1.725,-5.922 1.725,-5.922l12.482,-12.482Zm5.657,2.828l-4.242,-4.243l1.792,-1.792c0.563,-0.563 1.326,-0.879 2.122,-0.879c0.795,-0 1.558,0.316 2.121,0.879c0.562,0.562 0.879,1.325 0.879,2.121c-0,0.796 -0.317,1.559 -0.879,2.121l-1.793,1.793Z"/></svg>
                </div>
                <div @click="removeNote(index)" class="notes__delete">x</div>
            </div>
            <div class="notes__desc">{{note.descr}}</div>
            <div class="notes__date">{{note.date}}</div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
      notes: {
        type: Array,
        required: true
      },
      grid: {
        type: Boolean,
        required: true
      }
    },
    data() {
        return {
            cachedTitle: '',
        }
    },
    methods: {
        removeNote(index) {
            this.$emit('removeNote', index)
        },
        editTitle(note) {
            this.cachedTitle = note.title
            note.edit = true
            this.note.edit = true
        },
        saveTitle(note) {
            note.edit = false
        },
        cancelSave(note) {
            note.title = this.cachedTitle
            note.edit = false
        }
    }
};
</script>

<style lang="scss">
    .notes__preheader {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid;
}
ul.notes__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
}
.notes__delete {
  cursor: pointer;
}
.notes__title, .notes__desc {
    color: #1f2029;
}
.notes__title {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 10px;
}
.notes__name{
    margin-right: 5px;
    &:hover ~ .notes__edit {
    opacity: 1;
    transition: .4s;
  }
}
.notes__desc {
  margin-bottom: 15px;
}
.notes__edit {
    width: 15px;
    height: 15px;
    opacity: 0;
    transition: .2s;
}
.edit__input {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    border: none;
    border-bottom: 0.5px solid #a9a9a9;
    background-color: #f5fbfb;
    color: #1f2029;
    font-weight: 700;
    font-size: 16px;
    &:focus {
        outline: none;
    }
}
</style>
