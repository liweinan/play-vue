<template>
  <ul style="list-style: none;">
    <li v-for="task in tasks" :key="task.id">
      <ToDoItem2
          :task="task"
          @task-completed-toggle="onTaskCompleted"
      />
    </li>
  </ul>
</template>
<script lang="ts" setup>

  /* Import  */
  import { defineAsyncComponent  } from 'vue'
  import type { Task2 } from './ToDoItem2'

  const ToDoItem2 = defineAsyncComponent(() => import('./ToDoItem2.vue'));

  let tasks: Task2[] = [
  { id: 1, title: 'Learn Vue', completed: false },
  { id: 2, title: 'Learn TypeScript', completed: false },
  { id: 3, title: 'Learn Vite', completed: false },
  ];

  function onTaskCompleted(payload: { id: number; completed: boolean }) {
    const index = tasks.findIndex(t => t.id === payload.id)

    if (index < 0) return
      tasks[index].completed = payload.completed
  }

</script>