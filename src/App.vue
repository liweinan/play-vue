<script setup lang="ts">
import Foo from './Foo.vue'
import Comp from './Comp.vue'
import Watcher from './UseWatcher.vue'
import Computed from './UseComputed.vue'
import Setup from './UseSetup.vue'
import UseSlot from './UseSlot.vue'

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
      <div>
        <Foo @toggle-favorite="receiveEmit" @add="add"/>
      </div>
      <div>
        <Comp/>
      </div>
      <div>
        <Watcher/>
      </div>
      <div>
        <Computed/>
      </div>
      <div>
        <Setup/>
      </div>
      <div>
        <!--      https://learning.oreilly.com/videos/complete-vue-js-3/9781803245287/9781803245287-video3_7/?t=0-->
        <UseSlot>
          <template v-slot:val-slot>
            Hello Slot!!!
          </template>
        </UseSlot>
      </div>
    </div>
  </header>

  <!--  <RouterView />-->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

div {
  padding: 10px;
  border: indianred 1px solid;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
