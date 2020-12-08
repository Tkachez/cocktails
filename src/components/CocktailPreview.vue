<template>
  <v-container>
    <v-fade-transition>
      <AlertComponent
          v-if="message"
          :type="messageType"
          v-slot:alert
          @close="dismissAlert">{{ message }}</AlertComponent>
    </v-fade-transition>
    <v-row v-if="currentCocktail">
      <CocktailCard
          :full-card="fullCard"
          :preview="true"
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
  props: ['fullCard'],
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
      this.$store.dispatch('addCocktailToDb', this.currentCocktail)
          .then(() => {
            this.showSuccessAlert()
            this.$store.dispatch('setCurrentCockTail', null)
          })
          .catch(() => {
            this.$store.dispatch('setCurrentCockTail', null)
            this.message = this.$t('alertMessages.error.alreadyExists')
            this.messageType = 'error'
          })
    },
    toggleDialog() {
      this.dialog = !this.dialog
    },
    showSuccessAlert() {
      this.message = this.$t('alertMessages.success.added')
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
    this.$store.dispatch('setCurrentCockTail', null)
  }
}
</script>
