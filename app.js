const app = new Vue({
el :'#app',
data: {
    title: "To-do List",
    newTodo:'',
    todos:[]
},
mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('todos'));
      } catch(e) {
        localStorage.removeItem('todos');
      }
    }
  },
methods: {
 addTodo(){
     this.todos.push({
         title:this.newTodo,
         done:false
         
     });
this.newTodo ="";
this.saveData();
 },
 removeTodo(todo){
    const todoIndex = this.todos.indexOf(todo);
    this.todos.splice(todoIndex, 1);
    this.saveData();
 },
 allDone(){
this.todos.forEach(todo =>{
todo.done= true;
});
 },
 saveData() {
    const parsed = JSON.stringify(this.todos);
    localStorage.setItem('todos', parsed);
    console.log(localStorage.getItem("todos"));
  
  }
},
created:function(){
    this.todos=JSON.parse(localStorage.getItem("todos"));
}
});
