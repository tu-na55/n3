<template>
  <div class="menu2">
    <h2>Input</h2>
    inputCount：<input v-model.number="inputCount" type="text" />

    <h2>Display</h2>

    <div>totalCount：{{ totalCount }}</div>
    <!-- <div>result ++：{{ countStore.GET_INCREMENT_COUNT }}</div>
    <div>recult --：{{ countStore.GET_DECREMENT_COUNT }}</div> -->
    <!-- <div>cube：{{ cube }}</div> -->
    <h2>Button</h2>
    <div><button @click="handleIncrementCount()">Increment</button></div>
    <div><button @click="handleDecrementCount()">Dencrement</button></div>
    <div><button @click="handleSetCount()">Set</button></div>
    <div><button @click="handleResetInputCount()">reset</button></div>
    <div><button @click="handleSave()">Save</button></div>
    <div><button @click="handleRestore()">Restore</button></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { countStore } from '@/store'
// import { countModule } from '@/store/modules/count'
@Component({})
export default class CompMenu2 extends Vue {
  // computed
  get totalCount() {
    return countStore.GET_TOTAL_COUNT
  }

  get inputCount() {
    return countStore.GET_INPUT_COUNT
  }

  // data
  // inputNum: number = 0
  // methods
  handleIncrementCount() {
    //   // countStore.SET_INCREMENT_COUNT({ num: this._inputNum })
    countStore.increment()
  }

  handleDecrementCount() {
    // countStore.SET_DECREMENT_COUNT({ num: this._inputNum })
    countStore.decrement()
  }

  handleSetCount() {
    // countStore.setCount({ num: this.inputNum })
    countStore.setCount()
  }

  handleResetInputCount() {
    countStore.resetTotalCount()
  }

  handleSave() {
    countStore.saveCount()
    alert('保存しました')
  }

  handleRestore() {
    countStore.restoreCount()
    alert('復元しました')
  }
}
</script>
