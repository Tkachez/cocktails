<template>
  <v-row>
    <v-alert
        outlined
        prominent
        :type="type"
        width="100%"
    >
      <v-row align="center">
        <v-col class="grow">
          <slot name="alert"></slot>
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
  props: ['type'],
}
</script>

<style scoped>

</style>
