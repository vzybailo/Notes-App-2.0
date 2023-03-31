<template>
  <modalView
    @click = "$emit('close')"
    title="Modal with form"
    >
    <div slot="body">
        <form class="modal__form" @submit.prevent="submitThirdForm">
            <label for="">Name</label>
            <input type="text" v-model="modalThird.name">
            <label for="">Email</label>
            <input type="email" v-model="modalThird.email">
            <button class="btn">Submit</button>
        </form>
    </div>
  </modalView>
</template>

<script>
import modalView from '@/components/UI/ModalView.vue'

export default ({
    components: {
        modalView
    },
    // props: {
    //   modalValidate: {
    //     type: Boolean,
    //     required: true
    //   }
    // },
    data() {
      return {
        modalThird: {
          show: false,
          name: '',
          email: ''
        }
      }
    },
    methods: {
      submitThirdForm() {
        console.log(this.modalThird.name)
      }
    }
})
</script>
