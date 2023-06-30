<template>
  <div  id="app">
      <header class="header">
        <div class="container">
          <router-link to="/" class="header__logo"><img src="./assets/img/vue.png" alt=""></router-link>
          <ul class="nav__list">
            <li class="nav__item">
              <router-link v-for="link of links" :key="link.title" :title="link.title" :to="link.url" class="nav__link">{{link.title}}</router-link>
            </li>
          </ul>
          <div class="auth">
            <button
              @click="login = !login"
              class="auth-login">
              Log in
            </button>
            <button
              class="auth-sign"
              @click="signup = !signup"
              >
              Sign up
            </button>
          </div>
        </div>
      </header>
      <router-view></router-view>
      <loginForm
        v-if="login"
        @close ="login = !login"
        @changeFormLogin = "changeFormLogin"
      />
      <signUp
        v-if="signup"
        @close ="signup = !signup"
        @changeForm = "changeForm"
      />
    </div>
</template>

<script>
import loginForm from './components/LoginForm.vue'
import signUp from './components/SignUp.vue'

  export default {
    components: {
      loginForm, signUp
    },
    data () {
      return {
        links: [
          {title: 'About', url: '/'},
          {title: 'NotesApp', url: '/notesapp'},
          {title: 'Modals', url: '/modals'},
          {title: 'Shop', url: '/shop'},
          {title: 'Crm', url: '/crm'}
        ],
        login: false,
        signup: false,
      }
    },
    methods: {
      changeForm() {
        this.login = true
        this.signup = false
      },
      changeFormLogin() {
        this.login = false
        this.signup = true
      }
    },
  }
</script>

<style lang="scss">
  .container {
    width: 850px;
    margin: 0 auto;
  }
  .header {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
.header__logo img {
    width: 50px;
  }
  .nav__link {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 15px;
    &:hover {
      color: yellow;
    }
  }
  .router-link-exact-active {
    color: yellow;
  }
  .auth-sign, .auth-login {
    border: none;
    color: #fff;
    background: transparent;
    cursor: pointer;
  }
</style>
