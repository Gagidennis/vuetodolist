<script setup>
import Inputbar from "./Inputbar.vue";
import Todos from "./Todos.vue";
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
const errmsg = ref("");
const addTodo = () => {
  if (newTodo.value.length < 3) {
    errmsg.value = "Todo must be less than 3 characters";
    return;
  } else {
    todos.value.push({
      id: todos.value.length + 1,
      title: newTodo.value,
      completed: false,
    });
    newTodo.value = "";
   errmsg.value = "";
  }
};

function removecheckedTodos(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}



/* const removeTodo=(id)=>{
    todos.value = todos.value.filter((todo) => todo.id !== id)
 }*/
const checked = ref([]);

const selected = ref(false);

if (selected.value) {
  checked.value = todos.value.map((todo) => todo.id);
  console.log(checked.value);
} else {
  checked.value = [];
  console.log(checked.value);
}
</script>
<template>
  <div class="h-screen min-w-max flex flex-col items-center justify-center">
    <section>
    <Inputbar v-model="newTodo" @addtodos="addTodo"/>
      <p v-if="errmsg" class="text-red-500">{{ errmsg }}</p>
      <div class="mt-2 border border-b-0 border-gray-800">
        <ul>
       <Todos   v-for="todo in todos"
            :key="todo.id"
          
             :todo="todo" :checked="checked"  @removetodo="removecheckedTodos" />
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* changing checkbox style */

.hidden {
  display: none;
}

input:checked + label > span {
  background-color: gray;
}
</style>
