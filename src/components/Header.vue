<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">Главная</li>
          <li class="nav-item">Пицца</li>
          <li class="nav-item">Акции</li>
          <li class="nav-item">О нас</li>
          <li class="nav-item"><a href="#total">Вниз</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Header',
  data(){
    return {

    }
  },
  computed: {

  },
  methods: {
    ...mapActions([
      ''
    ])
  },
  mounted() {

  }
}
</script>

<style scoped>
  .header {
    display: block;
    width: 100%;
    background-color: #000;
  }

  .nav {
    height: 100px;
    display: flex;
    align-items: center;
  }

  .nav-list {
    display: flex;
  }

  .nav-item{
    color: #fff;
    margin-right: 30px;
  }

  a {
    color: #fff;
  }
</style>
