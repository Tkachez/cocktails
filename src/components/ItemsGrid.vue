<template>
  <v-row v-if="ingredients.length">
    <v-col v-for="item in ingredients" :key="item.strIngredient1">
      <ItemCard :item="item"/>
    </v-col>
  </v-row>
</template>

<script>
import ItemCard from "@/components/ItemCard";
import { mapGetters } from "vuex"

export default {
  name: "ItemsGrid",
  components: { ItemCard },
  computed: {
    ...mapGetters(['ingredients'])
  }
}
</script>

