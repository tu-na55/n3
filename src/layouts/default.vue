<template lang="pug">
v-app#app
  //- AppBar
  //- GlobalNavigation
  v-app-bar.red.darken-3(
    dark
    dense
    app
  )
    //- hide-on-scroll
    //- scroll-target="#appBar_hideOnScroll"

    v-app-bar-nav-icon(@click.stop="drawer=!drawer")
    v-toolbar-title(v-text="appBarTitle")

  v-navigation-drawer(
      v-model="drawer"
      app
      absolute
      temporary
  )
      v-list(nav dense)
        //- :mini-variant="miniVariant"
        //- permanent
        v-list-item-content
          v-btn(icon light @click.stop="drawer=!drawer")
            v-icon(color="grey darken-2") mdi-arrow-left
          v-list-item-title.grey--text.text--darken-4 Menu
          //- v-list-item-subtitle subtitle

  v-container(my-2)
    //- v-sheet#appBar_hideOnScroll.overflow-y-auto(max-height="1000")
    VMain
      //- v-container(style="height: 1000px;")
      v-container(style="height: 1000px;")
        nuxt

</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import AppBar from '@/components/common/AppBar.vue'
// import GlobalNavigation from '@/components/common/GlobalNavigation.vue'
@Component({
  // components: {
  // AppBar,
  // GlobalNavigation,
  // },
})
export default class Default extends Vue {
  // export default {
  // el: '#app',
  // name: 'Default',
  // drawer() {
  //   DrawerStore.setDrawer(!DrawerStore.drawer)
  // }

  data() {
    return {
      drawer: false,
      appBarTitle: 'App',
    }
  }
}
</script>
<style lang="scss" scoped>
$general-fonts: -apple-system, BlinkMacSystemFont, Roboto, 'Noto Sans JP', 'Segoe UI', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

// -apple-system, BlinkMacSystemFont,
// 'Helvetica Neue', 'Segoe UI',
// Meiryo, Arial

// $bg-theme: rgba(0, 0, 0, 0.86);
// $color-theme: #eee;

// html,
// body
// background-color: #2c3e50;
// margin: 0;

#app {
  //   margin: 0;
  //  background: $bg-theme;
  font-family: $general-fonts;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
