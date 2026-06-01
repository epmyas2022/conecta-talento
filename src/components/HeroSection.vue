<template>

  <section
    class="relative h-96 md:h-screen bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden"
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
    <div class="relative flex items-center justify-center h-full">
      <div class="text-center text-white px-4">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          LA EDUCACIÓN SE ENCUENTRA
          <br />
          <span style="color: #36b3fa;">CON EL EMPRENDIMIENTO</span>
        </h1>
        <p class="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Conecta Talento capacita emprendedores en El Salvador para generar
          ingresos sostenibles y transformar sus vidas a través del conocimiento
          digital.
        </p>
        <button
          @click="scrollToEnrollment"
          class="text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg"
          style="background-color: #36b3fa;"
       
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
