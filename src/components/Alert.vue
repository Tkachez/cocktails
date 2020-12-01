<template>
  <v-row>
      <v-alert
          prominent
          :type="type"
          width="100%"
      >
        <v-row align="center">
          <v-col class="grow">
            {{ getMessage(type, message) }}
          </v-col>
          <v-col class="shrink">
            <v-btn v-if="type === 'error'"
                   color="white"
                   icon
                   @click="$emit('close')"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>

  </v-row>
</template>

<script>
export default {
  name: "Alert",
  props: ['message', 'type'],
  methods: {
    getMessage(type, message) {
      return this.$i18n.messages[this.$i18n.locale].alertMessages[type][message];
    }
  }
}
</script>

<style scoped>

</style>
