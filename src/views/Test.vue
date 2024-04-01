<script setup lang="ts">
const peoples = [
  { name: 'v', age: 12 },
  { name: 'b', age: 6 },
  { name: 'f', age: 8 }
];

//peoples.sort((a: any, b: any) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0) && (a.age > b.age ? -1 : a.age < b.age ? 1 : 0));

const sortBy = (key: string, type: string = 'asc') => {
  if (type === 'asc') {
    return (a: any, b: any) => (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0);
  }
  if (type === 'desc') {
    return (a: any, b: any) => (a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0);
  }
};
//peoples.sort(sortBy('name'));
peoples.sort(sortBy('age', 'desc'));
//document.write(JSON.stringify(peoples) + '<br>');

const myMap = (array: any, fn: any) => {
  let result = [];
  for (let value of array) {
    result.push(fn(value));
  }
  return result;
};
const myFilter = (array: any, fun: any) => {
  let result = [];
  for (let value of array) {
    result.push(fun(value));
  }
  return result;
};
const arr = [1, 2, 3, 4, 5];
const transMap = myMap(arr, (v: number) => v * 2);
const filterMap = myFilter(arr, (v: number) => {
  if (v > 2) return v;
});
//document.write(String(filterMap) + '<br>');

const add = (a: number, b: number, c: number) => a + b + c;
document.write('add===' + String(add(1, 2, 3)) + '<br>');

// const curriedAdd = (a: number) => {
//   return (b: number) => {
//     return (c: number) => {
//       return a + b + c;
//     };
//   };
// };
const curriedAdd = (a: number) => (b: number) => (c: number) => a + b + c;
const curried = curriedAdd(1)(2)(3);

const fetchArray = (a: number, ...other: any[]) => {
  return [a, ...other];
};

document.write('curried===' + String(curried) + '<br>');
document.write('array===' + String(fetchArray(1, [2, 3, 4, 5, 6, 7, 8, 9])) + '<br>');
</script>

<template>
  <div>TEST</div>
</template>

<style scoped></style>
