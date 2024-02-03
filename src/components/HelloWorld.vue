<script setup lang="ts">
defineProps<{
  msg: string;
}>();
import { ref, computed } from 'vue';
let id = 0;
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
]);
const hideFinished = ref(false);
const todoList = computed(() => {
  return todos.value.filter((todo) => todo.done === hideFinished.value);
});
</script>

<template>
  <div>
    <ElButton @click="hideFinished = !hideFinished">过滤</ElButton>
    <ul v-for="todo in todoList" :key="todo.id">
      <li>{{ todo.text }}</li>
    </ul>
  </div>
</template>

<style scoped>
h3 {
  color: brown;
}
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
