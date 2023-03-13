<template>
  <div  id="app">
      <header class="header">
        <div class="container">
          <a href="" class="header__logo">Vue v2</a>
          <ul class="nav__list">
            <li class="nav__item">
              <router-link v-for="link of links" :key="link.title" :title="link.title" :to="link.url" class="nav__link">{{link.title}}</router-link>
            </li>
          </ul>
        </div>
      </header>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        links: [
          {title: 'Home', url: '/'},
          {title: 'NotesApp', url: '/notesapp'}
        ]
      }
    }
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
    }
  }
  a.header__logo {
    text-decoration: none;
    color: #578f57;
    font-size: 25px;
    font-weight: bold;
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
</style>
