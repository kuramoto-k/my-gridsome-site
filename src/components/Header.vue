<template>
  <div class="header-layout px-4 md:px:0">
    <header class="header md:flex md:justify-between">
      <div class="header-container">
        <strong>
          <g-link to="/">
            <g-image alt="Example image" src="~/burger.svg" width="60"/>
          </g-link>
        </strong>
        <button @click="isOpen = !isOpen" type="button" :class="isOpen ? 'text-gray-700' : 'text-yellow-500'" class="inline-block md:hidden text-2xl font-bold px-2">
          {{ isOpen ? "×" : "M"}}
        </button>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="pt-4 md:block">
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
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<style lang="postcss" scoped>
.header-layout {
  @apply w-full shadow pt-8 pb-2;
}
.header {
  @apply mb-6 mx-auto px-4 max-w-screen-lg;
}
.header-container {
  @apply flex items-center justify-between;
}
.nav-item {
  @apply block font-semibold py-2;
}
.nav-item:hover {
  @apply opacity-50 bg-gray-100 rounded;
}

@screen md {
  .nav-item {
    @apply ml-12 inline-block;
  }
  .nav-item:hover {
    @apply bg-white;
  }
}
</style>
