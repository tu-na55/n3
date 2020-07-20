<template>
  <v-app>
    <!-- <header>
      <nav>
        <nuxt-link to="/">def_Home</nuxt-link>
        <nuxt-link to="/menu1">Menu1</nuxt-link>
      </nav>
    </header> -->
    <v-app-bar class="red accent-4" dense dark hide-on-scroll scroll-target="#scrolling-techniques-4" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>App</v-toolbar-title>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <!-- :mini-variant="miniVariant"  -->
      <!-- permanent -->
      <v-list nav dense>
        <v-list-item-content>
          <v-list-item-title class="title">Menu</v-list-item-title>
          <v-list-item-subtitle>subtitle</v-list-item-subtitle>
        </v-list-item-content>

        <v-divider></v-divider>
        <v-list-item-group v-model="group" active-class="red--text text--accent-4">
          <!-- <v-list-item class="px-2">
        </v-list-item> -->

          <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
              </v-btn> -->

          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-divider></v-divider>

        <!-- <v-list-item-group v-model="group2" active-class="grey--text">
          <v-list-item v-for="(item2, i) in items2" :key="i">
            <v-list-item-action>
              <v-icon>{{ item2.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item2.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group> -->
      </v-list>
    </v-navigation-drawer>

    <v-container my-2></v-container>
    <v-sheet id="scrolling-techniques-4" class="overflow-y-auto" max-height="600">
      <v-container style="height: 1000px;">
        <nuxt />
      </v-container>
    </v-sheet>

    <!--
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar> -->
    <!-- <nuxt /> -->
    <!-- <Vmain> -->

    <!-- </Vmain> -->

    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script lang="ts">
export default {
  data() {
    return {
      drawer: false,
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
          title: '状況：index',
          to: '/',
        },
        // {
        //   icon: 'list',
        //   title: 'Home2',
        //   to: '/',
        // },
        {
          icon: 'dashboard',
          title: '作業：menu1',
          to: '/menu1',
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
      //   {
      //     icon: 'info',
      //     title: 'Release',
      //   },
      //   {
      //     icon: 'Settings',
      //     title: '設定',
      //   },
      // ],
    }
  },
}
</script>
<style lang="scss">
$general-fonts: Roboto, 'Noto Sans JP', sans-serif;
// 'Noto Sans JP', Hiragino Kaku Gothic Pro, sans-serif, Meiryo, MS PGothic, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Arial, 'メイリオ';

html,
body,
#app {
  //   margin: 0;
  font-family: $general-fonts;
  //   /* background: #e1ddce; */
}
</style>
