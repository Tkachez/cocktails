export default {
    searchResults(state) {
        if (state.cocktails && state.cocktails.length >= 5) {
            return state.cocktails.slice(0, 5)
        }
        return state.cocktails
    },
    myCocktails(state) {
        return state.myCocktails
    },
    currentCocktail(state) {
        return state.currentCocktail
    },
    alreadyListed(state) {
        const currentCocktailsIds = state.myCocktails.map(cocktail => cocktail.idDrink)
        return currentCocktailsIds.includes(state.currentCocktail.idDrink)
    },
    getAlreadyListedAlert(state) {
        return state.alreadyListedAlert;
    },
    getSuccessAlert(state) {
        return state.successAlert
    },
    getRows(state) {
        return state.rows
    },
    perRow(state) {
        return state.perRow
    },
}
