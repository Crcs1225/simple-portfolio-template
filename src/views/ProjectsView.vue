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

// Import your project images
import eventCalendarImage from '@/assets/calendar.jpg'; // **Replace with your actual path**
import portfolioImage from '@/assets/portfolio.jpg';     // **Replace with your actual path**
import mobileAppImage from '@/assets/mobile_app.jpg';     // **Replace with your actual path**
import pds from '@/assets/pds.jpg'; 
import library from '@/assets/library.jpg'; 

const store = useStore();
const isDarkMode = computed(() => store.getters.isDarkMode);

const projects = ref([
  {
    id: 1,
    title: 'Web-Based Event Calendar',
    image: eventCalendarImage, // Use the imported variable
    authorImage: 'https://github.com/twbs.png', // Replace with your avatar
    location: 'Lingayen, PH',
    duration: '3 months',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    image: portfolioImage, // Use the imported variable
    authorImage: 'https://github.com/twbs.png', // Replace with your avatar
    location: 'Ilocos Region, PH',
    duration: '1 week',
  },
  {
    id: 3,
    title: 'Mobile App for Thesis',
    image: mobileAppImage, // Use the imported variable
    authorImage: 'https://github.com/twbs.png', // Replace with your avatar
    location: 'Pangasinan State University, Lingayen',
    duration: '4 months',
  },
  {
    id: 4,
    title: 'Personal Data Sheet System',
    image: pds, // Use the imported variable
    authorImage: 'https://github.com/twbs.png', // Replace with your avatar
    location: 'Lingayen, PH',
    duration: '3 months',
  },
  {
    id: 4,
    title: 'Library Reservation App',
    image: library, // Use the imported variable
    authorImage: 'https://github.com/twbs.png', // Replace with your avatar
    location: 'Lingayen, PH',
    duration: '1 week',
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