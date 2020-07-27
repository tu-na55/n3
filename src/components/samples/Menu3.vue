<template>
  <div class="menu3">
    <table>
      <thead>
        <tr>
          <th>UserID</th>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.index">
          <td>
            <router-link :to="'/menu3/' + todo.userId">{{ todo.userId }}</router-link>
          </td>
          <td @click="handleClick(todo.id)">{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from 'nuxt-property-decorator'
// import TodoModel from '@/models/TodoModel'
// @Component({})
// export default class CompMenu3 extends Vue {
//   // props
//   @Prop({ default: false })
//   todos!: TodoModel[]

//   // methods
//   async handleClick(id: number) {
//     if (!id) {
//       alert('no parameter')
//     } else {
//       const data: any = await this.$axios.get('https://jsonplaceholder.typicode.com/todos/', { params: { id } })
//       console.log(data)
//     }
//   }

// asyncDataメソッドを使用している間は、thisキーワードにアクセスできないので、asyncDataメソッドはAxios、Vuexなどにアクセスできる引数としてcontextオブジェクトを受け取ります。したがって、AxiosとVuexをインポートする必要はありません。
// async asyncData({ $axios, store }) { //here we get Axios and Vuex
//   const json = await $axios.get(`https://myurl.com/${store.getters["getPath"]}`)
//   return { json }
// }
// }
// }
</script>
