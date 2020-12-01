<template>
  <v-main>
    <v-container fluid>
      <CocktailsGrid v-if="myCocktails.length"/>
      <v-alert v-else outlined type="info">
        Currently you do not have cocktails in your list. Navigate to <router-link to="/">Home</router-link> page to add some.
      </v-alert>
    </v-container>
  </v-main>
</template>

<script>
import CocktailsGrid from "@/components/Profile/CocktailsGrid";

import { mapGetters } from 'vuex'

export default {
  name: "Profile",
  components: {
    CocktailsGrid
  },
  computed: {
    ...mapGetters(['myCocktails'])
  }
}
</script>
