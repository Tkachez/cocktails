import axios from 'axios'

const API_BASE = process.env.VUE_APP_API_URL

export default {
    searchCocktails(ctx, query) {
        axios.get(`${API_BASE}/search.php`,
            {
                params: {
                    s: query
                }
            }).then(res => res.data.drinks)
            .then(list => {
                ctx.commit('setCocktailsSearchResults', list)
            }).catch(err => console.log(err))
    },
    randomCocktail(ctx) {
        axios.get(`${API_BASE}/random.php`).then(res => res.data.drinks).then(item => {
            const [result] = item;
            ctx.commit('setCurrentCocktail', result)
        })
    },
    clearSearch(ctx) {
        ctx.commit('clearSearch')
    },
    setCurrentCockTail(ctx, item) {
        ctx.commit('setCurrentCocktail', item)
    },
    clearCurrentCocktail(ctx) {
        ctx.commit('clearCurrentCocktail')
    },
    addCocktailToMyList(ctx) {
        ctx.commit('addCocktail')
    },
    removeCocktailFromMyList(ctx, item) {
        ctx.commit('removeCocktail', item)
    },
}
