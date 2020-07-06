<template>
  <Layout>
    <h1 class="text-4xl font-semibold my-8">メニュー</h1>
    <ul class="flex flex-wrap justify-between">
      <li v-for="item in $page.menu.edges" :key="item.id" class="w-1/3">
        <g-link :to="item.node.path" class="block w-11/12">
          <MenuCard :item="item.node"/>
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
{
  menu: allMenu {
    edges {
      node {
        id
        title
        price
        path
        featuredImage
      }
    }
  }
}
</page-query>

<script>
import MenuCard from "~/components/MenuCard"

export default {
  components: {
    MenuCard
  }
}
</script>

<style>

</style>
