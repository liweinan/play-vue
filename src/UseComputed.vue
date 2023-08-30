<template>
  <h2 class="heading">UseComputed</h2>
  <h2 class="heading">Computed Message: {{ reversedMessage }}</h2>
  <p><input v-model="message" type="text" placeholder="Enter your message"/></p>
</template>

<script lang="ts">
// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: 'Foo',
//   data() {
//     return {
//       message: 'Hello Vue!'
//     }
//   },
//   computed: {
//     reversedMessage() {
//       return this.message.split('').reverse().join('')
//     }
//   }
// })

export default {
  name: 'Foo',
  data() {
    return {
      message: 'Hello Computed!'
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  }
}

</script>
