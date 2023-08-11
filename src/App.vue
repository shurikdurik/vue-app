<template>
  <div id="app">
    <h1>Todo app</h1>
    <hr>
    <TodoList 
      v-bind:todos="todos"
      @remove-todo="removeTodo"
      @toggle-todo="toggleTodo"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: "Buy milk", completed: false},
        {id: 2, title: "Buy bread", completed: false},
        {id: 3, title: "Buy eggs", completed: false}
      ]
    }
  },
  components: {
    TodoList
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    toggleTodo(id) {
      this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
