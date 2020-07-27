<template v-slot:activator="{ on, attrs }">
  <v-btn class="purple" color="primary" dark v-bind="attrs" v-on="on">
    Slide Y Transition
  </v-btn>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'
export default class DropMenuRounded extends Vue {}
</script>
