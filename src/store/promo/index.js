export default {
  state: ()=>({
      promo: [],

  }),
  mutations: {
      ADD_PROMOTIONS(state, promo) {
          state.promo = promo;
      },
  },
  actions: {
      GET_PROMO({commit}, obj){
          return this.$promoapi.getPromotionsWithHttpInfo(obj).then(function (res) {
            let arr = []
            console.log(res)
            // cities.forEach(city =>{
            //   arr.push(city)
            //   console.log(city)
            // })
            commit("ADD_PROMOTIONS", arr)
          })
      },
  },
  getters: {
    GET_PROMOTIONS: state => {
        return state.allCities
    },
  }
}
