<template>
  <div>
    <h1>This is about view of Pizza shores</h1>
    <button @click="router.back()">Back</button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
