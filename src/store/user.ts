import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
// import IUser from '@/models/UserModel'

export interface IUser {
  email: string
  password: string
}

@Module({ stateFactory: true, namespaced: true, name: 'user' })
export default class User extends VuexModule implements IUser {
  // state
  email: string = ''
  password: string = ''

  // getter
  get GET_EMAIL(): string {
    return this.email
  }

  get GET_PASSWORD(): string {
    return this.password
  }

  // mutation
  @Mutation
  SET_USERINFO(payload: IUser) {
    this.email = payload.email
    this.password = payload.password
  }

  @Mutation
  RESET_USERINFO() {
    this.email = ''
    this.password = ''
  }

  // action
  @Action({ commit: 'SET_USERINFO' })
  setUserInfo(payload: IUser) {
    return payload
  }

  @Action({ commit: 'RESET_USERINFO' })
  resetUserInfo() {}
}
