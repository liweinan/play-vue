<template>
  <FetchComponent url="https://api.github.com/users/xiaolitongxue666">
<!--    在Vue中，使用<template>标签和v-slot指令可以定义默认插槽。#default是默认插槽的名称，-->
<!--    它允许您在父组件中传递内容到子组件的默认插槽中。-->
<!--    这样，子组件就可以在适当的位置渲染父组件传递的内容-->
    <template #default="defaultProps">
      <div class="user-profile">
        <img
            :src="(defaultProps.data as User).avatar_url"
            alt="`${defaultProps.data.name} Avatar`"
            width="200"
        />
        <div>
          <h1>{{ (defaultProps.data as User).name }}</h1>
          <p>{{ (defaultProps.data as User).bio }}</p>
          <p>Twitter: {{(defaultProps.data as User).twitter_username }}</p>
          <p>Blog: {{ (defaultProps.data as User).blog }}</p>
        </div>
      </div>
    </template>
  </FetchComponent>
</template>
<script lang="ts" setup>
import FetchComponent from "./FetchComponent.vue";
import type { User } from "../types/User.type";
</script>