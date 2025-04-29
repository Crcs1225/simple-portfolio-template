<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <header :class="{ 'dark-mode': isDarkMode }">
      <div class="container">
        <div class="header-left">
          <strong class="name">YOUR NAME</strong>/ DEVELOPER
        </div>
        <nav class="header-right">
          <div class="nav-links" :class="{ 'open': isMenuOpen }">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
          <button @click="toggleDarkMode" class="theme-toggle" :class="{ 'dark-mode': isDarkMode }">
            {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
          </button>
          <button @click="toggleMenu" class="menu-icon" aria-label="Toggle Navigation Menu">
            ☰
          </button>
        </nav>
      </div>
    </header>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer :class="{ 'dark-mode': isDarkMode }">
      &copy; {{ new Date().getFullYear() }} Your Portfolio
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isMenuOpen = ref(false);

// Access the isDarkMode getter
const isDarkMode = computed(() => store.getters.isDarkMode);

// Dispatch the toggleDarkMode action
const toggleDarkMode = () => {
  store.dispatch('toggleDarkMode');
  // You might want to save the theme to localStorage here as well,
  // perhaps within the action in the store for better logic separation.
  if (isDarkMode.value) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  // Load theme from localStorage on mount
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    store.dispatch('toggleDarkMode'); // Dispatch the action
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});
</script>

<style scoped>
/* App-specific styles */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
}

header,
footer {
  background-color: #f0f0f0;
  color: #333;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}

header.dark-mode,
footer.dark-mode {
  background-color: #383838;
  color: #dcdcdc;
  border-color: #555;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-left strong.name {
  margin-right: 0.5rem;
}

.header-right {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

nav .router-link-exact-active,
nav .router-link-active,
nav a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.dark-mode header nav .router-link-exact-active,
.dark-mode header nav .router-link-active,
.dark-mode header nav a {
  color: #dcdcdc;
}

.theme-toggle {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.theme-toggle:not(.dark-mode) {
  background-color: #333;
  color: #eee;
  border: 1px solid #555;
}

.theme-toggle.dark-mode {
  background-color: #eee;
  color: #333;
  border-color: #ccc;
}

.menu-icon {
  display: none; /* Hide on larger screens */
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #333;
}

.dark-mode .menu-icon {
  color: #eee;
}

main {
  flex-grow: 1;
  padding: 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

footer {
  text-align: center;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .nav-links {
    display: none; /* Hide nav links on small screens */
    flex-direction: column;
    position: fixed;
    top: 4rem; /* Adjust based on header height */
    right: 0;
    background-color: #f0f0f0;
    width: 100%;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .dark-mode .nav-links {
    background-color: #383838;
  }

  .nav-links.open {
    display: flex; /* Show nav links when menu is open */
  }

  .nav-links a {
    padding: 1rem;
    display: block;
    border-bottom: 1px solid #ccc;
  }

  .dark-mode .nav-links a {
    border-bottom-color: #555;
  }

  .menu-icon {
    display: block; /* Show menu icon on small screens */
  }

  .header-right {
    gap: 0.5rem;
  }
}

@media (min-width: 769px) {
  .header-right {
    display: flex; /* Ensure header-right is a flex container */
    align-items: center; /* Vertically center items */
    gap: 1rem; /* Add spacing between nav-links and button */
  }

  .nav-links {
    display: flex; /* keep nav links in a row on large screens */
    flex-direction: row;
  }
  .menu-icon{
    display: none;
  }
}
</style>
