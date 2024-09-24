<template>
  <div>
    <input type="text" v-model="todo" />
    <button class="bg-[white]" @click="add">add</button>

    <div v-for="(data, index) in todoList" :key="index">
      <input type="text" v-model="data.todos" />
      <button class="bg-[white]" @click="deleteTodo(data)">DEL</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
const props = define
const todo = ref("");
const todoList = ref([]);

const add = () => {
  if (todo.value === "") {
    alert("yo input!");
    return;
  }
  todoList.value.push({
    todos: todo.value,
  });
};

const deleteTodo = (x) => {
  todoList.value = todoList.value.filter((a) => a !== x)
}


watch(todoList, (newVal) => {localStorage.setItem('todos', JSON.stringify(newVal))}, {deep: true})

onMounted(() => {
  const storedTodo = localStorage.getItem('todos');
  if(storedTodo) {
    try {
      todoList.value = JSON.parse(storedTodo)
    } catch (error) {
      alert(error)
    }
  }
})

</script>


<style lang="scss" scoped></style>
