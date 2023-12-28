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
<script lang="ts">
import { defineComponent } from 'vue'
import ToDoItem2 from './ToDoItem2.vue'
import type { Task2 } from './ToDoItem2'

export default defineComponent({
  name: 'ToDoList',
  components: {
    ToDoItem2
  },
  data() {
    return {
      tasks: [
        { id: 1, title: 'Learn Vue', completed: false },
        { id: 2, title: 'Learn TypeScript', completed: false },
        { id: 3, title: 'Learn Vite', completed: false },
      ] as Task2[]
    }
  },
  methods: {
    onTaskCompleted(payload: { id: number; completed: boolean }) {
      const index = this.tasks.findIndex(t => t.id === payload.id)

      if (index < 0) return

      this.tasks[index].completed = payload.completed
    }
  }
})
</script>