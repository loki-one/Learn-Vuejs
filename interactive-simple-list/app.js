var app = new Vue({
  el: '#app',
  data: {
    seen: true,
    todos: [
      { text: 'Get Up at 7am' },
      { text: 'Brush your teeth and take a shower' },
      { text: 'Eat Breakfast' }
    ],
    message: 'default message'
  },
  methods: {
    removeCompleted: function (oEvent) {
      var otodo = oEvent.toElement.parentNode.firstChild.data;
      otodo = otodo.trim();
      var otodoIndex;
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].text === otodo){
          otodoIndex = i;
        }
      }
      this.todos.splice(otodoIndex, 1);
    },
    addTodo: function () {
      this.todos.push({text: this.message})
    }
  }
});
