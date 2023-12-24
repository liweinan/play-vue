<script lang="ts" setup>
import { useGitHubRepos } from "@/components/useGitHubRepos";
const { data: repos } = useGitHubRepos("xiaolitongxue666");
</script>
<template>
  <h2>Repos</h2>
  <ul>
    <li v-for="repo in repos" :key="repo.id">
      <article>
        <header>{{ repo.name }}</header>
        <p>{{ repo.description }}</p>
      </article>
    </li>
  </ul>
</template>