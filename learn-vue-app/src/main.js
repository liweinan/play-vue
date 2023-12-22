// import './assets/main.css'

// /* Register and use plugin */
// import { createApp, defineComponent } from 'vue/dist/vue.esm-bundler.js'
// import truncate from './plugins/truncate'
//
// const App = defineComponent({
//     template: `
//  <h1>{{ $truncate('My truncated long text') }}</h1>
//  <h2>{{ truncatedText }}</h2>
//  `,
//     data() {
//         return {
//             truncatedText: this.$truncate('My 2nd truncated text')
//         }
//     }
// });
//
//
// //1. Create the app instance
// const app = createApp(App);
// //2. Register the plugin
// app.use(truncate, { limit: 10 })
// app.mount('#app')
// /* end */

////////////////////////////////////////////////////////////////////////////////////

/* How to use router */

// import { createApp } from 'vue'
// import App from './App.vue'
// import { router } from './router'
//
// const app = createApp(App)
//
// app.use(router)
//
// app.mount('#app')

////////////////////////////////////////////////////////////////////////////////////

/* How to use pinia */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')