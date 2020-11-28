<template>
  <v-app>
    <AppHeader @click="toggleNav"/>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <ToolBar @input="search"/>
          </v-col>
        </v-row>
        <CocktailPreview />
        <CocktailsGrid />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import CocktailsGrid from "@/components/CocktailsGrid";
import CocktailPreview from "@/components/CocktailPreview";

import { mapGetters } from 'vuex';
import AppHeader from "@/components/AppHeader";

export default {
  name: 'App',
  components: {
    AppHeader,
    CocktailPreview,
    ToolBar,
    CocktailsGrid
  },
  data: () => ({
    navigationActive: false,
  }),
  methods: {
    search(data) {
      if (data) {
        this.$store.dispatch('searchCocktails', data)
      } else {
        this.$store.dispatch('clearSearch')
      }
    },
    toggleNav() {
      this.navigationActive = !this.navigationActive
    },
  },
  computed: {
    ...mapGetters(['currentCocktail']),
  }
};
</script>
