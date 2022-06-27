import Vue from 'vue'
import Vuex from 'vuex'
import basket from "@/store/basket/index";
import CityApi from '../../src/api/src/api/CityApi.js'
import ProductApi from '../../src/api/src/api/ProductApi.js'
import PizzaIngredientApi from '../../src/api/src/api/PizzaIngredientApi.js'
import CartApi from '../../src/api/src/api/CartApi.js'
import city from '@/store/city/index'
import products from '@/store/products/index'
import PromoApi from '../../src/api/src/api/PromoApi.js'
import promo from '@/store/promo/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        basket: basket,
        city: city,
        products: products,
        promo: promo,
        // cart: cart
    }
})

store.$cityapi = new CityApi();
store.$productapi = new ProductApi();
store.$ingredientapi = new PizzaIngredientApi()
store.$cartapi = new CartApi()
store.$promoapi = new PromoApi()

export default store
