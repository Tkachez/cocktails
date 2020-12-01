<template>
  <v-app>
    <AppHeader @click="toggleNav" @input="onChangeLocale"/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader";
export default {
  name: 'App',
  components: {
    AppHeader
  },
  data: () => ({
    navigationActive: false,
  }),
  methods: {
    toggleNav() {
      this.navigationActive = !this.navigationActive
    },
    onChangeLocale(data) {
      this.$i18n.locale = data;
    },
  }
};
</script>
