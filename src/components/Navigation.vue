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
      <v-list-item @click="$router.push({ name: 'home' })">
        {{ $t('navigation.home') }}
      </v-list-item>
      <v-list-item @click="$router.push({ name: 'profile' })">
        {{ $t('navigation.profile') }}
      </v-list-item>
      <v-list-item @click="$router.push({ name: 'allIngredients' })">
        {{ $t('navigation.ingredients') }}
      </v-list-item>
      <v-list-item @click="$router.push({ name: 'about' })">
        {{ $t('navigation.about') }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "Navigation",
}
</script>
