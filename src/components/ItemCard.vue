<template>
  <v-hover v-slot="{ hover }">
    <v-card
        :elevation="hover ? 16 : 2"
        :class="{ 'on-hover': hover }"
        max-width="250"
        @click="showInfo"
    >
      <v-img
          min-width="200"
          height="250"
          :src="thumb"
      />
      <v-card-title >{{item.strIngredient1}}</v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "ItemCard",
  props: ['item'],
  methods: {
    showInfo() {
      window.scrollTo(0, 0)
      this.$store.dispatch('searchIngredient', this.item.strIngredient1).then(res => {
        this.$store.dispatch('setCurrentIngredient', res).then(() => {
          this.$store.dispatch('setCurrentCockTail', null)
          this.$router.push({ name: 'ingredient', params: { name: this.item.strIngredient1 }})
        })
      })
    }
  },
  computed: {
    ...mapGetters(['currentIngredient']),
    thumb() {
      return `https://thecocktaildb.com/images/ingredients/${this.item.strIngredient1}-Medium.png`
    }
  },
}
</script>

<style lang="sass" scoped>
.v-card.on-hover
  cursor: pointer
</style>
