<template>
  <div>
    <label for="name">Step one's input</label>
    <input v-model="name" id="name"/>
  </div>
  <p>
    <StepTwo/>
  </p>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

// https://vuejs.org/guide/scaling-up/tooling.html#note-on-in-browser-template-compilation
// https://github.com/liweinan/play-vue/commit/7907120a98c8b8321c76c8e7102b99bc5c1831bf
// inline template
export const StepTwo = {
  template: `
    <div>
      <label for="name">Step two's input</label>
      <input v-model="name" id="name"/>
    </div>
  `,
  data() {
    return {
      name: "Hello, Step2!",
    }
  },
}
export default defineComponent({
  name: 'StepOne',
  data() {
    return {
      name: 'Hello StepOne!'
    }
  },
  components: {StepTwo}
})
</script>
