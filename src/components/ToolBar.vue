<template>
  <v-container>
    <v-row>
      <v-text-field placeholder="Search cocktails"
                    v-model="query"
                    color="black"
                    clearable
                    @input="$emit('input', query)"></v-text-field>
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
          color="blue-grey"
          width="100%"
          dark
      >
        No items to choose from ...
      </v-alert>
    </v-row>
    <v-fade-transition>
      <v-row v-if="getSuccessAlert">
        <v-alert width="100%" type="success">
          {{ getSuccessAlert }}
        </v-alert>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "ToolBar",
  data: () => ({
    query: '',
  }),
  methods: {
    setCurrentCockTail(item) {
      this.query = ''
      this.$store.dispatch('clearSearch')
      this.$store.dispatch('setCurrentCockTail', item)
    }
  },
  computed: {
    ...mapGetters(['searchResults', 'getSuccessAlert'])
  }
}
</script>
