<template>
  <div class="text-gray-700">
    <Header />
    <div>
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
    Footer
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css');

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
