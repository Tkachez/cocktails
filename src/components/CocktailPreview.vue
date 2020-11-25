<template>
  <v-container>
    <v-row v-if="getAlreadyListedAlert">
      <v-alert
          prominent
          type="error"
          width="100%"
      >
        <v-row align="center">
          <v-col class="grow">
            {{ getAlreadyListedAlert }}
          </v-col>
          <v-col class="shrink">
            <v-btn
                color="white"
                icon
                @click="dismissAlert"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-row>
    <v-row>
      <CocktailCard v-if="currentCocktail" :cocktail="currentCocktail" @click="addToMyList"/>
    </v-row>
  </v-container>
</template>

<script>
import CocktailCard from "@/components/CocktailCard";
import { mapGetters } from "vuex";

export default {
  name: "CocktailPreview",
  components: {
    CocktailCard
  },
  methods: {
    addToMyList() {
      if (this.alreadyListed) {
        this.$store.dispatch('alreadyListedAlert', 'Already Listed')
      } else {
        this.$store.dispatch('addCocktailToMyList', this.currentCocktail)
        this.$store.dispatch('showSuccessAlert', 'Successfully added to my list')
        this.$store.dispatch('clearCurrentCocktail')
      }
    },
    dismissAlert() {
      this.$store.dispatch('dismissAlreadyListedAlertAlert')
    }
  },
  computed: {
    ...mapGetters(['currentCocktail', 'alreadyListed', 'getAlreadyListedAlert']),
  },
}
</script>

<style scoped>

</style>
