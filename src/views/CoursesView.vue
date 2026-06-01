<template>
  <div class="view-transition min-h-screen bg-gray-50">
    
    <!-- Hero Section -->
    <div class="pt-24 pb-12 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cursos</h1>
        <p class="text-xl text-gray-600">Aprende habilidades esenciales para tu emprendimiento</p>
      </div>
    </div>

    <!-- Filters Section -->
    <div class="bg-white border-b py-6 sticky top-20 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div class="w-full md:w-96">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Buscar cursos..." 
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="flex gap-2 flex-wrap md:flex-nowrap">
            <button 
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = selectedCategory === category ? '' : category"
              :class="['px-4 py-2 rounded-lg font-medium transition duration-300', 
                selectedCategory === category 
                  ? 'text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200']"
              :style="selectedCategory === category ? { backgroundColor: '#36b3fa' } : {}"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Courses Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link
          v-for="course in filteredCourses" 
          :key="course.id"
          :to="`/cursos/${course.id}`"
          class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 block"
        >
        
          <!-- Course Image -->
          <div 
            class="w-full h-40 flex items-center justify-center text-5xl"
            :style="{ backgroundColor: course.color }"
          >
            <img v-if="course.iconUrl" :src="course.iconUrl" :alt="course.title" class="w-full h-full object-contain p-2" />
            <span v-else>{{ course.icon }}</span>
          </div>

          <!-- Course Info -->
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold px-2 py-1 rounded" :style="{ backgroundColor: course.color, color: 'white' }">
                {{ course.level }}
              </span>
              <span class="text-sm text-gray-500">{{ course.duration }}</span>
            </div>

            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ course.title }}</h3>
            <p class="text-sm text-gray-600 mb-4 line-clamp-2">{{ course.description }}</p>

            <!-- Rating -->
            <div class="flex items-center gap-2 mb-4">
              <div class="flex text-yellow-400">
                <span v-for="i in 5" :key="i" class="text-sm">★</span>
              </div>
              <span class="text-sm text-gray-500">({{ course.reviews }} reseñas)</span>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-2 mb-4 text-center text-xs text-gray-600">
              <div>
                <div class="font-semibold text-gray-900">{{ course.lessons }}</div>
                <div>Lecciones</div>
              </div>
              <div>
                <div class="font-semibold text-gray-900">{{ course.students }}</div>
                <div>Estudiantes</div>
              </div>
              <div>
                <div class="font-semibold text-gray-900">{{ course.price }}</div>
                <div>Precio</div>
              </div>
            </div>

            <!-- Button -->
            <button
              class="w-full py-2 rounded-lg font-semibold text-white transition duration-300 bg-blue-500 hover:bg-blue-600"
     
            >
              Ver Curso
            </button>
          </div>
        </router-link>
      </div>

      <!-- No results -->
      <div v-if="filteredCourses.length === 0" class="text-center py-12">
        <p class="text-xl text-gray-600">No se encontraron cursos que coincidan con tu búsqueda</p>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";

interface Course {
  id: number;
  title: string;
  description: string;
  icon?: string;
  iconUrl?: string;
  color: string;
  level: string;
  duration: string;
  lessons: number;
  students: number;
  reviews: number;
  price: string;
  category: string;
}

const courses = ref<Course[]>([
  {
    id: 1,
    title: "Bienvenido a Conecta Talento",
    description: "Conoce mas sobre nuestro programa, lo que ofrecemos y como puedes beneficiarte de nuestros cursos.",
    icon: "",
    iconUrl: "logo.png",
    color: "white",
    level: "Bienvenida",
    duration: "1 hora",
    lessons: 1,
    students: 0,
    reviews: 487,
    price: "Gratis",
    category: "Emprendimiento"
  },
 
]);

const searchQuery = ref("");
const selectedCategory = ref("");
const categories = ["Emprendimiento", "Marketing", "Negocios", "Ventas", "Digital"];

const filteredCourses = computed(() => {
  return courses.value.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = !selectedCategory.value || course.category === selectedCategory.value;
    return matchesSearch && matchesCategory;
  });
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
