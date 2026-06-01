<template>
  <section id="courses" class="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Nuestros Cursos
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Aprende a tu propio ritmo con nuestros cursos diseñados especialmente para emprendedores
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Curso de Introducción -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div 
            class="h-40 bg-gradient-to-r flex items-center justify-center text-5xl"
            style="background: linear-gradient(135deg, #235fb4 0%, #36b3fa 100%);"
          >
            🚀
          </div>
          <div class="p-6">
            <div class="flex items-center gap-2 mb-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Principiante</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              Introducción al Emprendimiento
            </h3>
            <p class="text-gray-600 mb-4">
              Descubre los fundamentos básicos para iniciar tu emprendimiento con éxito. Aprende conceptos clave y primeros pasos.
            </p>
            <div class="space-y-2 mb-6">
              <div class="flex items-center text-sm text-gray-700">
                <svg class="w-4 h-4 mr-2" style="color: #36b3fa;" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Duración: 4 semanas
              </div>
              <div class="flex items-center text-sm text-gray-700">
                <svg class="w-4 h-4 mr-2" style="color: #36b3fa;" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Certificado incluido
              </div>
              <div class="flex items-center text-sm text-gray-700">
                <svg class="w-4 h-4 mr-2" style="color: #36b3fa;" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Acceso de por vida
              </div>
            </div>
            <button
              class="w-full py-2.5 rounded-lg font-semibold transition duration-300 text-white"
              style="background-color: #36b3fa;"
            >
              Ver Detalles
            </button>
          </div>
        </div>

        <!-- Espacio para más cursos -->
        <div class="bg-white rounded-xl shadow-lg p-8 flex items-center justify-center text-center border-2 border-dashed" style="border-color: #36b3fa;">
          <div>
            <div class="text-5xl mb-4">➕</div>
            <p class="text-gray-600 font-medium">Próximos cursos disponibles muy pronto</p>
            <p class="text-sm text-gray-500 mt-2">Estamos preparando más contenido para ti</p>
          </div>
        </div>

        <!-- Espacio para más cursos -->
        <div class="bg-white rounded-xl shadow-lg p-8 flex items-center justify-center text-center border-2 border-dashed" style="border-color: #36b3fa;">
          <div>
            <div class="text-5xl mb-4">➕</div>
            <p class="text-gray-600 font-medium">Próximos cursos disponibles muy pronto</p>
            <p class="text-sm text-gray-500 mt-2">Estamos preparando más contenido para ti</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          ¿Listo para comenzar?
        </h3>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Inscríbete ahora en nuestro curso de introducción y da el primer paso hacia el éxito empresarial
        </p>
        <button
          @click="scrollToEnrollment"
          class="px-8 py-3 rounded-lg font-semibold transition duration-300 text-white text-lg"
          style="background-color: #36b3fa;"

        >
          Inscribirse Ahora
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
