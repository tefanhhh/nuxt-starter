<template>
  <main class="container__main overflow-hidden">
    <slot />
    <Toaster />
  </main>
</template>
<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>
<style scoped>
.container__main {
  height: 100vh;
}
</style>
