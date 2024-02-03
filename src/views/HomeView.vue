<script setup lang="ts">
import { ref, reactive, computed, isRef, unref } from 'vue';
import type { Ref } from 'vue';
import HelloWord from '../components/HelloWorld.vue';
const msg: Ref<String> = ref<string>('这是我传进来的');
interface User {
  name: string;
  age: number;
}
const user: User = reactive({
  name: '张三',
  age: 18
});

const changeUser = computed({
  get: () => user.name,
  set: (val) => {
    user.name = val;
  }
});
changeUser.value = 'rrrr';

const myRef = ref(99);
console.log(isRef(myRef));
console.log(unref(myRef));
</script>

<template>
  <main>
    <HelloWord :msg="`hello,${user.name},${msg}`" />
  </main>
</template>
