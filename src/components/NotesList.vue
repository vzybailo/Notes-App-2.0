<template>
    <ul class="notes__list" :class="{full: !grid}">
        <li v-for="(note, index) in notes" :key="index" class="notes__item">
            <div class="notes__header">
                <h4 class="notes__title">{{note.title}}</h4>
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
    methods: {
        removeNote(index) {
            this.$emit('removeNote', index)
        }
    }
};
</script>

<style>

</style>
