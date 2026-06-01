<script setup lang="ts">
import { RouterView } from "vue-router";
import AppbarComponent from "@/components/AppbarComponent.vue";
</script>

<template>
  <div>
    <AppbarComponent />
    <Transition name="page-transition" mode="out-in">
      <RouterView :key="$route.path" />
    </Transition>
  </div>
</template>

<style scoped>
.page-transition-enter-active {
  animation: slideInRight 0.5s ease-out;
}

.page-transition-leave-active {
  animation: slideOutLeft 0.5s ease-in;
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutLeft {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>
