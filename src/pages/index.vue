<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <!-- <div class="text-center">
        <logo />
        <vuetify-logo />
      </div> -->

      <!-- <v-card class="mx-auto" height="400" width="500"> -->
      <v-card>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <!-- <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action> -->
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>
        <v-stepper></v-stepper>
      </v-card>

      <v-card>
        <v-card-title class="headline">pageIndex_Home</v-card-title>
        <v-card-text>
          <div class="text-xs-right">
            <em><small>&mdash; text-xs-right</small></em>
          </div>
          <!-- <nuxt-link to="/menu1">メニュー1</nuxt-link> -->
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <!-- <v-row align="center" justify="center"> -->
    <!-- <v-col class="text-center"> -->
    <!-- <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn :href="source" icon large target="_blank" v-on="on">
          <v-icon large>mdi-code-tags</v-icon>
        </v-btn>
      </template>
      <span>Source</span>
    </v-tooltip> -->
    <!-- </v-col> -->
    <!-- </v-row> -->
  </v-layout>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class PageIndex extends Vue {
  data() {
    return {
      drawer: true,
      // drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      // fixed: false,
      // mini: true,
      // miniVariant: true,
      //       right: true,
      //       rightDrawer: false,
      //       title: 'Vuetify.js',
      items: [
        {
          // icon: 'dvr',
          title: '・最近の更新',
          to: '/',
        },
        {
          // icon: 'dvr',
          title: '・過去',
          to: '/',
        },
      ],
    }
  }
}
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

// export default {
//   components: {
//     Logo,
//     VuetifyLogo,
//   },
// }
</script>
