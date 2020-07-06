<template>
  <div class="text-gray-700">
    <Header />
    <div class="layout">
      <slot/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="postcss" scoped>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  @apply mx-auto px-4 max-w-screen-lg;
}
</style>
