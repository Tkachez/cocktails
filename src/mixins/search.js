export default {
    methods: {
        search(query) {
            if (!query) {
                this.$store.dispatch('clearSearch')
            } else {
                this.$store.dispatch('searchCocktailsByTitle', query)
            }
            this.$store.dispatch('setCurrentCockTail', null)
        }
    }
}
