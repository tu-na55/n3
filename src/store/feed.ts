// import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
// import PostModel from '~/models/PostModel'

// export interface IFeedState {
//   posts: PostModel[]
// }

// @Module({ stateFactory: true, namespaced: true, name: 'feed' })
// export default class Feed extends VuexModule implements IFeedState {
//   _posts: PostModel[] = []

//   @Mutation
//   addPost(post: PostModel) {
//     this._posts = [...this._posts, post]
//   }

//   // @Action
//   // async loadPosts() {
//   //   const posts = await fetchPosts()
//   //   posts.forEach((post: PostModel) => {
//   //     this.addPost(post)
//   //   })
//   // }
// }
