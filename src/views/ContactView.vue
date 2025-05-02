<template>
  <div class="container col-xl-10 col-xxl-8 px-4" :class="{ 'dark-mode': isDarkMode }">
    <div class="row align-items-center g-4 ">
      <div class="col-lg-6 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Get in Touch</h1>
        <p class="col-lg-10 fs-4" :class="{ 'text-light': isDarkMode, 'text-body-secondary': !isDarkMode }">
          Have a project in mind? Or just want to connect? Feel free to reach out through the form or connect with me on my social media!
        </p>
        <div class="mt-4">
          <h3 :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Connect With Me:</h3>
          <ul class="list-unstyled d-flex justify-content-center justify-content-lg-start gap-3">
            <li>
              <a :href="yourGithubUrl" target="_blank" class="text-decoration-none" :class="{ 'text-white': isDarkMode, 'text-dark': !isDarkMode }">
                <i class="bi bi-github fs-3"></i> <span class="d-lg-none">GitHub</span>
              </a>
            </li>
            <li>
              <a :href="yourLinkedinUrl" target="_blank" class="text-decoration-none" :class="{ 'text-white': isDarkMode, 'text-primary': !isDarkMode }">
                <i class="bi bi-linkedin fs-3"></i> <span class="d-lg-none">LinkedIn</span>
              </a>
            </li>
            <li>
              <a :href="yourFacebookUrl" target="_blank" class="text-decoration-none" :class="{ 'text-white': isDarkMode, 'text-primary': !isDarkMode }">
                <i class="bi bi-facebook fs-3"></i> <span class="d-lg-none">Facebook</span>
              </a>
            </li>
            <li>
              <a :href="yourInstagramUrl" target="_blank" class="text-decoration-none" :class="{ 'text-white': isDarkMode, 'text-danger': !isDarkMode }">
                <i class="bi bi-instagram fs-3"></i> <span class="d-lg-none">Instagram</span>
              </a>
            </li>
            </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <form class="p-4 p-md-5 border rounded-3" :class="{ 'bg-dark': isDarkMode, 'bg-body-tertiary': !isDarkMode }" @submit.prevent="sendEmail">
          <h3 class="mb-4" :class="{ 'text-white': isDarkMode, 'text-body-emphasis': !isDarkMode }">Send Me a Message</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="contactName" required v-model="contactName" :class="{ 'bg-secondary text-white': isDarkMode, 'bg-white text-dark': !isDarkMode }">
                <label for="contactName" :class="{ 'text-light': isDarkMode }">Your Name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="contactEmail" required v-model="contactEmail" :class="{ 'bg-secondary text-white': isDarkMode, 'bg-white text-dark': !isDarkMode }">
                <label for="contactEmail" :class="{ 'text-light': isDarkMode }">Email address</label>
              </div>
            </div>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="contactSubject" v-model="contactSubject" :class="{ 'bg-secondary text-white': isDarkMode, 'bg-white text-dark': !isDarkMode }">
            <label for="contactSubject" :class="{ 'text-light': isDarkMode }">Subject (Optional)</label>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control" id="contactMessage" style="height: 150px;" required v-model="contactMessage" :class="{ 'bg-secondary text-white': isDarkMode, 'bg-white text-dark': !isDarkMode }"></textarea>
            <label for="contactMessage" :class="{ 'text-light': isDarkMode }">Your Message</label>
          </div>
          <button class="w-100 btn btn-lg" type="submit" :class="{ 'btn-outline-light': isDarkMode, 'btn-primary': !isDarkMode }">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isDarkMode = computed(() => store.getters.isDarkMode);

// Reactive refs for your social media URLs
const yourGithubUrl = ref('https://github.com/Crcs1225');
const yourLinkedinUrl = ref('https://linkedin.com/in/zrmdcs12');
const yourFacebookUrl = ref('https://facebook.com/caracasmarcdan');
const yourInstagramUrl = ref('https://instagram.com/nieru.cs');

// Reactive refs for the form inputs
const contactName = ref('');
const contactEmail = ref('');
const contactSubject = ref('');
const contactMessage = ref('');

// Your email address where you want to receive messages
const yourEmailAddress = ref('mrcdnlcrcs@gmail.com'); // **REPLACE WITH YOUR EMAIL**

const sendEmail = () => {
  const subject = encodeURIComponent(contactSubject.value || 'Message from your Portfolio');
  const body = encodeURIComponent(`Name: ${contactName.value}\nEmail: ${contactEmail.value}\n\nMessage:\n${contactMessage.value}`);

  // Construct the mailto link
  const mailtoLink = `mailto:${yourEmailAddress.value}?subject=${subject}&body=${body}`;

  // Open the user's email client
  window.location.href = mailtoLink;

  // Optionally, you can clear the form after a short delay (as the mailto might not be instantaneous)
  setTimeout(() => {
    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';
  }, 100);
};

// Remember to replace your social media URLs and your email address!
</script>

<style scoped>
/* Dark mode styles for the container */
.container.dark-mode {
  background-color: #282828;
  color: #dcdcdc;
}

/* Dark mode styles for the form */
.dark-mode .border {
  border-color: #555 !important;
}

.dark-mode .bg-body-tertiary {
  background-color: #383838 !important;
}

/* Dark mode for form controls */
.dark-mode .form-control {
  background-color: #4a4a4a !important;
  color: #dcdcdc !important;
  border-color: #666 !important;
}

/* Style the floating label in dark mode */
.dark-mode .form-floating > label {
  color: #b0b0b0 !important; /* A lighter color for the label in dark mode */
}

/* Adjust the color of the floating label when the input is focused or has a value in dark mode */
.dark-mode .form-floating > .form-control:focus ~ label,
.dark-mode .form-floating > .form-control:not(:placeholder-shown) ~ label,
.dark-mode .form-floating > .form-select ~ label {
  color: #dcdcdc !important; /* Even lighter color when active in dark mode */
}

/* Fix for the white background of the floating label in dark mode */
.dark-mode .form-floating > label::after {
  background-color: #4a4a4a !important; /* Match the input's background in dark mode */
}

/* You can add more custom styles here */
</style>