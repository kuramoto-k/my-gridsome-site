<template>
  <Layout>
    <h1 class="text-3xl md:text-4xl font-semibold mt-8 mb-2 md:mb-8">店舗情報</h1>

    <div class="wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.9127369627386!2d135.75048562952514!3d35.011590852958264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001062accd7ee11%3A0xf81708d31f9cd91b!2z5LqM5p2h5Z-O5YmN6aeF!5e0!3m2!1sja!2sjp!4v1594047012427!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  </Layout>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
