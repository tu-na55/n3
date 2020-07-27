<template lang="pug">
  v-app
</template>
//-
<header>
  //-
  <nav>
    //- <nuxt-link to="/">def_Home</nuxt-link> //- <nuxt-link to="/menu1">Menu1</nuxt-link>

    v-app-bar( class="red darken-3", dense dark hide-on-scroll, scroll-target="#appBar_hideOnScroll" ) v-app-bar-nav-icon(@click.stop="drawer=!drawer") v-toolbar-title App //-
    <!-- <v-btn icon @click.stop="clipped = !clipped">
      //-     <v-icon>mdi-application</v-icon>
      //- <!-- < /> -->

    v-container(my-2="") v-sheet( id="appBar_hideOnScroll", class="overflow-y-auto", max-height="1000" ) //-
    <VMain>
      v-container(style="height: 1000px;") nuxt //-
      <!--
      //-   <v-btn icon @click.stop="fixed = !fixed">
      //-     <v-icon>mdi-minus</v-icon>
      //-   </v-btn>
      //-   <v-toolbar-title v-text="title" />
      //-   <v-spacer />
      //-   <v-btn icon @click.stop="rightDrawer = !rightDrawer">
      //-     <v-icon>mdi-n</v-icon>
      //-   </v-btn>
      //- </v-app-bar> -->
      //-
      <!-- <nuxt /> -->
      //-
      <!-- <Vmain> -->

      //-
      <!-- </Vmain> -->

      //-
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
      //- </v-navigation-drawer> -->

      <script lang="ts">
        // import { Vue } from 'nuxt-property-decorator'
        // import GlobalNavigation from '@/components/GlobalNavigation.vue'

        // @Component({components: { GlobalNavigation},})
        export default {
          // components: {
          //   GlobalNavigation,
          // },

          data() {
            return {
              drawer: true,
            }
          },
        }
      </script>
      <style lang="scss">
        $general-fonts: Roboto, 'Noto Sans JP', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

        // -apple-system, BlinkMacSystemFont,
        // Meiryo, Arial

        // 'Noto Sans JP', Hiragino Kaku Gothic Pro, sans-serif, Meiryo, MS PGothic, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Arial, 'メイリオ';

        html,
        body,
        #app {
          //   margin: 0;
          font-family: $general-fonts;
          //   /* background: #e1ddce; */
        }
      </style></VMain
    >
  </nav>
</header>
