<template>
  <div class="task-detail">
    <h2>Task Detail</h2>

    <p><strong>ID:</strong> {{ task.id }}</p>

    <form @submit.prevent="save" class="task-form">
      <!-- TEXT -->
      <div class="form-group">
        <label>Tugas:</label>
        <input v-model="edit.text" type="text" />
      </div>

      <!-- STATUS -->
      <div class="form-group">
        <label>Status:</label>
        <select v-model="edit.isCompleted">
          <option :value="false">Diproses</option>
          <option :value="true">Selesai</option>
        </select>
      </div>

      <div class="form-actions">
        <button type="submit">Simpan Perubahan</button>
        <button type="button" @click="$router.back()">← Kembali</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useTodos } from "@/stores/todos";
import { mapState, mapActions } from "pinia";

export default {
  props: ["id"],

  computed: {
    ...mapState(useTodos, ["todos"]),

    task() {
      return this.todos.find(t => t.id == this.id) || {};
    }
  },

  data() {
    return {
      edit: {
        text: "",
        isCompleted: false
      }
    };
  },

  created() {
    this.edit.text = this.task.text;
    this.edit.isCompleted = this.task.isCompleted;
  },

  methods: {
    ...mapActions(useTodos, ["updateTodo"]),

    save() {
      this.updateTodo({
        id: this.task.id,
        text: this.edit.text,
        isCompleted: this.edit.isCompleted
      });

      alert("Task updated!");
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.task-detail {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fafafa;
}

.task-form .form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.task-form label {
  margin-bottom: 5px;
  font-weight: bold;
}

.task-form input,
.task-form select {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.form-actions button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-actions button[type="submit"] {
  background-color: #4caf50;
  color: white;
}

.form-actions button[type="button"] {
  background-color: #f1f1f1;
}
</style>