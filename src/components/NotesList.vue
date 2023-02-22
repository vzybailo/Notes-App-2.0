<template>
    <ul class="notes__list">
        <li v-for="(note, index) in notes" :key="index" class="notes__item">
            <div class="notes__header">
                <h4 class="notes__title">{{note.title}}</h4>
                <div @click="removeNote" class="notes__delete">x</div>
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
      }
    },
    methods: {
        removeNote() {
            this.$emit('removeNote', this.notes)
        }
    }
};
</script>

<style>
  
</style>
