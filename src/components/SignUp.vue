<template>
    <modalView
        @close = "$emit('close')"
        title="Sign Up"
        >
         <div slot="body">
            <form class="modal__form" @submit.prevent="signUp">
                <div class="form-item" :class="{ errorInput: $v.email.$error }">
                    <label class="form__label" for="email">
                        E-mail:
                    </label>
                    <p class="errorText" v-if="!$v.email.required">Field is required </p>
                    <p class="errorText" v-if="!$v.email.email"> Email is not correct!</p>
                        <input
                            type="email"
                            id="email"
                            v-model="email"
                            :class="{ errorInput: $v.email.$error }"
                            @change="$v.email.$touch()"
                        >
                </div>
                <div class="form-item" :class="{errorInput: $v.password.$error}">
                    <label class="form__label" for="password">
                        Password:
                        <p class="errorText" v-if="!$v.password.required">Field is required </p>
                        <p class="errorText" v-if="!$v.password.minLength">Password must be more than {{ $v.password.$params.minLength.min}} </p>
                        <input
                            type="password"
                            id="password"
                            v-model="password"
                            @change="$v.password.$touch()"
                        >
                    </label>
                </div>
                <div class="form-item" :class="{errorInput: $v.repeatPassword.$error}">
                    <label class="form__label" for="repeatPassword">
                        Confirm password:
                        <p class="errorText" v-if="!$v.repeatPassword.required">Field is required </p>
                        <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Password and Confirm Password should match</p> 
                        <input
                            type="password"
                            id="repeatPassword"
                            v-model="repeatPassword"
                            @change="$v.repeatPassword.$touch()"
                        >
                    </label>
                </div>
                <button class="btn">Log in</button>
            </form>
            <p @click="$emit('changeForm')" class="change__form">I have an account</p>
        </div>
    </modalView>
</template>

<script>
    import modalView from './../components/UI/ModalView.vue'
    import { required, minLength, email, sameAs} from 'vuelidate/lib/validators'

    export default {
        components: {
            modalView
        },
         data() {
        return {
                email: '',
                password: '',
                repeatPassword: ''
            }
        },
        validations () {
            return {
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(4)
                },
                repeatPassword: {
                    required,
                    sameAsPassword: sameAs('password')
                }
            }
        },
        methods: {
            signUp() {
                this.$v.$touch()

                if(!this.$v.$invalid) {
                    const user = {
                        email: this.email,
                        password: this.password
                    }

                    console.log(user)
                    this.email = ''
                    this.password = ''
                    this.repeatPassword = ''
                    this.$v.$reset()
                    this.$emit('close')
                }
            }
        }
    }
</script>

<style lang="scss">

</style>
