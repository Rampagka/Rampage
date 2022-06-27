export default {
  state: ()=>({
      catalog: [],
      productByCategory: [],
      simpleProduct: [],
      allProducts: [],
      ingredients: [],
  }),
  mutations: {
      ADD_CATALOG(state, catalog) {
          state.catalog = catalog;
      },
      ADD_INGREDIENTS(state, ingredients) {
        state.ingredients = ingredients;
    },
  },
  actions: {
      GET_CATALOG({commit}, id){
          return this.$productapi.getCatalog(id).then(function (res) {
            let arr = []
            // console.log(id)
            console.log(res)
            // console.log(res.simple)
            // res.forEach(element => {
            //   arr.push(element)
            // });
          commit("ADD_CATALOG", arr)
          })
      },
      GET_INGREDIENTS({commit}, id){
        return this.$ingredientapi.getCityAvailableIngredients(id).then(function (ingredients) {
          let arr = []
          ingredients.forEach(elem => {
            arr.push(elem)
          });
        commit("ADD_INGREDIENTS", arr)
        })
    },
  },
  getters: {
    GET_ALL_PRODUCTS: state => {
        return state.catalog
    },

    GET_ALL_PRODUCTS: state => {
      return state.ingredients
  },
  }
}
