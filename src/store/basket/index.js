export default {
    state:()=>({
        basket: []
    }),
    mutations: {
        ADD_ITEM(state, item){
            let have = false
            let size = item.size
            let ingredients = JSON.stringify(item.ingredients)
            let id = item.productId
            state.basket.map(basketItem => {
                if(basketItem.productId === id && basketItem.size === size && JSON.stringify(basketItem.ingredients) === ingredients) {
                    console.log(ingredients)
                    console.log(JSON.stringify(basketItem.ingredients))
                    basketItem.amount++
                    have = true
                    // console.log(state.basket[index])
                    return
                }
            })
            if(!have) {
                    state.basket.push(item)
                    console.log('добавлен айтем если айди не равны')
                }

            localStorage.removeItem('basket')
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        DEL_ITEM(state, index){
            state.basket.splice(index, 1);

            localStorage.removeItem('basket')
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        INCREMENT_ITEM(state, index) {
            state.basket[index].amount++

            localStorage.removeItem('basket')
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        DECREMENT_ITEM(state, index){
            if(state.basket[index].amount > 1) {
                state.basket[index].amount--
            }

            localStorage.removeItem('basket')
            localStorage.setItem('basket', JSON.stringify(state.basket))
        }
    },
    actions: {
        ADD_ITEM_TO_BASKET({commit}, item) {
            commit("ADD_ITEM", item)
        },
        DELETE_BASKET_ITEM({commit}, index) {
            commit("DEL_ITEM", index)
        },
        DECREMENT_BASKET_ITEM({commit}, index) {
            commit("DECREMENT_ITEM", index)
        },
        INCREMENT_BASKET_ITEM({commit}, index) {
            commit("INCREMENT_ITEM", index)
        }
    },
    getters:{
        GET_BASKET(state){
            return state.basket
        }
    }
}
