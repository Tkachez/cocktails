import axios from "axios"

const API_BASE = process.env.VUE_APP_API_URL

export default {
    searchIngredient(ctx, query) {
        return new Promise(resolve => {
            axios.get(`${API_BASE}/search.php`, {
                params: {
                    i: query
                }
            })
                .then(res => res.data.ingredients[0])
                .then(ingredient => {
                    resolve(ingredient)
                })
                .catch(err => console.log(err))
        })
    },
    fetchIngredients(ctx) {
        axios.get(`${API_BASE}/list.php`, {
            params: {
                i: 'list'
            }
        })
            .then(res => res.data.drinks)
            .then(ingredients => {
                ctx.commit('setIngredients', ingredients)
            })
            .catch(err => console.log(err))
    },
    setCurrentIngredient(ctx, item) {
        ctx.commit('setCurrentIngredient', item)
    },
    clearIngredients(ctx) {
        ctx.commit('setIngredients', [])
    },
}
