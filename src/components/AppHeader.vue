<template>
  <v-app-bar color="orange" flat app>
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-select single-line
                    dark
                    prepend-icon="mdi-earth"
                    hide-details
                    :items="languages"
                    v-model="language"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>


    <v-spacer></v-spacer>
    <Navigation/>

  </v-app-bar>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "AppHeader",
  components: {Navigation},
  data: () => ({
    languages: ['English', "Russian"],
    language: 'English',
  }),
}
</script>

<style scoped>

</style>
