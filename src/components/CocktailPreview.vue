<template>
  <v-container>
    <v-fade-transition>
      <AlertComponent
          v-if="message"
          :type="messageType"
          v-slot:alert
          @close="dismissAlert">{{ message }}</AlertComponent>
    </v-fade-transition>
    <v-row>
      <CocktailCard
          v-if="currentCocktail"
          :cocktail="currentCocktail"
          @click="addToMyList"/>
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
    dialog: false,
    messageType: null,
    message: null
  }),
  methods: {
    addToMyList() {
      console.log(111)
      this.$store.dispatch('addCocktailToDb', this.currentCocktail)
          .then(() => {
            this.showSuccessAlert()
            this.$store.dispatch('clearCurrentCocktail')
          })
          .catch(() => {
            this.message = 'Already in your list'
            this.messageType = 'error'
          })
    },
    toggleDialog() {
      this.dialog = !this.dialog
    },
    showSuccessAlert() {
      this.message = 'Successfully added to my list'
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
    ...mapGetters(['currentCocktail']),
  },
  destroyed() {
    this.$store.dispatch('clearCurrentCocktail')
  }
}
</script>
