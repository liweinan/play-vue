<template>
  <h1>{{ myComposableData.title }}</h1>
</template>

<script lang="ts" setup>
  import { useMyComposable } from './useMyComposable'
  const myComposableData = useMyComposable();
</script>