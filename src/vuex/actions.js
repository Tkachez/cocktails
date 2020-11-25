import axios from 'axios'

const API_BASE = process.env.VUE_APP_API_URL

export default {
    searchCocktails(ctx, query) {
        axios.get(`${API_BASE}`,
            {
                params: {
                    s: query
                }
            }).then(res => res.data.drinks)
            .then(list => {
                ctx.commit('setCocktailsSearchResults', list)
            }).catch(err => console.log(err))
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
    alreadyListedAlert(ctx, message) {
        ctx.commit('alreadyListedAlert', message)
    },
    dismissAlreadyListedAlertAlert(ctx) {
        ctx.commit('dismissAlreadyListedAlertAlert')
    },
    showSuccessAlert(ctx, message) {
        return new Promise((res) => {
            ctx.commit('showSuccessAlert', message)
            setInterval(res, 1000)
        }).then(() => ctx.commit('dismissSuccessAlert'))

    }
}
