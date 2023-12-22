<template>
  <component :is="HelloVue" />
</template>

<script lang="ts" setup>
  // import HelloVue from "@/components/HelloVue.vue";
  import { defineAsyncComponent } from "vue";
  const HelloVue = defineAsyncComponent(() => import('./HelloVue.vue'));

</script>