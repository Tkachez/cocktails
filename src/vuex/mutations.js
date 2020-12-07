import _ from 'lodash'

export default {
    setCocktailsSearchResults(state, list) {
        state.cocktails = list
    },
    clearSearch(state) {
        state.cocktails = []
    },
    loadFullInfo(state, cocktail) {
        state.fullInfo = cocktail
    },
    incrementPage(state) {
        state.currentPage++
    },
    setCurrentPage(state, page) {
        state.currentPage = page;
    },
    setMyCocktails(state, list) {
        state.myCocktails = _.uniq(state.myCocktails.concat(list))
    },
    clearMyCocktails(state) {
        state.myCocktails = []
    },
    setTotalPages(state, total) {
        state.totalPages = Math.ceil(total / state.perPage)
    },
    deleteCocktail(state, item) {
        state.myCocktails = state.myCocktails.filter(cocktail => cocktail._id !== item._id)
    },
    setCurrentCocktail(state, item) {
        state.currentCocktail = item
    },
    clearCurrentCocktail(state) {
        state.currentCocktail = null
    },
    dismissSuccessAlert(state) {
        state.successAlert = null;
    }
}
