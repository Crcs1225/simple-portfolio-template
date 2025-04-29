<template>
  <div class="container px-4" :class="{ 'dark-mode': isDarkMode }">

    <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-2">
      <div class="col d-flex flex-column align-items-start gap-2">
        <h2 class="fw-bold lh-1 mb-3" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Left-aligned title explaining these awesome features</h2>
        <p class="lead" :class="{ 'text-light': isDarkMode, 'text-body-secondary': !isDarkMode }">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="btn btn-primary btn-lg" :class="{ 'btn-outline-light': isDarkMode, 'btn-primary': !isDarkMode }">Primary button</a>
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient rounded-3" :class="{ 'bg-light': isDarkMode, 'text-bg-primary': !isDarkMode }">
              <i class="bi bi-collection" aria-hidden="true" :class="{ 'text-dark': isDarkMode, 'text-white': !isDarkMode }"></i>
            </div>
            <h4 class="fw-semibold mb-0" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Featured title</h4>
            <p :class="{ 'text-light': isDarkMode, 'text-body-secondary': !isDarkMode }">Paragraph of text beneath the heading to explain the heading.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient rounded-3" :class="{ 'bg-light': isDarkMode, 'text-bg-primary': !isDarkMode }">
              <i class="bi bi-gear-fill" aria-hidden="true" :class="{ 'text-dark': isDarkMode, 'text-white': !isDarkMode }"></i>
            </div>
            <h4 class="fw-semibold mb-0" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Featured title</h4>
            <p :class="{ 'text-light': isDarkMode, 'text-body-secondary': !isDarkMode }">Paragraph of text beneath the heading to explain the heading.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient rounded-3" :class="{ 'bg-light': isDarkMode, 'text-bg-primary': !isDarkMode }">
              <i class="bi bi-speedometer" aria-hidden="true" :class="{ 'text-dark': isDarkMode, 'text-white': !isDarkMode }"></i>
            </div>
            <h4 class="fw-semibold mb-0" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Featured title</h4>
            <p :class="{ 'text-light': isDarkMode, 'text-body-secondary': !isDarkMode }">Paragraph of text beneath the heading to explain the heading.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient rounded-3" :class="{ 'bg-light': isDarkMode, 'text-bg-primary': !isDarkMode }">
              <i class="bi bi-table" aria-hidden="true" :class="{ 'text-dark': isDarkMode, 'text-white': !isDarkMode }"></i>
            </div>
            <h4 class="fw-semibold mb-0" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Featured title</h4>
            <p :class="{ 'text-light': isDarkMode, 'text-body-secondary': !isDarkMode }">Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isDarkMode = computed(() => store.getters.isDarkMode);
</script>

<style scoped>
/* Dark mode styles for this component (if needed) */
.container.dark-mode {
  background-color: #282828;
  color: #dcdcdc;
}

/* Custom styling for the icon div */
.feature-icon-small {
  width: 2.5rem; /* Adjust size as needed */
  height: 2.5rem; /* Adjust size as needed */
  margin-right: 1rem; /* Space to the right of the icon */
  margin-bottom: 0.5rem; /* Optional: Space below the icon */
}
</style>