<template>
    <div>
        <ul>
            <TodoItem 
                v-for="todo of todos"
                v-bind:todo="todo"
                v-bind:key="todo.id"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    props: ['todos'],
    components: {
        TodoItem
    }
}
</script>