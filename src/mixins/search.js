export default {
    methods: {
        search(query) {
            this.$store.dispatch('setCurrentCockTail', null)
            this.$store.dispatch('searchCocktailsByTitle', query)
        }
    }
}
