<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="2" align-self="center">
        <v-card-text class="font-weight-bold text-right">
          Search by:
        </v-card-text>
      </v-col>
      <v-col cols="4">
        <v-radio-group
            v-model="filter"
            row
        >
          <v-radio
              color="orange"
              label="title"
              value="title"
          ></v-radio>
          <v-radio
              color="orange"
              label="ingredient"
              value="ingredient"
          ></v-radio>
          <v-radio
              color="orange"
              label="glass type"
              value="glass"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
      <v-row>
      <v-text-field :placeholder="$t('search.placeholder')"
                    v-model="query"
                    color="black"
                    clearable
                    @input="$emit('input', { filter, query })"></v-text-field>
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
    <v-row v-if="searchResults && searchResults.length">
      <v-card width="100%">
        <v-list>
          <v-list-item-group >
            <v-list-item v-for="item in searchResults" :key="item.id" @click="setCurrentCockTail(item)">
              <v-list-item-content>
                <v-list-item-title v-text="item.strDrink"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
    <v-row v-else-if="!searchResults && query">
      <v-alert
          type="warning"
          width="100%"
          dark
      >
        No items to choose from ...
      </v-alert>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "ToolBar",
  data: () => ({
    query: '',
    filter: 'title',
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
  }
}
</script>
