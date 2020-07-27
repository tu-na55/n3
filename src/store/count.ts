import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
// import { Mutation, MutationAction, Action, VuexModule, getModule, Module } from "vuex-module-decorators";

// playload用
// import MyObj from '~/models/MyObj'

// mutationとgettersはスネークケースのSET,GET始まりの名前
// actionsはmethodだからキャメルケースで自由。
// stateもキャメルケースで自由。といった構成がわかりやすくていいじゃないかと思う。

// 設定値: 取得した値 + 加算値、減算値
export interface ICountState {
  totalCount: number
  inputCount: number
}

@Module({ stateFactory: true, namespaced: true, name: 'count' })
export default class Count extends VuexModule implements ICountState {
  // state
  totalCount: number = 0
  inputCount: number = 0

  // getters
  // const getters = {
  //   counter: (state: State) => state.fuga
  // }

  get GET_TOTAL_COUNT(): number {
    return this.totalCount
  }

  get GET_INPUT_COUNT(): number {
    return this.inputCount
  }

  // get square(): number {
  //   return this._count * this._count
  // }

  // 型チェックができない問題
  // commit("SET_INCREMENT_COUNTER", "any") // ←なんでも受け付ける

  // @Action({})
  // public resetTotalCount() {
  //   this.SET_TOTAL_COUNT(0)
  // }

  // @Mutation
  // public SET_COUNT(payload: MyObj) {
  //   this.count = payload.num
  // }

  @Mutation
  public SET_INPUT_COUNT(num: number) {
    this.inputCount = num
  }

  @Mutation
  public SET_TOTAL_COUNT(num: number) {
    this.totalCount = num
  }

  // component
  // const id = 1
  // const name = 'userA'
  // this.$store.dispatch('testAction', { userId: id, userName: name })

  // action
  // testAction({ commit }, { userId, userName }) {
  //   const userData = 'userId:' + userId ', userName:' + userName
  //   commit('testMutation', userData)
  // }

  // @Action({ commit: 'INCREMENT_COUNT' })
  // incrementCount(payload: MyObj) {
  //   return payload
  // }

  @Action({ commit: 'SET_INPUT_COUNT' })
  public increment() {
    return this.inputCount + 1
  }

  @Action({ commit: 'SET_INPUT_COUNT' })
  public decrement() {
    return this.inputCount - 1
  }

  @Action({ commit: 'SET_TOTAL_COUNT' })
  public resetTotalCount() {
    return 0
  }

  @Action({ commit: 'SET_TOTAL_COUNT' })
  public setCount() {
    return this.totalCount + this.inputCount
  }

  @Action({})
  saveCount() {
    const data = {
      num: this.totalCount,
    }
    localStorage.setItem('count-data', JSON.stringify(data))
  }

  @Action({})
  restoreCount() {
    const data = localStorage.getItem('count-data')
    if (data) {
      this.SET_TOTAL_COUNT(JSON.parse(data))
    }
  }

  // MutationActionsを用いればデコレータ内で宣言されているstateに対してcommitを一気に行うことができる。returnにJSON形式でmutateする値を指定することができる。
  // actions + mutation
  // incrementCounter decrementCounter両方をリセットするアクションとミューテーション
  // @MutationAction({ mutate: ['incrementCount', 'decrementCount'] })
  // async resetCount() {
  //   return {
  //     incrementCount: 0,
  //     decrementCount: 1000,
  //   }
  // }
}

// export const countModule = getModule(Count)
