export default {
  state: ()=>({
      allCities: [],
      cityById: [],

  }),
  mutations: {
      ADD_CITY(state, city) {
          state.allCities = city;
      },

      ADD_CITY_BY_ID(state, cityById) {
        state.cityById = cityById;
    },
  },
  actions: {
      GET_CITY({commit}){
          return this.$cityapi.getCities().then(function(cities) {
            let arr = []
            // console.log(cities.items)
            cities.items.forEach(city =>{
              arr.push(city)
              // console.log(city)
            })
            commit("ADD_CITY", arr)
          })
      },
      GET_CITY_INFO({commit}, id) {
        return this.$cityapi.getCityInfo(id).then(function(cityById) {
          let arr = {}
          arr = cityById
          console.log(arr)
          // cityById.forEach(city => {
          //   console.log(city)
          // })
          commit("ADD_CITY_BY_ID", arr)
        })
      }
  },
  getters: {
    GET_ALL_CITIES: state => {
        return state.allCities
    },
    GET_CITY_BY_ID: state => {
      return state.cityById
    }
  }
}
