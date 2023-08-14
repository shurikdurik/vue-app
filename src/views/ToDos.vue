<template>
    <div>
      <router-link to="/">Home</router-link>
      <AddTodo 
        @add-todo="addTodo"
      />
      <hr>
      <Loader v-if="loading"/>
      <TodoList
        v-else-if="todos.length"
        v-bind:todos="todos"
        @remove-todo="removeTodo"
        @toggle-todo="toggleTodo"
      />
      <p v-else>No todos!</p>
    </div>
  </template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
    }
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => {
        this.todos = json
        this.loading = false
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