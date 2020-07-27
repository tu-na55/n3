<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import PostModel from '~/models/PostModel'
@Component
export default class PostPreview extends Vue {
  @Prop({ type: Object, required: true }) post!: PostModel
}
</script>
