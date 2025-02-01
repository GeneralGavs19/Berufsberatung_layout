import './assets/main.css';

import { createApp } from 'vue';
import MainPage from './components/MainPage.vue';

// Импорт Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Импорт Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

// Импорт Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(MainPage).mount('#app');
