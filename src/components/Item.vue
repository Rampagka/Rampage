<template>
  <li class="item">
    <a href="" class="name"
      @click.prevent="changeCity(item.cityId)"
    >{{item.displayName}}</a>
  </li>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {

    }
  },
  props: ['item'],
  methods: {
    changeCity(id) {
      let city = this.GET_CITY_BY_ID
      console.log(city)
    }
  },
  computed: {
    ...mapGetters([
      'GET_ALL_CITIES',
      'GET_CITY_BY_ID',
    ])
  },
}
</script>

<style scoped>

</style>
