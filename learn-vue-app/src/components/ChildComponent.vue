<template>
  <h1>{{name}}</h1>
</template>

<script lang='ts'>
export default {
  name: 'ChildComponent',
  props: {
    name: {
      type: String,
      required: true,
      validator: value => value !== "Child component"
    }
  }
}
</script>