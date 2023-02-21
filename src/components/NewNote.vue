<template>
    <div class="new__note">
        <input v-model="title"  type="text" class="new__title" placeholder="Write the title">
        <textarea v-model="descr" class="new__desc" cols="60" rows="5" placeholder="Write the description"></textarea>
        <button @click="addNote" class="new__btn">add note</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "", 
            descr: "", 
        };
  },
  methods: {
    addNote() {
      this.$emit("store", this.title, this.descr);
    },
  },
};
</script>

<style>
  
</style>
