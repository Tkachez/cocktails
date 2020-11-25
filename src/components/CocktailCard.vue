<template>
  <v-card
      class="mx-auto my-12"
      max-width="374"
  >
    <v-img
        height="250"
        :src="cocktail.strDrinkThumb"
    >
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-spacer></v-spacer>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="black"
                icon
                v-bind="attrs"
                v-on="on"
                @click="$emit('click', cocktail)"
            >
              <v-icon>{{ currentIcon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ btnText }} My List</span>
        </v-tooltip>
      </v-app-bar>
    </v-img>

    <v-card-title>{{ cocktail.strDrink }}</v-card-title>

    <v-card-text>
      <div class="subtitle-1">
        Type • {{ cocktail.strAlcoholic }}
      </div>
      <v-spacer></v-spacer>
      <div class="subtitle-1">
        Glass • {{ cocktail.strGlass }}
      </div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
          <div class="my-4 subtitle-1">
            Ingredients
          </div>
          <v-list>
            <v-list-item v-for="ingredient in ingredients" :key="ingredient.id">
              {{ ingredient.title }} | {{ ingredient.measure }}
            </v-list-item>
          </v-list>
        </v-card-text>
      </div>
    </v-expand-transition>
    <v-card-actions>
      <v-btn
          color="deep-orange lighten-2"
          text
          @click="show = !show"
      >
        Show {{ toggleText }}
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
          icon
          @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CocktailCard",
  props: ['cocktail', 'listItem'],
  data: () => ({
    show: false,
  }),
  computed: {
    toggleText() {
      return this.show ? 'less' : 'more'
    },
    currentIcon() {
      return `mdi-${this.listItem ? 'minus' : 'plus'}-circle`
    },
    btnText() {
      return this.listItem ? 'Remove From' : 'Add To'
    },
    ingredients() {
      const result = [];
      for (let i = 1; i < 16; i++ ) {
        if (this.cocktail[`strIngredient${i}`]) {
          result.push({
            id: i,
            title: this.cocktail[`strIngredient${i}`],
            measure: this.cocktail[`strMeasure${i}`]
          });
        }
      }
      return result;
    },
  },
}
</script>

<style scoped>

</style>
