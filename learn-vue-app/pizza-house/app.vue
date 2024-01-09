<template>
  <NuxtLayout :name="customLayout">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { computed } from "vue";

const customLayout = computed(
    () => {
      const isPizzaLayout = useRoute().path.startsWith("/pizzas/");
      return isPizzaLayout ? 'pizzas' : 'default';
    }
);
</script>