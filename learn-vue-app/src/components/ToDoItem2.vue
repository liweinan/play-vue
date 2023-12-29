<template>
  <div>
    <input
        type="checkbox"
        :checked="task.completed"
        @change="onTaskCompleted"
    />
    <span>{{ task.title }}</span>
  </div>
</template>

<script lang="ts" setup>
import { type PropType, defineProps, defineEmits } from 'vue'

// 定义组件的属性接口
export interface Task2 {
  id: number;
  title: string;
  completed: boolean;
}

// 使用 defineProps 函数定义组件的属性
const props = defineProps({
  task: {
    type: Object as PropType<Task2>,
    required: true,
  }
});

const emits = defineEmits(['task-completed-toggle'])

const onTaskCompleted = (event: Event) => {
  emits("task-completed-toggle", {
    id: props.task.id,
    completed: (event.target as HTMLInputElement)?.checked,
  });
}
</script>