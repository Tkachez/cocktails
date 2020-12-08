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
    <AlertComponent v-else-if="!busy && !items.length && profile" type="info" v-slot:alert>
      {{ $t('alertMessages.info.beginning') }}
      <router-link to="/">{{ $t('navigation.home') }}</router-link>
      {{ $t('alertMessages.info.end') }}
    </AlertComponent>
    <v-row v-if="busy && profile" justify="center">
      <v-col cols="2">
        <v-progress-linear
            stream
            buffer-value="0"
            color="black"
        />
      </v-col>
    </v-row>
    <div v-if="profile" v-infinite-scroll="infiniteHandler" infinite-scroll-disabled="busy"
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
  props: ['fullCard', 'profile', 'listing', 'filter'],
  data: () => ({
    isInit: false,
    busy: true,
  }),
  watch: {
    filter() {
      this.busy = true
      this.$store.dispatch('setCurrentPage',1)
      this.$store.dispatch('clearMyCocktails').then(() => {
        this.getCocktails()
      })
    }
  },
  created() {
    if (this.profile) {
      this.getCocktails()
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
    getCocktails() {
      this.$store.dispatch('fetchTotalCocktails').then(() => {
        this.$store.dispatch('fetchCocktailsFromDb', {
          filter: this.filter,
          page: this.getCurrentPage,
          perPage: this.perPage,
        }).then(() => {
          this.isInit = true
          this.busy = false
        }).catch(err => console.log(err))
      })
    },
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
