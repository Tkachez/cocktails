<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <ToolBar @input="search"/>
          </v-col>
        </v-row>
        <CocktailPreview :full-card="true"/>
        <CocktailsGrid :listing="true"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from "@/components/Home/ToolBar";
import CocktailPreview from "@/components/CocktailPreview";

import search from "@/mixins/search";
import { mapGetters } from "vuex";
import CocktailsGrid from "@/components/CocktailsGrid";

export default {
  name: "Home",
  components: {
    CocktailsGrid,
    ToolBar,
    CocktailPreview,
  },
  mixins: [search],
  data: () => ({
    searchFilter: null
  }),
  computed: {
    ...mapGetters(['currentCocktail']),
  }
}
</script>
