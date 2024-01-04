<!--<script setup>-->
<!--import HelloWorld from './components/HelloWorld.vue'-->
<!--import TheWelcome from './components/TheWelcome.vue'-->
<!--</script>-->

<!--<template>-->
<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->
<!--    </div>-->
<!--  </header>-->

<!--  <main>-->
<!--    <TheWelcome />-->
<!--  </main>-->
<!--</template>-->

<!--<style scoped>-->
<!--header {-->
<!--  line-height: 1.5;-->
<!--}-->

<!--.logo {-->
<!--  display: block;-->
<!--  margin: 0 auto 2rem;-->
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
<!--}-->
<!--</style>-->


<script setup lang="ts">
// import ProductItemList   from "./components/ProductItemList.vue";
// import TodoList from "./components/TodoList.vue";
// import DiningComponent from "@/components/DiningComponent.vue";
// import CafeComponent from "@/components/CafeComponent.vue";
// import headingComponent from "@/components/HeadingComponent.vue";
// import ParentComponent from "@/components/ParentComponent.vue";
// import House from "@/components/House.vue";
// import WithModalComponent from "@/components/WithModalComponent.vue";

// Composition VS Options
// import Options from "@/components/Options.vue";
// import Composition from "@/components/Composition.vue";

// import MyComposable from "@/components/MyComposable.vue";

// import GitHubRepos from "@/components/GitHubRepos.vue";

// import UserProfile from "@/components/UserProfile.vue";

// import HFunctionComponent from "@/components/HFunctionComponent.vue";

// import TodoList2 from "./components/TodoList2.vue";

// import UseMyHeading from "@/components/UseMyHeading.vue";

// import UseHelloVue from "@/components/UseHelloVue.vue";

// import HelloVue from "@/components/HelloVue.vue";

// import KeepAlive2 from "@/components/KeepAlive2.vue";

// import { RouterView } from 'vue-router'
// import NavBar from "@/components/NavBar.vue";

import { RouterView } from "vue-router";
import LHeader from "@/components/LHeader.vue";

</script>

<template>
<!--  <ProductItemList />-->
<!--  <TodoList />-->
<!--  <DiningComponent />-->
<!--  <CafeComponent />-->
<!--  <headingComponent />-->
<!--  <ParentComponent />-->

<!--  House-->
<!--  <section id="sky" />-->
<!--  <section class="wrapper">-->
<!--    <House />-->
<!--  </section>-->

<!--  WithModalComponent-->
<!--  <div id="modal"></div>-->
<!--  <section class ="wrapper">-->
<!--    <WithModalComponent />-->
<!--  </section>-->

<!--  Composition VS Options-->
<!--    <Options />-->
<!--    <Composition />-->

<!--  <MyComposable />-->

<!--  <GitHubRepos  />-->

<!--  <UserProfile />-->

<!--  <HFunctionComponent />-->

<!--  <TodoList2 />-->

<!--  <UseMyHeading />-->

<!--  <UseHelloVue />-->

<!--  <HelloVue />-->

<!--  <KeepAlive2 />-->

<!--  <NavBar />-->
<!--  <RouterView class="view" />-->

  <LHeader />
  <RouterView />

</template>
