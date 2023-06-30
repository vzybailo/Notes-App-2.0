<template>
    <div class="new__note">
        <input v-model="note.title"  type="text" class="new__title" placeholder="Write the title">
        <textarea v-model="note.descr" class="new__desc" cols="60" rows="5" placeholder="Write the description"></textarea>
        <select class="new__select">
          <option disabled selected>Choose priority </option>
          <option
              v-for='(priority, index) in note.priorities'
              :key="index"
          >
            {{ priority.name }}
          </option>
        </select>
        <button @click="setNote" class="new__btn">add note</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            note: {
              title: '',
              descr: '',
              priorities: [ ],
            }
        };
  },
  computed: {
    getNote() {
      return this.$store.getters.getNote
  }
  },
  methods: {
    setNote() {
      this.$store.dispatch('setNote', this.note)
      console.log(this.note)
      this.note = ""
    }
  },
  created() {
    this.note = this.$store.getters.getNote
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
