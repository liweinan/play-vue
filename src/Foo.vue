<template>
  <h2 class="heading">Foo</h2>
  <h2 class="heading">I am {{ reverseMessage(message) }}</h2>
  <p><input v-model="message" type="text" placeholder="Enter your message"/></p>
  <p>
    <button @click="$emit('add', $event, Math.random())">
      Add Math.random()
    </button>
  </p>
  <p>
    <button @click="toggleFavorite">Favorite</button>
  </p>
</template>
<script lang="ts">
export default {
  name: 'Foo',
  data() {
    return {
      message: '',
    };
  },
  methods: {
    reverseMessage(message: string): string {
      return message.split('').reverse().join('')
    },
    toggleFavorite() {
      this.$emit('toggle-favorite');
    }
  },
};
</script>
<style>
.heading {
  font-size: 16px;
}
</style>
