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
        <router-link :to="page.link">
          {{ getTranslatedTitle(page.value) }}
        </router-link>

      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Navigation",
  computed: {
    ...mapGetters(['getPages']),
  },
  methods: {
    getTranslatedTitle(page) {
      //I'm not sure if that is the proper way to get translated value
      return this.$i18n.messages[this.$i18n.locale].navigation[page]
    },
  },
}
</script>
