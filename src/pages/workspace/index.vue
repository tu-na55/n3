<template>
  <div class="container mx-auto">
    <v-card>
      <v-row justify="space-around">
        <v-menu bottom origin="center center" transition="scale-transition">
          <DropMenuRounded />
          <v-list>
            <v-list-item v-for="(item, i) in drops" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
      <!-- <v-btn icon @click.stop="variant = !variant">
        <v-icon>mdi-{{ `chevron-${variant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
    </v-card>
    <v-card>
      <v-card-text>◎ローカルモード→publish</v-card-text>
      <v-card-text>◎オンラインモード→publish</v-card-text>
      <v-card-text>・親：アイコン（フォルダ追加：ハッシュ）</v-card-text>
      <v-card-text>・これまでの作業記録を表示</v-card-text>
      <v-card-text>・通知済みを表にして、日時を網羅的に表示</v-card-text>
      <v-card-text>・通知したいものにチェックし、マトリックスを生成する</v-card-text>
      <v-card-text>・</v-card-text>
      <v-card-text>・送信予定フォルダ。下書きBOX→チェック→送信（commit）</v-card-text>
      <v-card-text>・ </v-card-text>
      <v-card-text>・内容のコピー</v-card-text>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DropMenuRounded from '@/components/DropMenuRounded.vue'

@Component({
  components: {
    DropMenuRounded,
  },
})
export default class PageWorkspaceIndex extends Vue {
  data() {
    return {
      // drawer: true,
      // drawers: ['Default (no property)', 'Permanent', 'Temporary'],

      // fixed: false,
      //       right: true,
      //       rightDrawer: false,
      //       title: 'Vuetify.js',
      drops: [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }],
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

        {
          icon: 'publish',
          title: 'publish',
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
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete'],
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
