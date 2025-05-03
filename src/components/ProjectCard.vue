<template>
  <div class="col">
    <div
      class="card card-cover h-100 overflow-hidden rounded-4 shadow-lg"
      :class="{ 'dark-mode': isDarkMode }"
      :style="cardBackgroundStyle"
    >
      <div
        class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1"
        :class="{
          'text-white': isDarkMode,
          'text-dark': !isDarkMode,
          'light-mode-text-bg': !isDarkMode,
          'dark-mode-text-bg': isDarkMode
        }"
      >
        <h3
          class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
          :class="{ 'text-white': isDarkMode, 'text-dark': !isDarkMode }"
        >
          {{ props.project.title }}
        </h3>
        <ul class="d-flex list-unstyled mt-auto">
          <li class="me-auto">
            <img
              :src="props.project.authorImage"
              alt="Author"
              width="32"
              height="32"
              class="rounded-circle border"
              :class="{ 'border-white': !isDarkMode, 'border-secondary': isDarkMode }"
            />
          </li>
          <li
            class="d-flex align-items-center me-3"
            v-if="props.project.location"
            :class="{ 'text-light': isDarkMode, 'text-dark': !isDarkMode }"
          >
            <i
              class="bi bi-geo-fill me-2"
              role="img"
              aria-label="Location"
              :class="{ 'text-light': isDarkMode, 'text-dark': !isDarkMode }"
            ></i>
            <small>{{ props.project.location }}</small>
          </li>
          <li
            class="d-flex align-items-center"
            v-if="props.project.duration"
            :class="{ 'text-light': isDarkMode, 'text-dark': !isDarkMode }"
          >
            <i
              class="bi bi-calendar3 me-2"
              role="img"
              aria-label="Duration"
              :class="{ 'text-light': isDarkMode, 'text-dark': !isDarkMode }"
            ></i>
            <small>{{ props.project.duration }}</small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isDarkMode = computed(() => store.getters.isDarkMode);

const props = defineProps({
  project: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.image && value.title && value.authorImage;
    },
  },
});

// Computed property to generate the background-image style
const cardBackgroundStyle = computed(() => ({
  'background-image': `url(${props.project.image})`,
  'background-size': 'cover',
  'background-repeat': 'no-repeat',
  'background-position': 'center'
}));
</script>

<style scoped>
.card-cover {
  background-size: cover;
  background-position: center;
}

.text-shadow-1 {
  text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.5);
}

.card.dark-mode {
  background-color: #383838; /* Dark background for the card */
  color: #dcdcdc; /* Light text color */
}

h3 {
  color: initial !important;
}

.dark-mode .text-white {
  color: #dcdcdc !important;
}

.dark-mode .text-light {
  color: #b0b0b0 !important;
}

.text-dark {
  color: black !important;
}

/* New: Light mode text background */
.light-mode-text-bg {
  background-color: rgba(255, 255, 255, 0.8); /* White with 80% opacity */
  padding: 15px; /* Adjust padding as needed for the background area */
  margin: -15px; /* Negative margin to counteract the padding on the inner div */
  margin-bottom: 0;
}

/* New: Dark mode text background with opacity */
.dark-mode-text-bg {
  background-color: rgba(0, 0, 0, 0.7); /* Black with 70% opacity */
  padding: 15px; /* Match padding of light mode for consistency */
  margin: -15px; /* Negative margin to counteract the padding on the inner div */
  margin-bottom: 0;
}

/* Adjust text-shadow for better contrast on both backgrounds */
.text-shadow-1 {
  text-shadow: none; /* Remove the text shadow, as the background will provide contrast */
}
</style>
