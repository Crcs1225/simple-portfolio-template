<template>
  <div class="row flex-lg-row-reverse align-items-center g-5 " :class="{ 'dark-mode': isDarkMode }">
    <div class="col-12 col-md-6">
      <img src="../assets/hero.png" class="d-block mx-lg-auto img-fluid" alt="icon" width="700" height="500" loading="lazy">
    </div>
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold lh-1 mb-3" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Marc Daniel Caracas</h1>
      <p class="lead" :class="{ 'text-light': isDarkMode, 'text-body-emphasis': !isDarkMode }">With a Computer Science degree and hands-on OJT experience, I'm an entry-level developer passionate about building high-quality web and systems. I offer skills in programming, coding, testing, and debugging to help companies bring their innovative ideas to life with reliable and efficient technology.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <router-link to="/projects" class="btn btn-primary btn-lg px-4 me-md-2" :class="{ 'btn-outline-light': isDarkMode, 'btn-primary': !isDarkMode }">
          View Projects
        </router-link>
        <a href="/assets/resume.pdf" download="Marc_Daniel_Caracas_Resume.pdf" class="btn btn-outline-secondary btn-lg px-4" :class="{ 'btn-outline-light': isDarkMode, 'btn-outline-secondary': !isDarkMode }">
          Resume
        </a>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// Access the isDarkMode getter
const isDarkMode = computed(() => store.getters.isDarkMode);
</script>

<style scoped>
/* Your component-specific styles */
</style>