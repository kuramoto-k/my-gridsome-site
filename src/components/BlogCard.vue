<template>
  <div class="py-4">
    <div class="shadow-lg group container rounded-md bg-white flex justify-center items-center mx-auto">
      <div>
        <div class="w-full image-cover rounded-t-md" >
          <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
            <span class="text-base tracking-wide  font-bold border-b border-white font-sans">6</span>
            <span class="text-xs tracking-wide font-bold uppercase block font-sans">July</span>
          </div>
        </div>
        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
          <span class="block text-lg text-gray-800 font-bold tracking-wide">{{ post.title }}</span>
          <span  class="block text-gray-600 text-sm">
            {{ post.text }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      required: true
    }
  }
}
</script>

<style>

</style>
