// store.js
//import { defineStore } from 'pinia'

export const store = defineStore({
  state: () => ({
    todos: [
      { id: 1, text: 'Take out the trash', completed: false },
      { id: 2, text: 'Buy milk', completed: false },
      { id: 3, text: 'Finish work project', completed: false },
    ],
    nextTodoId: 4,
  }),
  actions: {
    addTodo({ state }, text) {
      state.todos.push({
        id: state.nextTodoId++,
        text,
        completed: false,
      })
    },
    removeTodo({ state }, todo) {
      state.todos = state.todos.filter(t => t.id !== todo.id)
    },
  },
})
