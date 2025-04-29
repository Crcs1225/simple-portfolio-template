<template>
  <div class="container px-4" :class="{ 'dark-mode': isDarkMode }" id="my-projects">

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue'; // Adjust the path if needed
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure you have this imported in your main.js
import { useStore } from 'vuex';

const store = useStore();
const isDarkMode = computed(() => store.getters.isDarkMode);

const projects = ref([
  {
    id: 1,
    title: 'Web-Based Event Calendar',
    image: 'https://via.placeholder.com/800x600?text=Event+Calendar', // Replace with your project image
    authorImage: 'https://github.com/twbs.png', // Replace with your avatar
    location: 'Lingayen, PH',
    duration: '2 months',
  },
  {
    id: 2,
    title: 'Portfolio Website (This One!)',
    image: 'https://via.placeholder.com/800x600?text=Portfolio', // Replace with your project image
    authorImage: 'https://github.com/twbs.png', // Replace with your avatar
    location: 'Ilocos Region, PH',
    duration: '1 month',
  },
  {
    id: 3,
    title: 'Mobile App Concept (Ongoing)',
    image: 'https://via.placeholder.com/800x600?text=Mobile+App', // Replace with your project image
    authorImage: 'https://github.com/twbs.png', // Replace with your avatar
    location: 'Remote',
    duration: 'Ongoing',
  },
  // Add more project objects here
]);
</script>

<style scoped>
/* Dark mode styles for this component (if needed) */
.container.dark-mode {
  background-color: #282828;
  color: #dcdcdc;
}

.dark-mode .border-bottom {
  border-color: #555 !important; /* Adjust border color in dark mode */
}
</style>