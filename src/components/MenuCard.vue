<template>
  <div class="py-4">
    <div class="shadow-lg rounded">
      <div>
        <g-image :src="item.featuredImage" class="rounded-t"/>
      </div>
      <div>
        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
          <span class="block text-lg text-gray-800 font-bold tracking-wide">{{ item.title }}</span>
          <span class="text-gray-700 font-bold">
            <span class="text-5xl">
              {{ item.price }}
            </span>
            円
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true
    }
  }
}
</script>

<style>

</style>
