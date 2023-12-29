<template>
  <div>
    <keep-alive>
      <component :is="activeComp" />
    </keep-alive>
    <div>
      <button @click="activeComp = 'StepOne'" v-if="activeComp === 'StepTwo'">
        Go to Step Two
      </button>
      <button @click="activeComp = 'StepTwo'" v-else>Back to Step One</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import StepOne from "./StepOne.vue";
import StepTwo from "./StepTwo.vue";

export default defineComponent({
  components: { StepTwo, StepOne },
  data() {
    return {
      activeComp: "StepOne",
    };
  },
});
</script>