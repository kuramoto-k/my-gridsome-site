<template>
  <MarkdownLayout>
    <div class="markdown-body" v-html="$page.menu.content" />
  </MarkdownLayout>
</template>


<page-query>
query Menu ($path: String!) {
    menu: menu(path: $path) {
        title
        content
    }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.menu.title
        }
    }
}
</script>
