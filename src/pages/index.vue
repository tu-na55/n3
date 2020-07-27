<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)

        //- v-row(align="center" justify="center")
        //- v-col.text-center

        //- v-container(fluid)
        //- v-row
        //- v-col(cols="12" sm="6" offset-sm="3")
        //- v-col(v-for="i in 6" :key="i" cols="4")
        v-sheet.mx-auto
          ul
            li
              a(href="/menu1") menu1
              a(href="/menu2") menu2
              a(href="/menu3") menu3
              a(href="/post-preview") post-preview
            v-spacer
            v-btn(icon)
              v-icon mdi-magnify
            v-btn(icon)
              v-icon mdi-filter

        v-card.mx-auto
          v-card-title data: {{ cardTitle }}
          v-card-text
            .text-xs-right
              em
                small &mdash; text-xs-right

          v-list
            v-list-item(
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router exact
            )
              v-list-item-content
                v-list-item-title(v-text="item.title")

          v-card-actions
            v-tooltip(left)
              template(v-slot:activator="{ on }")
                v-btn(primary v-on="on") tooltip
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class PageIndex extends Vue {
  data() {
    return {
      cardTitle: '名前',
      items: [
        {
          // icon: 'dvr',
          title: '・最近の更新, board',
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
</script>
