var vue = new Vue({
    el : '#app',
    data:{
        result : '',
        numbers: [1,2,3,4,5,6,7,8,9,'.',0],
        operations: ['+','-','*','/'],
    },
    methods:{
      input:function(char){
          this.result = this.result.toString()
        this.result+=char
      } , 
      reset:function(){
       this.result=''
      },
      calc:function(){
        this.result = eval(this.result)
      },
      del:function(){
        var a = this.result
        this.result=a.substring(0,a.length-1)
        
      }
    }
})
const app = new Vue({

  el: '#app2',
  data: {
    
    tod: '',
    todos: []
  },
  methods: {
    addTodo() {
      if(this.tod!=''){
      this.todos.push({
        title: this.tod,
        done: false
      });
      this.tod = '';
    }
    },
    removeTodo(todo) {
      const dex = this.todos.indexOf(todo);
      this.todos.splice(dex, 1);
    },
    allDone() {
      this.todos.forEach(todo => {
        todo.done = true;
      });
    }
  }
});

