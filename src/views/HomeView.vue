<template>
  <div class="min-h-screen bg-transparent relative">
      <HeroSection>
    </HeroSection>
    <WorkshopsComponent />
    <EnrollmentForm />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import WorkshopsComponent from "@/components/WorkshopsComponent.vue";
import EnrollmentForm from "@/components/EnrollmentForm.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<style scoped></style>
