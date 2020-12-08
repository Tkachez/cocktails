<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="5" align-self="center">
          <v-radio-group v-model="filter" :label="$t('filter.filter')" row>
            <v-radio
                :label="$t('filter.title')"
                value="strDrink"
                color="orange"
            />
            <v-radio
                :label="$t('filter.recent')"
                value="updatedAt"
                color="orange"
            />
          </v-radio-group>
        </v-col>
      </v-row>
      <CocktailsGrid :full-card="true" :profile="true" :filter="filter"/>
    </v-container>
  </v-main>
</template>

<script>
import CocktailsGrid from "@/components/CocktailsGrid";

export default {
  name: "Profile",
  data: () => ({
    filter: 'strDrink'
  }),
  components: {
    CocktailsGrid
  },
}
</script>
