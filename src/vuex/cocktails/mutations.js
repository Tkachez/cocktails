import _ from "lodash";

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
    setMyCocktails(state, list) {
        state.myCocktails = _.uniq(state.myCocktails.concat(list))
    },
    clearMyCocktails(state) {
        state.myCocktails = []
    },
    deleteCocktail(state, item) {
        state.myCocktails = state.myCocktails.filter(cocktail => cocktail._id !== item._id)
    },
    setCurrentCocktail(state, item) {
        state.currentCocktail = item
    },
    incrementPage(state) {
        state.currentPage++
    },
    setCurrentPage(state, page) {
        state.currentPage = page;
    },
    setTotalPages(state, total) {
        state.totalPages = Math.ceil(total / state.perPage)
    },
}
