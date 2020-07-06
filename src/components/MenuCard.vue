<template>
  <div class="py-4">
    <div class="shadow-lg group container rounded-md bg-white  max-w-sm flex justify-center items-center mx-auto rounded">
      <div>
        <g-image :src="item.featuredImage" class="rounded-l"/>
      </div>
      <div>
        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
          <span class="block text-lg text-gray-800 font-bold tracking-wide">{{ item.title }}</span>
          <span  class="block text-gray-600 text-sm">
            {{ item.text }}
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
