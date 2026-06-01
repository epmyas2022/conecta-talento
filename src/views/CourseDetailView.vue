<template>
  <div class="view-transition min-h-screen bg-gray-50">

    <br />
    <br />

    <!-- Back Button & Hero -->
    <div class="pt-20 pb-8 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <router-link
          to="/cursos"
          class="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Volver a Cursos
        </router-link>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ course?.title }}
        </h1>
        <p class="text-lg text-gray-600 mb-6">{{ course?.fullDescription }}</p>

        <div class="flex flex-wrap gap-4 items-center">
          <span
            class="px-4 py-2 rounded-full text-white font-semibold"
            :style="{ backgroundColor: course?.color }"
          >
            {{ course?.level }}
          </span>
          <div class="flex items-center gap-1">
            <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg"
              >★</span
            >
            <span class="text-gray-600 ml-2"
              >({{ course?.reviews }} reseñas)</span
            >
          </div>
          <span class="text-2xl font-bold" :style="{ color: course?.color }">{{
            course?.price
          }}</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column - Content -->
        <div class="lg:col-span-2">
          <!-- Course Image -->
          <div
            class="w-full h-96 rounded-xl mb-8 flex items-center justify-center text-6xl shadow-lg"
            :style="{ backgroundColor: course?.color }"
          >
             <img v-if="course?.iconUrl" :src="course.iconUrl" :alt="course.title" class="w-full h-full object-contain p-2" />
          </div>

          <!-- About Section -->
          <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              Sobre este curso
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              {{ course?.fullDescription }}
            </p>
            <p class="text-gray-700 leading-relaxed">
              Este curso está diseñado para emprendedores de todos los niveles
              que desean adquirir conocimientos prácticos y aplicables
              inmediatamente. A través de 24 lecciones interactivas, aprenderás
              desde los conceptos más básicos hasta estrategias avanzadas.
            </p>
          </div>

          <!-- What You'll Learn -->
          <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Lo que aprenderás
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(item, index) in course?.learningPoints"
                :key="index"
                class="flex items-start gap-3"
              >
                <svg
                  class="w-6 h-6 flex-shrink-0 mt-1"
                  :style="{ color: course?.color }"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-700">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Curriculum -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Temario del curso
            </h2>
            <div class="space-y-3">
              <div
                v-for="(lesson, index) in course?.curriculum"
                :key="index"
                class="border-l-4 p-4 bg-gray-50 rounded"
                :style="{ borderColor: course?.color }"
              >
                <h3 class="font-semibold text-gray-900">{{ lesson.title }}</h3>
                <p class="text-sm text-gray-600 mt-1">{{ lesson.duration }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl shadow-lg p-8 sticky top-24">
            <!-- Stats -->
            <div class="space-y-4 mb-6 pb-6 border-b">
              <div class="text-center">
                <div
                  class="text-3xl font-bold"
                  :style="{ color: course?.color }"
                >
                  {{ course?.lessons }}
                </div>
                <p class="text-gray-600">Lecciones</p>
              </div>
              <div class="text-center">
                <div
                  class="text-3xl font-bold"
                  :style="{ color: course?.color }"
                >
                  {{ course?.duration }}
                </div>
                <p class="text-gray-600">Duración total</p>
              </div>
              <div class="text-center">
                <div
                  class="text-3xl font-bold"
                  :style="{ color: course?.color }"
                >
                  {{ course?.students }}
                </div>
                <p class="text-gray-600">Estudiantes</p>
              </div>
            </div>

            <!-- Requirements -->
            <div class="mb-6 pb-6 border-b">
              <h3 class="font-bold text-gray-900 mb-3">Requisitos</h3>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-gray-400 mt-1">•</span>
                  <span>Ningún conocimiento previo requerido</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-gray-400 mt-1">•</span>
                  <span>Conexión a internet</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-gray-400 mt-1">•</span>
                  <span>30 minutos por día para estudiar</span>
                </li>
              </ul>
            </div>

            <!-- Instructor -->
            <div class="mb-8">
              <h3 class="font-bold text-gray-900 mb-3">Instructor</h3>
              <div class="flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-full"
                  :style="{ backgroundColor: course?.color }"
                ></div>
                <div>
                  <p class="font-semibold text-gray-900">Conecta Talento</p>
                  <p class="text-sm text-gray-600">Experto en emprendimiento</p>
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              class="w-full py-3 rounded-lg font-semibold text-white transition duration-300 text-lg"
              :style="{ backgroundColor: course?.color }"
            >
              Inscribirse Ahora
            </button>
            <button
              class="w-full mt-3 py-3 rounded-lg font-semibold border-2 transition duration-300"
              :style="{ borderColor: course?.color, color: course?.color }"
            >
              Agregar a favoritos
            </button>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import FooterComponent from "@/components/FooterComponent.vue";

interface Course {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  iconUrl?: string;
  color: string;
  level: string;
  duration: string;
  lessons: number;
  students: number;
  reviews: number;
  price: string;
  category: string;
  learningPoints: string[];
  curriculum: Array<{ title: string; duration: string }>;
}

const route = useRoute();
const course = ref<Course | null>(null);

const coursesData: { [key: number]: Course } = {
  1: {
    id: 1,
    title: "Bienvenido a Conecta Talento",
    description:
      "Conoce más sobre nuestro programa, lo que ofrecemos y cómo puedes beneficiarte de nuestros cursos.",
    fullDescription:
      "Este curso de bienvenida te introducirá a Conecta Talento, una plataforma dedicada a capacitar emprendedores. Aprenderás sobre nuestros programas, metodología y cómo aprovechar al máximo nuestros recursos.",
    icon: "🚀",
    iconUrl: "logo.png",
    color: "#36b3fa",
    level: "Bienvenida",
    duration: "1 hora",
    lessons: 1,
    students: 0,
    reviews: 487,
    price: "Gratis",
    category: "Emprendimiento",
    learningPoints: [
      "Conocer la misión de Conecta Talento",
      "Entender la estructura de los programas",
      "Aprender a navegar la plataforma",
      "Conectar con la comunidad de emprendedores",
    ],
    curriculum: [
      { title: "Introducción a Conecta Talento", duration: "15 min" },
      { title: "Tour por la plataforma", duration: "20 min" },
      { title: "Cómo usar los recursos", duration: "15 min" },
      { title: "Próximos pasos", duration: "10 min" },
    ],
  },
  2: {
    id: 2,
    title: "Introducción al Emprendimiento",
    description:
      "Descubre los fundamentos básicos para iniciar tu emprendimiento con éxito.",
    fullDescription:
      "Un curso completo que te guiará desde la idea inicial hasta el lanzamiento de tu primer negocio. Aprenderás conceptos clave de emprendimiento, validación de ideas y estrategias de crecimiento.",
    icon: "🎯",
    color: "#235fb4",
    level: "Principiante",
    duration: "4 semanas",
    lessons: 24,
    students: 1250,
    reviews: 487,
    price: "Gratis",
    category: "Emprendimiento",
    learningPoints: [
      "Conceptos fundamentales del emprendimiento",
      "Validación de ideas de negocio",
      "Análisis del mercado",
      "Creación de un plan de negocios",
      "Gestión de riesgos",
    ],
    curriculum: [
      { title: "¿Qué es el emprendimiento?", duration: "1h 30m" },
      { title: "De la idea al concepto", duration: "2h" },
      { title: "Investigación de mercado", duration: "2h 15m" },
      { title: "Plan de negocios", duration: "2h 30m" },
      { title: "Financiamiento inicial", duration: "1h 45m" },
      { title: "Lanzamiento del negocio", duration: "2h" },
    ],
  },
};

onMounted(() => {
  const courseId = parseInt(route.params.id as string);
  course.value = coursesData[courseId] || null;
});
</script>

<style scoped>
::view-transition-old(root) {
  animation: slide-out-right 0.5s ease-in-out;
}

::view-transition-new(root) {
  animation: slide-in-left 0.5s ease-in-out;
}

@keyframes slide-out-right {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100px);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
