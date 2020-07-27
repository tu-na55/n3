<template lang="pug">
v-app-bar.red.darken-3(
    dark
    dense
    app
    hide-on-scroll
    scroll-target="#appBar_hideOnScroll"
)
  v-app-bar-nav-icon(@click.stop="drawer=!drawer")
  v-toolbar-title(v-text="appBarTitle")

</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { drawerStore } from '@/store'
@Component({})
export default class AppBar extends Vue {
  drawer() {
    drawerStore.setDrawer(!drawerStore.drawer)
  }

  data() {
    return {
      appBarTitle: 'App',
    }
  }
}
</script>
