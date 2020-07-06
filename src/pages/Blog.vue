<template>
  <Layout>
    <h1 class="text-3xl md:text-4xl font-semibold mt-8 mb-2 md:mb-8">ブログ</h1>
    <ul class="flex flex-wrap justify-between">
      <li v-for="post in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path" class="block w-11/12">
          <Card :post="post.node"/>
        </g-link>
      </li>
    </ul>
  </Layout>
</template>


<page-query>
{
  posts: allPost (limit:3, sort: {order: ASC}){
    edges {
      node {
        id
        title
        path
        text
      }
    }
  }
}
</page-query>

<script>
import Card from "~/components/Card"

export default {
  components: {
    Card
  }
}
</script>

<style>

</style>
