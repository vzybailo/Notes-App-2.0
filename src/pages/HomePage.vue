<template>
    <div class="">
        <h1>What do I know about Vue?</h1>
        <p>It is app about my learning Vue v.2. In this app I show you some apps. There are notesapp, modals and crm.  </p>
        <p>Below you can see a basic principle of working Vuex. Write a some words in the form and click "Change meaning"</p>
        <div class="show">
            <input class="new__title" v-model="message">
            <p>{{getMessage}}</p>
            <button @click='setMessage' class="btn">Change meaning</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: null
            }
        },
        computed: {
            getMessage() {
              return this.$store.getters.getMessage
            }
        },
        methods: {
            setMessage() {
                this.$store.dispatch('setMessage', this.message)
                this.message = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1, p {
        text-align: center;
    }
    .show {
        text-align: center;
        .btn {
            margin-right: 0;
        }
    }
</style>