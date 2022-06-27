export default {
  state: ()=>({
      cart: [],

  }),
  mutations: {
      ADD_CITY(state, cart) {
          state.cart = cart;
      },
  },
  actions: {
      GET_CART({commit}){
          return this.$cityapi.getCities().then(function (cities) {
            let arr = []
            cities.forEach(city =>{
              arr.push(city)
              console.log(city)
            })
            commit("ADD_CITY", arr)
          })
      },
  },
  getters: {
    GET_ALL_CITIES: state => {
        return state.allCities
    },
  }
}
