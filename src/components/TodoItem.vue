<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" v-on:change="toggleTodo">
            <strong>{{ todo.id }}</strong>
            {{ todo.title }}
        </span>
        <button class="rm" v-on:click="removeTodo">&times;</button>
    </li>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            toggleTodo() {
                this.$emit('toggle-todo', this.todo.id)
            },
            removeTodo() {
                this.$emit('remove-todo', this.todo.id)
            }
        }
    }
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    .rm {
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
    }

    input {
        margin-right: 1rem;
    }

    .done {
        text-decoration: line-through;
    }
</style>
