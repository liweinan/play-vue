<script setup>

import { h } from 'vue'

const inputElem = h(
    'input',
    {
      placeholder: 'Enter some text',
      type: 'text',
      id: 'text-input'
    })

const comp = h(
    'div',
    {
      id: 'my-test-comp',
      style: { border: '1px solid blue' }
    },
    inputElem
    )

const MyRender = {
  render() {
    return comp
  }
}
</script>

<template>
  <MyRender />
</template>