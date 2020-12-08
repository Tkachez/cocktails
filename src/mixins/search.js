export default {
    methods: {
        search(data) {
            this.$store.dispatch('setCurrentCockTail', null)
            if (data.filter === 'title') {
                this.$store.dispatch('searchCocktailsByTitle', data.query)
            }
            if (data.filter === 'ingredient') {
                this.$store.dispatch('searchCocktailsByIngredient', data.query)
            }
            if (data.filter === 'glass') {
                this.$store.dispatch('searchCocktailsByGlass', data.query)
            }
        }
    }
}
