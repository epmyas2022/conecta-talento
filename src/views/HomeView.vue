<template>
  <div class="min-h-screen bg-transparent relative">
      <HeroSection>
    </HeroSection>
    <WorkshopsComponent />
    <TeamComponent />
    <EnrollmentForm />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import WorkshopsComponent from "@/components/WorkshopsComponent.vue";
import TeamComponent from "@/components/TeamComponent.vue";
import EnrollmentForm from "@/components/EnrollmentForm.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<style scoped></style>
