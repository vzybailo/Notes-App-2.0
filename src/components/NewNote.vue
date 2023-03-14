<template>
    <div class="new__note">
        <input v-model="title"  type="text" class="new__title" placeholder="Write the title">
        <textarea v-model="descr" class="new__desc" cols="60" rows="5" placeholder="Write the description"></textarea>
        <select v-model="select" class="new__select">
          <option selected disabled >Choose priority </option>
          <option
              v-for='(priority, index) in note.priorities'
              :key="index"
          >
            {{ priority.name }}
          </option>
        </select>
        <button @click="addNote" class="new__btn">add note</button>
    </div>
</template>

<script>
export default {
    props: {
      note: {
        type: Object,
        required: true
      }
    },
    data() {
        return {
            title: this.note.title,
            descr: this.note.descr,
            edit: this.note.edit,
            select: this.select
        };
  },
  methods: {
    addNote() {
      this.$emit("store", {title: this.title, descr: this.descr, edit: this.note.edit, select: this.select});
      this.title = ''
      this.descr = ''
      this.select = ''
    },
  },
};
</script>

<style lang="scss">
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
  margin-bottom: 10px;
}
.new__select {
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 25px;
  cursor: pointer;
  border: none;
  outline: none;
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
