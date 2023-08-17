<template>
  <h2 class="heading">Foo</h2>
  <h2 class="heading">I am {{reverseMessage(message)}}</h2>
  <input v-model="message" type="text" placeholder="Enter your message"/>
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
  },
};
</script>
<style>
.heading {
  font-size: 16px;
}
</style>
