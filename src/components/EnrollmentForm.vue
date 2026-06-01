<template>
  <section id="enrollment-form" class="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          ¡Únete a Conecta Talento!
        </h2>
        <p class="text-xl text-gray-300">
          Completa el formulario y comienza tu transformación hoy
        </p>
      </div>

      <form @submit.prevent="submitForm" class="bg-white rounded-lg shadow-xl p-8">
        <!-- Name -->
        <div class="mb-6">
          <label for="name" class="block text-gray-700 font-semibold mb-2">
            Nombre Completo *
          </label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            placeholder="Tu nombre"
          />
          <span v-if="errors.name" class="text-red-500 text-sm mt-1"
            >{{ errors.name }}</span
          >
        </div>

        <!-- Email -->
        <div class="mb-6">
          <label for="email" class="block text-gray-700 font-semibold mb-2">
            Correo Electrónico *
          </label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            placeholder="tu@correo.com"
          />
          <span v-if="errors.email" class="text-red-500 text-sm mt-1"
            >{{ errors.email }}</span
          >
        </div>

        <!-- Phone -->
        <div class="mb-6">
          <label for="phone" class="block text-gray-700 font-semibold mb-2">
            Teléfono *
          </label>
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            placeholder="+503 0000-0000"
          />
          <span v-if="errors.phone" class="text-red-500 text-sm mt-1"
            >{{ errors.phone }}</span
          >
        </div>

        <!-- Business Type -->
        <div class="mb-6">
          <label for="business" class="block text-gray-700 font-semibold mb-2">
            Tipo de Negocio o Emprendimiento *
          </label>
          <select
            v-model="form.business"
            id="business"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          >
            <option value="">Selecciona una opción</option>
            <option value="food">Venta de comida casera o postres</option>
            <option value="crafts">Manualidades o artesanías</option>
            <option value="services">Servicios básicos</option>
            <option value="digital">Venta digital/en línea</option>
            <option value="startup">Idea de negocio nueva</option>
            <option value="other">Otro</option>
          </select>
          <span v-if="errors.business" class="text-red-500 text-sm mt-1"
            >{{ errors.business }}</span
          >
        </div>

        <!-- Experience Level -->
        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2">
            Experiencia en negocios *
          </label>
          <div class="space-y-3">
            <label class="flex items-center">
              <input
                v-model="form.experience"
                type="radio"
                value="beginner"
                required
                class="mr-3"
              />
              <span class="text-gray-700">Principiante (sin experiencia)</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="form.experience"
                type="radio"
                value="intermediate"
                required
                class="mr-3"
              />
              <span class="text-gray-700"
                >Intermedio (menos de 2 años)</span
              >
            </label>
            <label class="flex items-center">
              <input
                v-model="form.experience"
                type="radio"
                value="advanced"
                required
                class="mr-3"
              />
              <span class="text-gray-700">Avanzado (más de 2 años)</span>
            </label>
          </div>
          <span v-if="errors.experience" class="text-red-500 text-sm mt-1"
            >{{ errors.experience }}</span
          >
        </div>

        <!-- Workshop Interest -->
        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2">
            ¿En qué talleres estás interesado? *
          </label>
          <div class="space-y-3">
            <label class="flex items-center">
              <input
                v-model="form.workshops"
                type="checkbox"
                value="digital"
                class="mr-3"
              />
              <span class="text-gray-700">Marketing Digital</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="form.workshops"
                type="checkbox"
                value="business"
                class="mr-3"
              />
              <span class="text-gray-700">Gestión de Negocios</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="form.workshops"
                type="checkbox"
                value="payments"
                class="mr-3"
              />
              <span class="text-gray-700">Pagos Electrónicos</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="form.workshops"
                type="checkbox"
                value="entrepreneurship"
                class="mr-3"
              />
              <span class="text-gray-700">Emprendimiento</span>
            </label>
          </div>
          <span v-if="errors.workshops" class="text-red-500 text-sm mt-1"
            >{{ errors.workshops }}</span
          >
        </div>

        <!-- Message -->
        <div class="mb-6">
          <label for="message" class="block text-gray-700 font-semibold mb-2">
            Cuéntanos tu historia
          </label>
          <textarea
            v-model="form.message"
            id="message"
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            placeholder="¿Cuál es tu negocio? ¿Qué esperas lograr? (Opcional)"
          ></textarea>
        </div>

        <!-- Terms -->
        <div class="mb-6">
          <label class="flex items-start">
            <input
              v-model="form.terms"
              type="checkbox"
              required
              class="mr-3 mt-1"
            />
            <span class="text-gray-700 text-sm">
              Acepto recibir actualizaciones sobre los programas de Conecta Talento
              y la política de privacidad *
            </span>
          </label>
          <span v-if="errors.terms" class="text-red-500 text-sm mt-1"
            >{{ errors.terms }}</span
          >
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg"
          style="background-color: #36b3fa;"
         
        >
          {{ isSubmitting ? "Enviando..." : "¡INSCRIBIRSE AHORA!" }}
        </button>

        <!-- Success Message -->
        <div v-if="submitSuccess" class="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ¡Gracias por tu inscripción! Nos pondremos en contacto pronto.
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  business: "",
  experience: "",
  workshops: [] as string[],
  message: "",
  terms: false,
});

const errors = ref({
  name: "",
  email: "",
  phone: "",
  business: "",
  experience: "",
  workshops: "",
  terms: "",
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);

const validateForm = () => {
  errors.value = {
    name: "",
    email: "",
    phone: "",
    business: "",
    experience: "",
    workshops: "",
    terms: "",
  };

  if (!form.value.name.trim()) {
    errors.value.name = "El nombre es requerido";
  }

  if (!form.value.email.trim()) {
    errors.value.email = "El correo es requerido";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = "El correo no es válido";
  }

  if (!form.value.phone.trim()) {
    errors.value.phone = "El teléfono es requerido";
  }

  if (!form.value.business) {
    errors.value.business = "Debes seleccionar un tipo de negocio";
  }

  if (!form.value.experience) {
    errors.value.experience = "Debes seleccionar tu nivel de experiencia";
  }

  if (form.value.workshops.length === 0) {
    errors.value.workshops = "Debes seleccionar al menos un taller";
  }

  if (!form.value.terms) {
    errors.value.terms = "Debes aceptar los términos";
  }

  return Object.values(errors.value).every((error) => error === "");
};

const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Log form data (in a real app, this would send to a backend)
  console.log("Form submitted:", form.value);

  isSubmitting.value = false;
  submitSuccess.value = true;

  // Reset form
  setTimeout(() => {
    form.value = {
      name: "",
      email: "",
      phone: "",
      business: "",
      experience: "",
      workshops: [],
      message: "",
      terms: false,
    };
    submitSuccess.value = false;
  }, 3000);
};
</script>

<style scoped></style>
