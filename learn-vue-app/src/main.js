// import './assets/main.css'

import { createApp } from 'vue'
// import { createApp, ref } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
// import App from './components/MyApp.vue'

const app = createApp(App)
// import { inject } from 'vue'
// const app = createApp(inject('MyApp'));

app.mount('#app')