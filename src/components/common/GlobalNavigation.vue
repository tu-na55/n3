<template lang="pug">
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
      v-list-item-action(light @click.stop="drawer=!drawer")
        v-icon(color="grey darken-2") mdi-arrow-left
    v-list-item-title.grey--text.text--darken-4 Menu
      //- v-list-item-subtitle subtitle
    v-divider


    v-list-item-group(
      v-model="group"
      active-class="red--text text--darken-3"
    )
      v-list-item(
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router exact
      )
        v-list-item-action
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title(v-text="item.title")
    v-divider

    //- utils
    v-list-group(
      prepend-icon="account_circle"
      value="false"
      active-class="red--text text--darken-3"
    )
      template(v-slot:activator)
        v-list-item-title Users

      v-list-group(
        no-action
        sub-group
        value="false"
        active-class="red--text text--darken-3"
      )
        template(v-slot:activator)
          v-list-item-content
            v-list-item-title Admin
        v-list-item(
          v-for="(util, i) in utils"
          :key="i"
        )
          v-list-item-title(v-text="util.title")
          v-list-item-icon
            v-icon(v-text="util.icon")

//- :href="#" target="_blank"
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { drawerStore } from '@/store'
@Component({})
// export default class Navigation extends Vue {
//   get drawer(){
//     return DrawerStore.drawer
//   }
//   set drawer(val:any){
//     DrawerStore.setDrawer(val)
//   }
// }
export default class GlobalNavigation extends Vue {
  get drawer() {
    return drawerStore.drawer
  }

  set drawer(val: any) {
    drawerStore.setDrawer(val)
  }

  data() {
    return {
      // drawer: false,
      // drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      group: null,
      // group2: false,
      // clipped: false,
      // fixed: false,
      // miniVariant: true,
      //       right: true,
      //       rightDrawer: false,
      //       title: 'Vuetify.js',
      // watch: {
      //   group() {
      //     this.drawer = false
      //   },
      // },

      items: [
        {
          icon: 'dvr',
          title: '故障状況：index',
          to: '/',
        },
        {
          icon: 'dashboard',
          title: '作業（ローカル）:workspace',
          to: '/warkspace',
        },
        {
          icon: 'list',
          title: 'menu1',
          to: '/menu1',
        },
        {
          icon: 'list',
          title: 'menu2',
          to: '/menu2',
        },
        {
          icon: 'list',
          title: 'menu3',
          to: '/menu3',
        },
      ],
      utils: [
        { action: '', icon: 'people_outline', title: 'Management' },
        { action: '', icon: 'inbox', title: 'Export' },
        { action: '', icon: 'backup', title: 'Backup' },
        { action: '', icon: 'info', title: 'Release' },
        { action: '', icon: 'settings', title: 'Settings' },
      ],
      links: [
        {
          icon: 'link',
          title: 'main-page',
          to: '/_to',
        },
        {
          icon: 'link',
          title: 'share-page',
          to: '/_to',
        },
        {
          icon: 'link',
          title: 'watch',
          to: '/_to',
        },
        {
          icon: 'link',
          title: 'chat-tool',
          to: '/_to',
        },
      ],
      // items2: [
      //   // {
      //   //   icon: 'navigate_before',
      //   //   title: 'navigate_before',
      //   //   to: '/',
      //   // },
      //   // {
      //   //   icon: 'navigate_next',
      //   //   title: 'navigate_next',
      //   //   to: '/',
      //   // },

      // ],
    }
  }
}
</script>
