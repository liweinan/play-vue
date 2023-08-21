<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Foo from './Foo.vue'
import Comp from './Comp.vue'
import Watcher from './UseWatcher.vue'
import Computed from './UseComputed.vue'

// https://www.w3schools.com/vue/showvue.php?filename=demo_emit_3
// import HelloWorld from './components/HelloWorld.vue'

function receiveEmit() {
  alert('Hello World!');
}

function add(event, num) {
  alert('add ' + event + ' ' + num);
}
</script>

<template>
  <header>
    <!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

    <div class="wrapper">
      <!--      <HelloWorld msg="You did it!" />-->

      <!--      <nav>-->
      <!--        <RouterLink to="/">Home</RouterLink>-->
      <!--        <RouterLink to="/about">About</RouterLink>-->
      <!--      </nav>-->

      <Foo @toggle-favorite="receiveEmit" @add="add"/>
      <Comp/>
      <Watcher/>
      <Computed/>

    </div>
  </header>

  <!--  <RouterView />-->
</template>

<!--<style scoped>-->
<!--header {-->
<!--  line-height: 1.5;-->
<!--  max-height: 100vh;-->
<!--}-->

<!--.logo {-->
<!--  display: block;-->
<!--  margin: 0 auto 2rem;-->
<!--}-->

<!--nav {-->
<!--  width: 100%;-->
<!--  font-size: 12px;-->
<!--  text-align: center;-->
<!--  margin-top: 2rem;-->
<!--}-->

<!--nav a.router-link-exact-active {-->
<!--  color: var(&#45;&#45;color-text);-->
<!--}-->

<!--nav a.router-link-exact-active:hover {-->
<!--  background-color: transparent;-->
<!--}-->

<!--nav a {-->
<!--  display: inline-block;-->
<!--  padding: 0 1rem;-->
<!--  border-left: 1px solid var(&#45;&#45;color-border);-->
<!--}-->

<!--nav a:first-of-type {-->
<!--  border: 0;-->
<!--}-->

<!--@media (min-width: 1024px) {-->
<!--  header {-->
<!--    display: flex;-->
<!--    place-items: center;-->
<!--    padding-right: calc(var(&#45;&#45;section-gap) / 2);-->
<!--  }-->

<!--  .logo {-->
<!--    margin: 0 2rem 0 0;-->
<!--  }-->

<!--  header .wrapper {-->
<!--    display: flex;-->
<!--    place-items: flex-start;-->
<!--    flex-wrap: wrap;-->
<!--  }-->

<!--  nav {-->
<!--    text-align: left;-->
<!--    margin-left: -1rem;-->
<!--    font-size: 1rem;-->

<!--    padding: 1rem 0;-->
<!--    margin-top: 1rem;-->
<!--  }-->
<!--}-->
<!--</style>-->
