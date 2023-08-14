<template>
  <div id="app">
    <h1>Todo app</h1>
    <AddTodo 
      @add-todo="addTodo"
    />
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
import AddTodo from '@/components/AddTodo.vue'
export default {
  name: 'App',
  data() {
    return {
      todos: []
    }
  },
  components: {
    TodoList,
    AddTodo
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => {
        this.todos = json
      })
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
    },
    addTodo(newTodo) {
      this.todos.push(newTodo)
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
