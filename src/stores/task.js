import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "Capstone project", description: "", priority: "Medium", done: false }
    ]
  }),

  actions: {
    addTask(title) {
      this.tasks.push({
        id: Date.now(),
        title,
        description: "",
        priority: "Low",
        done: false
      });
    },

    updateTask(id, data) {
      const task = this.tasks.find(t => t.id === id);
      if (task) Object.assign(task, data);
    }
  }
});
