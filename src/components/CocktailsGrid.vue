<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col
          v-for="item in myCocktails"
          :key="item.idDrink"
          cols="12"
          sm="4"
      >
        <CocktailCard
            class="pa-2"
            outlined
            tile
            :cocktail="item"
            :list-item="true"
            @click="removeFromMyList(item)"
        >
        </CocktailCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CocktailCard from "@/components/CocktailCard";
import { mapGetters } from 'vuex';

export default {
  name: "CocktailsGrid",
  components: {
    CocktailCard
  },
  methods: {
    removeFromMyList(item) {
      this.$store.dispatch('removeCocktailFromMyList', item)
    }
  },
  computed: {
    ...mapGetters(['getRows', 'myCocktails']),
  },
}
</script>
