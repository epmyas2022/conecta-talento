<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-2">
    <div class="max-w-7xl mx-auto">
      <div
        class="flex justify-between items-center px-6 py-2 rounded-full shadow-2xl"
        style="background: white"
      >
        <!-- Logo -->
        <div class="shrink-0">
          <div class="w-14 h-14 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Conecta Talento"
              class="h-8 w-8 object-contain"
            />
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-2">
          <a
            :href="`${baseUrl}#`"
            class="px-4 py-2 rounded-lg transition duration-300 text-sm font-medium text-blue-500"
          >
            LA ESCUELA
          </a>
          <a
            :href="`${baseUrl}#workshops`"
            class="px-4 py-2 rounded-lg transition duration-300 text-sm font-medium text-blue-500"
          >
            PROGRAMAS
          </a>
          <router-link
            to="/cursos"
            class="px-4 py-2 rounded-lg transition duration-300 text-sm font-medium text-blue-500"
          >
            CURSOS
          </router-link>
          <a
            :href="`${baseUrl}#team`"
            class="px-4 py-2 rounded-lg transition duration-300 text-sm font-medium text-blue-500"
          >
            EQUIPO
          </a>
        </div>

        <!-- Enrollment Button -->
        <button
          @click="scrollToEnrollment"
          class="hidden md:inline-block px-6 py-2 rounded-full font-semibold transition duration-300 text-sm bg-linear-to-r from-blue-500 to-blue-600 text-white"
        >
          INSCRIPCIÓN
        </button>

        <!-- Mobile menu button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-blue-500 p-2"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-3 px-6 py-4 rounded-2xl shadow-2xl border border-gray-100 bg-white"
      >
        <a
          :href="`${baseUrl}#`"
          class="block px-4 py-3 rounded-lg text-sm font-medium transition duration-300 text-blue-500 hover:bg-blue-50"
          @click="mobileMenuOpen = false"
        >
          LA ESCUELA
        </a>
        <a
          :href="`${baseUrl}#workshops`"
          class="block px-4 py-3 rounded-lg text-sm font-medium transition duration-300 text-blue-500 hover:bg-blue-50"
          @click="mobileMenuOpen = false"
        >
          PROGRAMAS
        </a>
        <router-link
          to="/cursos"
          class="block px-4 py-3 rounded-lg text-sm font-medium transition duration-300 text-blue-500 hover:bg-blue-50"
          @click="mobileMenuOpen = false"
        >
          CURSOS
        </router-link>
        <a
          :href="`${baseUrl}#team`"
          class="block px-4 py-3 rounded-lg text-sm font-medium transition duration-300 text-blue-500 hover:bg-blue-50"
          @click="mobileMenuOpen = false"
        >
          EQUIPO
        </a>
        <button
          @click="scrollToEnrollment"
          class="w-full mt-3 px-6 py-3 rounded-full font-semibold text-sm bg-linear-to-r from-blue-500 to-blue-600 text-white"
        >
          INSCRIPCIÓN
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const mobileMenuOpen = ref(false);

const router = useRouter();

const baseUrl = import.meta.env.BASE_URL || "/";

const scrollToEnrollment = () => {
  const element = document.getElementById("enrollment-form");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  router.push("/#enrollment-form");
};
</script>

<style scoped>
nav {
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(5px);
}
</style>
