<script lang="jsx" setup>

// /* h v-node */
// import { h } from 'vue'
//
// const inputElem = h(
//     'input',
//     {
//       placeholder: 'Enter some text',
//       type: 'text',
//       id: 'text-input'
//     })
//
// const comp = h(
//     'div',
//     {
//       id: 'my-test-comp',
//       style: { border: '1px solid blue' }
//     },
//     inputElem
//     )

/* JSX */
// import { jsx } from 'vue'

const name = "JSX";

const id = "jsx-comp"

let JSXComp = <div id={id}>This is a {name} component</div>;

const MyRender = {
  render() {
    // return comp
    return JSXComp

  }
}
</script>

<template>
  <MyRender />
</template>