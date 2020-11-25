<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <ToolBar @input="search"/>
        </v-col>
      </v-row>
      <CocktailPreview v-if="currentCocktail"/>
      <CocktailsGrid />
    </v-container>
  </v-app>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import CocktailsGrid from "@/components/CocktailsGrid";
import CocktailPreview from "@/components/CocktailPreview";

import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    CocktailPreview,
    ToolBar,
    CocktailsGrid
  },
  methods: {
    search(data) {
      if (data) {
        this.$store.dispatch('searchCocktails', data)
      } else {
        this.$store.dispatch('clearSearch')
      }
    }
  },
  computed: {
    ...mapGetters(['currentCocktail'])
  }
};
</script>
