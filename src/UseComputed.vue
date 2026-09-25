<template>
  <h2 class="heading">UseComputed</h2>
  <h2 class="heading">Computed Message: {{ reversedMessage }}</h2>
  <p><input v-model="message" type="text" placeholder="Enter your message"/></p>
</template>

<script lang="ts">
export default {
  name: 'Computed',
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
