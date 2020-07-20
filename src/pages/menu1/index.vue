<template>
  <div class="container mx-auto">
    <v-card>
      <v-card-text>・親：アイコン（フォルダ追加：ハッシュ）</v-card-text>
      <v-card-text>・これまでの作業記録を表示</v-card-text>
      <v-card-text>・通知済みを表にして、日時を網羅的に表示</v-card-text>
      <v-card-text>・通知したいものにチェックし、マトリックスを生成する</v-card-text>
      <v-divider></v-divider>

      <!-- <v-navigation-drawer v-model="drawer" permanent light expand-on-hover> -->
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" class="px-2">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-card-text>・子：アイコン（コンポネント追加・削除） ＋ドロップ（コンポネントの種類選択）</v-card-text>
      <v-card-text>・新規ID→空のアセット</v-card-text>
      <v-card-text>・新規ID→既存IDからコピー（状態はリセットされる）</v-card-text>
      <v-card-text>・既存ID→コンポネントの取得→保存して書き換える</v-card-text>
      <v-card-text>※編集中はロックがかかる。削除できないようバツにし、グレイアウト。</v-card-text>

      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(item2, i) in items2" :key="i" class="px-2">
          <v-list-item-action>
            <v-icon>{{ item2.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item2.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- </v-navigation-drawer> -->
    </v-card>
    <v-card class="px-3">
      <h1>pages_menu1</h1>
      <h2>input_prop</h2>
      <div>inputPropA：<input v-model="inputPropA" type="text" /></div>
      <div>inputPropB：<input v-model.number="inputPropB" type="text" /></div>

      <h2>counter</h2>
      <div>counter：{{ counter }}</div>
      <CompMenu1 :prop-a="inputPropA" :prop-b="inputPropB" @countUp="handleCountUp" />
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CompMenu1 from '@/components/Menu1.vue'
import IMyObj from '@/models/IMyObj.ts'

@Component({
  components: {
    CompMenu1,
  },
})
export default class PageMenu1Index extends Vue {
  // data
  counter: number = 0
  inputPropA: string = 'test'
  inputPropB: number | null = 10

  // methods
  handleCountUp(payload: IMyObj) {
    this.counter += payload.num
  }

  data() {
    return {
      drawer: true,
      // drawers: ['Default (no property)', 'Permanent', 'Temporary'],

      // fixed: false,
      //       right: true,
      //       rightDrawer: false,
      //       title: 'Vuetify.js',
      items: [
        {
          icon: 'create_new_folder',
          title: '新しい作業スペース',
        },
        {
          icon: 'folder',
          title: 'folder',
        },
        {
          icon: 'folder_open',
          title: 'folder_open',
        },

        {
          icon: 'arrow_right',
          title: 'folder_open',
        },
        {
          icon: 'arrow_drop_down',
          title: 'folder_open',
        },
        {
          icon: 'send',
          title: 'send',
        },
        // {
        //   icon: 'text_snippet',
        //   title: 'text_snippet',
        //   to: '/',
        // },
        // {
        //   icon: 'attach_email',
        //   title: 'attach_email',
        //   to: '/',
        // },
        // {
        //   icon: 'table_view',
        //   title: 'table_view',
        //   to: '/',
        // },
      ],
      items2: [
        {
          icon: 'add_circle',
          title: 'add_circle',
        },

        {
          icon: 'block',
          title: 'block',
        },
        {
          icon: 'content_copy',
          title: 'content_copy',
        },
        {
          icon: 'content_paste',
          title: 'content_paste',
        },

        {
          icon: 'message',
          title: 'message',
        },

        {
          icon: 'create',
          title: 'create',
        },
        {
          icon: 'clear',
          title: 'clear',
        },

        {
          icon: 'ballot',
          title: 'ballot',
        },
        {
          icon: 'business',
          title: 'business',
        },

        // {
        //   icon: 'rule',
        //   title: 'menu1',
        //   to: '/menu1',
        // },
      ],
    }
  }
}
</script>
