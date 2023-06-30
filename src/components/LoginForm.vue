<template>
    <modalView
        @close = "$emit('close')"
        title="Log in"
    >
        <div slot="body">
            <form class="modal__form" @submit.prevent="logIn">
                <div class="form-item" :class="{errorInput: $v.login.$error}">
                    <label class="form__label" for="login">
                        Login:
                        <p class="errorText" v-if="!$v.login.required">Field is required </p>
                        <input
                            type="text"
                            id="login"
                            v-model="login"
                            :class="{error: $v.login.$error}"
                            @change="$v.login.$touch()"
                        >
                    </label>
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
                            :class="{error: $v.password.$error}"
                            @change="$v.password.$touch()"
                        >
                    </label>
                </div>
                <button class="btn">Log in</button>
            </form>
            <p @click="$emit('changeFormLogin')" class="change__form">I dont`t have an account</p>
        </div>
    </modalView>
</template>

<script>
import modalView from './../components/UI/ModalView.vue'
import { required, minLength} from 'vuelidate/lib/validators'

export default ({
    components: {
        modalView
    },
    data() {
        return {
            login: '',
            password: ''
        }
    },
    validations () {
        return {
            login: {
                required
            },
            password: {
                required,
                minLength: minLength(4)
            }
        }
    },
    methods: {
        logIn() {
            this.$v.$touch()

            if(!this.$v.$invalid) {
                const user = {
                    login: this.login,
                    password: this.password
                }
                console.log(user)
                this.login = ""
                this.password = ""
                this.$v.$reset()
                this.$emit('close')
            }

        }
    }
})
</script>

<style lang="scss">
.form__label {
    display: flex;
    flex-direction: column;
    color: #000;
}
.change__form {
    font-size: 14px;
    cursor: pointer;
}
</style>
