import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

export interface IDrawerState {
  isDrawer: boolean
}
// export interface IGlobalNavigation_DrawerState {
//   isDrawer: boolean
// }

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'drawer',
})
export default class Drawer extends VuexModule implements IDrawerState {
  isDrawer: boolean = false

  @Mutation
  setDrawer(isDrawer: boolean) {
    this.isDrawer = isDrawer
  }

  get drawer() {
    return this.isDrawer
  }
}
