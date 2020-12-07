<template>
  <v-main>
    <v-container fluid>
      <CocktailsGrid />
    </v-container>
  </v-main>
</template>

<script>
import CocktailsGrid from "@/components/Profile/CocktailsGrid";

export default {
  name: "Profile",
  components: {
    CocktailsGrid
  },
}
</script>
