<template>
  <v-container>
    <v-fade-transition>
      <AlertComponent v-if="message"
                      :message="message"
                      :type="messageType"
                      @close="dismissAlert"/>
    </v-fade-transition>
    <v-row>
      <CocktailCard v-if="currentCocktail" :cocktail="currentCocktail" @click="addToMyList"/>
    </v-row>
  </v-container>
</template>

<script>
import CocktailCard from "@/components/CocktailCard";
import { mapGetters } from "vuex";
const AlertComponent = () => ({
  component: import('./Alert'),
  timeout: 3000
})
export default {
  name: "CocktailPreview",
  components: {
    CocktailCard,
    AlertComponent
  },
  data: () => ({
    messageType: null,
    message: null
  }),
  methods: {
    addToMyList() {
      if (this.alreadyListed) {
        this.message = 'alreadyExists'
        this.messageType = 'error'
      } else {
       this.showSuccessAlert()
        this.$store.dispatch('addCocktailToMyList', this.currentCocktail)
        this.$store.dispatch('clearCurrentCocktail')
      }
    },
    showSuccessAlert() {
      this.message = 'added'
      this.messageType = 'success'
      setTimeout(() => {
        this.message = null
        this.messageType = null
      }, 1000)
    },
    dismissAlert() {
      this.message = null
      this.messageType = null
    }
  },
  computed: {
    ...mapGetters(['currentCocktail', 'alreadyListed']),
  },
}
</script>

<style scoped>

</style>
