<template>
  <MarkdownLayout>
    <div class="markdown-body" v-html="$page.post.content" />
  </MarkdownLayout>
</template>


<page-query>
query Post ($path: String!) {
    post: post(path: $path) {
        title
        content
    }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title
        }
    }
}
</script>
