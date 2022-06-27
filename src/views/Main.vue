<template>
<div>
    <Header />
    <!-- <Carousel /> -->
    <div class="container">
      <main class="main">
        <p>{{this.GET_ALL_CITIES}}</p>

        <h1 class="heading">
          DivinePizza
        </h1>
        <ul class="product-list">
          <Item
            v-for="item in this.GET_ALL_CITIES"
            :key="item.cityId"
            :item="item"
            />
        </ul>
        <button type="button"
          @click.prevent="getCode()"
        >ГетКод</button>
        <button type="button"
          @click.prevent="login()"
        >Логин</button>
        <button type="button"
          @click.prevent="authorize()"
        >Аутх</button>
        <button type="button"
          @click.prevent="getToken()"
        >Токен</button>
        <h3 class="caption">Пицца</h3>
      </main>
    </div>
</div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Header from '@/components/Header.vue'
import Item from '@/components/Item.vue'
import {mapGetters, mapActions} from 'vuex'
import AuthApi from '@/auth/auth-api/AuthApi.js'

export default {
	name: 'Main',
  data() {
    return {
      id: 5,
      city: [],
      phone: '79197158911',
      code: '{{0000}}'
    }
  },
  methods: {
    ...mapActions([
      'GET_CITY',
      'GET_CATALOG',
      'GET_CITY_INFO',
      'GET_CATALOG_WITH_HTTP',
      'GET_PROMO',
    ]),
    changeCity(id){
      // console.log(this.GET_ALL_CITIES())
    },
    cityById() {
      // console.log(this.GET_CITY_BY_ID)
      return this.GET_CITY_BY_ID
    },
    getCode() {
      let obj = {
        phone: this.phone
      }
      return this.auth.sendPhoneCode(obj)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    login() {
        let obj = {
          phone: this.phone,
          code: this.code
        }
        return this.auth.login(obj)
        .then((res)=> {
          console.log(res)
        })
        .catch((err)=> {
          console.log(err)
        })
    },
    authorize() {
      let obj = {
        client_id: "api-client",
        redirect_uri : "http://localhost:8080/",
        response_type: "",
        code_challenge_method: "S256",
        code_challenge: "{{code_challenge}}"
      }
      return this.auth.authorize(obj)
      .then((res)=> {
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    getToken() {
      let obj = {
        grant_type: "authorization_code",
        client_id: "api-client" ,
        code_challenge_method: "S256",
        code_verifier: "{{code_verifier}}",
        code: "{{code}}",
        redirect_uri:"http://localhost:8080/"
      }
      return this.auth.getToken(obj)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
  computed: {
    ...mapGetters([
      'GET_ALL_CITIES',
      'GET_CITY_BY_ID',
    ]),
    auth() {
      return new AuthApi()
    }
    // cityById() {
    //   console.log(this.GET_CITY_BY_ID)
    //   return this.city = this.GET_CITY_BY_ID
    // }
  },
  mounted(){
    // let id = this.id
    // this.GET_CITY(id),
    // this.GET_CATALOG(id),
    // this.GET_CITY_INFO(id)
    // console.log(this.city)
    // this.GET_PROMO(this.GET_CITY_BY_ID)
  },
  components: {
    Header,
    Carousel,
    Item
  },
}
</script>

<style scoped>
    .heading {
      margin: 0;
      padding-top: 50px;
      margin-bottom: 80px;
      color: rgb(252, 185, 61);

    }
</style>
