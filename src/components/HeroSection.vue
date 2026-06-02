<template>

  <section
    class="relative min-h-[500px] md:h-screen bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden"
  >

  <slot name="header"></slot>


    <!-- Background Image with Overlay -->
    <div
      class="absolute inset-0 bg-cover bg-center opacity-20"
      style="
        background-image: url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80');
      "
    ></div>

    <!-- Content -->
    <div class="relative flex flex-col justify-center items-center h-full w-full pt-32 pb-12 md:pt-0 md:pb-0">
      <div class="text-center text-white px-6 sm:px-8 max-w-4xl mx-auto">
        <h1 class="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
          LA EDUCACIÓN SE ENCUENTRA
          <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 drop-shadow-md">CON EL EMPRENDIMIENTO</span>
        </h1>
        <p class="text-base sm:text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
          Conecta Talento capacita emprendedores en El Salvador para generar
          ingresos sostenibles y transformar sus vidas a través del conocimiento
          digital.
        </p>
        <button
          @click="scrollToEnrollment"
          class="text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg sm:text-xl bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-300 "
        >
          ¡ÚNETE AHORA!
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToEnrollment = () => {
  const element = document.getElementById("enrollment-form");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped></style>
