<script setup>
const todos = ref([
  {
    id: 1,
    title: "todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "todo 3",
    completed: false,
  },
]);
const newTodo = ref("");
const errMsg = ref("");
const addTodo = () => {
  if (newTodo.value.length < 3) {
    errMsg.value = "Todo must be less than 3 characters";
    return;
  } else {
    todos.value.push({
      id: todos.value.length + Math.random() * 100000,
      title: newTodo.value,
      completed: false,
    });
    newTodo.value = "";
    errMsg.value = "";
  }
};

function removeCheckedTodos(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}
</script>
<template>
  <div class="h-screen min-w-max flex flex-col items-center justify-center">
    <section>
      <Inputbar v-model="newTodo" @addTodos="addTodo" />
      <p v-if="errMsg" class="text-red-500">{{ errMsg }}</p>
      <div class="mt-2 border border-b-0 border-gray-800">
        <ul>
          <Todos
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @removeTodo="removeCheckedTodos"
          />
        </ul>
      </div>
    </section>
  </div>
</template>
