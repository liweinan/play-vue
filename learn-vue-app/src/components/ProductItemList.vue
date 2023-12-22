<script setup>
import ListLayout from './ListLayout.vue'
</script>

<!-- ProductItemList.vue -->
<template>
  <div id="app">
    <ListLayout>
      <template #thumbnail="{ item }">
        <img
            v-if="item.thumbnail"
            class="list-layout__item__thumbnail"
            :src="item.thumbnail"
            :alt="item.name"
            width="200"
        />
      </template>
      <template #actions>
        <div class="list-layout__item__footer">
          <button class="list-layout__item__footer__button">Add to cart</button>
        </div>
      </template>
    </ListLayout>
  </div>
</template>