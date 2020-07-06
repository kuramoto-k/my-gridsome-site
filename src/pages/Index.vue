<template>
  <Layout>

    <Carousel />

    <h2 class="text-2xl font-semibold mt-16 mb-4">最新の記事</h2>

    <ul class="flex flex-wrap justify-between">
      <li v-for="post in $page.posts.edges" :key="post.id" class="w-full md:w-1/3">
        <g-link :to="post.node.path" class="block w-full md:w-11/12">
          <Card :post="post.node"/>
        </g-link>
      </li>
    </ul>

    <h2 class="text-2xl font-semibold mt-16 mb-4">メニュー</h2>

    <ul class="flex flex-wrap justify-between">
      <li v-for="item in $page.menu.edges" :key="item.id" class="w-full md:w-1/3">
        <g-link :to="item.node.path" class="block w-full md:w-11/12">
          <Menu :item="item.node"/>
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
  menu: allMenu (limit:3, sort: {order: ASC}){
    edges {
      node {
        id
        title
        path
        featuredImage
      }
    }
  }
}
</page-query>

<script>
import Carousel from "~/components/Carousel"
import Card from "~/components/Card"
import Menu from "~/components/Menu"

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Carousel,
    Card,
    Menu
  }
}
</script>
