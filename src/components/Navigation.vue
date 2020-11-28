<template>
  <v-menu transition="scroll-y-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ma-2"
             icon
             color="orange"
             v-bind="attrs"
             v-on="on">
        <v-app-bar-nav-icon dark/>
      </v-btn>

    </template>
    <v-list>
      <v-list-item v-for="(page, index) in getPages" :key="index" link>
        <v-list-item-title v-text="page.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Navigation",
  computed: {
    ...mapGetters(['getPages'])
  }
}
</script>
