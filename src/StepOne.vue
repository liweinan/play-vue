<template>
  <div>
    <label for="name">Step one's input</label>
    <input v-model="name" id="name"/>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StepOne',
  data() {
    return {
      name: 'Hello StepOne!'
    }
  },
})
</script>