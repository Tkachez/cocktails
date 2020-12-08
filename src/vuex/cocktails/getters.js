export default {
    searchResults(state) {
        return state.cocktails
    },
    myCocktails(state) {
        return state.myCocktails
    },
    currentCocktail(state) {
        return state.currentCocktail
    },
    getCurrentPage(state) {
        return state.currentPage - 1
    },
    perPage(state) {
        return state.perPage
    },
    getTotalPages(state) {
        return state.totalPages
    },
    getFullInfo(state) {
        return state.fullInfo
    },
}
