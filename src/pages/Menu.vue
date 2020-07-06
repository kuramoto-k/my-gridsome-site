<template>
  <Layout>
    <h1 class="text-3xl md:text-4xl font-semibold mt-8 mb-2 md:mb-8">メニュー</h1>
    <ul class="inline-flex flex-wrap items-center">
      <li v-for="item in $page.menu.edges" :key="item.id" class="w-1/2 md:w-1/3">
        <g-link :to="item.node.path" class="block px-2 md:px-4">
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
