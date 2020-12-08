<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <v-card v-if="currentIngredient">
              <div class="d-flex">
                <v-card>
                  <v-card-title class="justify-content-center">{{ currentIngredient.strIngredient }}</v-card-title>
                  <v-avatar
                      class="ma-3"
                      size="200"
                      tile
                  >
                    <v-img
                        contain
                        :src="thumb"
                    />
                  </v-avatar>
                </v-card>
                <v-card-text v-if="currentIngredient.strDescription">
                  {{ currentIngredient.strDescription }}
                </v-card-text>
                <v-card-text v-else>
                  {{ $t('ingredients.nodesc') }}
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <CocktailPreview v-if="currentCocktail" :full-card="true"/>
        <CocktailsGrid />
      </v-container>
      <v-container v-if="ingredients.length">
        <ItemsGrid />
      </v-container>
    </v-main>
  </v-app>
</template>
`
<script>
import {mapGetters} from 'vuex'
import CocktailsGrid from "@/components/CocktailsGrid";
import CocktailPreview from "@/components/CocktailPreview";
import ItemsGrid from "@/components/ItemsGrid";

export default {
  name: "Ingredient",
  components: {
    ItemsGrid,
    CocktailPreview,
    CocktailsGrid
  },
  watch: {
    $route() {
      window.scrollTo(0, 0)
      if (this.$route.params.name) {
        this.fetchData(this.$route.params.name)
        this.$store.dispatch('clearIngredients')
      } else {
        this.$store.dispatch('clearSearch')
        this.$store.dispatch('setCurrentCockTail', null)
        this.$store.dispatch('setCurrentIngredient', null)
        this.$store.dispatch('fetchIngredients')
      }
    }
  },
  computed: {
    ...mapGetters(['currentIngredient', 'ingredients', 'currentCocktail']),
    thumb() {
      return `https://thecocktaildb.com/images/ingredients/${this.currentIngredient.strIngredient}-Medium.png`
    }
  },
  methods: {
    fetchData(query) {
      this.$store.dispatch('searchIngredient', query).then(res => {
        this.$store.dispatch('setCurrentIngredient', res).then(() => {
          this.$store.dispatch('searchCocktailsByIngredient', query)
        })
      })
    }
  },
  created() {
    if (this.$route.params.name) {
      this.fetchData(this.$route.params.name)
    } else {
      this.$store.dispatch('fetchIngredients')
    }
  },
  destroyed() {
    this.$store.dispatch('clearIngredients')
    this.$store.dispatch('setCurrentIngredient', null)
    this.$store.dispatch('clearSearch')
  }
}
</script>

