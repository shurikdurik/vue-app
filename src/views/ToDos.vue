<!-- eslint-disable vue/return-in-computed-property -->
<!-- eslint-disable vue/return-in-computed-property -->
<template>
    <div>
      <router-link to="/">Home</router-link>
      <AddTodo 
        @add-todo="addTodo"
      />
      <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not completed</option>
      </select>
      <hr>
      <Loader v-if="loading"/>
      <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
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
      filter: 'all'
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
  /* watch: {
    filter(value) {
        console.log(value);
    }
  }, */
  computed: {
    filteredTodos() {
        if (this.filter === 'all') {
            return this.todos
        }
        if (this.filter === 'completed') {
            return this.todos.filter(t => t.completed)
        }
        if (this.filter === 'not-completed') {
            return this.todos.filter(t => !t.completed)
        }
        return this.todos
    }
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