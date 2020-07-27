import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
// import Drawer from '@/store/drawer'
import Count from '@/store/count'
import User from '@/store/user'

// eslint-disable-next-line import/no-mutable-exports
// let drawerStore: Drawer
// eslint-disable-next-line import/no-mutable-exports
let countStore: Count
// eslint-disable-next-line import/no-mutable-exports
let userStore: User

function initialiseStores(store: Store<any>): void {
  // drawerStore = getModule(Drawer, store)
  countStore = getModule(Count, store)
  userStore = getModule(User, store)
}

export {
  initialiseStores,
  countStore,
  userStore,
  // drawerStore,
}
