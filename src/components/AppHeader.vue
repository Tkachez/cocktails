<template>
  <v-app-bar color="orange" flat app>
    <v-select class="shrink"
              dark
              prepend-icon="mdi-earth"
              hide-details
              :items="[{text: $t('lang.en'), value: 'en'}, {text: $t('lang.ru'), value: 'ru'}]"
              v-model="internalValue"
              @input="$emit('input', internalValue)">
    </v-select>
    <v-spacer></v-spacer>
    <v-toolbar-title class="title">{{ $t('app.name') }}</v-toolbar-title>
    <Navigation />
  </v-app-bar>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "AppHeader",
  components: {
    Navigation,
  },
  data: () => ({
    internalValue: {
      text: 'English',
      value: 'en',
    },
  }),
}
</script>

<style scoped>
  .title {
    color: white;
  }
</style>
