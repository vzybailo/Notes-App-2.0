<template>
  <modalView
    @close = "$emit('close')"
    title="Modal with form + validate"
    >
    <div slot="body">
        <form class="modal__form" @submit.prevent="submitThirdForm">
          <div class="form-item" :class="{ errorInput: $v.name.$error }">
            <label>Name:</label>
            <p class="errorText" v-if="!$v.name.required"> Field is required! </p>
            <p class="errorText" v-if="!$v.name.minLength"> Name must have at least {{ $v.name.$params.minLength.min }} !</p>
            <input
              v-model="name"
              :class="{ error: $v.name.$error }"
              @change="$v.name.$touch()">
          </div>
          <div class="form-item" :class="{ errorInput: $v.email.$error }">
            <label>Email:</label>
            <p class="errorText" v-if="!$v.email.required"> Field is required! </p>
            <p class="errorText" v-if="!$v.email.email"> Email is not correct!</p>
            <input
              v-model="email"
              :class="{ error: $v.email.$error }"
              @change="$v.email.$touch()">
          </div>
          <button class="btn">Submit</button>
        </form>
    </div>
  </modalView>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

import modalView from './../components/UI/ModalView.vue'

export default ({
    components: {
        modalView
    },
    props: {
        modalValidate: {
        type: Boolean,
      }
    },
    data() {
      return {
          name: '',
          email: '',
          modalThird: this.modalValidate
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      }
    },
    methods: {
      submitThirdForm() {
        let user ={}
        this.$v.$touch()

        if(!this.$v.$invalid) {
           user = {
            name: this.name,
            email: this.email
          }
          this.name = ""
          this.email = ""
          this.$v.$reset()
          this.$emit('close')
          console.log(user)
        }
      }
    }
})
</script>

<style lang="scss">
.form-item .errorText {
  display: none;
  color: rgb(207, 52, 52);
  margin-bottom: 8px;
  font-size: 13px;
}
.form-item {
  &.errorInput .errorText {
    display: block;
  }
}
input.error {
  border-color: rgb(207, 52, 52);
}
.form-item {
    display: flex;
    flex-direction: column;
    width: 50%;
}
</style>
