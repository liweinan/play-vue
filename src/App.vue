<script setup lang="ts">
import Foo from './Foo.vue'
import Comp from './Comp.vue'
import Watcher from './UseWatcher.vue'
import Computed from './UseComputed.vue'
import Setup from './UseSetup.vue'

function receiveEmit() {
  alert('Hello World!');
}

function add(event, num) {
  alert('add ' + event + ' ' + num);
}

// get a component by name
console.log('watcher : ' + JSON.stringify(Watcher));
console.log('computed : ' + JSON.stringify(Computed));
</script>

<template>
  <header>
    <div class="wrapper">
      <Foo @toggle-favorite="receiveEmit" @add="add"/>
      <Comp/>
      <Watcher/>
      <Computed/>
      <Setup/>
    </div>
  </header>
</template>
