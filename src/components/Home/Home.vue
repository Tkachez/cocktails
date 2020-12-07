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
import ToolBar from "@/components/Home/ToolBar";
import CocktailPreview from "@/components/CocktailPreview";

import search from "@/mixins/search";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
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
