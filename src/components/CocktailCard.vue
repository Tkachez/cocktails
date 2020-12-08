<template>
  <v-hover :disabled="fullCard" v-slot="{ hover }">
    <v-card
        :elevation="hover ? 12 : 2"
        class="mx-auto my-12"
        :max-width="preview ? '50%' : '374'"
        @click="fullCard ? null : handleClick(cocktail)"
    >
      <v-img
          height="250"
          :src="cocktail.strDrinkThumb"
      />
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-card-title >{{ cocktail.strDrink }}</v-card-title>
        <v-spacer></v-spacer>
        <v-tooltip v-if="fullCard" right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="orange"
                icon
                v-bind="attrs"
                v-on="on"
                @click="$emit('click', cocktail)"
            >
              <v-icon>{{ currentIcon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ btnText }} {{ $t('cocktail.myList') }}</span>
        </v-tooltip>
      </v-app-bar>
      <v-card-text v-if="fullCard">
        <v-card-text>
          <div class="subtitle-1">
            {{ $t('cocktail.type') }} • {{ cocktail.strAlcoholic }}
          </div>
          <v-spacer></v-spacer>
          <div class="subtitle-1">
            {{ $t('cocktail.glass') }}  • {{ cocktail.strGlass }}
          </div>
        </v-card-text>
      </v-card-text>
      <div v-if="fullCard">
        <v-expand-transition>
          <div v-show="show">
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <v-card-text class="font-weight-bold">
                {{ $t('cocktail.ingredients') }}
              </v-card-text>
              <v-list>
                <v-list-item v-for="ingredient in ingredients" :key="ingredient.id" >
                  <span @click="redirect(ingredient.title)">{{ ingredient.title }}</span> | {{ ingredient.measure }}
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <v-card-text class="font-weight-bold">
                {{ $t('cocktail.instructions') }}
              </v-card-text>
              <v-card-text>
                {{ cocktail.strInstructions }}
              </v-card-text>
            </v-card-text>
          </div>

        </v-expand-transition>
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <v-btn
              color="deep-orange lighten-2"
              text
              @click="show = !show"
          >
            {{ $t('cocktail.show') }} {{ toggleText }}
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
              icon
              @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-app-bar>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "CocktailCard",
  props: ['cocktail', 'fullCard', 'preview', 'profile'],
  data: () => ({
    show: false,
  }),
  methods: {
    handleClick(cocktail) {
      this.$emit('info', cocktail)
    },
    redirect(name) {
      this.$store.dispatch('setCurrentCockTail', null)
      this.$router.push({ name:'ingredient', params: { name }})
    }
  },
  computed: {
    ...mapGetters(['currentIngredient']),
    toggleText() {
      return this.show ? this.$t('cocktail.less') : this.$t('cocktail.more')
    },
    currentIcon() {
      return `mdi-${this.profile ? 'minus' : 'plus'}-circle`
    },
    btnText() {
      return this.profile ? this.$t('cocktail.remove') : this.$t('cocktail.add')
    },
    ingredients() {
      const result = [];
      for (let i = 1; i < 16; i++) {
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
