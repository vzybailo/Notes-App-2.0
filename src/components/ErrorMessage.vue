<template>
  <transition name="fade">
    <div v-if="errorMessage" class="error">{{errorMessage}}</div>
  </transition>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: null,
      required: true
    }
  }
}
</script>

<style scoped>
  .error {
    color: rgb(205 136 136);
    font-style: italic;
    margin-bottom: 10px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0;
    transition: 0.3s;
  }
</style>
