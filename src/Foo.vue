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
  <p>
    <StepOne/>
    <!--    <component :is="StepOne"></component>-->

  </p>
</template>
<script lang="ts">
import StepOne from "@/StepOne.vue";

//
//const StepOne = {
//  template: `
//    <div>
//      <label for="name">Step one's input</label>
//      <input v-model="name" id="name"/>
//    </div>
//  `,
//  data() {
//    return {
//      name: "",
//    }
//  },
//}

export default {
  name: 'Foo',
  // computed: {
  //   StepOne() {
  //     return StepOne
  //   }
  // },
  data() {
    return {
      message: '',
    };
  },
  components: {StepOne},
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
