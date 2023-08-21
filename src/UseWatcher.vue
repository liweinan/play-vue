<template>
  <h2 class="heading">UseWatcher</h2>
  <h2 class="heading">Watcher Message: {{ reversedWatcherMessage }}</h2>
  <p><input v-model="watcherMessage" type="text" placeholder="Enter your message"/></p>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Foo',
  data() {
    return {
      watcherMessage: 'Hello Vue!',
      reversedWatcherMessage: 'Hello Vue!'.split('').reverse().join('')
    }
  },
  watch: {
    watcherMessage(newValue: string, oldValue: string) {
      console.log("oldValue -> " + oldValue)
      this.reversedWatcherMessage = newValue.split('').reverse().join('')
    }
  }
})
</script>
<script setup lang="ts">
</script>