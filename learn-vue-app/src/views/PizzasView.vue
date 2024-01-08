<!--<template>-->
<!--  <div class="pizzas-view&#45;&#45;container">-->
<!--    <h1>Pizzas</h1>-->
<!--     <input v-model="search" placeholder="Search for a pizza" />-->
<!--    <ul>-->
<!--      <li v-for="pizza in searchResults" :key="pizza.id">-->
<!--        <transition name="slidein">-->
<!--          <ul class="pizza-list" v-show="showList">-->
<!--            <PizzaCard :pizza="pizza" />-->
<!--          </ul>-->
<!--        </transition>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->
<!--<script lang="ts" setup>-->
<!--import {-->
<!--  useRouter,-->
<!--} from "vue-router";-->
<!--import PizzaCard from "@/components/PizzaCard.vue";-->
<!--import { useSearch } from "@/composables/useSearch";-->
<!--import type { Pizza } from "@/types/Pizza";-->
<!--import { watch, ref, onBeforeMount, type Ref } from "vue";-->
<!--import { usePizzasStore } from "@/stores/pizzas";-->
<!--import { storeToRefs } from "pinia";-->

<!--const props = defineProps({-->
<!--  searchTerm: {-->
<!--    type: String,-->
<!--    required: false,-->
<!--    default: "",-->
<!--  },-->
<!--});-->

<!--const router = useRouter();-->

<!--const pizzasStore = usePizzasStore();-->

<!--type PizzaSearch = {-->
<!--  search: Ref<string>;-->
<!--  searchResults: Ref<Pizza[]>;-->
<!--};-->

<!--const { pizzas } = storeToRefs(pizzasStore);-->

<!--const { search, searchResults }: PizzaSearch = useSearch({-->
<!--  items: pizzas,-->
<!--  defaultSearch: props.searchTerm,-->
<!--});-->

<!--const showList = ref(false);-->

<!--setTimeout(() => {-->
<!--  showList.value = true;-->
<!--}, 1000);-->

<!--watch(search, (value, prevValue) => {-->
<!--  if (value === prevValue) return;-->
<!--  router.replace({ query: { search: value } });-->
<!--});-->

<!--onBeforeMount(() => {-->
<!--  pizzasStore.fetchPizzas()-->
<!--});-->
<!--</script>-->
<!--<style scoped>-->
<!--ul {-->
<!--  list-style: none;-->
<!--  padding: 0;-->
<!--  display: flex;-->
<!--  gap: 1rem;-->
<!--  flex-wrap: wrap;-->
<!--  justify-content: center;-->
<!--}-->

<!--.pizzas-view&#45;&#45;container {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  gap: 1rem;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->

<!--.slidein-enter-to {-->
<!--  transform: translateX(0);-->
<!--}-->

<!--.slidein-enter-from {-->
<!--  transform: translateX(-100%);-->
<!--}-->

<!--.slidein-leave-to {-->
<!--  transform: translateX(100%);-->
<!--}-->

<!--.slidein-leave-from {-->
<!--  transform: translateX(0);-->
<!--}-->

<!--.slidein-enter-active,-->
<!--.slidein-leave-active {-->
<!--  transition: transform 1s;-->
<!--}-->

<!--</style>-->


<template>
  <div class="pizzas-view--container">
    <h1>Pizzas</h1>
    <input v-model="search" placeholder="Search for a pizza" data-testid="search-input" />
    <ul>
      <li v-for="pizza in searchResults" :key="pizza.id">
        <PizzaCardForTest :pizza="pizza" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { usePizzas } from "@/composables/usePizzas";
import PizzaCardForTest from "@/components/PizzaCardForTest.vue";
import { useSearch } from "@/composables/useSearch";

const { pizzas } = usePizzas();
const { search, searchResults }: PizzaSearch = useSearch({
  items: pizzas,
  defaultSearch: '',
});
</script>