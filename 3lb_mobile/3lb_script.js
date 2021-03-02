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