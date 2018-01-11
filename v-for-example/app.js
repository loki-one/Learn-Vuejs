var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'Learn Javascript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

//In console if you do app.todos.push({text: 'New item'}). Then you see new item appended to the list
