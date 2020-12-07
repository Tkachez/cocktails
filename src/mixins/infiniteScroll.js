import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(['getCurrentPage', 'perPage', 'getTotalPages'])
    },
    methods: {
        infiniteHandler() {
            if (this.isInit && this.getCurrentPage < this.getTotalPages) {
                this.busy = true
                this.$store.dispatch('incrementPage').then(() => {
                    this.$store.dispatch('fetchTotalCocktails').then(() => {
                        this.$store.dispatch('fetchCocktailsFromDb', {
                            page: this.getCurrentPage,
                            perPage: this.perPage,
                        }).then(() => {
                            this.busy = false;
                        }).catch(err => console.log(err))
                    })
                })
            }
        },
    }
}
