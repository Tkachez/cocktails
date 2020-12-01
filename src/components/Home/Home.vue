<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <ToolBar @input="search"/>
          </v-col>
        </v-row>
        <CocktailPreview />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import CocktailPreview from "@/components/CocktailPreview";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    ToolBar,
    CocktailPreview,
  },
  methods: {
    search(data) {
      if (data) {
        this.$store.dispatch('searchCocktails', data)
      } else {
        this.$store.dispatch('clearSearch')
      }
    },
  },
  computed: {
    ...mapGetters(['currentCocktail']),
  }
}
</script>
