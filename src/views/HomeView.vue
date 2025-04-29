<template>
  <div class="row flex-lg-row-reverse align-items-center g-5 " :class="{ 'dark-mode': isDarkMode }">
    <div class="col-12 col-md-6">
      <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
    </div>
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold lh-1 mb-3" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Your Brand Name</h1>
      <p class="lead" :class="{ 'text-light': isDarkMode, 'text-body-emphasis': !isDarkMode }">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <router-link to="/projects" class="btn btn-primary btn-lg px-4 me-md-2" :class="{ 'btn-outline-light': isDarkMode, 'btn-primary': !isDarkMode }">
          View Projects
        </router-link>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" :class="{ 'btn-outline-light': isDarkMode, 'btn-outline-secondary': !isDarkMode }">Resume</button>
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