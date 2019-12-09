var app = new Vue({
  el: "#app",
  data: {
    todos: [],
    newTodoName: ""
  },

  created: function() {
    if (localStorage.getItem("localStorageTodos")) {
      this.todos = JSON.parse(localStorage.getItem("localStorageTodos"));
    }
  },
  methods: {
    addTodo: function() {
      const newTodo = {
        name: this.newTodoName,
        isDone: false
      };

      this.todos.unshift(newTodo);
      this.newTodoName = "";
      this.persistData();
    },
    deleteTodo: function(index) {
      this.todos.splice(index, 1);

      this.persistData();
    },
    toggleDone: function(index) {
      this.todos[index].isDone = !this.todos[index].isDone;

      this.persistData();
    },
    persistData: function() {
      localStorage.setItem("localStorageTodos", JSON.stringify(this.todos));
    }
  }
});
