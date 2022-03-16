<template>
  <v-row class="button">
    <v-col>
      <v-btn min-width="110" :to="url" :color="color">
        {{ buttonText }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
  },
};
</script>
