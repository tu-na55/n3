<template>
  <div class="container">
    <h1>Axios</h1>
    <CompMenu3 :todos="todos" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { $axios } from '@/utils/axios-accessor'
import CompMenu3 from '@/components/samples/Menu3.vue'
import TodoModel from '@/models/TodoModel'
@Component({
  components: {
    CompMenu3,
  },
})
export default class PageMenu3Index extends Vue {
  // lifecycle hook
  // async asyncData(): Promise<any> {
  const todos: TodoModel {
    userId(100),
    id(1),
    title: string = 'test_title',
    completed: boolean = false,
  }
  console.log(todos)
  //   const todos: TodoModel[] = await $axios.$get('https://jsonplaceholder.typicode.com/todos')
  //   console.log(todos)
  //   return {
  //     todos,
  //   }
  // }
// }
</script>

<style>
/* .container {
  text-align: center;
}
.container h1 {
  padding: 1em 0;
}
.container table {
  margin: 0 auto;
} */
</style>
