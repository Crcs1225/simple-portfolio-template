<template>
  <div class="container px-4" :class="{ 'dark-mode': isDarkMode }">

    <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-2">
      <div class="col d-flex flex-column align-items-start gap-2">
        <h2 class="fw-bold lh-1 mb-3" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">My Skills</h2>
        <p class="lead" :class="{ 'text-light': isDarkMode, 'text-body-secondary': !isDarkMode }">
          As a passionate and results-oriented developer, I've gained a solid foundation in computer science and hands-on experience through my OJT. I'm particularly enthusiastic about building robust and innovative solutions across various platforms. Here are some of the key skills I bring to the table:
        </p>
        <a href="https://github.com/Crcs1225" target="_blank" class="btn btn-primary btn-lg" :class="{ 'btn-outline-light': isDarkMode, 'btn-primary': !isDarkMode }">
          View on GitHub
        </a>
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient rounded-3" :class="{ 'bg-light': isDarkMode, 'text-bg-primary': !isDarkMode }">
              <i class="bi bi-filetype-py" aria-hidden="true" :class="{ 'text-dark': isDarkMode, 'text-white': !isDarkMode }"></i>
            </div>
            <h4 class="fw-semibold mb-0" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Python</h4>
            <p :class="{ 'text-light': isDarkMode, 'text-body-secondary': !isDarkMode }">
              Proficient in Python for backend web development (Flask), cross-platform applications (Flet), and building machine learning models.
            </p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient rounded-3" :class="{ 'bg-light': isDarkMode, 'text-bg-primary': !isDarkMode }">
              <i class="bi bi-code-slash" aria-hidden="true" :class="{ 'text-dark': isDarkMode, 'text-white': !isDarkMode }"></i>
            </div>
            <h4 class="fw-semibold mb-0" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Web Development</h4>
            <p :class="{ 'text-light': isDarkMode, 'text-body-secondary': !isDarkMode }">
              Experienced in full stack web development using PHP, HTML, CSS, Bootstrap, and  Javascript to build dynamic and interactive websites.
            </p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient rounded-3" :class="{ 'bg-light': isDarkMode, 'text-bg-primary': !isDarkMode }">
              <i class="bi bi-phone" aria-hidden="true" :class="{ 'text-dark': isDarkMode, 'text-white': !isDarkMode }"></i>
            </div>
            <h4 class="fw-semibold mb-0" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Flutter</h4>
            <p :class="{ 'text-light': isDarkMode, 'text-body-secondary': !isDarkMode }">
              Utilized Flutter to develop a cross-platform mobile application as part of my thesis project.
            </p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient rounded-3" :class="{ 'bg-light': isDarkMode, 'text-bg-primary': !isDarkMode }">
              <i class="bi bi-database" aria-hidden="true" :class="{ 'text-dark': isDarkMode, 'text-white': !isDarkMode }"></i>
            </div>
            <h4 class="fw-semibold mb-0" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Databases</h4>
            <p :class="{ 'text-light': isDarkMode, 'text-body-secondary': !isDarkMode }">
              Hands-on experience with various database systems including SQLite, Firebase, and MariaDB (via XAMPP).
            </p>
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