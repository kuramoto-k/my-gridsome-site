<template>
  <div class="header-layout px-4 md:px:0">
    <header class="header">
      <strong>
        <g-link to="/">
          <g-image alt="Example image" src="~/burger.svg" width="60"/>
        </g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav-item" to="/">ホーム</g-link>
        <g-link class="nav-item" to="/menu/">メニュー</g-link>
        <g-link class="nav-item" to="/blog/">ブログ</g-link>
        <g-link class="nav-item" to="/store/">店舗</g-link>
      </nav>
    </header>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.header-layout {
  @apply w-full shadow pt-8 pb-2;
}
.header {
  @apply flex items-center justify-between mb-6 mx-auto px-4 max-w-screen-lg;
}
.nav-item {
  @apply inline-block font-semibold ml-12;
}
.nav-item:hover {
  @apply opacity-50;
}
</style>
