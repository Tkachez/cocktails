<template>
  <v-dialog
      @click:outside="closeDialog"
      v-model="show"
      max-width="290"
  >
    <v-card>
      <v-card-title class="headline">
        Use Google's location service?
      </v-card-title>

      <v-card-text>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
            color="green darken-1"
            text
            @click="closeDialog"
        >
          Disagree
        </v-btn>

        <v-btn
            color="green darken-1"
            text
            @click="closeDialog"
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Modal",
  data: () => ({
    show: false
  }),
  watch: {
    getFullInfo() {
      this.show = !!this.getFullInfo
    }
  },
  methods: {
    closeDialog() {
      this.show = false
    }
  },
  computed: {
    ...mapGetters(['getFullInfo']),
  }
}
</script>

<style scoped>

</style>
