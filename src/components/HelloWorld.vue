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
    <router-link to="/user/张三/childOne">张三</router-link>
    <router-link to="/user/李四/childTwo">李四</router-link>
    <router-link to="/users/王五">王五</router-link>
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
