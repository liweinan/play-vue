<template>
  <component is="HelloVue" />
</template>

<script lang="ts">
  import HelloVue from "@/components/HelloVue.vue";
  import { defineComponent } from "vue";

  export default defineComponent({
    components: { HelloVue },
  });
</script>