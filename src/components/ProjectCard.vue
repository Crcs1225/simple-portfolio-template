<template>
    <div class="col">
      <div
        class="card card-cover h-100 overflow-hidden rounded-4 shadow-lg"
        :class="{ 'dark-mode': isDarkMode, 'text-bg-dark': !isDarkMode }"
        :style="{ 'background-image': 'url(' + props.project.image + ')' }"
      >
        <div
          class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1"
          :class="{ 'text-white': isDarkMode, 'text-bg-dark': !isDarkMode }"
        >
          <h3
            class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-white"
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
              :class="{ 'text-light': isDarkMode, 'text-white': !isDarkMode }"
            >
              <i
                class="bi bi-geo-fill me-2"
                role="img"
                aria-label="Location"
                :class="{ 'text-light': isDarkMode, 'text-white': !isDarkMode }"
              ></i>
              <small>{{ props.project.location }}</small>
            </li>
            <li
              class="d-flex align-items-center"
              v-if="props.project.duration"
              :class="{ 'text-light': isDarkMode, 'text-white': !isDarkMode }"
            >
              <i
                class="bi bi-calendar3 me-2"
                role="img"
                aria-label="Duration"
                :class="{ 'text-light': isDarkMode, 'text-white': !isDarkMode }"
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
  
  /* Make the title always white */
  h3 {
    color: white !important;
  }
  
  .dark-mode .text-white {
    color: #dcdcdc !important; /* Ensure other white text is light in dark mode */
  }
  
  .dark-mode .text-bg-dark {
    background-color: #383838 !important; /* Adjust if needed */
  }
  
  .dark-mode .text-body-emphasis {
    color: #dcdcdc !important;
  }
  
  .dark-mode .text-light {
    color: #b0b0b0 !important; /* A slightly darker light color for secondary text */
  }
  
  .dark-mode .border-white {
    border-color: #666 !important; /* Adjust border color of the image in dark mode */
  }
  
  .dark-mode .border-secondary {
    border-color: #888 !important; /* Adjust border color for dark mode */
  }
  
  /* You can add more specific styling for your project cards here */
  /* based on the provided example */
  </style>