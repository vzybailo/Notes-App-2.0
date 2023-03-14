<template>
  <modalView
    @click = "$emit('close')"
    title="Modal with form"
    >
    <div slot="body">
        <form class="modal__form" @submit.prevent="submitSecondForm">
            <label for="">Name</label>
            <input type="text" >
            <label for="">Email</label>
            <input type="email">
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
})
</script>
