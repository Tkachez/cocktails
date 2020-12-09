<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <ToolBar @input="search"/>
          </v-col>
        </v-row>
        <v-banner two-line v-if="!searchResults.length">
          <v-avatar
              slot="icon"
              color="primary accent-4"
              size="40"
          >
            <v-icon
                icon="mdi-help-circle-outline"
                color="white"
            >
              mdi-help-circle-outline
            </v-icon>
          </v-avatar>
          {{ $t('app.desc') }} <router-link to="/ingredients">{{ $t('app.link') }}</router-link>
          <template v-slot:actions>
            <v-btn
                text
                color="orange accent-4"
                @click="$router.push('about')"
            >
              {{ $t('app.more') }}
            </v-btn>
          </template>
        </v-banner>
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
  computed: {
    ...mapGetters(['currentCocktail', 'searchResults']),
  }
}
</script>
