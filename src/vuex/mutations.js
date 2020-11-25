export default {
    setCocktailsSearchResults(state, list) {
        state.cocktails = list
    },
    clearSearch(state) {
        state.cocktails = []
    },
    setCurrentCocktail(state, item) {
        state.currentCocktail = item
    },
    clearCurrentCocktail(state) {
        state.currentCocktail = null
    },
    addCocktail(state) {
        state.cocktails.forEach(cocktail => {
            if (cocktail.idDrink === state.currentCocktail.idDrink) {
                state.alreadyListedAlert = 'Already listed'
            }
        })

        if (!state.alreadyListedAlert) {
            state.myCocktails.push(state.currentCocktail)
        }
    },
    removeCocktail(state, item) {
        state.myCocktails =  state.myCocktails.filter(cocktail => cocktail.idDrink !== item.idDrink)
    },
    alreadyListedAlert(state, message) {
        state.alreadyListedAlert = message;
    },
    dismissAlreadyListedAlertAlert(state) {
        state.alreadyListedAlert = null
    },
    showSuccessAlert(state, message) {
        console.log(message)
        state.successAlert = message;
    },
    dismissSuccessAlert(state) {
        state.successAlert = null;
    }
}
