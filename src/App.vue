<script setup lang="ts">
import { RouterView } from "vue-router";
import AppbarComponent from "@/components/AppbarComponent.vue";
import FloatingChat from "@/components/FloatingChat.vue";
</script>

<template>
  <div>
    <AppbarComponent />
    <Transition name="page-transition" mode="out-in">
      <RouterView :key="$route.path" />
    </Transition>
    <FloatingChat />
  </div>
</template>

<style scoped>
.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
