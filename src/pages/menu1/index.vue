<template>
  <div class="container mx-auto">
    <v-card class="px-3">
      <h1>pages_menu1</h1>
      <h2>input_prop</h2>
      <div>inputPropA：<input v-model="inputPropA" type="text" /></div>
      <div>inputPropB：<input v-model.number="inputPropB" type="text" /></div>

      <h2>counter</h2>
      <div>counter：{{ counter }}</div>
      <CompMenu1 :prop-msg="inputPropA" :prop-b="inputPropB" @countUp="handleCountUp" />
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CompMenu1 from '@/components/samples/Menu1.vue'
import MyObj from '@/models/MyObj.ts'

@Component({
  components: {
    CompMenu1,
  },
})
export default class PageMenu1Index extends Vue {
  // data
  counter: number = 0
  inputPropA: string | null = 'parent'
  inputPropB: number | null = 10

  // methods
  handleCountUp(payload: MyObj) {
    this.counter += payload.num
  }
}
</script>
