<template>
  <v-app>
    <AppHeader @click="toggleNav" @input="onChangeLocale"/>
    <router-view></router-view>
    <Modal/>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Modal from "@/components/Modal";
export default {
  name: 'App',
  components: {
    Modal,
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
