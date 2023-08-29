<template>
  <div>
    <label for="name">Step one's input</label>
    <input v-model="name" id="name"/>
  </div>
  <p>
    <StepTwo/>
    <!--    <component :is="StepTwo"/>-->
  </p>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

// https://vuejs.org/guide/scaling-up/tooling.html#note-on-in-browser-template-compilation
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
  // computed: {
  //   StepTwo() {
  //     return StepTwo
  //   }
  // },
  components: {StepTwo}
})
</script>