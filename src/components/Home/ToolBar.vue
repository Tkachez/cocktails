<template>
  <v-container>
    <v-row>
      <v-text-field :placeholder="$t('search.placeholder')"
                    v-model="query"
                    color="black"
                    clearable
                    @input="$emit('input', query)"></v-text-field>
      <div class="my-1">
        <v-btn
            large
            tile
            outlined
            color="black"
            @click="getRandom"
        >
          {{ $t('search.getRandomBtnText') }}
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "ToolBar",
  data: () => ({
    query: '',
  }),
  methods: {
    setCurrentCockTail(item) {
      this.query = ''
      this.$store.dispatch('clearSearch')
      this.$store.dispatch('loadFullInfo', item.idDrink)
    },
    getRandom() {
      this.$store.dispatch('randomCocktail')
    }
  },
  computed: {
    ...mapGetters(['searchResults']),
  },
  destroyed() {
    this.$store.dispatch('clearSearch')
  }
}
</script>
