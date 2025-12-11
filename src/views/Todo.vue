<template>
  <div class="todo-container">
    <h3>To-Do ⏳</h3>

    <ul class="todo-list">
      <li v-for="pendingTodo in pendingTodos" :key="pendingTodo.id" class="todo-item">
        <router-link :to="`/task/${pendingTodo.id}`" class="todo-text">
          {{ pendingTodo.text }}
        </router-link>

        <div class="todo-actions">
          <button @click="updateTodo({ ...pendingTodo, isCompleted: true})">Selesai</button>
          <button @click="destroyTodo(pendingTodo.id)">Hapus</button>
        </div>
      </li>
    </ul>

    <form @submit.prevent="storeTodo(todo)" class="todo-form">
      <input v-model="todo.text" type="text" placeholder="Tambahkan tugas baru.." />
      <button :disabled="!todo.text" type="submit">Tambah</button>
    </form>
  </div>
</template>

<script>
import { useTodos } from '@/stores/todos';
import { mapActions, mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useTodos, ['pendingTodos'])
  },

  data: () => ({
    todo: {
      text: null,
      isCompleted: false,
    }
  }),

  methods: {
    ...mapActions(useTodos, ['storeTodo', 'updateTodo', 'destroyTodo']),
  }
}
</script>

<style scoped>
.todo-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fafafa;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.todo-text {
  flex: 1;
  text-decoration: none;
  color: #333;
}

.todo-actions button {
  margin-left: 8px;
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-actions button:first-child {
  background-color: #4caf50;
  color: white;
}

.todo-actions button:last-child {
  background-color: #f44336;
  color: white;
}

.todo-form {
  display: flex;
  gap: 10px;
}

.todo-form input {
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.todo-form button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
}

.todo-form button:disabled {
  background-color: #90caf9;
  cursor: not-allowed;
}
</style>