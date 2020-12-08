<template>
  <v-container fluid>
    <v-row v-if="items.length" no-gutters>
      <v-col
          v-for="item in items"
          :key="item.idDrink"
          cols="12"
          sm="4"
      >
        <CocktailCard
            class="pa-2"
            outlined
            tile
            :profile="profile"
            :full-card="fullCard"
            :cocktail="item"
            @click="removeFromMyList(item)"
            @info="showInfo"
        >
        </CocktailCard>
      </v-col>
    </v-row>
    <AlertComponent v-else-if="!busy && !myCocktails.length && profile" type="info" v-slot:alert>
      Currently you do not have cocktail in your list. Navigate to
      <router-link to="/">Home</router-link>
      page to add some.
    </AlertComponent>
    <v-row v-if="busy" justify="center">
      <v-col cols="2">
        <v-progress-linear
            stream
            buffer-value="0"
            color="black"
        />
      </v-col>
    </v-row>
    <div v-if="profile" v-infinite-scroll="infiniteHandler" infinite-scroll-disabled="loading"
         infinite-scroll-distance="10"></div>
  </v-container>
</template>

<script>
import CocktailCard from "@/components/CocktailCard";
import infiniteHandler from '@/mixins/infiniteScroll'
import {mapGetters} from 'vuex';

const AlertComponent = () => ({
  component: import('./Alert'),
  timeout: 3000
})

export default {
  mixins: [infiniteHandler],
  name: "CocktailsGrid",
  props: ['fullCard', 'profile', 'listing'],
  data: () => ({
    isInit: false,
    busy: null,
  }),
  created() {
    if (this.profile) {
      this.$store.dispatch('fetchTotalCocktails').then(() => {
        this.$store.dispatch('fetchCocktailsFromDb', {
          page: this.getCurrentPage,
          perPage: this.perPage,
        }).then(() => {
          this.isInit = true
          this.busy = false
        }).catch(err => console.log(err))
      })
    }
  },
  computed: {
    ...mapGetters(['myCocktails', 'searchResults', 'currentCocktail']),
    items() {
      return this.profile ? this.myCocktails : this.searchResults
    }
  },
  components: {
    AlertComponent,
    CocktailCard
  },
  methods: {
    showInfo(data) {
      window.scrollTo(0, 0)
      this.$store.dispatch('searchCocktailById', data.idDrink).then(res => {
        this.$store.dispatch('setCurrentCockTail', res)
      })
    },
    removeFromMyList(item) {
      this.$store.dispatch('deleteCocktailFromDb', item)
    },
    fetchCocktails() {
      this.infiniteScroll()
    }
  },
  destroyed() {
    this.$store.dispatch('clearSearch')
    this.$store.dispatch('clearMyCocktails')
    this.$store.dispatch('setCurrentPage', 1)
  }
}
</script>
